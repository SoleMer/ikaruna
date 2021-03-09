import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { User, UserLogin, UserStatus } from './user-list/user';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { Reply } from './therapy-list/therapy';

const URL = 'https://ikaruna.epizy.com/api/user';
const URL_LOG = 'https://ikaruna.epizy.com/api/log';
const URL_ADMIN = 'https://ikaruna.epizy.com/api/admin';

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
        this.saveToken(res.token);
        this.updateLog(res);
        return res;

      })
      )
  }
  
  public login(user: UserLogin): Observable<UserStatus>  {
    return this.http.post<UserStatus>(URL_LOG,user)
    .pipe(
      map((res:UserStatus)=> {
        this.saveToken(res.token);
        this.updateLog(res);
        return res;
        
      })
    )
  }
  
  private saveToken(token:string):void {
    localStorage.setItem('token',token);
  }
  
  public logout(id: number): any {
    return this.http.delete(`https://ikaruna.epizy.com/api/log/${id}`)
    .pipe(
      map((r: UserStatus)=> {
        if(r.status == 'closed'){
          this.updateLog(r);
          return r;
        }
    })
  );
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
           this._users.push({...user});
         });
         this.users.next(this._users);
       })
    );
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`https://ikaruna.epizy.com/api/user/${id}`)
    .pipe(
      tap((user: User) => {
        this._userLogged = user;
         this.userLogged.next(this._userLogged);
       })
    );
  }
  
  public getTherapist(): Observable<User[]> {
    return this.http.get<User[]>(URL_ADMIN);
  }

  public delete(id: number): any{
    return this.http.delete(`https://ikaruna.epizy.com/api/user/${id}`);
  }

  public edit(user: User, id: number): any {
    return this.http.put(`https://ikaruna.epizy.com/api/user/${id}`,user)
  }

  public checkSession(): Observable<UserStatus>  {
    return this.http.get<UserStatus>(URL_LOG)
    .pipe(
      map((res:UserStatus)=> {
        this.updateLog(res);
        return res;
        
      })
    );
    }
}
