import {inject, Injectable} from '@angular/core';

export interface Patient{
  name: string,
  surnames: string,
  job: string,
  gender: string,
  age: number,
  weight: number,
  size: number
}

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {
}
