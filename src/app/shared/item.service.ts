import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('https://to-do-list-project-a6287.firebaseio.com/items.json')
      .pipe(map((response) => {
        return Object.values(response);
      }));
  }

  addItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>('https://to-do-list-project-a6287.firebaseio.com/items.json', item);
  }
/*
  deleteItems(items: Item[]): void {
    items.forEach(x => {
      if (this.items.includes(x)) {
        const index = this.items.indexOf(x);
        this.items.splice(index, 1);
      }
    });
  }*/
}
