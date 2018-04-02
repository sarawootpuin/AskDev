import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTabContentComponent } from './side-tab-content.component';

describe('SideTabContentComponent', () => {
  let component: SideTabContentComponent;
  let fixture: ComponentFixture<SideTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
