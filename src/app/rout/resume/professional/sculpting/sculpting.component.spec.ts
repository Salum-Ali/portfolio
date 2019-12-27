import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SculptingComponent } from './sculpting.component';

describe('SculptingComponent', () => {
  let component: SculptingComponent;
  let fixture: ComponentFixture<SculptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SculptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SculptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
