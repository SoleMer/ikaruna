import { Component, Input, OnInit } from '@angular/core';
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
    console.log("save");
    console.log(this.edit);
    if(this.edit ==null){
      this.wspSvc.add(this.wsp)
    .subscribe(r => {
      return this.response = r;
    });
  } else {
    console.log("edit");
    this.wspSvc.edit(this.wsp, this.edit.id)
    .subscribe(r => {
      console.log(r);
      this.response = r;
      this.getAll();
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
    console.log(this.response);
  });
}
}