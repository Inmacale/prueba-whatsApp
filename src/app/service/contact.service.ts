import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = 'api/contacts';

  constructor(private http: HttpClient) { }


  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }
}
