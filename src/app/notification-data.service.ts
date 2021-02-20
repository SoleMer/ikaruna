import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestWs, Workshop } from './workshop-list/workshop';

const URL = 'http://localhost/ikaruna-backend/api/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationDataService {

  private _notifications: Notification[] = [];
  notifications: BehaviorSubject<Notification[]> = new BehaviorSubject(this._notifications);

  constructor(private http: HttpClient) { }

  public getAll(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`http://localhost/ikaruna-backend/api/notification/${id}`)
    .pipe(
      tap((notifics: Notification[]) => {
        this._notifications = [];
        if(notifics != null) {
         notifics.forEach(n => {
           console.log(n);
           this._notifications.push({...n});
         });
         console.log(this._notifications);
        }
        this.notifications.next(this._notifications);
       })
    );
  }

  public delete(id: number): any{
    return this.http.delete(`http://localhost/ikaruna-backend/api/notification/${id}`);
  }

  public deleteAll(id: number): any {
    return this.http.delete(`http://localhost/ikaruna-backend/api/notifications/${id}`);
  }

  public doWorkshop(request: RequestWs):any {
    return this.http.post(URL,request);
  }
}
