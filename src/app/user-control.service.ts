import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { UserResponse } from './user-list/user';

const URL = 'http://localhost/ikaruna-backend/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  constructor( private http: HttpClient) { }

  public add(user: NewUser):Observable<UserResponse> {
    return this.http.post<UserResponse>(URL,user);
  }
}
