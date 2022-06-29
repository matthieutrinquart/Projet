import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportDemoComponent } from './import-export-demo.component';

describe('ImportExportDemoComponent', () => {
  let component: ImportExportDemoComponent;
  let fixture: ComponentFixture<ImportExportDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
