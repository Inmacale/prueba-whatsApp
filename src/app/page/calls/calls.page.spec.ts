import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallsPage } from './calls.page';

describe('CallsPage', () => {
  let component: CallsPage;
  let fixture: ComponentFixture<CallsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
