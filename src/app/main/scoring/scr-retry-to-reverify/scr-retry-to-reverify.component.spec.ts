import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrRetryToReverifyComponent } from './scr-retry-to-reverify.component';

describe('ScrRetryToReverifyComponent', () => {
  let component: ScrRetryToReverifyComponent;
  let fixture: ComponentFixture<ScrRetryToReverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrRetryToReverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrRetryToReverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
