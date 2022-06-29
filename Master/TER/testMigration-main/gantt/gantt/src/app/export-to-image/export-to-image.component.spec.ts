import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToImageComponent } from './export-to-image.component';

describe('ExportToImageComponent', () => {
  let component: ExportToImageComponent;
  let fixture: ComponentFixture<ExportToImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportToImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
