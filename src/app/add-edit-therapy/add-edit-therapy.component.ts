import { Component, Input, OnInit } from '@angular/core';
import { TherapyDataService } from '../therapy-data.service';
import { Therapy } from '../therapy-list/therapy';
import { UserControlService } from '../user-control.service';
import { User, UserStatus } from '../user-list/user';

@Component({
  selector: 'app-add-edit-therapy',
  templateUrl: './add-edit-therapy.component.html',
  styleUrls: ['./add-edit-therapy.component.scss']
})
export class AddEditTherapyComponent implements OnInit {

  therapist: User[] = [];
  response: any;

  status: UserStatus;

  loading: boolean = false;

  @Input()
   edit: Therapy;

  constructor(private therapyDataSvc: TherapyDataService,
    private userControlSvc: UserControlService) {
      userControlSvc.logged.subscribe(s => this.status = s);
      //userControlSvc.admins.subscribe(a => this.therapist = a);
     }

  trp: Therapy;

  ngOnInit(): void {
    this.trp = {
      name: '',
      description: '',
      therapist_id: 0,
      token: this.status.token
    }
    this.userControlSvc.getTherapist()
    .subscribe(t => {
      return this.therapist = t;
    });
  }

  save() {
    this.loading = true;
    if(this.edit !=null){
      this.trp.id = this.edit.id;
    }
    this.therapyDataSvc.manageTherapy(this.trp)
    .subscribe(r => {
     this.response = r;
     this.loading = false;
     this.getAll();
    });
  this.trp = {
    name: '',
    description: '',
    therapist_id: 0
  }
  }

  cancel() {
    this.edit = null;
  }

  getAll() {
    this.therapyDataSvc.getAll()
    .subscribe(r => {
      this.response = r;
    });
  }
}
