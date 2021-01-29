import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { UserLogin, UserResponse } from './user-list/user';

const URL = 'http://localhost/ikaruna-backend/api/user';
const URL_LOGIN = 'http://localhost/ikaruna-backend/api/login';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  constructor( private http: HttpClient) { }

  public add(user: NewUser):Observable<UserResponse> {
    return this.http.post<UserResponse>(URL,user);
  }

  public login(user: UserLogin): Observable<UserResponse> {
    return this.http.post<UserResponse>(URL_LOGIN,user);
  }
}
