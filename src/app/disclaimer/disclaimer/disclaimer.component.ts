import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalComponent, {
      disableClose : true
    });
  }

  ngOnInit(): void {
  }

}
