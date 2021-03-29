import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserControlService } from '../user-control.service';
import { User, UserStatus } from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;
  response : any;
  status: UserStatus;
  listUser: boolean;

  constructor(private userControlSvc: UserControlService ) {
    this.users$ = userControlSvc.users.asObservable();
    userControlSvc.logged.subscribe(s => this.status = s);
   }

  ngOnInit(): void {
    //this.userControlSvc.checkSession();
    this.userControlSvc.checkSession()
    .subscribe(s => {
      this.status = s
    });
    this.getAll();
      /*if(this.status.isAdmin == 1) {
        this.listUser = true;
        this.getAll();
      } else {
        this.listUser= false;
        location.href == "http://localhost:4200/notfound"
      } */
  }

  getAll() {
    this.userControlSvc.getAll()
    .subscribe((res) => {
      this.response = res;
    });
  }

  delete(id: number) {
    let user: User = {
      id: id,
      username: '',
      email: '',
      phone: '',
      token: this.status.token
    }
    this.userControlSvc.manageUser(user)
    .subscribe(r => {
      this.response = r;
      this.getAll();
    });
  }
}
