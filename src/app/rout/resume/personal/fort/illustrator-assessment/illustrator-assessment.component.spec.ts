import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratorAssessmentComponent } from './illustrator-assessment.component';

describe('IllustratorAssessmentComponent', () => {
  let component: IllustratorAssessmentComponent;
  let fixture: ComponentFixture<IllustratorAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustratorAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratorAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
