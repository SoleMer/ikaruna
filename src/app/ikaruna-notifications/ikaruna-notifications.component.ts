import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationDataService } from '../notification-data.service';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-notifications',
  templateUrl: './ikaruna-notifications.component.html',
  styleUrls: ['./ikaruna-notifications.component.scss']
})
export class IkarunaNotificationsComponent implements OnInit {

  notifications$: Observable<Notification[]>;
  status: UserStatus;
  response: any;

  constructor(private userControlSvc: UserControlService,
    private notifDataSvc: NotificationDataService) {
      userControlSvc.logged.subscribe(s => this.status = s);
      this.notifications$ = notifDataSvc.notifications.asObservable();
   }

  ngOnInit(): void {
    if(this.status.status == 'ok') {
      this.getAll();
    }
  }

  getAll() {
    this.notifDataSvc.getAll(this.status.id_user)
    .subscribe((res) => {
      this.response = res;
      console.log(this.response);
    });
  }

  delete(id: number) {
    this.notifDataSvc.delete(id)
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
      this.getAll();
    });
  }

  deleteAll() {
    console.log("deleteAll");
    this.notifDataSvc.deleteAll(this.status.id_user)
    .subscribe(r => {
      this.response = r;
      this.getAll();
    });
  }

}
