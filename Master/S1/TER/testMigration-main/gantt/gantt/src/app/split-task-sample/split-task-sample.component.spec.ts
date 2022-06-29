import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTaskSampleComponent } from './split-task-sample.component';

describe('SplitTaskSampleComponent', () => {
  let component: SplitTaskSampleComponent;
  let fixture: ComponentFixture<SplitTaskSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTaskSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTaskSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
