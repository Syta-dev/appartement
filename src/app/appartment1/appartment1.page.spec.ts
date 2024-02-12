import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Appartment1Page } from './appartment1.page';

describe('Appartment1Page', () => {
  let component: Appartment1Page;
  let fixture: ComponentFixture<Appartment1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Appartment1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
