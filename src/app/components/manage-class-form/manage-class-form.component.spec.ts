import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassFormComponent } from './manage-class-form.component';

describe('ManageClassFormComponent', () => {
  let component: ManageClassFormComponent;
  let fixture: ComponentFixture<ManageClassFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageClassFormComponent]
    });
    fixture = TestBed.createComponent(ManageClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
