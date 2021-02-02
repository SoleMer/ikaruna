import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Therapy } from './therapy-list/therapy';

const URL = 'http://localhost/ikaruna-backend/api/therapy';

@Injectable({
  providedIn: 'root'
})
export class TherapyDataService {
  

  constructor( private http: HttpClient) { }

  public getAll(): Observable<Therapy[]> {
    return this.http.get<Therapy[]>(URL);
  }

  public add(therapy:Therapy) {
    return this.http.post(URL,therapy);
  }

  public edit(therapy:Therapy,id:number) {}
  public delete(id:number) {}
}
