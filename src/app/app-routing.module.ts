import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullComponent} from "./full/full.component";
import {ResumeDataComponent} from "./resume-data/resume-data.component";

const routes: Routes = [
  { path: '', component: FullComponent },
  { path: 'resumeData', component: ResumeDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
