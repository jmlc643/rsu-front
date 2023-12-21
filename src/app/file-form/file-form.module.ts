import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileComponent} from "./file/file.component";
import {FormComponent} from "./form/form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PatientFileApiService} from "../../api/patient-file/patient-file-api.service";
import {PatientApiService} from "../../api/patient/patient-api.service";
import {RouterModule} from "@angular/router";
import {FileFormRoutingModule} from "./file-form-routing.module";



@NgModule({
  declarations: [
    FormComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FileFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PatientFileApiService, PatientApiService]
})

export class FileFormModule { }
