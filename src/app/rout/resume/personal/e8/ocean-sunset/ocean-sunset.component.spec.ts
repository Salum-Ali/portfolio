import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanSunsetComponent } from './ocean-sunset.component';

describe('OceanSunsetComponent', () => {
  let component: OceanSunsetComponent;
  let fixture: ComponentFixture<OceanSunsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanSunsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanSunsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
