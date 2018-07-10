import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveTypeComponent } from './receive-type.component';

describe('ReceiveTypeComponent', () => {
  let component: ReceiveTypeComponent;
  let fixture: ComponentFixture<ReceiveTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
