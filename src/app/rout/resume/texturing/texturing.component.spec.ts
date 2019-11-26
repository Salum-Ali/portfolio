import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexturingComponent } from './texturing.component';

describe('TexturingComponent', () => {
  let component: TexturingComponent;
  let fixture: ComponentFixture<TexturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
