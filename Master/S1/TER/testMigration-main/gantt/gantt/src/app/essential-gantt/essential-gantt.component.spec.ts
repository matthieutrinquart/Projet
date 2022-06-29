import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialGanttComponent } from './essential-gantt.component';

describe('EssentialGanttComponent', () => {
  let component: EssentialGanttComponent;
  let fixture: ComponentFixture<EssentialGanttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialGanttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
