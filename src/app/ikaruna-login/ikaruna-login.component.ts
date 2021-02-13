import { stringify } from '@angular/compiler/src/util';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserControlService } from '../user-control.service';
import { UserLogin, UserStatus } from '../user-list/user';

@Component({
  selector: 'app-ikaruna-login',
  templateUrl: './ikaruna-login.component.html',
  styleUrls: ['./ikaruna-login.component.scss']
})
export class IkarunaLoginComponent implements OnInit {

  constructor( private userControlService: UserControlService,
    private cookieSvc: CookieService) { }

  loged: boolean;
  registered:boolean;

  user: UserLogin;
  response: UserStatus;

  ngOnInit(): void {
    this.user = {
      email : '',
      password : ''
    }
  }

  login(){
    this.userControlService.login(this.user)
    .subscribe(res => {
      this.response =res;
      //console.log(this.response);
      let id = stringify(this.response.id_user);
      let isAdmin = stringify(this.response.isAdmin);
      let token = this.response.token;
      this.cookieSvc.set("user_id", id);
      this.cookieSvc.set("isAdmin", isAdmin);
      this.cookieSvc.set("token", token);
    });
  }


  notRegistered(){
    this.registered = false;
  }
}
