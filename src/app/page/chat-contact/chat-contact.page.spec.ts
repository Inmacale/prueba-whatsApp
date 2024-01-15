import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatContactPage } from './chat-contact.page';

describe('ChatContactPage', () => {
  let component: ChatContactPage;
  let fixture: ComponentFixture<ChatContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
