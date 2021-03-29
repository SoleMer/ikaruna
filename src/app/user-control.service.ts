import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NewUser } from './ikaruna-check-in/newUser';
import { User, UserLogin, UserStatus } from './user-list/user';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { Reply } from './therapy-list/therapy';

const URL = '/api/user';
const URL_LOG = '/api/log';
const URL_ADMIN = '/api/admin';


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

  header: HttpHeaders;
  
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
    return this.http.post<UserStatus>(URL_LOG,JSON.parse(JSON.stringify(user)))
    .pipe(
      map((res:UserStatus)=> {
        console.log(res);
        this.saveToken(res.token);
        this.updateLog(res);
        return res;
        
      })
    )
  }
  
  private saveToken(token:string):void {
    localStorage.setItem('token',token);
  }
  
  /*public logout(id: number): any {
    const headers = new HttpHeaders();
    headers.append('TOKEN', localStorage.getItem('token') );
    headers.append('Access-Control-Request-Method', "DELETE" );
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'TOKEN': localStorage.getItem('token'),
      }),
      Origin: 'https://ikaruna.000webhostapp.com',
      mode: 'cors',
      params: new HttpParams().set(':ID', String(id))
    };
    let options = { headers: null, withCredentials: true };
    return this.http.delete(`/api/log/${id}`, httpOptions)
    .pipe(
      map((r: UserStatus)=> {
        if(r.status == 'closed'){
          this.updateLog(r);
          return r;
        }
    })
  );
  }*/
  public logout(user: UserStatus): any {
    return this.http.post(`/api/logout`,JSON.parse(JSON.stringify(user)))
    .pipe(
      map((r: UserStatus)=> {
        if(r.status == 'closed'){
          this.updateLog(r);
          this.deleteToken();
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
    } else {
      this._logged.id_user = 0;
      this._logged.isAdmin = 0;
      this._logged.msg = '';
      this._logged.status = '';
      this._logged.token= '';
    }
    this.logged.next(this._logged);
  }
  
  public getAll(): Observable<User[]> {
    let token = localStorage.getitem('token');
    return this.http.get<User[]>(`/api/users/${token}`)
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

  public getById(token: string): Observable<User> {
    return this.http.get<User>(`/api/user/${token}`)
    .pipe(
      tap((user: User) => {
        console.log(user);
        this._userLogged = user;
         this.userLogged.next(this._userLogged);
       })
    );
  }
  
  public getTherapist(): Observable<User[]> {
    return this.http.get<User[]>(URL_ADMIN);
  }

  public delete(id: number): any{
    return this.http.delete(`/api/user/${id}`);
  }

  public edit(user: User, id: number): any {
    return this.http.put(`/api/user/${id}`,user)
  }

  public checkSession(): Observable<UserStatus>  {
    let token = localStorage.getItem('token');
    return this.http.get<UserStatus>(`/api/log/${token}`)
    .pipe(
      map((res:UserStatus)=> {
        console.log(res);
        this.updateLog(res);
        return res;
        
      })
    );
    }
}
