import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestWs, Workshop } from './workshop';
import { WorkshopDataService } from '../workshop-data.service';
import { UserControlService } from '../user-control.service';
import { UserStatus } from '../user-list/user';
import { Observable } from 'rxjs';
import { NotificationDataService } from '../notification-data.service';
import { FastNoteService } from '../fast-note.service';


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
  viewNote: boolean = false;
  msgNote: string = "";
  request: RequestWs;

  constructor(private workshopsDataService: WorkshopDataService,
    private userControlSvc: UserControlService,
    private notifSvc: NotificationDataService,
    private fastNote: FastNoteService) {
      this.workshops$ = workshopsDataService.workshops.asObservable();
      userControlSvc.logged.subscribe(t => this.status = t);
     }

  selected: Workshop;

  ngOnInit(): void {
    this.getAll();
    this.viewNote = false;
    this.request = {
      ws: 0,
      user: 0
    }
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

  doWorkshop(id:number) {
    if(this.status.status == 'ok') {
      this.request.ws = id;
      this.request.user = this.status.id_user;
      this.notifSvc.doWorkshop(this.request)
      .subscribe(r => {
        this.response = r;
        this.viewFastNote("Solicitud enviada. Nos pondremos en contacto en la brevedad. ¡Gracias!");
      });
    } else {
      this.viewFastNote('Por favor, inicie sesión para poder enviarle la información necesaria para realizar este taller.');
    }
  }

  viewFastNote(txt:string) {
    this.msgNote = txt;
    this.viewNote = true;
    setTimeout(() => {
      this.hide();
    }, 5000);
  }

  hide() {
    this.viewNote = false;
  }

}
