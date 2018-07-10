import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusPaidComponent } from './cus-paid.component';

describe('CusPaidComponent', () => {
  let component: CusPaidComponent;
  let fixture: ComponentFixture<CusPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
