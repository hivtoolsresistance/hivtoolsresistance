import {Component, Input, OnInit} from '@angular/core';
import {functions, Global, ListArv, Rule} from "../../../models/hiv1.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() data!: Global;
  showData: Rule[] = [];

  constructor() { }

  ngOnInit(): void {
    this.showData = this.data.rules.filter(value => value.showInResult);
  }

  getBackgroundColor(isPossible: number) {
    if ( isPossible === 1){
      return 'green';
    } else if ( isPossible === 0){
      return 'orange';
    } else {
      return 'red';
    }
  }

  isDetailMutationPresent(arv: ListArv): boolean {
    return functions.getAllMutationsFromArv(arv).filter(value => {
      return value.detail !== undefined && value.selected;
    }).length > 0;
  }

}
