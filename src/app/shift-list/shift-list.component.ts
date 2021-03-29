import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShiftDataService } from '../shift-data.service';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { Shift } from './shift';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {

  shifts$ : Observable<Shift[]> ;
  response: any;
  status: UserStatus;

  constructor(private shiftSvc: ShiftDataService,
    private userCtrlSvc: UserControlService) {
    this.shifts$ = shiftSvc.shifts.asObservable();
    userCtrlSvc.logged.subscribe(s => this.status = s);
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.shiftSvc.getAll(this.status.token)
    .subscribe((res) => {
      this.response = res;
    });
  }


  agree(shift: Shift){
    shift.token = this.status.token;
    this.shiftSvc.manageShift(shift)
    .subscribe(r => {
      this.response = r;
      this.getAll();
    });
  }

  delete(id: number) {
    let shift: Shift = {
      id: id,
      therapy: 0,
      date: 0,
      patient: 0,
      status: 0, 
      token: this.status.token
    }
    this.shiftSvc.manageShift(shift)
    .subscribe(r => {
      this.response = r;
      this.getAll();
    });
  }

}
