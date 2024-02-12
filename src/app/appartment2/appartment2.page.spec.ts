import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Appartment2Page } from './appartment2.page';

describe('Appartment2Page', () => {
  let component: Appartment2Page;
  let fixture: ComponentFixture<Appartment2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Appartment2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
