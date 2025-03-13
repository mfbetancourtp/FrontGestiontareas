import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormulariosComponent } from './task-formularios.component';

describe('TaskFormulariosComponent', () => {
  let component: TaskFormulariosComponent;
  let fixture: ComponentFixture<TaskFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFormulariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
