import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociolinkComponent } from './sociolink.component';

describe('SociolinkComponent', () => {
  let component: SociolinkComponent;
  let fixture: ComponentFixture<SociolinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociolinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociolinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
