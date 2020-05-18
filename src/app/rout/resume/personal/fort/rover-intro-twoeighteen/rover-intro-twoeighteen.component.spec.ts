import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverIntroTwoeighteenComponent } from './rover-intro-twoeighteen.component';

describe('RoverIntroTwoeighteenComponent', () => {
  let component: RoverIntroTwoeighteenComponent;
  let fixture: ComponentFixture<RoverIntroTwoeighteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverIntroTwoeighteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverIntroTwoeighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
