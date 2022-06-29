import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecetteComponent } from './user-recette.component';

describe('UserRecetteComponent', () => {
  let component: UserRecetteComponent;
  let fixture: ComponentFixture<UserRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
