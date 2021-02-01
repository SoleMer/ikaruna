import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ikaruna-therapies',
  templateUrl: './ikaruna-therapies.component.html',
  styleUrls: ['./ikaruna-therapies.component.scss']
})
export class IkarunaTherapiesComponent implements OnInit {

  name: string;

  constructor() {
    this.name = 'therapies';
   }

  ngOnInit(): void {
    
  }


}
