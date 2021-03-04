import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FastNote } from './fast-note/fast-note';

@Injectable({
  providedIn: 'root'
})
export class FastNoteService {

  private _fastNote: string = '';
  fastNote: BehaviorSubject<string> = new BehaviorSubject(this._fastNote);

  constructor() { }

  public setFastNote(txt: string) {
    this._fastNote = txt;
    this.fastNote.next(this._fastNote);
  }
  
}
