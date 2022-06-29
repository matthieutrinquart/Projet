import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsWindowComponent } from './statistics-window.component';

describe('StatisticsWindowComponent', () => {
  let component: StatisticsWindowComponent;
  let fixture: ComponentFixture<StatisticsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
