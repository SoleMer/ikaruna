import { Component, Input, OnInit, Output } from '@angular/core';
import { Therapy } from '../therapy-list/therapy';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-therapies',
  templateUrl: './ikaruna-therapies.component.html',
  styleUrls: ['./ikaruna-therapies.component.scss']
})
export class IkarunaTherapiesComponent implements OnInit {

  name: string;
  editable: Therapy;
  status: UserStatus;

  constructor(private userControlSvc: UserControlService) {
    this.name = 'therapies';
    userControlSvc.logged.subscribe(s => this.status = s);
   }

  ngOnInit(): void {
    this.userControlSvc.checkSession()
    .subscribe(s => {
      this.status = s
    });
  }

  setEditable(trp: Therapy) {
    this.editable = trp;
  }

  applyShift() {
    location.href = "../shifts";
  }

}
