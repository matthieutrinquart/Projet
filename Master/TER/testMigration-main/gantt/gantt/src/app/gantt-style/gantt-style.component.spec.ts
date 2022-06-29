import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttStyleComponent } from './gantt-style.component';

describe('GanttStyleComponent', () => {
  let component: GanttStyleComponent;
  let fixture: ComponentFixture<GanttStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
