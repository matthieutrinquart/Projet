import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyPerformanceCheckComponent } from './hierarchy-performance-check.component';

describe('HierarchyPerformanceCheckComponent', () => {
  let component: HierarchyPerformanceCheckComponent;
  let fixture: ComponentFixture<HierarchyPerformanceCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchyPerformanceCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyPerformanceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
