import { StudentPortalComponent } from './components/student-portal/student-portal.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordenadorPortalComponent } from './components/coordenador-portal/coordenador-portal.component';
import { ManageClassFormComponent } from './components/manage-class-form/manage-class-form.component';
import { ManageClassComponent } from './components/manage-class/manage-class.component';
import { ManageCourseFormComponent } from './components/manage-course-form/manage-course-form.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';
import { ManageRoomFormComponent } from './components/manage-room-form/manage-room-form.component';
import { ManageRoomComponent } from './components/manage-room/manage-room.component';
import { ManageTeacherComponent } from './components/manage-teacher/manage-teacher.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coordenador', component: CoordenadorPortalComponent},
  {path: 'student-portal', component: StudentPortalComponent},
  {path: 'manage-teacher', component: ManageTeacherComponent },
  {path: 'manage-class', component: ManageClassComponent},
  {path: 'manage-classDetails/:id', component : ManageClassFormComponent},
  {path: 'createClass', component: ManageClassFormComponent},
  {path: 'manage-course', component: ManageCourseComponent},
  {path: 'manage-courseDetails/:id', component : ManageCourseFormComponent},
  {path: 'createCourse', component: ManageCourseFormComponent},
  {path: 'manage-room', component: ManageRoomComponent},
  {path: 'manage-roomDetails/:id', component: ManageRoomFormComponent},
  {path: 'createRoom', component: ManageRoomFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
