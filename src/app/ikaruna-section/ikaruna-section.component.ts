import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Therapy } from '../therapy-list/therapy';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { WorkshopDataService } from '../workshop-data.service';
import { Workshop } from '../workshop-list/workshop';

@Component({
  selector: 'app-ikaruna-section',
  templateUrl: './ikaruna-section.component.html',
  styleUrls: ['./ikaruna-section.component.scss']
})
export class IkarunaSectionComponent implements OnInit {

  status: UserStatus;
  //changeImg$: Observable<Workshop>;

  constructor(private userControlService: UserControlService,
    private wspSvc: WorkshopDataService) {
    userControlService.logged.subscribe(s => this.status = s);
    //this.changeImg$ = wspSvc.changeImg.asObservable();
   }

   @Input()
   page: string = '';

   @Input()
   editTrp: Therapy;

   @Input()
   editWs: Workshop;

  ngOnInit(): void {  
    this.userControlService.checkSession()
    .subscribe(s => {
      this.status = s
    });
  }

  

} 
