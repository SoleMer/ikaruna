import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { Workshop } from '../workshop-list/workshop';

@Component({
  selector: 'app-ikaruna-workshops',
  templateUrl: './ikaruna-workshops.component.html',
  styleUrls: ['./ikaruna-workshops.component.scss']
})
export class IkarunaWorkshopsComponent implements OnInit {

  name:string;
  editable: Workshop;
  status: UserStatus;

  constructor(private userControlSvc: UserControlService) { 
    this.name = 'workshop';
    userControlSvc.logged.subscribe(s => this.status = s);
  }
  
  ngOnInit(): void {
    this.userControlSvc.checkSession()
    .subscribe(s => {
      this.status = s
    });
  }
 
  setEditable(ws: Workshop) {
    this.editable = ws;
  }

  question() {
    location.href = "../questions";
  }
}
