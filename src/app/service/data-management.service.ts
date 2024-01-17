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
    this.getFindAll();
  }


  getFindId(id: number): Observable<Chat> {
    return from(this.rest.getId(id)).pipe(
      map((res: any) => res),
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }


  public getFindAll(): Observable<Chat[]> {
    return (this.rest.getAll()).pipe(
      map((res: any) => res as Chat[]),
      catchError(error => {
        console.error(error);
        throw error;
      })
    );
  }

  public updateChats(chat: Chat): Observable<Chat> {
    return (this.rest.update(chat)).pipe(
      map((res: any) => {
        console.log('Respuesta de updateChats', res, chat);
        return res;
      }),
      catchError(error => {
        console.error('Error en updateChats', error);
        throw error;
      })
    );
  }



  public getLastMessage(messages: Message[]): Message | null {
    if (messages && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      console.log('ultimo mensaje', lastMessage);
      return lastMessage;
    }
    return null;

  }


}
