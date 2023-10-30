import { Component } from '@angular/core';
import { Professor } from '../professor';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProfessorGerenciarService } from '../professor-gerenciar.service';
import {materias} from '../materias'

@Component({
  selector: 'app-professor-gerenciar',
  templateUrl: './professor-gerenciar.component.html',
  styleUrls: ['./professor-gerenciar.component.css']
})
export class ProfessorGerenciarComponent {
  
  professor : Professor[] = [];
  isEditing : boolean = false;
  formGroupClient: FormGroup;
  ClientService: any;
  materias = materias;

  constructor (private professorService : ProfessorGerenciarService, private formBuilder : FormBuilder){

    this.formGroupClient = formBuilder.group({
      id : [''],
      name : [''],
      email : [''],
      course : [''],
      date : [''],
      materia : ['']
    });
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