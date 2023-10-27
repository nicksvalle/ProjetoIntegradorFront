import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorGerenciarComponent } from './professor-gerenciar/professor-gerenciar.component';
import { CoordenadorPortalComponent } from './coordenador-portal/coordenador-portal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuCoordenadorComponent } from './menu-coordenador/menu-coordenador.component';
import { AulaGerenciarComponent } from './aula-gerenciar/aula-gerenciar.component';
import { CursoGerenciarComponent } from './curso-gerenciar/curso-gerenciar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorGerenciarComponent,
    CoordenadorPortalComponent,
    MenuCoordenadorComponent,
    AulaGerenciarComponent,
    CursoGerenciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
