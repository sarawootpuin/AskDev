import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringEnquiryComponent } from './scoring-enquiry.component';

describe('ScoringEnquiryComponent', () => {
  let component: ScoringEnquiryComponent;
  let fixture: ComponentFixture<ScoringEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
