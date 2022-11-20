import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inoutpractice';
  items = ['item1', 'item2', 'item3', 'item4'];
  currentItem: string = '';
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  onChange(idex: string) {
    this.currentItem = idex;
    const index = this.items.indexOf(this.currentItem);
    this.items.splice(index, 1);
  }
}
