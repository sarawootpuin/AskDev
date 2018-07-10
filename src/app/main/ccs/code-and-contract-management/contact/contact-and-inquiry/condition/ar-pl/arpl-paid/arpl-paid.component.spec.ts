import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArplPaidComponent } from './arpl-paid.component';

describe('ArplPaidComponent', () => {
  let component: ArplPaidComponent;
  let fixture: ComponentFixture<ArplPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArplPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArplPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
