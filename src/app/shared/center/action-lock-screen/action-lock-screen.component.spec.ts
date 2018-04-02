import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLockScreenComponent } from './action-lock-screen.component';

describe('ActionLockScreenComponent', () => {
  let component: ActionLockScreenComponent;
  let fixture: ComponentFixture<ActionLockScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionLockScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
