import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregistrationformComponent } from './patientregistrationform.component';

describe('PatientregistrationformComponent', () => {
  let component: PatientregistrationformComponent;
  let fixture: ComponentFixture<PatientregistrationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientregistrationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientregistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
