import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabLevel1Component } from './side-tab-level.component';

describe('SideTabLevel1Component', () => {
  let component: SideTabLevel1Component;
  let fixture: ComponentFixture<SideTabLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTabLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTabLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
