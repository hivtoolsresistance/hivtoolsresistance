import { Component, OnInit } from '@angular/core';
import {MainService} from "../services/main.service";
import {functions, Global} from "../models/hiv1.model";

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent implements OnInit {
   data: Global | undefined;

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
     this.mainService.getHivFile("1").subscribe(data => {
       this.data = functions.generateFullData(data);
    })
  }
}
