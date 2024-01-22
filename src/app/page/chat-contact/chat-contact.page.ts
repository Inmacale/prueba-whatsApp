import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Chat } from 'src/app/model/chat';
import { Message } from 'src/app/model/message';

import { DataManagementService } from 'src/app/service/data-management.service';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.page.html',
  styleUrls: ['./chat-contact.page.scss'],
})
export class ChatContactPage implements OnInit {

  @ViewChild(IonContent, { static: false }) ionContent!: IonContent;
  @ViewChild('contentArea', { read: ElementRef }) contentAreaRef!: ElementRef;


  chat: Chat | undefined;
  newMessage: string = '';
  profileId: number | undefined;


  constructor(private route: ActivatedRoute, private chatContactDataManagement: DataManagementService) { }

  ngOnInit() {
    this.profileId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.getChatContact();
  }

  getChatContact() {
    if (this.profileId) {
      this.chatContactDataManagement.getFindId(this.profileId).subscribe({
        next: (chat: Chat) => {
          this.chat = chat;
        },
        error: (error: any) => {
          console.log(error);
        }
      });

    }
  }

  scrollToBottom() {
    if (this.ionContent) {
      this.ionContent.scrollToBottom(100);
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
        this.chatContactDataManagement.update(this.chat).subscribe({
          next: () => {
            console.log('Mensaje enviado');
            this.scrollToBottom();
          },
          error: (error: any) => {
            console.error(error);
          }
        });

        console.log('envia ', this.chat);

        const currentChat = this.chat;

        setTimeout(() => {
          if (currentChat) {
            const autoReply = new Message(
              currentChat.messages.length + 1,
              'Respuesta automática después de 10 segundos',
              'input',
              new Date()
            );

            currentChat.messages.push(autoReply);
            this.chatContactDataManagement.update(currentChat).subscribe({
              next: () => {
                console.log('Respuesta automática enviada');
                this.scrollToBottom();
              },
              error: (error: any) => {
                console.error(error);
              }
            });
          }
        }, 500);
      }
    }

  }



}
