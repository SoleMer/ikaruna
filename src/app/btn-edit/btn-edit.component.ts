import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.scss']
})
export class BtnEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toEdit() {
    
  }
  //evento que le dice al service cual es la terapia que se va a editar
  //el service le pide a la api la terapia por el id
  //la terapia que obtiene el service es un behavior subject
  //el componente add-edit-therapy se subscribe al behavior
  //si el behavior es null, muestra los input vacios para agregar una terapia
  //si el behavior tiene valores, muestra los input con lo que dice la terapia
  //        ""                    muestra los botones cancelar y guardar cambios
  //el evento del botón cancelar setea en null el behavior.
  //el evento del bontón guardar cambios llama al service para comunicarse con la api
}
