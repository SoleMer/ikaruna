import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../app/ikaruna-questions/question';
import { Reply } from '../app/therapy-list/therapy';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL = '/api/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {

  constructor(private http : HttpClient) { }

  public add(q: Question):Observable<Reply> {
    return this.http.post<Reply>(URL,JSON.parse(JSON.stringify(q)))
    .pipe(
      map((res:Reply)=> {
        return res;
      })
      )
  }

  public getAll(): Observable<Question[]> {
    let token = localStorage.getItem('token');
    return this.http.get<Question[]>(`/api/question/${token}`);
  }
}
