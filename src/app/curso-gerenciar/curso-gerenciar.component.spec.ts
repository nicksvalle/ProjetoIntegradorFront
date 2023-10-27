import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoGerenciarComponent } from './curso-gerenciar.component';

describe('CursoGerenciarComponent', () => {
  let component: CursoGerenciarComponent;
  let fixture: ComponentFixture<CursoGerenciarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoGerenciarComponent]
    });
    fixture = TestBed.createComponent(CursoGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
