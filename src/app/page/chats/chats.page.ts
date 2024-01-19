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
export class ChatsPage implements OnInit {

  chats: Chat[] = [];
  pageSize: number = 13; // Número de chats a cargar por página
  currentPage: number = 1; // Página actual

  constructor(

    protected chatsDataManagement: DataManagementService,
    public navCtrl: NavController
  ) {
  }

  ngOnInit(): void {
    console.log('chats ng', this.chats)
  }

  ionViewWillEnter() {
    this.getChats();
    console.log('chats', this.chats)
  }

  public gotoChatDetail(id: number): void {
    this.navCtrl.navigateRoot('/chat-contact/' + id, { animated: true, animationDirection: 'forward' });
  }


  getChats() {
    this.chatsDataManagement.getFindAll().subscribe({
      next: (chats: Chat[]) => {
        this.chats.push(...chats);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }




  getLastMessage(messages: Message[]): Message | null {
    return this.chatsDataManagement.getLastMessage(messages);
  }

  getUnreadMessages(unreadMessages: Message[]): number {
    return this.chatsDataManagement.getUnreadMessages(unreadMessages);
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.getChats();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }





}
