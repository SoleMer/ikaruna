import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.scss']
})
export class BtnEditComponent implements OnInit {

  @Output()
  toggleEdit: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  id: number;

  constructor() { }

  ngOnInit(): void {
  }

  toEdit() {
    this.toggleEdit.emit(true);
  }
  
}
