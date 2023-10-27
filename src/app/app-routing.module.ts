import { CursoGerenciarComponent } from './curso-gerenciar/curso-gerenciar.component';
import { AulaGerenciarComponent } from './aula-gerenciar/aula-gerenciar.component';
import { ProfessorGerenciarComponent } from './professor-gerenciar/professor-gerenciar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordenadorPortalComponent } from './coordenador-portal/coordenador-portal.component';

const routes: Routes = [
  {path: '', component: CoordenadorPortalComponent},
  { path: 'professor-gerenciar', component: ProfessorGerenciarComponent },
  {path: 'aula-gerenciar', component: AulaGerenciarComponent},
  {path: 'curso-gerenciar', component: CursoGerenciarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
