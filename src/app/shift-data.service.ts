import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
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

  private _myShifts: Shift[] = [];
  myShifts: BehaviorSubject<Shift[]> = new BehaviorSubject(this._myShifts);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Shift[]> {
    return this.http.get<Shift[]>(URL)
    .pipe(
      tap((shifts: Shift[]) => {
        this._shifts = [];
         shifts.forEach(s => {
           console.log(s);
           this._shifts.push({...s});
         });
         console.log(this._shifts);
         this.shifts.next(this._shifts);
       })
    );
  }

  public getMyShifts(id: number): Observable<Shift[]> {
    return this.http.get<Shift[]>(`http://localhost/ikaruna-backend/api/shift/${id}`)
    .pipe(
      tap((shifts: Shift[]) => {
        this._myShifts = [];
         shifts.forEach(s => {
           console.log(s);
           this._myShifts.push({...s});
         });
         console.log(this._myShifts);
         this.myShifts.next(this._myShifts);
       })
    );
  }

  public add(shift: Shift): any {
    return this.http.post(URL,JSON.parse(JSON.stringify(shift)));
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
