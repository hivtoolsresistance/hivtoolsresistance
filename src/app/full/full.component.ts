import { Component, OnInit } from '@angular/core';
import {ModalComponent} from "../disclaimer/modal/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(ModalComponent, {
      disableClose : true
    });
  }

}
