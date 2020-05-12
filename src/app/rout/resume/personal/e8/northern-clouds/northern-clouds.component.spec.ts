import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthernCloudsComponent } from './northern-clouds.component';

describe('NorthernCloudsComponent', () => {
  let component: NorthernCloudsComponent;
  let fixture: ComponentFixture<NorthernCloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthernCloudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthernCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
