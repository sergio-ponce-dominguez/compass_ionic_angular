import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassPage } from './compass.page';

describe('CompassPage', () => {
  let component: CompassPage;
  let fixture: ComponentFixture<CompassPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(CompassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
