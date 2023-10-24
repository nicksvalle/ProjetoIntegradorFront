import { ProfessorGerenciarComponent } from './professor-gerenciar/professor-gerenciar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'professor-gerenciar', component: ProfessorGerenciarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
