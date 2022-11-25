import {Component, Input, OnInit} from '@angular/core';
import {Mutation} from "../../../../models/hiv1.model";

@Component({
  selector: 'app-mutation',
  templateUrl: './mutation.component.html',
  styleUrls: ['./mutation.component.css']
})
export class MutationComponent implements OnInit {

  @Input() mutation!: Mutation;

  constructor() { }

  ngOnInit(): void {
  }

}
