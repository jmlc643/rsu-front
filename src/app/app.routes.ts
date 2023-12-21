import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {FormComponent} from "./file-form/form/form.component";
import {FileComponent} from "./file-form/file/file.component";

const routes: Routes = [
  //{ path: '', loadChildren: () => import('./file-form/file-form.module').then((m) => m.FileFormModule) },
  {path: '', component: FormComponent},
  {path: 'ficha/:id', component: FileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
