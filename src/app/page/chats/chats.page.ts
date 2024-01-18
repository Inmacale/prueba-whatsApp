import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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


  constructor(
    private chatsService: ChatsService,
    protected chatsDataManagement: DataManagementService,
    public navCtrl: NavController
  ) {
  }

  ngOnInit(): void {
    console.log('chats', this.chats)
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
        this.chats = chats;
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
    return this.chatsService.getUnreadMessages(unreadMessages);
  }



}
