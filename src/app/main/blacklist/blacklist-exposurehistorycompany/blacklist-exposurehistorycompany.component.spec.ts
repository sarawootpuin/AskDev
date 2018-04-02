import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistExposurehistorycompanyComponent } from './blacklist-exposurehistorycompany.component';

describe('BlacklistExposurehistorycompanyComponent', () => {
  let component: BlacklistExposurehistorycompanyComponent;
  let fixture: ComponentFixture<BlacklistExposurehistorycompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistExposurehistorycompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistExposurehistorycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
