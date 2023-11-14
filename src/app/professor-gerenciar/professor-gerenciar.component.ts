import { Component } from '@angular/core';
import { Professor } from '../professor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfessorGerenciarService } from '../professor-gerenciar.service';
import { materias } from '../materias';

@Component({
  selector: 'app-professor-gerenciar',
  templateUrl: './professor-gerenciar.component.html',
  styleUrls: ['./professor-gerenciar.component.css']
})
export class ProfessorGerenciarComponent {
  professor: Professor[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;
  materias: any[] = [];
  cursos: string[] = ['DS', 'ADM'];
  cursosSelecionados: any [] = [];

    constructor(private professorService: ProfessorGerenciarService, private formBuilder: FormBuilder) {
      this.formGroupClient = formBuilder.group({
        id: [''],
        name: [''],
        email: [''],
        course: [''],
        date: [''],
        materia: ['']
      });
    }

    ngOnInit(): void {
      this.onChangeCurso();
      this.loadProfessor();
    }

  onChangeCurso() {
    const selectedCourses = this.formGroupClient.get('course')?.value;
    if (selectedCourses && selectedCourses.length > 0) {
      this.materias = materias.filter(materia => selectedCourses.includes(materia.curso));
    } else {
      this.materias = [];
    }
  }


  loadProfessor() {
    this.professorService.getProfessor().subscribe(
      {
        next : data => this.professor = data
      }
      );
  }

  save() {
    if (this.isEditing) {
      this.professorService.update(this.formGroupClient.value).subscribe({
        next: () => {
          this.loadProfessor();
          this.formGroupClient.reset();
          this.isEditing = false;
        }
      });
    } else {
      const formValues = this.formGroupClient.value;
      // Converter as strings para arrays antes de salvar
      formValues.course = Array.isArray(formValues.course) ? formValues.course : [formValues.course];
      formValues.materia = Array.isArray(formValues.materia) ? formValues.materia : [formValues.materia];

      this.professorService.save(formValues).subscribe({
        next: data => {
          this.professor.push(data);
          this.formGroupClient.reset();
          this.formGroupClient.get('course')?.setValue('');
          this.formGroupClient.get('materia')?.setValue('');
          this.onChangeCurso();
        }
      });
    }
  }

  clean(){
    this.formGroupClient.reset();
    this.formGroupClient.get('course')?.setValue('');
    this.formGroupClient.get('materia')?.setValue('');
    this.onChangeCurso();
    this.isEditing = false;

  }

  edit(professor: Professor) {
    this.formGroupClient.patchValue(professor); // Atualiza todos os campos com os valores do professor

    // Atualiza a matéria com base no curso do professor
    const selectedCourse = this.formGroupClient.get('course')?.value;
    if (selectedCourse) {
      this.materias = materias.filter(materia => materia.curso === selectedCourse);
    }
  }

  delete(professor : Professor){
    this.professorService.delete(professor).subscribe({
      next: () => this.loadProfessor()
    })
  }

}
