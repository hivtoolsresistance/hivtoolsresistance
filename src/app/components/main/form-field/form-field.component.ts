import {Component, OnInit} from '@angular/core';
import {MainService} from "../../../services/main.service";
import {functions, Global, PatientSummary} from "../../../models/hiv1.model";


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  typeHiv = '1';
  globalData!: Global;
  patientSummary: PatientSummary = new PatientSummary();
  showResult = false;

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.changeHiv(this.typeHiv);
  }

  /**
    * Change the HIV type
    *
    * @param _typeHiv {string =} : type of HIV
    *
    * 1- set the hiv type
    * 2- call service to refresh data of HIV type
    * 3- set complete data with function
    * 4- set patient summary
    *
   */
  changeHiv(_typeHiv: string) : void{


    this.typeHiv = _typeHiv;
    this.mainService.getHivFile(this.typeHiv).subscribe(data => {
      this.globalData = functions.generateFullData(data);
      this.patientSummary = functions.getPatientSummary(this.globalData);
      this.showResult = false;
    });
  }

  /**
    * set an action on mutation : add or remove
    * Call from event of app-form-hiv-mutation component (eventSelectMutation)
    *
    * 1- set action on mutation
    * 2- refresh patient summary
    * 3- Hide the result after any event on app-form-hiv-mutation
    *
    * @param $event  :specific object
    *             - all rules,
    *             - value selected or removed,
    *             - boolean (is action is an add)
   */
  actionMutation($event: any): void {
    functions.actionMutation(this.globalData.rules, $event['value'],  $event['action'] === '+' );
    this.patientSummary = functions.getPatientSummary(this.globalData);
    this.showResult = false;
  }

  /**
    * case 1 : find mutation(s) in a list of patient mutations list
    *
    * @param listMutation {Array of string} mutation list (one or many)
    * @param patientsMutations {Array of string} patient mutation list
    *
    * @returns {Boolean} are mutations found in patient mutation list ?
    *
   */
  caseOne(listMutation: string[], patientsMutations: string[]): boolean {
    return listMutation && listMutation.some(value => patientsMutations.includes(value));
  }

  /**
    * case 2 : X mutations in a list ? ( at least or equal )
    * example : ( At least ) 3 mutations among: M41L, D67N, K70R, L210W, K219Q
    *
    * @param listResistanceAssociateMutationsList {Array of string} mutation list from datas
    * @param patientsMutations {Array of string} patient mutation list
    * @param number {Number} number of data looking for in the list
   *  @param atLeast {Number} at least or equal
    *
    * @returns {Boolean} Did we find the minimum number of mutations among the defined list?
    *
   */
  caseTwo(listResistanceAssociateMutationsList: string[], patientsMutations: string[], number: number = 0, atLeast: boolean) : boolean {
    if ( listResistanceAssociateMutationsList && listResistanceAssociateMutationsList.length > 0) {
      if (atLeast) {
        return this.containsAny(listResistanceAssociateMutationsList, patientsMutations) >= number;
      } else {
        return this.containsAny(listResistanceAssociateMutationsList, patientsMutations) === number;
      }
    }
    return false;
  }

  /**
  * case 3 : addition of mutation
  * example : L74F/I + V75I
  *
  * @param lisMutationSums {Array of String Array} mutation list from datas
  * @param patientsMutations {Array of string} patient mutation list
  *
  * @returns {Boolean} Did we find the addition in the patient mutations ?
  *
 */
  private caseThree(lisMutationSums: string[][], patientsMutations: string[]) : boolean {
    return lisMutationSums && this.checkSum(lisMutationSums, patientsMutations);
  }


  /**
    * form submission
    *
    * 1- loop into all datas
    * 2- creation temp array from row : with mutation
    * 3- creation temp array from row : with possible mutation
    * 4- check all cases
    *
   */
  submitForm(): void {
    this.showResult = false;
    let patientsMutations: string[] = this.patientSummary.getAllPatientMutation();

    this.checkResult(patientsMutations);

    this.showResult = true;
  }


  checkResult(patientsMutations: string[]) {
    this.globalData.rules.forEach(rule => {
      rule.listArv.forEach(listArv => {
        /*
          * 2- creation temp array from row : with mutation
         */

        let listMutationWithResistance = listArv.withResistance.mutations?.map(mutation => {
          return mutation.fullNamesMutations;
        });
        let listMutationWithResistanceAssociateMutationsList = listArv.withResistance.associateMutationsList?.mutations.map(mutation => mutation.fullNamesMutations);
        let withResistanceSums = listArv.withResistance.sums?.map((sum) => {
          return sum.sum.map((mutation) => {
            return mutation.fullNamesMutations;
          });
        });
        let complexeMutationWithResistance = listArv.withResistance.complexe?.mutation.fullNamesMutations;
        let complexelistMutationWithResistanceAssociateMutationsList = listArv.withResistance.complexe?.associateMutationsList.mutations.map(mutation => mutation.fullNamesMutations);

        /*
          * 3- creation temp array from row : with possible mutation
        */

        let listMutationWithPossibleResistance = listArv.withPossibleResistance.mutations?.map(mutation => {
          return mutation.fullNamesMutations;
        });
        let listMutationWithPossibleResistanceAssociateMutationsList = listArv.withPossibleResistance.associateMutationsList?.mutations.map(mutation => mutation.fullNamesMutations);
        let withPossibleResistanceSums = listArv.withPossibleResistance.sums?.map((sum) => {
          return sum.sum.map((mutation) => {
            return mutation.fullNamesMutations;
          });
        });

        let complexeMutationWithPossibleResistance = listArv.withPossibleResistance.complexe?.mutation.fullNamesMutations;
        let complexelistMutationWithPossibleResistanceAssociateMutationsList = listArv.withPossibleResistance.complexe?.associateMutationsList.mutations.map(mutation => mutation.fullNamesMutations);

        /*
          * 4- check all cases
         */

        if (
          this.caseOne(listMutationWithResistance, patientsMutations) ||
          this.caseTwo(listMutationWithResistanceAssociateMutationsList, patientsMutations, listArv.withResistance.associateMutationsList?.number, listArv.withResistance.associateMutationsList?.atLeast) ||
          this.caseThree(withResistanceSums, patientsMutations) ||
          (
            complexeMutationWithResistance &&
            complexeMutationWithResistance.trim() != '' &&
            patientsMutations.includes(complexeMutationWithResistance) &&
            this.caseTwo(complexelistMutationWithResistanceAssociateMutationsList, patientsMutations, listArv.withResistance.complexe.associateMutationsList?.number, listArv.withResistance.associateMutationsList?.atLeast))
        ) {
          listArv.isPossible = -1;
        } else {
          if (
            this.caseOne(listMutationWithPossibleResistance, patientsMutations) ||
            this.caseTwo(listMutationWithPossibleResistanceAssociateMutationsList, patientsMutations, listArv.withPossibleResistance.associateMutationsList?.number, listArv.withPossibleResistance.associateMutationsList?.atLeast) ||
            this.caseThree(withPossibleResistanceSums, patientsMutations) ||
            (
              complexeMutationWithPossibleResistance &&
              complexeMutationWithPossibleResistance.trim() != '' &&
              patientsMutations.includes(complexeMutationWithPossibleResistance) &&
              this.caseTwo(complexelistMutationWithPossibleResistanceAssociateMutationsList, patientsMutations, listArv.withPossibleResistance.complexe.associateMutationsList?.number, listArv.withPossibleResistance.associateMutationsList?.atLeast))

          ) {
            listArv.isPossible = 0;
          } else {
            listArv.isPossible = 1;
          }
        }
        return;
      })
      return;
    });
  }

  containsAny(source: any,target: string[]): number {
    return source.filter((item: any) => { return target.indexOf(item) > -1}).length;
  }

  reset() {
    this.changeHiv(this.typeHiv);
  }

  private checkSum(sums: string[][], patientsMutations: string[]): boolean {
    return   sums.filter(value => {
        return  value.every(element => {
            return patientsMutations.includes(element);
          });
    }).length > 0
  }
}



