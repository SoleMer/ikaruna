import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { UserLogin, UserStatus } from './user-list/user';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const URL = 'http://localhost/ikaruna-backend/api/user';
const URL_LOGIN = 'http://localhost/ikaruna-backend/api/login';
const URL_LOGOUT = 'http://localhost/ikaruna-backend/api/logout';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  private _logged: UserStatus = {
    status: '',
    msg: '',
    token: '',
    id_user: 0,
    isAdmin: 0
  }

  logged: BehaviorSubject<UserStatus> = new BehaviorSubject(this._logged);

  constructor( private http: HttpClient) { }

  public add(user: NewUser):Observable<UserStatus> {
    return this.http.post<UserStatus>(URL,user);
  }

  public login(user: UserLogin): Observable<UserStatus>  {
    return this.http.post<UserStatus>(URL_LOGIN,user)
    .pipe(
      map((res:UserStatus)=> {
        // console.log('Res->',res);
        this.saveToken(res.token);
        this.updateLog(res);
        return res;

      })
    )
  }
  
  private saveToken(token:string):void {
    localStorage.setItem('token',token);
  }

  public logout(): void {
    this.http.delete(URL_LOGOUT);
    this.deleteToken();
    this.updateLog();
  }

  private deleteToken() {
    localStorage.removeItem('token');
  }

  updateLog(res: UserStatus = null) {
    if(res) {
      this._logged = res;
    } else {
      this._logged.id_user = 0;
      this._logged.isAdmin = 0;
      this._logged.msg = '';
      this._logged.status = '';
      this._logged.token= '';
    }
    this.logged.next(this._logged);
    console.log(this._logged);
  }
}
