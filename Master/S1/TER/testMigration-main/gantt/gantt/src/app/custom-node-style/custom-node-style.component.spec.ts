import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNodeStyleComponent } from './custom-node-style.component';

describe('CustomNodeStyleComponent', () => {
  let component: CustomNodeStyleComponent;
  let fixture: ComponentFixture<CustomNodeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNodeStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNodeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
