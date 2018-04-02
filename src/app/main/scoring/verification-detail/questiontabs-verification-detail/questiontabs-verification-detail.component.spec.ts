import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiontabsVerificationDetailComponent } from './questiontabs-verification-detail.component';

describe('QuestiontabsVerificationDetailComponent', () => {
  let component: QuestiontabsVerificationDetailComponent;
  let fixture: ComponentFixture<QuestiontabsVerificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestiontabsVerificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiontabsVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
