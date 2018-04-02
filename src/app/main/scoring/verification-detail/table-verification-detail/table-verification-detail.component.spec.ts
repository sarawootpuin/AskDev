import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVerificationDetailComponent } from './table-verification-detail.component';

describe('TableVerificationDetailComponent', () => {
  let component: TableVerificationDetailComponent;
  let fixture: ComponentFixture<TableVerificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVerificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
