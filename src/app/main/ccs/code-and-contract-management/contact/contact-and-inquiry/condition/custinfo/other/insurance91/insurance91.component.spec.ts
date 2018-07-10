import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Insurance91Component } from './insurance91.component';

describe('Insurance91Component', () => {
  let component: Insurance91Component;
  let fixture: ComponentFixture<Insurance91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Insurance91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Insurance91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
