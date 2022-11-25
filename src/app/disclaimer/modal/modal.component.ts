import { Component } from '@angular/core';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {
  }

}
