import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Appartment3Page } from './appartment3.page';

describe('Appartment3Page', () => {
  let component: Appartment3Page;
  let fixture: ComponentFixture<Appartment3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Appartment3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
