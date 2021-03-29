import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Shift } from './shift-list/shift';
import { Reply } from './therapy-list/therapy';
import { BehaviorSubject, Observable } from 'rxjs';

const URL = '/api/shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftDataService {

  private _shifts: Shift[] = [];
  shifts: BehaviorSubject<Shift[]> = new BehaviorSubject(this._shifts);

  private _myShifts: Shift[] = [];
  myShifts: BehaviorSubject<Shift[]> = new BehaviorSubject(this._myShifts);

  constructor(private http: HttpClient) { }

  public getAll(token: string): Observable<Shift[]> {
    return this.http.get<Shift[]>(`/api/shift/${token}`)
    .pipe(
      tap((shifts: Shift[]) => {
        this._myShifts = [];
         shifts.forEach(s => {
           this._myShifts.push({...s});
         });
         this.myShifts.next(this._myShifts);
       })
    );
  }

  public manageShift(shift: Shift): any {
    return this.http.post(URL,JSON.parse(JSON.stringify(shift)));
  }

  public updateShifts(s: Shift) {
    this._shifts.push({...s});
    this.shifts.next(this._shifts);
  }
}
