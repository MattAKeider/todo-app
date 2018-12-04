import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class TodoitemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }

  addItems(item:Item) {
    ITEMS.push(item);
  }
}
