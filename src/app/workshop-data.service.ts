import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from './workshop-list/workshop';
import { Reply } from './therapy-list/therapy';
import { map } from 'rxjs/operators';

const URL = 'http://localhost/ikaruna-backend/api/workshop';

@Injectable({
  providedIn: 'root'
})

export class WorkshopDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(URL);
  }

  public add(workshop: Workshop): any {
    console.log("enviando al servidor:")
    console.log(workshop);
    return this.http.post(URL, JSON.parse(JSON.stringify(workshop)))
    .pipe(
      map((res:Reply)=> {
        console.log(res);
      }
      ));
  }

  public edit(workshop: Workshop, id:number) {}
  public delete(id:number) {}
}
