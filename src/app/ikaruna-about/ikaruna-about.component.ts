import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ikaruna-about',
  templateUrl: './ikaruna-about.component.html',
  styleUrls: ['./ikaruna-about.component.scss']
})
export class IkarunaAboutComponent implements OnInit {

  name:string;

  constructor() {
    this.name="about";
   }

  ngOnInit(): void {
  }

}
