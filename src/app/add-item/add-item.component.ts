import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  newItem = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    this.subscription = this.itemService.addItem(new Item(this.newItem)).subscribe();
    this.newItem = '';
  }

  onClear(): void {
    this.newItem = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
