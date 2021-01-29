import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserLogin, UserResponse } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-login',
  templateUrl: './ikaruna-login.component.html',
  styleUrls: ['./ikaruna-login.component.scss']
})
export class IkarunaLoginComponent implements OnInit {

  constructor( private userControlService: UserControlService) { }

  loged: boolean;
  registered:boolean;

  user: UserLogin;
  response: UserResponse;

  ngOnInit(): void {
    this.user = {
      email : '',
      password : ''
    }
  }

  login(){
    console.log(this.user);
    this.userControlService.login(this.user)
    .subscribe(response => this.response = response);
    
    console.log(this.response);
  }

  notRegistered(){
    this.registered = false;
  }
}
