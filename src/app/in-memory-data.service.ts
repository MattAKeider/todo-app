import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Item } from './shared/item.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items: Item[] = [
      new Item('Clean the house'),
      new Item('Give dogs a bath'),
      new Item('Mow the long'),
      new Item('Get truck repaired'),
      new Item('Prune trees'),
      new Item('Clean windows')
    ];
    return {items};
  }
}
