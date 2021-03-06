import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input()array: string[];
  @Output() choice = new EventEmitter<string>();

  val: string;
  constructor() { }

  ngOnInit() {
    this.val = this.array[0];
  }

  emitChoice() {
    this.choice.emit(this.val);
  }

}
