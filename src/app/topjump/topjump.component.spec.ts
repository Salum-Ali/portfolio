import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopjumpComponent } from './topjump.component';

describe('TopjumpComponent', () => {
  let component: TopjumpComponent;
  let fixture: ComponentFixture<TopjumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopjumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopjumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
