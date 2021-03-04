import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-delete',
  templateUrl: './btn-delete.component.html',
  styleUrls: ['./btn-delete.component.scss']
})
export class BtnDeleteComponent implements OnInit {

  @Input()
  id: number;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  toDelete() {
    this.delete.emit(this.id);
  }
}
