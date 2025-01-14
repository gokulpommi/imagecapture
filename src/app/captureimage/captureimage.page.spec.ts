import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptureimagePage } from './captureimage.page';

describe('CaptureimagePage', () => {
  let component: CaptureimagePage;
  let fixture: ComponentFixture<CaptureimagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
