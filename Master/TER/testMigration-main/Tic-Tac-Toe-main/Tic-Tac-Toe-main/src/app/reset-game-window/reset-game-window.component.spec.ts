import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetGameWindowComponent } from './reset-game-window.component';

describe('ResetGameWindowComponent', () => {
  let component: ResetGameWindowComponent;
  let fixture: ComponentFixture<ResetGameWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetGameWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetGameWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
