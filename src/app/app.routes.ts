import { Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {FileComponent} from "./file/file.component";

export const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'ficha/:id', component: FileComponent}
];
