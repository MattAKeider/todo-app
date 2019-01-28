import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'api/items';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.itemsUrl);
  }

  addItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.itemsUrl, item);
  }

  deleteItem(item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.httpClient.delete<Item>(url);
  }
}
