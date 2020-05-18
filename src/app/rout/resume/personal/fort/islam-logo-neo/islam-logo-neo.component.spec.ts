import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamLogoNeoComponent } from './islam-logo-neo.component';

describe('IslamLogoNeoComponent', () => {
  let component: IslamLogoNeoComponent;
  let fixture: ComponentFixture<IslamLogoNeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslamLogoNeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamLogoNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
