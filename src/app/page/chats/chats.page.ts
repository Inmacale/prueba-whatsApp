import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { Message } from 'src/app/model/message';
import { ChatsService } from 'src/app/service/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  chats: Chat[] = [];
  totalChat: number = 0;
  chatPage: number = 5;

  constructor(private chatsService: ChatsService) { }

  ngOnInit() {
    this.getChats();
  }

  getChats(): void {
    this.chats = this.chatsService.getChats();
    this.totalChat = this.chats.length;
  }

  onIonInfinite(event: any): void {
    setTimeout(() => {
      const startIndex = this.chats.length;
      const endIndex = startIndex + this.chatPage;
      const newChat = this.chatsService.getChats().slice(startIndex, endIndex);

      this.chats = [...this.chats, ...newChat];

      event.target.complete();

      if (this.chats.length >= this.totalChat) {
        event.target.disabled = true;
      }
    }, 2000);
  }

  getLastMessage(messages: Message[]): Message | null {
    return this.chatsService.getLastMessage(messages);
  }

  getUnreadMessages(unreadMessages: Message[]): number {
    return this.chatsService.getUnreadMessages(unreadMessages);
  }



}
