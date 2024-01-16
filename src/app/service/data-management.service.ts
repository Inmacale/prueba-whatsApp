import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { lastValueFrom } from 'rxjs';
import { Chat } from '../model/chat';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  constructor(protected rest: RestService) { }

  public getFindId(id: number): Promise<any> {

    return lastValueFrom(this.rest.getId(id))
      .then((res: any) => {
        console.log(res);
        return res; // Puedes devolver el resultado si es necesario
      })
      .catch(error => {
        console.error(error);
        throw error; // Puedes manejar el error aquí o lanzarlo para que se maneje en el nivel superior
      });
  }


  public getFindAll(param?: any): Promise<Chat[]> {
    return lastValueFrom(this.rest.getAll(param))
      .then((res: any) => {
        console.log(res);
        return res; // Puedes devolver el resultado si es necesario
      })
      .catch(error => {
        console.error(error);
        throw error; // Puedes manejar el error aquí o lanzarlo para que se maneje en el nivel superior
      });
  }

  public updateChats(chat: Chat): Promise<Chat> {
    return lastValueFrom(this.rest.update(chat))
      .then((res: any) => {
        console.log(res);
        return res; // Puedes devolver el resultado si es necesario
      })
      .catch(error => {
        console.error(error);
        throw error; // Puedes manejar el error aquí o lanzarlo para que se maneje en el nivel superior
      });
  }

}
