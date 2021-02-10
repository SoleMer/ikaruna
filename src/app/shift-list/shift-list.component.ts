import { Component, OnInit } from '@angular/core';
import { Shift } from './shift';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {

  shifts : Shift[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agree(shift: Shift){
    //TODO
  }

  delete(shift: Shift){
    //TODO
  }

}
