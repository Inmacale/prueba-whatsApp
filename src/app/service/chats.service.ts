import { Injectable } from '@angular/core';
import { Chat } from '../model/chat';
import { Message } from '../model/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatsService {



  constructor(private http: HttpClient) {

  }


  public getUnreadMessages(unreadMessages: Message[]): number {
    if (unreadMessages && unreadMessages.length > 0) {
      return unreadMessages.length;
    }
    return 0;
  }


}
