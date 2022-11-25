import {Component, ElementRef, ViewChild, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {functions, Global} from "../../../../models/hiv1.model";

@Component({
  selector: 'app-form-hiv-mutation',
  templateUrl: './form-hiv-mutation.component.html',
  styleUrls: ['./form-hiv-mutation.component.css']
})
export class FormHivMutationComponent implements OnInit, OnChanges {

  ngOnInit(): void {
    this.selectedMutations = [];
  }

  @Input() data!: Global;
  @Output() eventSelectMutation = new EventEmitter<any>;
  allMutations: string[] = [];
  mutationCtrl = new FormControl('');
  filteredMutation: Observable<string[]> | undefined;
  selectedMutations: string[] = [];

  @ViewChild('mutationInput') mutationInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.generateFilteredMutation();
  }

  private generateFilteredMutation() {
    this.filteredMutation = this.mutationCtrl.valueChanges.pipe(
      startWith(null),
      map((mutation: string | null) => {
        return mutation ? this._filter(mutation) : this.allMutations.slice();
      }),
      map((data)=> {
        return data.sort();
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateFilteredMutation();
    this.allMutations = [];
    this.selectedMutations = [];
    this.data.rules.forEach(value => {
      this.allMutations.push.apply(this.allMutations, functions.getAllFullNamesMutationsFromARVString(value));
    })
    // remove duplicate key
    this.allMutations = Array.from(new Set(this.allMutations));
  }

  /**
   * remove an element form input area.
   *
   * 1/ remove from the array of selected mutation
   * 2/ emit the event to remove the element from patient summary mutation
   *
   * @param mutation : selected mutation from list
   */
  remove(mutation: string): void {
    const index = this.selectedMutations.indexOf(mutation);
    if (index >= 0) {
      this.selectedMutations.splice(index, 1);
      this.eventSelectMutation.emit({"value" : mutation,"action" : '-'})
    }
  }

  /**
   *
   * select the element from the list
   *
   * 1/ test if element doesn't exist in the list
   * 2/ add mutation to the array of selected mutation & emit event to add element to patieznt summary mutation
   * 3/ clean the input
   *
   * @param event
   *
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    if (! this.selectedMutations.includes(event.option.viewValue)){
      this.eventSelectMutation.emit({"value" : event.option.viewValue,"action" : '+'})
      this.selectedMutations.push(event.option.viewValue);
    }
    this.mutationInput.nativeElement.value = '';
    this.mutationCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMutations.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
