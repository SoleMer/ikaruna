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
  response: any;
  viewNote: boolean = false;
  msgNote: string = "";
  loading: boolean = false;

  constructor(private userControlService: UserControlService,
    private shiftDataSvc: ShiftDataService,
    private therapyDataSvc: TherapyDataService) {
    userControlService.logged.subscribe(s => this.status = s);
   }

   ngOnInit(): void {
    this.therapyDataSvc.getAll()
    .subscribe(t => {
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
    this.loading = true;
    this.shift.status = this.status.isAdmin;
    if(this.status.isAdmin == 1) {
      this.shift.patient = 0;
    } else {
      this.shift.patient = this.status.id_user;
    }
    this.shiftDataSvc.add(this.shift)
    .subscribe(r => {
      this.response = r;
      this.loading = false;
      if(this.shift.status == 0) {
        this.getMyShifts();
      } else {
        this.getAll();
      }
      this.viewFastNote(this.response.msg);
    });
    this.shift = {
      patient: 0,
      therapy: 0,
      date: 0,
      time: 0,
      status: 0
    };
  }

  getMyShifts() {
    this.shiftDataSvc.getMyShifts(this.status.id_user)
    .subscribe((res) => {
      this.response = res;
    });
  }

  getAll() {
    this.shiftDataSvc.getAll()
    .subscribe((res) => {
      this.response = res;
    });
  }

  viewFastNote(txt:string) {
    this.msgNote = txt;
    this.viewNote = true;
    setTimeout(() => {
      this.hide();
    }, 5000);
  }

  hide() {
    this.viewNote = false;
  }
}
