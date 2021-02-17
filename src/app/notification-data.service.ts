import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'http://localhost/ikaruna-backend/api/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationDataService {

  constructor(private http: HttpClient) { }

  public getAll(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`http://localhost/ikaruna-backend/api/notification/${id}`);
  }

  public delete(id: number): any{
    return this.http.delete(`http://localhost/ikaruna-backend/api/notification/${id}`);
  }
}
