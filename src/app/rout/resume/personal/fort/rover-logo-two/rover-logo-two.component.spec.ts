import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverLogoTwoComponent } from './rover-logo-two.component';

describe('RoverLogoTwoComponent', () => {
  let component: RoverLogoTwoComponent;
  let fixture: ComponentFixture<RoverLogoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverLogoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverLogoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
