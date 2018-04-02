import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mainTabVerificationDetailComponent } from './mainTab-verification-detail.component';

describe('mainTabVerificationDetailComponent', () => {
  let component: mainTabVerificationDetailComponent;
  let fixture: ComponentFixture<mainTabVerificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mainTabVerificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mainTabVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
