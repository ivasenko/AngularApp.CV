import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerSkatingComponent } from './roller-skating.component';

describe('RollerSkatingComponent', () => {
  let component: RollerSkatingComponent;
  let fixture: ComponentFixture<RollerSkatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerSkatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerSkatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
