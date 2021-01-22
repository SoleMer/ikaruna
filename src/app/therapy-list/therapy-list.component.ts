import { Component, OnInit } from '@angular/core';
import { Therapy } from './therapy';

@Component({
  selector: 'app-therapy-list',
  templateUrl: './therapy-list.component.html',
  styleUrls: ['./therapy-list.component.scss']
})


export class TherapyListComponent implements OnInit {

  therapies : Therapy[] = [
    {
      name: "Reiki presencial",
      description: "...",
      therapist: "Gri y Sole",
      id: 1
    },
    {
      name: "Reiki a distancia larga duracion",
      description: "...",
      therapist: "Gri",
      id: 2
    },
    {
      name: "Reiki a distancia corta duracion",
      description: "...",
      therapist: "Gri",
      id: 3
    },
    {
      name: "Masaje Venusiano",
      description: "...",
      therapist: "Sole",
      id: 4
    },
    {
      name: "Sanacion y Armonizacion Energetica",
      description: "...",
      therapist: "Sole",
      id: 5
    },
    {
      name: "Escudo Protector Energetico Celta",
      description: "...",
      therapist: "Sole",
      id: 6
    },
    {
      name: "Lectura de Tarot Terapeutico",
      description: "...",
      therapist: "Gri y Sole",
      id: 7
    },
    {
      name: "Lectura de Registro Akashicos",
      description: "...",
      therapist: "Sole",
      id: 8
    }
  ]
  
  
  constructor() { }
  
  selected: Therapy;

  setSelected(trp: Therapy):void {
    this.selected = trp;
  }

  ngOnInit(): void {
  }

}
