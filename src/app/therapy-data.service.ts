import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reply, Therapy } from './therapy-list/therapy';
import { map, tap } from 'rxjs/operators';


const URL = '/api/therapy';


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
            this._therapies.push({...trp});
          });
          this.therapies.next(this._therapies);
        })
     );
  }

  public manageTherapy(therapy:Therapy): any {
    return this.http.post(URL,JSON.parse(JSON.stringify(therapy)) );
    }
    
    public edit(therapy:Therapy,id:number): any {
      return this.http.put(`/api/therapy/${id}`, 
      JSON.parse(JSON.stringify(therapy)));
    }
    
    public delete(id: number): any{
      return this.http.delete(`/api/therapy/${id}`);
    }
    
    public getById(id:number) {
      return this.http.get(URL +'/:'+id)
      .pipe(
        map((trp:Therapy)=> {
      })
    );
  }

  public updateTherapies(therapies: Therapy[]) {
    therapies.forEach(trp => {
      this._therapies.push({...trp});
    });
    this.therapies.next(this._therapies);
  }
}
