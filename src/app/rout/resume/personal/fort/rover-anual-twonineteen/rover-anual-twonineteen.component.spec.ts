import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverAnualTwonineteenComponent } from './rover-anual-twonineteen.component';

describe('RoverAnualTwonineteenComponent', () => {
  let component: RoverAnualTwonineteenComponent;
  let fixture: ComponentFixture<RoverAnualTwonineteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverAnualTwonineteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverAnualTwonineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
