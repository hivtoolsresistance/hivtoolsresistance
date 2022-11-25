import {Component, Input, OnInit} from '@angular/core';
import {Mutation} from "../../../../models/hiv1.model";

@Component({
  selector: 'app-list-mutation',
  templateUrl: './list-mutation.component.html',
  styleUrls: ['./list-mutation.component.css']
})
export class ListMutationComponent implements OnInit {

  @Input() list!: Mutation[];

  constructor() { }

  ngOnInit(): void {}

}
