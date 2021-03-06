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
    if(this.edit ==null){
      this.wspSvc.add(this.wsp)
    .subscribe(r => {
       this.response = r;
       this.loading = false;
       this.getAll();
    });
  } else {
    this.wspSvc.edit(this.wsp, this.edit.id)
    .subscribe(r => {
      this.response = r;
      this.loading = false;
      this.getAll();
      this.cancel();
    });
  }
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