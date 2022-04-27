import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Persona2Component } from './components/persona2/persona2.component';

const routes: Routes = [
  { path: 'personas', component: Persona2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
