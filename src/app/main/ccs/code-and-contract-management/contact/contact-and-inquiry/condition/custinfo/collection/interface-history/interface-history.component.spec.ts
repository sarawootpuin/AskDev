import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceHistoryComponent } from './interface-history.component';

describe('InterfaceHistoryComponent', () => {
  let component: InterfaceHistoryComponent;
  let fixture: ComponentFixture<InterfaceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
