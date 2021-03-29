import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShiftDataService } from '../shift-data.service';
import { Shift } from '../shift-list/shift';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';

@Component({
  selector: 'app-shift-user-list',
  templateUrl: './shift-user-list.component.html',
  styleUrls: ['./shift-user-list.component.scss']
})
export class ShiftUserListComponent implements OnInit {

  status: UserStatus;
  shifts$: Observable<Shift[]> ;
  response: any;

  constructor(private userCtrlSvc: UserControlService,
    private shiftSvc: ShiftDataService) { 
    this.shifts$ = shiftSvc.shifts.asObservable();
    userCtrlSvc.logged.subscribe(s => this.status = s);
  }

  ngOnInit(): void {
    this.userCtrlSvc.checkSession()
    .subscribe(s => {
      this.status = s
    });
    this.getMyShifts();
  }

  getMyShifts() {
    this.shiftSvc.getAll(this.status.token)
    .subscribe((res) => {
      this.response = res;
    });
  }

}
