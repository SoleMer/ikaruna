import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShiftDataService } from '../shift-data.service';
import { Shift } from './shift';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {

  shifts$ : Observable<Shift[]> ;
  response: any;

  constructor(private shiftSvc: ShiftDataService) {
    this.shifts$ = shiftSvc.shifts.asObservable();
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.shiftSvc.getAll()
    .subscribe((res) => {
      this.response = res;
    });
  }


  agree(shift: Shift){
    this.shiftSvc.agree(shift, shift.id)
    .subscribe(r => {
      this.response = r;
      this.getAll();
    });
  }

  delete(id: number) {
    this.shiftSvc.delete(id)
    .subscribe(r => {
      this.response = r;
      this.getAll();
    });
  }

}
