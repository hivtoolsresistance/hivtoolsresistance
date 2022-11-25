import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';



import { FormFieldComponent } from './components/main/form-field/form-field.component';
import { ResultComponent } from './components/main/result/result.component';
import { PatientSummaryComponent } from './components/main/form-field/patient-summary/patient-summary.component';
import { FormHivMutationComponent } from './components/main/form-field/form-hiv-mutation/form-hiv-mutation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { AppRoutingModule } from './app-routing.module';
import { FullComponent } from './full/full.component';
import { MutationComponent } from './components/main/result/mutation/mutation.component';
import { ListMutationComponent } from './components/main/result/list-mutation/list-mutation.component';
import { ComplexeMutationComponent } from './components/main/result/complexe-mutation/complexe-mutation.component';
import {ResumeDataComponent} from "./resume-data/resume-data.component";
import {DisclaimerModule} from "./disclaimer/disclaimer.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormFieldComponent,
    ResultComponent,
    PatientSummaryComponent,
    FormHivMutationComponent,
    FullComponent,
    ResumeDataComponent,
    MutationComponent,
    ListMutationComponent,
    ComplexeMutationComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatRadioModule,
        MatDialogModule,
        FormsModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatIconModule,
        ReactiveFormsModule,
        MatTreeModule,
        MatExpansionModule,
        HttpClientModule,
        AppRoutingModule,
        DisclaimerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
