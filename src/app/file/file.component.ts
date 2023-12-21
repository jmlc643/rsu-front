import {Component, inject, OnInit} from '@angular/core';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import {PatientFile, PatientFileApiService} from "../../api/patient-file/patient-file-api.service";
import {ActivatedRoute} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-file',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [PatientFileApiService],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent implements OnInit{

  //Lo necesario para mapear la ficha
  idd : number = 0;
  patientFile : PatientFile = {
    id: 0,
    imc: 0,
    observation: "",
    patient: {
      name: "",
      surnames: "",
      job: "",
      gender: "",
      age: 0,
      weight: 0,
      size: 0
    }
  };

  //Inyecciones
  patientFileApiService = inject(PatientFileApiService);
  activatedRoute = inject(ActivatedRoute);

  async ngOnInit() {
    //Recibe el parametro del id enrutado y lo guarda en una variable
    this.activatedRoute.params.subscribe( prm => {
      console.log(`El id es: ${prm['id']}`);
      this.idd = +this.activatedRoute.snapshot.params['id'];
    })
    await this.searchPatientFileId();
  }

  private async searchPatientFileId(){
    this.patientFile = await this.patientFileApiService.searchPatientFileId(this.idd);
  }

  download(){
    const options = {
      name : 'Evaluación Antropométroca.pdf',
      image : {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation:'portrait', unit:'px'}
    }
    const element = document.getElementById("descarga");
    html2pdf().from(element).set(options).save();
  }

}
