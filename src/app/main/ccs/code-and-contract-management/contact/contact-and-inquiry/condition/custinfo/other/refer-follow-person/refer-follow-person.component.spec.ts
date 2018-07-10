import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferFollowPersonComponent } from './refer-follow-person.component';

describe('ReferFollowPersonComponent', () => {
  let component: ReferFollowPersonComponent;
  let fixture: ComponentFixture<ReferFollowPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferFollowPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferFollowPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
