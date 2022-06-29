import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineTableViewComponent } from './baseline-table-view.component';

describe('BaselineTableViewComponent', () => {
  let component: BaselineTableViewComponent;
  let fixture: ComponentFixture<BaselineTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaselineTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselineTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
