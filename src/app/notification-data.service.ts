import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
      tap((notifications: Notification[]) => {
        this._notifications = [];
         notifications.forEach(not => {
           console.log(not);
           this._notifications.push({...not});
         });
         console.log(this._notifications);
         this.notifications.next(this._notifications);
       })
    );
  }

  public delete(id: number): any{
    return this.http.delete(`http://localhost/ikaruna-backend/api/notification/${id}`);
  }
}
