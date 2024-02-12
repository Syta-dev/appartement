import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Appartment5Page } from './appartment5.page';

describe('Appartment5Page', () => {
  let component: Appartment5Page;
  let fixture: ComponentFixture<Appartment5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Appartment5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
