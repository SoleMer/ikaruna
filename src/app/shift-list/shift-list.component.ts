import { Component, OnInit } from '@angular/core';
import { Shift } from './shift';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {

  shifts : Shift[] = [
    {
      therapy: 1,
    date: 27,
    time: 9,
    patient: 2,
    status: false
    },
    {
    therapy: 4,
    date: 30,
    time: 16,
    patient: 7,
    status: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  agree(shift: Shift){
    shift.status = true;
    console.log(shift.status);
  }

  delete(shift: Shift){
    shift.date = 0;
    shift.time = 0;
    shift.therapy = 0;
    shift.patient = 0;
  }

}
