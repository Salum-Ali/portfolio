import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightNebulaComponent } from './night-nebula.component';

describe('NightNebulaComponent', () => {
  let component: NightNebulaComponent;
  let fixture: ComponentFixture<NightNebulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightNebulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightNebulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
