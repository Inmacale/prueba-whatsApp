import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { Message } from 'src/app/model/message';
import { ChatsService } from 'src/app/service/chats.service';
import { DataManagementService } from 'src/app/service/data-management.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  chats: Chat[] = [];


  constructor(private chatsService: ChatsService, protected chatsDataManagement: DataManagementService) { }

  ngOnInit() {
    this.getChats();
  }

 async getChats() {
   await this.chatsDataManagement.getFindAll().then(chats => {
      this.chats = chats;
    });

  }


  getLastMessage(messages: Message[]): Message | null {
    return this.chatsDataManagement.getLastMessage(messages);
  }

  getUnreadMessages(unreadMessages: Message[]): number {
    return this.chatsService.getUnreadMessages(unreadMessages);
  }



}
