import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherScreenComponent } from './another-screen.component';

describe('AnotherScreenComponent', () => {
  let component: AnotherScreenComponent;
  let fixture: ComponentFixture<AnotherScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
