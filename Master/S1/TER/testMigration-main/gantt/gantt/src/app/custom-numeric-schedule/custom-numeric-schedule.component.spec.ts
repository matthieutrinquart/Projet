import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNumericScheduleComponent } from './custom-numeric-schedule.component';

describe('CustomNumericScheduleComponent', () => {
  let component: CustomNumericScheduleComponent;
  let fixture: ComponentFixture<CustomNumericScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNumericScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNumericScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
