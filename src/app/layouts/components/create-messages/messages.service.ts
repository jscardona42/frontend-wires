import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  createMessage(data: any) {
    return this.http.post(`${environment.api_url}/messages/create`, data);
  }

  getMessages() {
    return this.http.get(`${environment.api_url}/messages`);
  }

  getMessagesByUserId(userId: number) {
    return this.http.get(`${environment.api_url}/messages/byuserid/${userId}`);
  }
}
