import { Component, OnInit } from '@angular/core';
import { Workshop } from './workshop';
import { WorkshopDataService } from '../workshop-data.service'


@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss']
})
export class WorkshopListComponent implements OnInit {

  workshops: Workshop[] = [];

  constructor(private workshopsDataService: WorkshopDataService) { }

  selected: Workshop;

  ngOnInit(): void {
    this.workshopsDataService.getAll()
    .subscribe(workshops => this.workshops = workshops);
    console.log(this.workshops);
  }

  setSelected(ws: Workshop) {
    this.selected = ws;
  }

  deleteSelected() {
    this.selected = null;
  }
}
