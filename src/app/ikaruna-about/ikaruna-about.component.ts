import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus} from '../user-list/user';

@Component({
  selector: 'app-ikaruna-about',
  templateUrl: './ikaruna-about.component.html',
  styleUrls: ['./ikaruna-about.component.scss']
})
export class IkarunaAboutComponent implements OnInit {

  name:string;
  status: UserStatus;

  constructor(private userControlSvc: UserControlService) {
    userControlSvc.logged.subscribe(s => this.status = s);
    this.name="about";
   }

  ngOnInit(): void {
    this.userControlSvc.checkSession()
    .subscribe(s => {
      this.status = s
    });
  }

}
