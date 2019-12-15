import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardjumpComponent } from './forwardjump.component';

describe('ForwardjumpComponent', () => {
  let component: ForwardjumpComponent;
  let fixture: ComponentFixture<ForwardjumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardjumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardjumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
