import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabPanelComponent } from './side-tab-panel.component';

describe('SideTabPanelComponent', () => {
  let component: SideTabPanelComponent;
  let fixture: ComponentFixture<SideTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
