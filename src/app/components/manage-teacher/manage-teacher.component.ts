import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Course } from 'src/app/interfaces/curso';
import { Teacher } from 'src/app/interfaces/teacher';
import { ManageCourseService } from 'src/app/services/curso/manage-course.service';
import { ManageTeacherService } from 'src/app/services/professor/manage-teacher.service';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.css']
})
export class ManageTeacherComponent {
  teacher: Teacher[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;
  courses: Course[] = [];

  constructor(private manageTeacher: ManageTeacherService, private formBuilder: FormBuilder, private manageCourseService: ManageCourseService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      date: ['', Validators.required],
      discipline: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTeacher();
    this.loadCourses();
  }

  loadCourses() {
    this.manageCourseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  loadTeacher() {
    this.manageTeacher.getTeacher().subscribe({
      next: data => {
        this.teacher = data;
      }
    });
  }

  save() {
    console.log('Formulário válido:', this.formGroupClient.valid);
    if (this.isEditing) {
      this.manageTeacher.update(this.formGroupClient.value).subscribe({
        next: () => {
          this.loadTeacher();
          this.formGroupClient.reset();
          this.isEditing = false;
        }
      });
    } else {
      const formValues = this.formGroupClient.value;
      this.manageTeacher.save(formValues).subscribe({
        next: data => {
          this.teacher.push(data);
          this.formGroupClient.reset();
          this.formGroupClient.get('course')?.setValue('');
          this.formGroupClient.get('discipline')?.setValue('');
        }
      });
    }
  }

  clean() {
    this.formGroupClient.reset();
    this.formGroupClient.get('course')?.setValue([]);
    this.formGroupClient.get('discipline')?.setValue([]);
    this.isEditing = false;
  }

  edit(teacher: Teacher) {
    console.log('Teacher:', teacher);

    this.isEditing = true;

    this.formGroupClient.patchValue(teacher);
  }

  delete(teacher: Teacher) {
    this.manageTeacher.delete(teacher).subscribe({
      next: () => this.loadTeacher()
    });
  }



  get name() {
    return this.formGroupClient.controls['name'];
  }

  get email() {
    return this.formGroupClient.controls['email'];
  }

  get date() {
    return this.formGroupClient.controls['date'];
  }

  get discipline() {
    return this.formGroupClient.controls['discipline'];
  }

  get course() {
    return this.formGroupClient.controls['course'];
  }
}
