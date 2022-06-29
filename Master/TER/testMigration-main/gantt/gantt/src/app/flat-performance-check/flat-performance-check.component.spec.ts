import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatPerformanceCheckComponent } from './flat-performance-check.component';

describe('FlatPerformanceCheckComponent', () => {
  let component: FlatPerformanceCheckComponent;
  let fixture: ComponentFixture<FlatPerformanceCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatPerformanceCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatPerformanceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
