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
    this.chatsService.getChats().subscribe(chats => this.chats = chats);
    this.totalChat = this.chats.length;
  }



  getLastMessage(messages: Message[]): Message | null {
    return this.chatsService.getLastMessage(messages);
  }

  getUnreadMessages(unreadMessages: Message[]): number {
    return this.chatsService.getUnreadMessages(unreadMessages);
  }



}
