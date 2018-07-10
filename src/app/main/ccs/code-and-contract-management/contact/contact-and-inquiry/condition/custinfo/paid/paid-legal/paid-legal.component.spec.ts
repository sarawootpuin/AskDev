import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidLegalComponent } from './paid-legal.component';

describe('PaidLegalComponent', () => {
  let component: PaidLegalComponent;
  let fixture: ComponentFixture<PaidLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
