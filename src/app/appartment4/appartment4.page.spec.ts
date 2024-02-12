import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Appartment4Page } from './appartment4.page';

describe('Appartment4Page', () => {
  let component: Appartment4Page;
  let fixture: ComponentFixture<Appartment4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Appartment4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
