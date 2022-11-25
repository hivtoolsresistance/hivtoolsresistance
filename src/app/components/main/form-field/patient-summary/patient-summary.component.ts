import {Component, Input, OnInit} from '@angular/core';
import {PatientSummary} from "../../../../models/hiv1.model";

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.css']
})
export class PatientSummaryComponent implements OnInit{

  @Input() patientSummary!: PatientSummary;

  ngOnInit(): void {
  }

}
