import { Component } from '@angular/core';

import { Item } from './item.model';
import { TodoitemService } from './todoitem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do!!';

  constructor(private todoService: TodoitemService){}

  onAddToList(item:Item){
    this.todoService.addItems(item);
  }
}
