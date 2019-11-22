import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneComponent } from './none.component';

describe('NoneComponent', () => {
  let component: NoneComponent;
  let fixture: ComponentFixture<NoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
