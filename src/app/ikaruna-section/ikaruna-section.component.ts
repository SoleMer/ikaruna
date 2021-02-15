import { Component, Input, OnInit } from '@angular/core';
import { Therapy } from '../therapy-list/therapy';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { Workshop } from '../workshop-list/workshop';

@Component({
  selector: 'app-ikaruna-section',
  templateUrl: './ikaruna-section.component.html',
  styleUrls: ['./ikaruna-section.component.scss']
})
export class IkarunaSectionComponent implements OnInit {

  status: UserStatus;

  constructor(private userControlService: UserControlService) {
    userControlService.logged.subscribe(s => this.status = s);
   }

   @Input()
   page: string = '';

   @Input()
   editTrp: Therapy;

   @Input()
   editWs: Workshop;

  ngOnInit(): void {  
  }

  

} 
