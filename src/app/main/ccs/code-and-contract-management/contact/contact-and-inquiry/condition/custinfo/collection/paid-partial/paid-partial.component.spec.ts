import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidPartialComponent } from './paid-partial.component';

describe('PaidPartialComponent', () => {
  let component: PaidPartialComponent;
  let fixture: ComponentFixture<PaidPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
