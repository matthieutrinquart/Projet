import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceNameCustomizationComponent } from './resource-name-customization.component';

describe('ResourceNameCustomizationComponent', () => {
  let component: ResourceNameCustomizationComponent;
  let fixture: ComponentFixture<ResourceNameCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceNameCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceNameCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
