import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeednavComponent } from './feednav.component';

describe('FeednavComponent', () => {
  let component: FeednavComponent;
  let fixture: ComponentFixture<FeednavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeednavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeednavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
