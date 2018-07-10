import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourceDetailComponent } from './outsource-detail.component';

describe('OutsourceDetailComponent', () => {
  let component: OutsourceDetailComponent;
  let fixture: ComponentFixture<OutsourceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsourceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
