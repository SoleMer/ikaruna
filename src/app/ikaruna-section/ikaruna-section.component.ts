import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';

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

  ngOnInit(): void {
    
  }

  

}
