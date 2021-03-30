import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workshop } from './workshop-list/workshop';
import { Reply } from './therapy-list/therapy';
import { map, tap } from 'rxjs/operators';
import { Archive } from './change-img/archive';
import { environment } from 'src/environments/environment';


const URL = '/api/workshop';

@Injectable({
  providedIn: 'root'
})

export class WorkshopDataService {

  baseUrl: string = environment.backend.baseURL;

  private _workshops: Workshop[] = [];
  workshops: BehaviorSubject<Workshop[]> = new BehaviorSubject(this._workshops);

  private _changeImg: Workshop = null;
  changeImg: BehaviorSubject<Workshop> = new BehaviorSubject(this._changeImg);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Workshop[]> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Workshop[]>(URL, {headers: headers})
    .pipe(
      tap((workshops: Workshop[]) => {
        this._workshops = [];
         workshops.forEach(wsp => {
           this._workshops.push({...wsp});
         });
         this.workshops.next(this._workshops);
       })
    );
  }

  public manageWorkshop(workshop: Workshop): any {
    return this.http.post(URL, JSON.parse(JSON.stringify(workshop)));
  }

  public setChangeImg(ws: Workshop) {
    this._changeImg = ws;
    this.changeImg.next(this._changeImg);
  }

  public addImg(img: FormData, id: number): any {
    return this.http.put(`/api/workshopp/${id}`,
    JSON.parse(JSON.stringify(img)));
  }
}
