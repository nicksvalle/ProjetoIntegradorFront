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
  materias = materias;
  cursos: string[] = ['DS', 'ADM']; // Adicione os cursos necessários

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

  onChangeCurso() {
    const courseControl = this.formGroupClient.get('course');
    if (courseControl) {
      const selectedCourse = courseControl.value;

      if (selectedCourse) {
        // Filtrar as matérias com base no curso selecionado
        this.materias = materias.filter(materia => materia.curso === selectedCourse);
      } else {
        // Se nenhum curso for selecionado, exibir todas as matérias
        this.materias = materias;
      }
    } else {
      // Lidar com o controle não encontrado, se necessário
    }
  }

  ngOnInit(): void {
    this.loadProfessor();
  }

  loadProfessor() {
    this.professorService.getProfessor().subscribe(
      {
        next : data => this.professor = data
      }
      );
  }

  save(){
    if(this.isEditing)
    {
      this.professorService.update(this.formGroupClient.value).subscribe(
        {
          next: () => {
            this.loadProfessor();
            this.formGroupClient.reset();
            this.isEditing = false;
          }
        }
      )
    }
    else{
      this.professorService.save(this.formGroupClient.value).subscribe(
        {
          next: data => {
            this.professor.push(data);
            this.formGroupClient.reset();
          }
        }
        );
    }
 }

  clean(){
    this.formGroupClient.reset();
    this.isEditing = false;
  }

  edit(professor : Professor){
    this.formGroupClient.setValue(professor);
    this.isEditing = true;
  }

  delete(professor : Professor){
    this.professorService.delete(professor).subscribe({
      next: () => this.loadProfessor()
    })
  }

}
