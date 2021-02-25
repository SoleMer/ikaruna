import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reply, Therapy } from './therapy-list/therapy';
import { map, tap } from 'rxjs/operators';

const URL = 'http://localhost/ikaru-na/ikaruna-backend/api/therapy';

@Injectable({
  providedIn: 'root'
})
export class TherapyDataService {
  
  private _therapies: Therapy[] = [];
  therapies: BehaviorSubject<Therapy[]> = new BehaviorSubject(this._therapies);

  constructor( private http: HttpClient) { }

  public getAll(): Observable<Therapy[]> {
    return this.http.get<Therapy[]>(URL)
     .pipe(
       tap((therapies: Therapy[]) => {
         this._therapies = [];
          therapies.forEach(trp => {
            console.log(trp);
            this._therapies.push({...trp});
          });
          console.log(this._therapies);
          this.therapies.next(this._therapies);
        })
     );
  }

  public add(therapy:Therapy): any {
    return this.http.post(URL,JSON.parse(JSON.stringify(therapy)));
    }
    
    public edit(therapy:Therapy,id:number): any {
      return this.http.put(`http://localhost/ikaru-na/ikaruna-backend/api/therapy/${id}`,
      JSON.parse(JSON.stringify(therapy)));
    }
    
    public delete(id: number): any{
      return this.http.delete(`http://localhost/ikaru-na/ikaruna-backend/api/therapy/${id}`);
    }
    
    public getById(id:number) {
      console.log("getById")
      return this.http.get(URL +'/:'+id)
      .pipe(
        map((trp:Therapy)=> {
          console.log(trp);
      })
    );
  }

  public updateTherapies(therapies: Therapy[]) {
    therapies.forEach(trp => {
      console.log(trp);
      this._therapies.push({...trp});
    });
    console.log(this._therapies);
    this.therapies.next(this._therapies);
  }
}
