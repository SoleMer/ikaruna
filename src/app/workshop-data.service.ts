import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from './workshop-list/workshop';

const URL = 'http://localhost/ikaruna-backend/api/workshop';

@Injectable({
  providedIn: 'root'
})

export class WorkshopDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(URL);
  }

  public add(workshop: Workshop) {
    this.http.post(URL, workshop);
  }

  public edit(workshop: Workshop, id:number) {}
  public delete(id:number) {}
}
