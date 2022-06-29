import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredecessorsComponent } from './predecessors.component';

describe('PredecessorsComponent', () => {
  let component: PredecessorsComponent;
  let fixture: ComponentFixture<PredecessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredecessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredecessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
