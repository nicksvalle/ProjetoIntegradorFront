import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorGerenciarComponent } from './professor-gerenciar.component';

describe('ProfessorGerenciarComponent', () => {
  let component: ProfessorGerenciarComponent;
  let fixture: ComponentFixture<ProfessorGerenciarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorGerenciarComponent]
    });
    fixture = TestBed.createComponent(ProfessorGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
