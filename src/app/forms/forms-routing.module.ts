import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./form/form.component";
import {FileComponent} from "./file/file.component";
import {NgModule} from "@angular/core";


const routes : Routes = [
  {path: '', component: FormComponent},
  {path: 'ficha/:id', component: FileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormsRoutingModule{}
