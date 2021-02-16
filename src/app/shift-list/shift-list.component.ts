import { Component, OnInit } from '@angular/core';
import { ShiftDataService } from '../shift-data.service';
import { Shift } from './shift';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {

  shifts : Shift[] = [];
  response: any;

  constructor(private shiftSvc: ShiftDataService) {
    shiftSvc.shifts.subscribe(s => this.shifts = s);
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.shiftSvc.getAll()
    .subscribe((res) => {
      this.shifts = res;
    });
  }


  agree(shift: Shift){
    this.shiftSvc.agree(shift, shift.id)
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
    });
    this.getAll();
  }

  delete(id: number) {
    this.shiftSvc.delete(id)
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
    });
    this.getAll();
  }

}
