import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedTableComponent } from './customized-table.component';

describe('CustomizedTableComponent', () => {
  let component: CustomizedTableComponent;
  let fixture: ComponentFixture<CustomizedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
