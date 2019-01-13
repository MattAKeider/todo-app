import { Injectable } from '@angular/core';

import { Item } from './item.model';
import { ITEMS } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = ITEMS;

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  deleteItems(items: Item[]): void {
    items.forEach(x => {
      if (this.items.includes(x)) {
        const index = this.items.indexOf(x);
        this.items.splice(index, 1);
      }
    });
  }
}
