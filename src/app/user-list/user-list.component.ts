import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserControlService } from '../user-control.service';
import { User } from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;
  response : any;

  constructor(private userControlSvc: UserControlService) {
    this.users$ = userControlSvc.users.asObservable();
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userControlSvc.getAll()
    .subscribe((res) => {
      this.response = res;
    });
  }

  delete(id: number) {
    this.userControlSvc.delete(id)
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
      this.getAll();
    });
  }
}
