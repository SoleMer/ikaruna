import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestWs, Workshop } from './workshop-list/workshop';

const URL = '/api/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationDataService {

  private _notifications: Notification[] = null;
  notifications: BehaviorSubject<Notification[]> = new BehaviorSubject(this._notifications);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Notification[]> {
    let token = localStorage.getItem('token');
    return this.http.get<Notification[]>(`/api/notification/${token}`)
    .pipe(
      tap((notifics: Notification[]) => {
        if(notifics != null) {
          this._notifications = [];
         notifics.forEach(n => {
           this._notifications.push({...n});
         });
         this.notifications.next(this._notifications);
        }
       })
    );
  }

  public delete(id: number, token: string): any{
    return this.http.get(`/api/notification/${id}/${token}`);
  }

  public deleteAll(token: string): any {
    return this.http.get(`/api/notifications/${token}`);
  }

  public doWorkshop(request: RequestWs):any {
    return this.http.post(URL,request);
  }
}
