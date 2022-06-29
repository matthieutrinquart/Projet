import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateTimeScheduleComponent } from './custom-date-time-schedule.component';

describe('CustomDateTimeScheduleComponent', () => {
  let component: CustomDateTimeScheduleComponent;
  let fixture: ComponentFixture<CustomDateTimeScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDateTimeScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDateTimeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
