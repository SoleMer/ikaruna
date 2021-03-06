import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { WorkshopDataService } from '../workshop-data.service';
import { Workshop } from '../workshop-list/workshop';
import { Archive } from './archive';

@Component({
  selector: 'app-change-img',
  templateUrl: './change-img.component.html',
  styleUrls: ['./change-img.component.scss']
})
export class ChangeImgComponent implements OnInit {

  workshop: Workshop;
  archive: Archive;
  preview: string;
  response: any;
  element: any;

  constructor(private wspSvc: WorkshopDataService) {
      wspSvc.changeImg.subscribe(w => this.workshop = w);
     }

  ngOnInit(): void {
    this.archive = {
      name: null,
      img: null
    }
  }

  setImg(event): any {
    let element = event.target;
    console.log(element);
  }

  saveImage() {
    if(this.element.files.length > 0){
      let formData = new FormData();
    /*  formData.append('file', this.element.files[0]);
      this.wspSvc.addImg(formData, this.workshop.id) 
      .subscribe(r => {
        this.response = r;
        console.log(r);
        this.getAll();
      }); */
    } 
  }


  cancel() {
    this.wspSvc.setChangeImg(null);
  }

  getAll() {
    this.wspSvc.getAll()
    .subscribe(r => {
      this.response = r;
      console.log(this.response);
    });
  }
}
