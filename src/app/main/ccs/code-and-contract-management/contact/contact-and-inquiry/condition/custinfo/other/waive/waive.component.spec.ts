import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiveComponent } from './waive.component';

describe('WaiveComponent', () => {
  let component: WaiveComponent;
  let fixture: ComponentFixture<WaiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
