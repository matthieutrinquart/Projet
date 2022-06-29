import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeStyleComponent } from './node-style.component';

describe('NodeStyleComponent', () => {
  let component: NodeStyleComponent;
  let fixture: ComponentFixture<NodeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
