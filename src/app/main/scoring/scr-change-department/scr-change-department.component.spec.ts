import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrChangeDepartmentComponent } from './scr-change-department.component';

describe('ScrChangeDepartmentComponent', () => {
  let component: ScrChangeDepartmentComponent;
  let fixture: ComponentFixture<ScrChangeDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrChangeDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrChangeDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
