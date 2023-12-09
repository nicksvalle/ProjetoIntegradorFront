import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoordenadorPortalComponent } from './components/coordenador-portal/coordenador-portal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BotaoLogoComponent } from './components/botao-logo/botao-logo.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ManageClassFormComponent } from './components/manage-class-form/manage-class-form.component';
import { ManageClassComponent } from './components/manage-class/manage-class.component';
import { ManageCourseFormComponent } from './components/manage-course-form/manage-course-form.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';
import { ManageRoomFormComponent } from './components/manage-room-form/manage-room-form.component';
import { ManageRoomComponent } from './components/manage-room/manage-room.component';
import { ManageTeacherComponent } from './components/manage-teacher/manage-teacher.component';
import { MenuCoordenadorComponent } from './components/menu-coordenador/menu-coordenador.component';
import { HomeComponent } from './components/home/home.component';
import { StudentPortalComponent } from './components/student-portal/student-portal.component';
import { ManageTeacherService } from './services/professor/manage-teacher.service';



@NgModule({
  declarations: [
    AppComponent,
    ManageTeacherComponent,
    CoordenadorPortalComponent,
    MenuCoordenadorComponent,
    ManageCourseComponent,
    BotaoLogoComponent,
    ManageCourseFormComponent,
    ManageClassComponent,
    ManageClassFormComponent,
    ManageRoomComponent,
    ManageRoomFormComponent,
    HomeComponent,
    StudentPortalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [ManageTeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
