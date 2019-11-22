import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainblurbComponent } from './mainblurb.component';

describe('MainblurbComponent', () => {
  let component: MainblurbComponent;
  let fixture: ComponentFixture<MainblurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainblurbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainblurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
