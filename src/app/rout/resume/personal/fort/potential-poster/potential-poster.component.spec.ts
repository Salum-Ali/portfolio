import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialPosterComponent } from './potential-poster.component';

describe('PotentialPosterComponent', () => {
  let component: PotentialPosterComponent;
  let fixture: ComponentFixture<PotentialPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
