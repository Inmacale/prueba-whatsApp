import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/model/chat';
import { Message } from 'src/app/model/message';
import { ChatsService } from 'src/app/service/chats.service';
import { DataManagementService } from 'src/app/service/data-management.service';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.page.html',
  styleUrls: ['./chat-contact.page.scss'],
})
export class ChatContactPage implements OnInit {

  chat: Chat | undefined;
  newMessage: string = '';

  profileId: number | undefined;

  constructor(private route: ActivatedRoute, private chatsService: ChatsService, private chatContactDataManagement: DataManagementService) { }

  ngOnInit() {
    this.profileId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.getChatContact();
  }

  getChatContact() {
    if (this.profileId) {
      this.chatContactDataManagement.getFindId(this.profileId).subscribe(res =>
        this.chat = res);


    }
  }


  public sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      if (this.chat) {
        const newMessage = new Message(
          this.chat.messages.length + 1,
          this.newMessage,
          'output',
          new Date()
        );

        this.chat.messages.push(newMessage);
        this.newMessage = '';
        this.chatContactDataManagement.updateChats(this.chat).subscribe(updateChat => this.chat = updateChat);

        console.log('envia ', this.chat);
      }
    }


  }


}
