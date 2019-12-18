import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhorizontalComponent } from './adhorizontal.component';

describe('AdhorizontalComponent', () => {
  let component: AdhorizontalComponent;
  let fixture: ComponentFixture<AdhorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
