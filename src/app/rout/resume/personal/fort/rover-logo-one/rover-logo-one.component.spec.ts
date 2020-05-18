import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverLogoOneComponent } from './rover-logo-one.component';

describe('RoverLogoOneComponent', () => {
  let component: RoverLogoOneComponent;
  let fixture: ComponentFixture<RoverLogoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverLogoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverLogoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
