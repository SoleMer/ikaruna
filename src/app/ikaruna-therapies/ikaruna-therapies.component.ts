import { Component, Input, OnInit, Output } from '@angular/core';
import { Therapy } from '../therapy-list/therapy';

@Component({
  selector: 'app-ikaruna-therapies',
  templateUrl: './ikaruna-therapies.component.html',
  styleUrls: ['./ikaruna-therapies.component.scss']
})
export class IkarunaTherapiesComponent implements OnInit {

  name: string;
  editable: Therapy;

  constructor() {
    this.name = 'therapies';
   }

  ngOnInit(): void {
  }

  setEditable(trp: Therapy) {
    console.log("therapies");
    console.log(trp);
    this.editable = trp;
    console.log(this.editable);
  }

}
