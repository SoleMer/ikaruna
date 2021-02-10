import { Component, OnInit } from '@angular/core';
import { Workshop } from './workshop';
import { WorkshopDataService } from '../workshop-data.service';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';


@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss']
})
export class WorkshopListComponent implements OnInit {

  workshops: Workshop[] = [];
  status: UserStatus;
  response: any;

  constructor(private workshopsDataService: WorkshopDataService,
    private userControlSvc: UserControlService) {
      userControlSvc.logged.subscribe(t => this.status = t);
     }

  selected: Workshop;

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.workshopsDataService.getAll()
    .subscribe(workshops => this.workshops = workshops);
  }

  setSelected(ws: Workshop) {
    this.selected = ws;
  }

  deleteSelected() {
    this.selected = null;
  }

  delete(id: number) {
    this.workshopsDataService.delete(id)
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
    });
    this.getAll();
  }
}
