import { Component, OnInit } from '@angular/core';
import { Workshop } from './workshop';


@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss']
})
export class WorkshopListComponent implements OnInit {

  workshops: Workshop[] = [
    {
      id: 1,
      name: "Despertar",
      caption: "blablabla",
      contents: "sjaskjaskfnsnfsam",
      way: "nadsfnskfnklakl"
    }
  ];

  constructor() { }

  selected: Workshop;

  ngOnInit(): void {
  }

  setSelected(ws: Workshop) {
    this.selected = ws;
  }

  deleteSelected() {
    this.selected = null;
  }
}
