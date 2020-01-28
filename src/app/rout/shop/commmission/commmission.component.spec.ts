import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmissionComponent } from './commmission.component';

describe('CommmissionComponent', () => {
  let component: CommmissionComponent;
  let fixture: ComponentFixture<CommmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
