import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrAlertJrstFinComponent } from './scr-alert-jrst-fin.component';

describe('ScrAlertJrstFinComponent', () => {
  let component: ScrAlertJrstFinComponent;
  let fixture: ComponentFixture<ScrAlertJrstFinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrAlertJrstFinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrAlertJrstFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
