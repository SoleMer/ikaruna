import { Component, OnInit } from '@angular/core';
import { NotificationDataService } from '../notification-data.service';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-notifications',
  templateUrl: './ikaruna-notifications.component.html',
  styleUrls: ['./ikaruna-notifications.component.scss']
})
export class IkarunaNotificationsComponent implements OnInit {

  notifications: Notification[] = [];
  status: UserStatus;

  constructor(private userControlSvc: UserControlService,
    private notifDataSvc: NotificationDataService) {
      userControlSvc.logged.subscribe(s => this.status = s);
   }

  ngOnInit(): void {
    if(this.status.status == 'ok') {
      this.getAll();
    }
  }

  getAll() {
    this.notifDataSvc.getAll(this.status.id_user)
    .subscribe((res) => {
      this.notifications = res;
      console.log(this.notifications);
    });
  }

}
