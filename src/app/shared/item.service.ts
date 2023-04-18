import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item> = this.fireDB.collection<Item>('items');
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(private fireDB: AngularFirestore) {}

  getItems(): Observable<Item[]> {
    return this.items = this.itemsCollection
      .snapshotChanges()
      .pipe(map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        })));
  }

  addItem(item: Item): void {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item): void {
    this.itemDoc = this.fireDB.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

}
