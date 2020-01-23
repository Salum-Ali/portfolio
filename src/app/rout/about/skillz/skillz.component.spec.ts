import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillzComponent } from './skillz.component';

describe('SkillzComponent', () => {
  let component: SkillzComponent;
  let fixture: ComponentFixture<SkillzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
