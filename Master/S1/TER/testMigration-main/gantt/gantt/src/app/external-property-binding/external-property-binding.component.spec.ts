import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPropertyBindingComponent } from './external-property-binding.component';

describe('ExternalPropertyBindingComponent', () => {
  let component: ExternalPropertyBindingComponent;
  let fixture: ComponentFixture<ExternalPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
