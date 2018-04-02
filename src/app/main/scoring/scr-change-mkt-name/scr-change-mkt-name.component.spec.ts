import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrChangeMktNameComponent } from './scr-change-mkt-name.component';

describe('ScrChangeMktNameComponent', () => {
  let component: ScrChangeMktNameComponent;
  let fixture: ComponentFixture<ScrChangeMktNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrChangeMktNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrChangeMktNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
