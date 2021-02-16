import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Shift } from './shift-list/shift';
import { Reply } from './therapy-list/therapy';
import { BehaviorSubject, Observable } from 'rxjs';

const URL = 'http://localhost/ikaruna-backend/api/shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftDataService {

  private _shifts: Shift[] = [];
  shifts: BehaviorSubject<Shift[]> = new BehaviorSubject(this._shifts);
  //QUESTION: para mantener actualizado el listdo, usar un BehaviorSubect o 
  //llamar a getAll() cada vez que se agregue algo a la DB?

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Shift[]> {
    return this.http.get<Shift[]>(URL);
  }

  public getMyShifts(id: number): Observable<Shift[]> {
    return this.http.get<Shift[]>(`http://localhost/ikaruna-backend/api/shift/${id}`);
  }

  public add(shift: Shift): any {
    return this.http.post(URL,JSON.parse(JSON.stringify(shift)))
    .pipe(
      map((res:Reply)=> {
        console.log(res);
      }
      ));
  }

  public delete(id: number): any{
    return this.http.delete(`http://localhost/ikaruna-backend/api/shift/${id}`);
  }


public agree(shift: Shift, id: number): any{
    return this.http.put(`http://localhost/ikaruna-backend/api/shift/${id}`, shift);
  }
  public updateShifts(s: Shift) {
    console.log("update");
    this._shifts.push({...s});
    console.log(this._shifts);
    this.shifts.next(this._shifts);
  }
}
