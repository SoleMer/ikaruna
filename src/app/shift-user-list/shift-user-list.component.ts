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
  myShifts$: Observable<Shift[]> ;
  response: any;

  constructor(private userCtrlSvc: UserControlService,
    private shiftSvc: ShiftDataService) { 
    this.myShifts$ = shiftSvc.myShifts.asObservable();
    userCtrlSvc.logged.subscribe(s => this.status = s);
  }

  ngOnInit(): void {
    this.getMyShifts();
  }

  getMyShifts() {
    this.shiftSvc.getMyShifts(this.status.id_user)
    .subscribe((res) => {
      this.response = res;
    });
  }

}
