import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MktConditionComponent } from './mkt-condition.component';

describe('MktConditionComponent', () => {
  let component: MktConditionComponent;
  let fixture: ComponentFixture<MktConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MktConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MktConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
