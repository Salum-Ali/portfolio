import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomjumpComponent } from './bottomjump.component';

describe('BottomjumpComponent', () => {
  let component: BottomjumpComponent;
  let fixture: ComponentFixture<BottomjumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomjumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomjumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
