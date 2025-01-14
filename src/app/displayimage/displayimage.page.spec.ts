import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayimagePage } from './displayimage.page';

describe('DisplayimagePage', () => {
  let component: DisplayimagePage;
  let fixture: ComponentFixture<DisplayimagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
