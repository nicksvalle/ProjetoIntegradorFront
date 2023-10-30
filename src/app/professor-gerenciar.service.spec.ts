import { TestBed } from '@angular/core/testing';

import { ProfessorGerenciarService } from './professor-gerenciar.service';

describe('ProfessorGerenciarService', () => {
  let service: ProfessorGerenciarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorGerenciarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
