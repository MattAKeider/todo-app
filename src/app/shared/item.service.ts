import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService implements OnInit {
  private itemsUrl = 'api/items';
  items: Observable<Item[]>;

  constructor(private httpClient: HttpClient, public fireDB: AngularFirestore) { }

  ngOnInit() {
    this.items = this.fireDB.collection('Items').valueChanges();
  }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.itemsUrl);
  }

  addItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.itemsUrl, item);
  }
/*
  deleteItem(item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.httpClient.delete<Item>(url);
  }
  */
}
