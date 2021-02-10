import { Component, OnInit } from '@angular/core';
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

  
  constructor(private therapiesDataService: TherapyDataService,
    private userControlSvc: UserControlService) {
      //userControlSvc.admins.subscribe(a => this.admins = a);
      therapiesDataService.therapies.subscribe(t => this.therapies = t);
      userControlSvc.logged.subscribe(s => this.status = s);
    }
    
    therapies : Therapy[] = [] ;
    admins : User[] =[] ;
    status : UserStatus;
  selected: Therapy;

  setSelected(trp: Therapy):void {
    this.selected = trp;
  }

  ngOnInit(): void {
    this.therapiesDataService.getAll()
    .subscribe((res) => {
      this.therapies = res;
      this.setAdmins(res);
    });
    
  }
  

  setAdmins(therapies: Therapy[]) {
    this.userControlSvc.getTherapist()
    .subscribe(a => {
      this.admins = a;
      this.setTherapistName(therapies, a);
    });
  }

  setTherapistName(trp:Therapy[], administrators:User[]) {
    for (let i = 0; i < trp.length; i++) {
      const t = trp[i];
      for (let j = 0; j < administrators.length; j++) {
        const admin = administrators[j];
        if (t.therapist_id == admin.id) {
          t.therapist_name = admin.username;
        }
      }
      
    }
  }

  edit() {
    //llamar al componente que hace el edit
  }

}
