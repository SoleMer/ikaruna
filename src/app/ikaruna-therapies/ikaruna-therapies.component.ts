import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ikaruna-therapies',
  templateUrl: './ikaruna-therapies.component.html',
  styleUrls: ['./ikaruna-therapies.component.scss']
})
export class IkarunaTherapiesComponent implements OnInit {

  constructor() { }

  loged: boolean;
  registered: boolean;

  ngOnInit(): void {
    this.loged = false;
    this.registered = true;
    console.log(this.loged);
    console.log(this.registered);
  }

  checkIn(){
    this.registered = true;
    this.loged = true;
  }

}
