import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinZoomingComponent } from './builtin-zooming.component';

describe('BuiltinZoomingComponent', () => {
  let component: BuiltinZoomingComponent;
  let fixture: ComponentFixture<BuiltinZoomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltinZoomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinZoomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
