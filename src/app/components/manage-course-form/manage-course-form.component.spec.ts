import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCourseFormComponent } from './manage-course-form.component';

describe('ManageCourseFormComponent', () => {
  let component: ManageCourseFormComponent;
  let fixture: ComponentFixture<ManageCourseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCourseFormComponent]
    });
    fixture = TestBed.createComponent(ManageCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
