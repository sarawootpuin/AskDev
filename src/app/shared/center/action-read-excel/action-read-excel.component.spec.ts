import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionReadExcelComponent } from './action-read-excel.component';

describe('ActionReadExcelComponent', () => {
  let component: ActionReadExcelComponent;
  let fixture: ComponentFixture<ActionReadExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionReadExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionReadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
