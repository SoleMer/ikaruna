import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { NewUser } from './newUser';

@Component({
  selector: 'app-ikaruna-check-in',
  templateUrl: './ikaruna-check-in.component.html',
  styleUrls: ['./ikaruna-check-in.component.scss']
})
export class IkarunaCheckInComponent implements OnInit {

  
  constructor( 
    private userControlService: UserControlService) { }
  
  user: NewUser;
  response: UserStatus;
  viewNote: boolean = false;
  msgNote: string = "";

  ngOnInit(): void {
    this.user = {
      username : '',
      email : '',
      phone : '',
      password : '',
      repassword : ''
    }
  }

  readData(): void {
    console.log(this.user);
    this.userControlService.add(this.user)
    .subscribe(response => {this.response = response;
    console.log(this.response);
    if(this.response.status == 'error') {
      this.viewFastNote(this.response.msg);
    }
  });
  }

  viewFastNote(txt:string) {
    this.msgNote = txt;
    this.viewNote = true;
    setTimeout(() => {
      this.hide();
    }, 5000);
  }

  hide() {
    this.viewNote = false;
  }

  }
