import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutes} from "./app.routes";
import {PatientFileApiService} from "../api/patient-file/patient-file-api.service";
import {PatientApiService} from "../api/patient/patient-api.service";

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes
  ],
  providers : [PatientFileApiService, PatientApiService]
})
export class AppModule{}
