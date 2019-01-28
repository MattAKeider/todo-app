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
    this.itemService.addItem(new Item(this.newItem)).subscribe();
    this.newItem = '';
  }

  onClear(): void {
    this.newItem = '';
  }

}
