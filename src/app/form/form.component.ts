import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Patient, PatientApiService} from "../../api/patient/patient-api.service";
import {Router} from "@angular/router";
import {PatientFileApiService} from "../../api/patient-file/patient-file-api.service";
import {HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, NgIf],
  providers: [PatientFileApiService, PatientApiService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  //Declaracion de interfaces a mapear
  patient: Patient = {
    name: "",
    surnames: "",
    job: "",
    gender: "",
    age: 0,
    weight: 0,
    size: 0
  }

  //En caso de errores
  formError: string = "";

  //Inyecciones
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  patientFileApiService = inject(PatientFileApiService);

  //Form Group
  createPatientFileForm = this.formBuilder.group({
    name: ['', Validators.required],
    surnames: ['', Validators.required],
    job: ['', Validators.required],
    gender: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(0)]],
    weight: ['', [Validators.required, Validators.min(0)]],
    size: ['', [Validators.required, Validators.min(0)]]
  })

  get name(){
    return this.createPatientFileForm.controls.name;
  }

  get surnames(){
    return this.createPatientFileForm.controls.surnames;
  }

  get job(){
    return this.createPatientFileForm.controls.job;
  }

  get gender(){
    return this.createPatientFileForm.controls.gender;
  }

  get age(){
    return this.createPatientFileForm.controls.age;
  }

  get weight(){
    return this.createPatientFileForm.controls.weight;
  }

  get size(){
    return this.createPatientFileForm.controls.size;
  }

  saveFile(){
    if(this.createPatientFileForm.valid){ this.formError = '';
      this.patientFileApiService.savePatientFile(this.patient).subscribe({
        next: (patientFileData)=> {
          console.log(patientFileData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.formError = "Error al crear";
        },
        complete: () => {
          console.info("Creacion completada");
          this.router.navigateByUrl('/ficha');
          this.createPatientFileForm.reset();
        }
      });
    }else{
      this.createPatientFileForm.markAllAsTouched();
      alert("Error de ingreso de datos");
    }
  }

}
