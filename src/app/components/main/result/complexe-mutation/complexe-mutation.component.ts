import {Component, Input, OnInit} from '@angular/core';
import {Complexe} from "../../../../models/hiv1.model";

@Component({
  selector: 'app-complexe-mutation',
  templateUrl: './complexe-mutation.component.html',
  styleUrls: ['./complexe-mutation.component.css']
})
export class ComplexeMutationComponent implements OnInit {

  @Input() complexe!: Complexe;

  constructor() { }

  ngOnInit(): void {}

}
