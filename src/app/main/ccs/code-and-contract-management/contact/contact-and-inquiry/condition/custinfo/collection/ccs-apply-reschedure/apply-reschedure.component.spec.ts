import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyReschedureComponent } from './apply-reschedure.component';

describe('ApplyReschedureComponent', () => {
  let component: ApplyReschedureComponent;
  let fixture: ComponentFixture<ApplyReschedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyReschedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyReschedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
