import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  newItem:string = '';

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    this.itemService.addItem(new Item(this.newItem));
    this.newItem = '';
  }

  onClear(): void {
    this.newItem = '';
  }

}
