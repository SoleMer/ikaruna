import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-shifts',
  templateUrl: './ikaruna-shifts.component.html',
  styleUrls: ['./ikaruna-shifts.component.scss']
})
export class IkarunaShiftsComponent implements OnInit {

  status: UserStatus;
  name: string;

  constructor(private userControlService: UserControlService) {
    userControlService.logged.subscribe(s => this.status = s);
    this.name = 'shift';
   }

  ngOnInit(): void {
    this.userControlService.checkSession();
  }

}
