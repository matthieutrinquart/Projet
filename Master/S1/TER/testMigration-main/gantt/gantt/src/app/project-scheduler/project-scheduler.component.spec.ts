import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSchedulerComponent } from './project-scheduler.component';

describe('ProjectSchedulerComponent', () => {
  let component: ProjectSchedulerComponent;
  let fixture: ComponentFixture<ProjectSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
