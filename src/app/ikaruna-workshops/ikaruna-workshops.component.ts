import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ikaruna-workshops',
  templateUrl: './ikaruna-workshops.component.html',
  styleUrls: ['./ikaruna-workshops.component.scss']
})
export class IkarunaWorkshopsComponent implements OnInit {

  name:string;

  constructor() { 
  }
  
  ngOnInit(): void {
    this.name = 'workshop';
  }
 
}
