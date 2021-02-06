import { Component, OnInit } from '@angular/core';
import { WorkshopDataService } from '../workshop-data.service';
import { Workshop } from '../workshop-list/workshop';

@Component({
  selector: 'app-add-workshop',
  templateUrl: './add-workshop.component.html',
  styleUrls: ['./add-workshop.component.scss']
})
export class AddWorkshopComponent implements OnInit {
  
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

  add() {
    console.log(this.wsp);
    console.log("guardando datos para enviar");
    this.wspSvc.add(this.wsp)
    .subscribe(r => {
      console.log(r);
      return this.response = r;
    });
  }
}
