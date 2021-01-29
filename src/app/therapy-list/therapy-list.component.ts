import { Component, OnInit } from '@angular/core';
import { TherapyDataService } from '../therapy-data.service';
import { Therapy } from './therapy';

@Component({
  selector: 'app-therapy-list',
  templateUrl: './therapy-list.component.html',
  styleUrls: ['./therapy-list.component.scss']
})


export class TherapyListComponent implements OnInit {

  therapies : Therapy[] = [] ;
  
  
  constructor(private therapiesDataService: TherapyDataService) { }
  
  selected: Therapy;

  setSelected(trp: Therapy):void {
    this.selected = trp;
  }

  ngOnInit(): void {
    this.therapiesDataService.getAll()
    .subscribe(therapies => this.therapies = therapies);
  }

}
