import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserResponse } from '../user-list/user';
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
  response: UserResponse;
  logged: boolean;

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
    .subscribe(response => this.response = response);
    console.log(this.response);
  }
}
