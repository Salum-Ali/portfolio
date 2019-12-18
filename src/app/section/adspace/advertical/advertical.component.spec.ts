import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverticalComponent } from './advertical.component';

describe('AdverticalComponent', () => {
  let component: AdverticalComponent;
  let fixture: ComponentFixture<AdverticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
