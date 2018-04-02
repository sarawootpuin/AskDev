import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabMainComponent } from './side-tab-main.component';

describe('SideTabMainComponent', () => {
  let component: SideTabMainComponent;
  let fixture: ComponentFixture<SideTabMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTabMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
