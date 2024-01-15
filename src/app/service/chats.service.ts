import { Injectable } from '@angular/core';
import { Chat } from '../model/chat';
import { Message } from '../model/message';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  chats: Chat[] = [];

  constructor(private contactService: ContactService) {
    this.initializeChats();
  }

  private initializeChats(): void {
    this.chats = [];
    this.contactService.getContacts().forEach(element => {
      const newId = this.chats.length + 1;
      this.chats?.push(
        {
          id: newId,
          contact: element,
          messages: [],
          unreadMessages: []
        }
      )
    })
  }


  public getChats(): Chat[] {
    return this.chats;
  }

  public getLastMessage(messages: Message[]): Message | null {
    if (messages && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      return lastMessage;
    }
    return null;

  }

  public getUnreadMessages(unreadMessages: Message[]): number {
    if (unreadMessages && unreadMessages.length > 0) {
      return unreadMessages.length;
    }
    return 0;
  }

  public getChatById(chatId: number): Chat | undefined {
    return this.chats.find(chat => chat.id === chatId);
  }
}
