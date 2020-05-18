import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverIntroTwonineteenComponent } from './rover-intro-twonineteen.component';

describe('RoverIntroTwonineteenComponent', () => {
  let component: RoverIntroTwonineteenComponent;
  let fixture: ComponentFixture<RoverIntroTwonineteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverIntroTwonineteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverIntroTwonineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
