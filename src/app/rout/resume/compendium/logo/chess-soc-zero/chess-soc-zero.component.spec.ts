import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessSocZeroComponent } from './chess-soc-zero.component';

describe('ChessSocZeroComponent', () => {
  let component: ChessSocZeroComponent;
  let fixture: ComponentFixture<ChessSocZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessSocZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessSocZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
