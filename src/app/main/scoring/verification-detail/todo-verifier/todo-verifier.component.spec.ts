import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoVerifierComponent } from './todo-verifier.component';

describe('TodoVerifierComponent', () => {
  let component: TodoVerifierComponent;
  let fixture: ComponentFixture<TodoVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
