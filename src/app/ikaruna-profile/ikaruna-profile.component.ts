import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { User, UserStatus } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-profile',
  templateUrl: './ikaruna-profile.component.html',
  styleUrls: ['./ikaruna-profile.component.scss']
})
export class IkarunaProfileComponent implements OnInit {

  user: User;
  edit: boolean;
  status: UserStatus;
  userEdit: User;
  response: any;

  constructor(private userControlSvc: UserControlService) {
    userControlSvc.logged.subscribe(s => this.status = s);
    userControlSvc.userLogged.subscribe(u => this.user = u);
   }

  ngOnInit(): void {
    this.userControlSvc.checkSession()
    .subscribe(s => {
      this.status = s
      if(s.status == 'ok') this.getUser();
    });
    this.edit = false;
    this.userEdit = {
      username: this.user.username,
      email: '',
      phone: '',
      password: ''
    }
  }

  getUser() {
    this.userControlSvc.getById(this.status.token)
    .subscribe(r => {
      this.user = r
    });
  }

  toggleEdit(b: boolean) {
    this.edit = b;
  }

  save() {
    this.userControlSvc.edit(this.userEdit, this.status.id_user)
    .subscribe(r => {
      this.response = 
      this.getUser();
    });
    this.edit = false;
  }
}
