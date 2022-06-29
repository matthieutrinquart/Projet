import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTaskDetailsComponent } from './binding-task-details.component';

describe('BindingTaskDetailsComponent', () => {
  let component: BindingTaskDetailsComponent;
  let fixture: ComponentFixture<BindingTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
