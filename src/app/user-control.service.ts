import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { User, UserLogin, UserStatus } from './user-list/user';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { Reply } from './therapy-list/therapy';

const URL = 'http://localhost/ikaruna-backend/api/user';
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

  private _userLogged: User = {
    username: '',
    email: '',
    phone: ''
  }

  userLogged: BehaviorSubject<User> = new BehaviorSubject(this._userLogged);
  
  private _admins: User[] = [];
  admins: BehaviorSubject<User[]> = new BehaviorSubject([]);

  private _users: User[] = [];
  users: BehaviorSubject<User[]> = new BehaviorSubject(this._users);
  
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
      this.updateUserLogged(res.id_user);
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

  updateUserLogged(id: number) {
    this.getById(id)
    .subscribe(u => {
      this._userLogged = u
      this.userLogged.next(this._userLogged);
    });
  }
  
  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(URL)
    .pipe(
      tap((users: User[]) => {
        this._users = [];
         users.forEach(user => {
           console.log(user);
           this._users.push({...user});
         });
         console.log(this._users);
         this.users.next(this._users);
       })
    );
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost/ikaruna-backend/api/user/${id}`)
    .pipe(
      tap((user: User) => {
        this._userLogged = user;
         console.log(this._userLogged);
         this.userLogged.next(this._userLogged);
       })
    );
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

  public edit(user: User, id: number): any {
    return this.http.put(`http://localhost/ikaruna-backend/api/user/${id}`,user)
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
