import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ikaruna-login',
  templateUrl: './ikaruna-login.component.html',
  styleUrls: ['./ikaruna-login.component.scss']
})
export class IkarunaLoginComponent implements OnInit {

  constructor() { }

  loged: boolean;
  registered:boolean;

  ngOnInit(): void {
  }

  login(){
    this.loged = true;
  }

  notRegistered(){
    this.registered = false;
  }
}
