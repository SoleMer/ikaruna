import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestWs, Workshop } from './workshop-list/workshop';

const URL = 'http://ikaruna.atwebpages.com/api/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationDataService {

  private _notifications: Notification[] = null;
  notifications: BehaviorSubject<Notification[]> = new BehaviorSubject(this._notifications);

  constructor(private http: HttpClient) { }

  public getAll(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`http://ikaruna.atwebpages.com/api/notification/${id}`)
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

  public delete(id: number): any{
    return this.http.delete(`http://ikaruna.atwebpages.com/api/notification/${id}`);
  }

  public deleteAll(id: number): any {
    return this.http.delete(`http://ikaruna.atwebpages.com/api/notifications/${id}`);
  }

  public doWorkshop(request: RequestWs):any {
    return this.http.post(URL,request);
  }
}
