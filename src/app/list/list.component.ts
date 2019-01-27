import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  selectedItems: Item[] = [];
  subscription = new Subscription();

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.onGetItems();
  }

  onGetItems(): void {
    this.subscription = this.itemService.getItems().subscribe(
      (data) => this.items = data,
      (error) => console.log('Empty Items!!')
    );
  }

  onDeleteItems(): void {
    // this.itemService.deleteItems(this.selectedItems);
  }

  onSelect(item: Item): void {
    item.isSelected = item.isSelected === false ? true : false;
    if (item.isSelected) {
      this.selectedItems.push(item);
    } else {
      if (this.selectedItems.includes(item)) {
        const index = this.selectedItems.indexOf(item);
        this.selectedItems.splice(index, 1);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
