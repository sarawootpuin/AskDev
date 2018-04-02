import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVerificationDetailComponent } from './header-verification-detail.component';

describe('HeaderVerificationDetailComponent', () => {
  let component: HeaderVerificationDetailComponent;
  let fixture: ComponentFixture<HeaderVerificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderVerificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
