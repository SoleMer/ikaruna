import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { UserLogin, UserResponse } from './user-list/user';
import { catchError, map } from 'rxjs/operators';

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

  public login(user: UserLogin): Observable<UserResponse | void>  {
    return this.http.post<UserResponse>(URL_LOGIN,user)
    .pipe(
      map((res:UserResponse)=> {
        this.saveToken(res.token);
      }),
      catchError((err)=> this.handlerError(err)))
    ;
  }

  
  private saveToken(token:string):void {
    localStorage.setItem('token',token);
  }

  private handlerError(err): Observable<never> {
    let errorMsg ='';
    if(err) {
      errorMsg = 'Error: code ${err.message}';
    }
    return throwError(errorMsg);
  }
}
