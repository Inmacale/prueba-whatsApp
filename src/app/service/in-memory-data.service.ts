import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../model/contact';
import { Chat } from '../model/chat';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const contacts = [
      { id: 1, name: 'inma', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 2, name: 'laura', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 3, name: 'miguel', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 4, name: 'paula', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 5, name: 'javier', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 7, name: 'ana', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 8, name: 'israel', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 9, name: 'julia', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 10, name: 'jose', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 11, name: 'maria', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 12, name: 'pepe', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 13, name: 'tamara', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 14, name: 'natalia', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 15, name: 'eduardo', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 16, name: 'cristina', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 17, name: 'isabel', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 18, name: 'inma', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 19, name: 'laura', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 20, name: 'miguel', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 21, name: 'paula', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 22, name: 'javier', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 23, name: 'ana', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 24, name: 'israel', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 25, name: 'julia', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 26, name: 'jose', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 27, name: 'maria', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 28, name: 'pepe', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 29, name: 'tamara', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 30, name: 'natalia', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 31, name: 'eduardo', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 32, name: 'cristina', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
      { id: 33, name: 'isabel', number: 123456789, avatar: "https://ionicframework.com/docs/img/demos/avatar.svg" },
    ];


    const chats: Chat[] = [];
    contacts.forEach(element => {
      const newId = chats.length + 1;
      chats?.push(
        {
          id: newId,
          contact: element,
          messages: [],
          unreadMessages: []
        }
      )
    })
    return { chats };
  }

  genId(chats: Chat[]): number {
    return chats.length > 0 ? Math.max(...chats.map(chat => chat.id)) + 1 : 11;
  }
}
