import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttStripLineComponent } from './gantt-strip-line.component';

describe('GanttStripLineComponent', () => {
  let component: GanttStripLineComponent;
  let fixture: ComponentFixture<GanttStripLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttStripLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttStripLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
