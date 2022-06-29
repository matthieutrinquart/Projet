import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomZoomingComponent } from './custom-zooming.component';

describe('CustomZoomingComponent', () => {
  let component: CustomZoomingComponent;
  let fixture: ComponentFixture<CustomZoomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomZoomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomZoomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
