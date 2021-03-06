import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[];
  selectedItems: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.onGetItems();
  }

  onGetItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items;
      });
  }

  onDeleteItems(): void {
    this.selectedItems.forEach(item => {
      this.itemService.deleteItem(item);
    });
  }

  onSelect(item: Item): void {
    item.isSelected = item.isSelected === false ? true : false;
    if (item.isSelected) {
      this.selectedItems.push(item);
    } else {
      const index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index, 1);
    }
  }
}
