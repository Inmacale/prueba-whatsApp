import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';

import { Chat } from 'src/app/model/chat';
import { Message } from 'src/app/model/message';

import { DataManagementService } from 'src/app/service/data-management.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage {

  chats: Chat[] = [];
  pageSize: number = 13;
  currentPage: number = 1;

  constructor(

    protected chatsDataManagement: DataManagementService,
    public navCtrl: NavController
  ) {
  }


  ionViewWillEnter() {
    this.getChats();

  }

  public gotoChatDetail(id: number): void {
    this.navCtrl.navigateRoot('/chat-contact/' + id, { animated: true, animationDirection: 'forward' });
  }


  public getChats() {
    this.chatsDataManagement.getFindAll().subscribe({
      next: (chats: Chat[]) => {
        this.chats.push(...chats);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  public getLastMessage(messages: Message[]): Message | null {
    return this.chatsDataManagement.getLastMessage(messages);
  }

  public getUnreadMessages(unreadMessages: Message[]): number {
    return this.chatsDataManagement.getUnreadMessages(unreadMessages);
  }

  public onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.getChats();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }





}
