import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, ScrollCustomEvent, } from '@ionic/angular';
import { Chat } from 'src/app/model/chat';
import { Message } from 'src/app/model/message';

import { DataManagementService } from 'src/app/service/data-management.service';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.page.html',
  styleUrls: ['./chat-contact.page.scss'],
})
export class ChatContactPage implements OnInit {

  @ViewChild('contentArea') ionContent!: IonContent;


  chat: Chat | undefined;
  newMessage: string = '';
  profileId: number | undefined;
  showFabButton: boolean = false;
  lastScrollTop = 0;
  isSendingMessage: boolean = false;

  constructor(private route: ActivatedRoute, private chatContactDataManagement: DataManagementService) {
  }

  ngOnInit() {
    this.profileId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.getChatContact();

  }

  ionViewDidEnter() {
    this.scrollUp();
  }

  public getChatContact() {
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

  public scrollUp() {
    if (this.ionContent) {
      this.ionContent.scrollToBottom();
    }
  }

  async onScroll(event: ScrollCustomEvent) {

    const scrollElement = await this.ionContent.getScrollElement();
    const scrollTop = event.detail.scrollTop;
    const deltay = event.detail.deltaY;
    const isAtBottom = scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight;
    this.showFabButton = !this.isSendingMessage && (!isAtBottom || (scrollTop < this.lastScrollTop && deltay < 0));
    this.lastScrollTop = scrollTop;
  }



  public sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      if (this.chat) {
        this.isSendingMessage = true;
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
            this.scrollUp();
          },
          error: (error: any) => {
            console.error(error);
          }
        });

        const currentChat = this.chat;
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
              this.isSendingMessage = false;
              this.scrollUp();
            },
            error: (error: any) => {
              console.error(error);
            }
          });
        }
      }
    }

  }
}
