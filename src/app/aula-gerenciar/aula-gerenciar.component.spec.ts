import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaGerenciarComponent } from './aula-gerenciar.component';

describe('AulaGerenciarComponent', () => {
  let component: AulaGerenciarComponent;
  let fixture: ComponentFixture<AulaGerenciarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AulaGerenciarComponent]
    });
    fixture = TestBed.createComponent(AulaGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
