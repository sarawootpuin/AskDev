import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistShareCenterComponent } from './blacklist-share-center.component';

describe('BlacklistShareCenterComponent', () => {
  let component: BlacklistShareCenterComponent;
  let fixture: ComponentFixture<BlacklistShareCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistShareCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistShareCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
