import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiveDetailComponent } from './waive-detail.component';

describe('WaiveDetailComponent', () => {
  let component: WaiveDetailComponent;
  let fixture: ComponentFixture<WaiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
