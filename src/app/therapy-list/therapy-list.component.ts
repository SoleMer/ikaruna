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
    if(this.selected != trp) {
      this.selected = trp;
    } else {
      this.selected = null;
    }
  }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.therapiesDataService.getAll()
    .subscribe(r => {
      this.response = r;
    });
  }
  
  delete(id: number) {
    let trp: Therapy = {
      id: id,
      name: '',
      description: '',
      therapist_id: -1,
      token: this.status.token,
    }
    this.therapiesDataService.manageTherapy(trp)
    .subscribe(r => {
      this.response = r;
      this.getAll();
    });
  }

  toggleEdit(b:boolean) {
    if(b){
      this.setEditable.emit(this.selected);
    } else {
      this.setEditable.emit(null);
    }
  }

}
