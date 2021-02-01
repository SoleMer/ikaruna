import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-and-check-in',
  templateUrl: './log-and-check-in.component.html',
  styleUrls: ['./log-and-check-in.component.scss']
})
export class LogAndCheckInComponent implements OnInit {

  registered: boolean;

  constructor() { }

  ngOnInit(): void {
    this.registered = true;
  }

  toggleRegistered(): void {
    this.registered = !this.registered;
  }

}
