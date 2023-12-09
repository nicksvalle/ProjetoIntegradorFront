import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Teacher } from 'src/app/interfaces/teacher';
import { ManageTeacherService } from 'src/app/services/professor/manage-teacher.service';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {
  searchValue = '';
  teachers: Teacher[] = [];
  searchForm = this.formBuilder.group({
    searchValue: '',
  });

  constructor(private teacherService: ManageTeacherService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.teacherService.getTeachers(this.searchValue).subscribe((teachers) => {
      // Limpar a lista antes de adicionar os novos resultados
      this.teachers = [];
      // Adicionar os novos resultados
      this.teachers = teachers;
    });
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }
  
}
