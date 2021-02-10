import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Shift } from './shift-list/shift';
import { Reply } from './therapy-list/therapy';
import { BehaviorSubject, Observable } from 'rxjs';

const URL = "http://localhost/ikaruna-backend/shift";

@Injectable({
  providedIn: 'root'
})
export class ShiftDataService {

  private _shifts: Shift[] = [];
  shifts: BehaviorSubject<Shift[]> = new BehaviorSubject(this._shifts);
  //QUESTION: para mantener actualizado el listdo, usar un BehaviorSubect o 
  //llamar a getAll() cada vez que se agregue algo a la DB?

  constructor(private http: HttpClient) { }

  public add(shift: Shift): Observable<Reply> {
    return this.http.post<Reply>(URL,JSON.parse(JSON.stringify(shift)));
  }
}
