import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TherapyDataService } from '../therapy-data.service';
import { UserControlService } from '../user-control.service';
import { User, UserStatus } from '../user-list/user';
import { Therapy } from './therapy';

@Component({
  selector: 'app-therapy-list',
  templateUrl: './therapy-list.component.html',
  styleUrls: ['./therapy-list.component.scss']
})


export class TherapyListComponent implements OnInit {

  @Output()
  setEditable: EventEmitter<Therapy> = new EventEmitter<Therapy>();
  
  therapies$ : Observable<Therapy[]>;
  
  constructor(private therapiesDataService: TherapyDataService,
    private userControlSvc: UserControlService) {
      this.therapies$ = therapiesDataService.therapies.asObservable();
      userControlSvc.logged.subscribe(s => this.status = s);
    }
    
    admins : User[] =[] ;
    status : UserStatus;
    selected: Therapy;
    response: any;

  setSelected(trp: Therapy):void {
    this.selected = trp;
  }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.therapiesDataService.getAll()
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
    });
  }
  
  delete(id: number) {
    this.therapiesDataService.delete(id)
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
      this.getAll();
    });
  }

  toggleEdit(b:boolean) {
    console.log("therapyList");
    console.log(this.selected);
    if(b){
      this.setEditable.emit(this.selected);
    } else {
      this.setEditable.emit(null);
    }
  }

}
