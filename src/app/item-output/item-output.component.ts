import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css'],
})
export class ItemOutputComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  newItem: string = '';
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() deleteItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.newItem = '';
  }
}
