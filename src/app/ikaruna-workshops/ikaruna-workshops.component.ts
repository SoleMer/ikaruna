import { Component, OnInit } from '@angular/core';
import { Workshop } from '../workshop-list/workshop';

@Component({
  selector: 'app-ikaruna-workshops',
  templateUrl: './ikaruna-workshops.component.html',
  styleUrls: ['./ikaruna-workshops.component.scss']
})
export class IkarunaWorkshopsComponent implements OnInit {

  name:string;
  editable: Workshop;

  constructor() { 
    this.name = 'workshop';
  }
  
  ngOnInit(): void {
  }
 
  setEditable(ws: Workshop) {
    this.editable = ws;
  }
}
