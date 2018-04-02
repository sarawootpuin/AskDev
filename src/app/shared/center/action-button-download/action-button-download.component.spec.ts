import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonDownloadComponent } from './action-button-download.component';

describe('ActionButtonDownloadComponent', () => {
  let component: ActionButtonDownloadComponent;
  let fixture: ComponentFixture<ActionButtonDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionButtonDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
