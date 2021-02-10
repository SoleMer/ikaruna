import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { Shift } from '../shift-list/shift';
import { ShiftDataService } from '../shift-data.service';
import { TherapyDataService } from '../therapy-data.service';
import { Reply, Therapy } from '../therapy-list/therapy';

@Component({
  selector: 'app-ikaruna-apply-shift',
  templateUrl: './ikaruna-apply-shift.component.html',
  styleUrls: ['./ikaruna-apply-shift.component.scss']
})
export class IkarunaApplyShiftComponent implements OnInit {

  status: UserStatus;
  shift: Shift;
  therapies: Therapy[] = [];
  response: Reply;

  constructor(private userControlService: UserControlService,
    private shiftDataSvc: ShiftDataService,
    private therapyDataSvc: TherapyDataService) {
    userControlService.logged.subscribe(s => this.status = s);
   }

   ngOnInit(): void {
    this.therapyDataSvc.getAll()
    .subscribe(t => {
      console.log(t);
      this.therapies = t;
    });
    this.shift = {
      patient: 0,
      therapy: 0,
      date: 0,
      time: 0,
      status: 0
    };
  }

  postTurn(){
    this.shift.patient = this.status.id_user;
    this.shift.status = this.status.isAdmin;
    console.log(this.shift);
    this.shiftDataSvc.add(this.shift)
    .subscribe(r => {
      console.log(r);
      return this.response = r;
    })
  }
}
