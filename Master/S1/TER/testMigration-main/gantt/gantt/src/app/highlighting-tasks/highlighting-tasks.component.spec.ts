import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightingTasksComponent } from './highlighting-tasks.component';

describe('HighlightingTasksComponent', () => {
  let component: HighlightingTasksComponent;
  let fixture: ComponentFixture<HighlightingTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightingTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
