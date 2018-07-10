import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArplAssetAndGuarComponent } from './arpl-asset-and-guar.component';

describe('ArplAssetAndGuarComponent', () => {
  let component: ArplAssetAndGuarComponent;
  let fixture: ComponentFixture<ArplAssetAndGuarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArplAssetAndGuarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArplAssetAndGuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
