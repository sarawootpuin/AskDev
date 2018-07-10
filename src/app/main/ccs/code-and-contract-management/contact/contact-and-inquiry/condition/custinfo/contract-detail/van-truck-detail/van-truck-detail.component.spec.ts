import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanTruckDetailComponent } from './van-truck-detail.component';

describe('VanTruckDetailComponent', () => {
  let component: VanTruckDetailComponent;
  let fixture: ComponentFixture<VanTruckDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanTruckDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanTruckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
