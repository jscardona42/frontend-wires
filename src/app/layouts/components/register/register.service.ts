import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  username = new BehaviorSubject<string>(
    localStorage.getItem('fullname') as string
  );
  $username = this.username.asObservable();

  userId = new BehaviorSubject<string>(
    localStorage.getItem('userId') as string
  );
  $userId = this.userId.asObservable();

  sendUsername(message: string) {
    this.username.next(message);
  }

  sendUserId(message: string) {
    this.username.next(message);
  }

  constructor(private http: HttpClient) {}

  createUser(data: any) {
    return this.http.post(`${environment.api_url}/users/create`, data);
  }

  signInUser(data: any) {
    return this.http.post(`${environment.api_url}/users/signin`, data);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
