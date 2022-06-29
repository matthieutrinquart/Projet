import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalPathComponent } from './critical-path.component';

describe('CriticalPathComponent', () => {
  let component: CriticalPathComponent;
  let fixture: ComponentFixture<CriticalPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
