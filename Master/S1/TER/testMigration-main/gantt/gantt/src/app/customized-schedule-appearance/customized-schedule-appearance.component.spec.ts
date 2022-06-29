import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedScheduleAppearanceComponent } from './customized-schedule-appearance.component';

describe('CustomizedScheduleAppearanceComponent', () => {
  let component: CustomizedScheduleAppearanceComponent;
  let fixture: ComponentFixture<CustomizedScheduleAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedScheduleAppearanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedScheduleAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
