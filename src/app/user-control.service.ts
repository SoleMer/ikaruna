import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { User, UserLogin, UserStatus } from './user-list/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { Reply } from './therapy-list/therapy';

const URL = 'http://localhost/ikaruna-backend/api/user/';
const URL_LOGIN = 'http://localhost/ikaruna-backend/api/login';
const URL_LOGOUT = 'http://localhost/ikaruna-backend/api/logout';
const URL_ADMIN = 'http://localhost/ikaruna-backend/api/admin';

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

  
  private _admins: User[] = [];
  admins: BehaviorSubject<User[]> = new BehaviorSubject([]);
  
  constructor( private http: HttpClient) { }

  public add(user: NewUser):Observable<UserStatus> {
    return this.http.post<UserStatus>(URL,user)
    .pipe(
      map((res:UserStatus)=> {
        // console.log('Res->',res);
        this.saveToken(res.token);
        this.updateLog(res);
        return res;

      })
      )
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
  
  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(URL);
  }

  public getById(id: number): Observable<User> {
    const  params = new  HttpParams().set(':ID', stringify(id));
    return this.http.get<User>(URL,{params});
  }
  
  public getTherapist(): Observable<User[]> {
    return this.http.get<User[]>(URL_ADMIN);
   /* .pipe(
      map((res:User[])=> {
        console.log('Res->',res);
        //this.updateListAdmins(res);
        return res;
      }) 
    ) */
  }

  public delete(id: number): any{
    return this.http.delete(`http://localhost/ikaruna-backend/api/user/${id}`);
  }
/** 
  updateListAdmins(res:User[]) {
    res.forEach(admin => {
      console.log(admin);
      this._admins.push({...admin});
    });
    console.log(this._admins);
    this.admins.next(this._admins);
  }
  */
}
