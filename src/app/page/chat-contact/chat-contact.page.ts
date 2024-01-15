import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/model/chat';
import { ChatsService } from 'src/app/service/chats.service';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.page.html',
  styleUrls: ['./chat-contact.page.scss'],
})
export class ChatContactPage implements OnInit {

  chat: Chat | undefined;
  newMessage: string = '';

  constructor(private route: ActivatedRoute, private chatsService: ChatsService) { }

  ngOnInit() {
    this.selectedChat();
  }

  private selectedChat(): void {
    const chatId = this.route.snapshot.paramMap.get('id');
    if (chatId) {
      const parsedChatId = Number(chatId);
      this.chat = this.chatsService.getChatById(parsedChatId);
    }
  }

  public sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      if (this.chat) {
        const newMessage = {
          id: this.chat.messages.length + 1,
          content: this.newMessage,
          type: 'output',
          date: new Date(),
        };

        this.chat.messages.push(newMessage);
        this.newMessage = '';
      }
    }
  }


}
