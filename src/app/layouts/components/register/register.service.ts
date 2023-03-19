import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  createUser(data: any) {
    return this.http.post(`${environment.api_url}/users/create`, data);
  }

  signInUser(data: any) {
    return this.http.post(`${environment.api_url}/users/signin`, data);
  }
}
