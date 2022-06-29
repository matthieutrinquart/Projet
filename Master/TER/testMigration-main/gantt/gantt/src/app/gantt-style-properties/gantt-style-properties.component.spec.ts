import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttStylePropertiesComponent } from './gantt-style-properties.component';

describe('GanttStylePropertiesComponent', () => {
  let component: GanttStylePropertiesComponent;
  let fixture: ComponentFixture<GanttStylePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttStylePropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttStylePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
