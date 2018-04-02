import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrCreditScoringHistoryComponent } from './scr-credit-scoring-history.component';

describe('ScrCreditScoringHistoryComponent', () => {
  let component: ScrCreditScoringHistoryComponent;
  let fixture: ComponentFixture<ScrCreditScoringHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrCreditScoringHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrCreditScoringHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
