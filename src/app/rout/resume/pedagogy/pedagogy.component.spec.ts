import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyComponent } from './pedagogy.component';

describe('PedagogyComponent', () => {
  let component: PedagogyComponent;
  let fixture: ComponentFixture<PedagogyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedagogyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
