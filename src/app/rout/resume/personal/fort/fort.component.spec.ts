import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortComponent } from './fort.component';

describe('FortComponent', () => {
  let component: FortComponent;
  let fixture: ComponentFixture<FortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
