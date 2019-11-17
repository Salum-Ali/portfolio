import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorenavComponent } from './corenav.component';

describe('CorenavComponent', () => {
  let component: CorenavComponent;
  let fixture: ComponentFixture<CorenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
