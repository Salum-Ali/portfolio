import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamComponent } from './jam.component';

describe('JamComponent', () => {
  let component: JamComponent;
  let fixture: ComponentFixture<JamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
