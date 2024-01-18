import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable, catchError, from, lastValueFrom, map } from 'rxjs';
import { Chat } from '../model/chat';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(protected rest: RestService) {

  }


  public getFindId(id: number): Observable<any> {
    return this.rest.getId(id);
  }

  public getFindAll(): Observable<any> {
    return this.rest.getAll();
  }

  public update(body: any): Observable<any> {
    return this.rest.update(body);
  }

  public getLastMessage(messages: Message[]): Message | null {
    if (messages && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      // console.log('ultimo mensaje', lastMessage);
      return lastMessage;
    }
    return null;

  }


}
