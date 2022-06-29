import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMetroStyleComponent } from './custom-metro-style.component';

describe('CustomMetroStyleComponent', () => {
  let component: CustomMetroStyleComponent;
  let fixture: ComponentFixture<CustomMetroStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMetroStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMetroStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
