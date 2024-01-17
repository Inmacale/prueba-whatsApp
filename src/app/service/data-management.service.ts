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


  getFindId(id: number): Promise<Chat> {
    return lastValueFrom(this.rest.getId(id)).then((res: any) => {
      return res; 
    })
    .catch(error => {
      console.error(error);
      throw error; 
    });
}

  public getFindAll(): Promise<Chat[]> {
    return lastValueFrom(this.rest.getAll()).then((res: any) => {
      return res; 
    })
    .catch(error => {
      console.error(error);
      throw error; 
    });
}

  public updateChats(chat: Chat): Promise<Chat> {
    return lastValueFrom(this.rest.update(chat)).then((res: any) => {
      console.log('este es el resultado de update',res);
      return res; 
    })
    .catch(error => {
      console.error(error);
      throw error; // Puedes manejar el error aquí o lanzarlo para que se maneje en el nivel superior
    });
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
