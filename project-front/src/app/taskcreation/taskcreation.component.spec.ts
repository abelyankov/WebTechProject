import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcreationComponent } from './taskcreation.component';

describe('TaskcreationComponent', () => {
  let component: TaskcreationComponent;
  let fixture: ComponentFixture<TaskcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
