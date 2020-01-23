import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindsightComponent } from './hindsight.component';

describe('HindsightComponent', () => {
  let component: HindsightComponent;
  let fixture: ComponentFixture<HindsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
