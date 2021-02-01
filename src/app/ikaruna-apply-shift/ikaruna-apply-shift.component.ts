import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-apply-shift',
  templateUrl: './ikaruna-apply-shift.component.html',
  styleUrls: ['./ikaruna-apply-shift.component.scss']
})
export class IkarunaApplyShiftComponent implements OnInit {

  status: UserStatus;

  constructor(private userControlService: UserControlService) {
    userControlService.logged.subscribe(s => this.status = s);
   }

  ngOnInit(): void {
  }

  postTurn(){
    //TODO
  }
}
