import { Component, OnInit } from '@angular/core';

import { TodoitemService } from '../shared/todoitem.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[]

  constructor(private itemService: TodoitemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems(); 
  }
}
