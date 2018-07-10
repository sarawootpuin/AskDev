import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArplMovementRegComponent } from './arpl-movement-reg.component';

describe('ArplMovementRegComponent', () => {
  let component: ArplMovementRegComponent;
  let fixture: ComponentFixture<ArplMovementRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArplMovementRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArplMovementRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
