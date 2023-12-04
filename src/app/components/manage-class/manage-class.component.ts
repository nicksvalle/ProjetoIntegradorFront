import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Class } from 'src/app/interfaces/class';
import { ClassService } from 'src/app/services/class/class.service';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.css']
})
export class ManageClassComponent {
  classes : Class[] = [];
  isEditing : boolean = false;

  constructor (private classService: ClassService,  private formBuilder : FormBuilder, private router: Router){

  }

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses() {
    this.classService.getClasses().subscribe(
      {
          next : data => this.classes = data
      }
    );
  }


 create(){
  this.router.navigate(['createClass'])
 }

  edit(classe : Class){
    this.router.navigate(['manage-classDetails', classe.id])
  }

  delete(classe : Class){
    this.classService.delete(classe).subscribe({
      next: () => this.loadClasses()
    })
  }
}
