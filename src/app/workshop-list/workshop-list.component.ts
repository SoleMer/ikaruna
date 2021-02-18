import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Workshop } from './workshop';
import { WorkshopDataService } from '../workshop-data.service';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss']
})
export class WorkshopListComponent implements OnInit {

  @Output()
  setEditable: EventEmitter<Workshop> = new EventEmitter<Workshop>();

  workshops$: Observable<Workshop[]> ;
  status: UserStatus;
  response: any;

  constructor(private workshopsDataService: WorkshopDataService,
    private userControlSvc: UserControlService) {
      this.workshops$ = workshopsDataService.workshops.asObservable();
      userControlSvc.logged.subscribe(t => this.status = t);
     }

  selected: Workshop;

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.workshopsDataService.getAll()
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
    });
  }

  setSelected(ws: Workshop) {
    console.log("setSelected");
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
      this.getAll();
    });
  }

  toggleEdit(b:boolean) {
    if(b){
      console.log("ws-list: toggleEdit");
      console.log(this.selected);
      this.setEditable.emit(this.selected);
    } else {
      this.setEditable.emit(null);
    }
  }
}
