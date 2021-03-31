import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WorkshopDataService } from '../workshop-data.service';
import { Workshop } from '../workshop-list/workshop';

@Component({
  selector: 'app-add-edit-workshop',
  templateUrl: './add-edit-workshop.component.html',
  styleUrls: ['./add-edit-workshop.component.scss']
})
export class AddEditWorkshopComponent implements OnInit {

  @Input()
  edit: Workshop;

  wsp : Workshop;
  response: any;

  loading: boolean = false;

  constructor(private wspSvc: WorkshopDataService) { }


  ngOnInit(): void {
    this.wsp = {
      name: '',
      caption: '',
      contents: '',
      modality: ''
    }
  }

  save() {
    this.loading = true;
    this.wsp.token = localStorage.getItem('token');
    if(this.edit !=null){
      this.wsp.id = this.edit.id;
    } 
      this.wspSvc.manageWorkshop(this.wsp)
    .subscribe(r => {
       this.response = r;
       this.loading = false;
       this.getAll();
    });
    this.wsp = {
      name: '',
      caption: '',
      contents: '',
      modality: ''
    }
}



cancel() {
  this.edit = null;
}


getAll() {
  this.wspSvc.getAll()
  .subscribe(r => {
    this.response = r;
  });
}

}