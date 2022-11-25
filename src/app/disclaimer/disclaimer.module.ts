import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
    declarations: [
        ModalComponent,
        DisclaimerComponent
    ],
    exports: [
        DisclaimerComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class DisclaimerModule { }
