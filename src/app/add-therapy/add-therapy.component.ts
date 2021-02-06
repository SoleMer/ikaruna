import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { TherapyDataService } from '../therapy-data.service';
import { Therapy } from '../therapy-list/therapy';
import { UserControlService } from '../user-control.service';
import { User } from '../user-list/user';

@Component({
  selector: 'app-add-therapy',
  templateUrl: './add-therapy.component.html',
  styleUrls: ['./add-therapy.component.scss']
})
export class AddTherapyComponent implements OnInit {

  therapist: User[] = [];
  response: any;

  constructor(private therapyDataSvc: TherapyDataService,
    private userControlSvc: UserControlService) {
      //userControlSvc.admins.subscribe(a => this.therapist = a);
     }

  trp: Therapy;

  ngOnInit(): void {
    this.trp = {
      name: '',
      description: '',
      therapist_id: 0
    }
    this.userControlSvc.getTherapist()
    .subscribe(t => {
      return this.therapist = t;
    });
  }

  add() {
    this.therapyDataSvc.add(this.trp)
    .subscribe(r => {
      return this.response = r;
    });
  }
}
