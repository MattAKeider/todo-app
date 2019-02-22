import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  newItem = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const temp: Item = {contents: this.newItem, isSelected: false};
    this.itemService.addItem(temp);
    this.onClear();
  }

  onClear(): void {
    this.newItem = '';
  }

}
