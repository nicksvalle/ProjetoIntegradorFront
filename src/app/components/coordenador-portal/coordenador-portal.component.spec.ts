

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorPortalComponent } from './coordenador-portal.component';

describe('CoordenadorPortalComponent', () => {
  let component: CoordenadorPortalComponent;
  let fixture: ComponentFixture<CoordenadorPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordenadorPortalComponent]
    });
    fixture = TestBed.createComponent(CoordenadorPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
