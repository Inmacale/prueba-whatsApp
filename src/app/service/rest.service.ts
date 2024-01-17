import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService extends AbstractService {

  apiUrl = 'api/chats';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getId(id: number) {
    return this.get(this.apiUrl + '/' + id);
  }

  public getAll() {
    return this.get(this.apiUrl);
  }

  public update(body: any) {
    return this.put(this.apiUrl, body);

  }


}
