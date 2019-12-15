import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackjumpComponent } from './backjump.component';

describe('BackjumpComponent', () => {
  let component: BackjumpComponent;
  let fixture: ComponentFixture<BackjumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackjumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackjumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
