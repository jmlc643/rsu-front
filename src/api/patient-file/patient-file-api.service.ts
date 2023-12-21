import {inject, Injectable} from '@angular/core';
import {Patient} from "../patient/patient-api.service";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";
import {environment} from "../../environments/environment";

export interface PatientFile{
  id: number,
  imc: number,
  observation: string,
  patient: Patient
}

export interface SearchPatient{
  name: string,
  surnames: string
}

@Injectable({
  providedIn: 'root'
})
export class PatientFileApiService {
  httpClient = inject(HttpClient);

  getListPatientFiles(){
    return lastValueFrom(this.httpClient.get<PatientFile[]>(environment.urlHost+'/patient-file/list/'));
  }

  savePatientFile(patient: Patient):Observable<any>{
    return this.httpClient.post<any>(environment.urlHost+'/patient-file/save/', patient);
  }

  searchPatientFileId(id: number){
    return lastValueFrom(this.httpClient.post<PatientFile>(environment.urlHost+'/patient-file/search/id/', id));
  }
}
