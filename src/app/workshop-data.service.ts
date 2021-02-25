import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workshop } from './workshop-list/workshop';
import { Reply } from './therapy-list/therapy';
import { map, tap } from 'rxjs/operators';
import { Archive } from './change-img/archive';

const URL = 'http://localhost/ikaru-na/ikaruna-backend/api/workshop';

@Injectable({
  providedIn: 'root'
})

export class WorkshopDataService {

  private _workshops: Workshop[] = [];
  workshops: BehaviorSubject<Workshop[]> = new BehaviorSubject(this._workshops);

  private _changeImg: Workshop = null;
  changeImg: BehaviorSubject<Workshop> = new BehaviorSubject(this._changeImg);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(URL)
    .pipe(
      tap((workshops: Workshop[]) => {
        this._workshops = [];
         workshops.forEach(wsp => {
           console.log(wsp);
           this._workshops.push({...wsp});
         });
         console.log(this._workshops);
         this.workshops.next(this._workshops);
       })
    );
  }

  public add(workshop: Workshop): any {
    console.log("enviando al servidor:")
    console.log(workshop);
    return this.http.post(URL, JSON.parse(JSON.stringify(workshop)));
  }

  public edit(workshop: Workshop,id:number): any {
    return this.http.put(`http://localhost/ikaru-na/ikaruna-backend/api/workshop/${id}`,
    JSON.parse(JSON.stringify(workshop)));
  }
  
  public delete(id: number): any{
    return this.http.delete(`http://localhost/ikaru-na/ikaruna-backend/api/workshop/${id}`);
  }

  public setChangeImg(ws: Workshop) {
    this._changeImg = ws;
    this.changeImg.next(this._changeImg);
  }

  public addImg(img: FormData, id: number): any {
    return this.http.put(`http://localhost/ikaru-na/ikaruna-backend/api/workshopp/${id}`,
    JSON.parse(JSON.stringify(img)));
  }
}
