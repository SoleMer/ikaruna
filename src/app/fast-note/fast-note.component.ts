import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FastNoteService } from '../fast-note.service';
import { FastNote } from './fast-note';

@Component({
  selector: 'app-fast-note',
  templateUrl: './fast-note.component.html',
  styleUrls: ['./fast-note.component.scss']
})
export class FastNoteComponent implements OnInit {

  @Input()
  note: string = '';

  constructor() {
   }

  ngOnInit(): void {
  }


}
