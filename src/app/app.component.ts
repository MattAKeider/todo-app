import { Component } from '@angular/core';
import { ITEMS } from './mockData';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do!!';

  onAddToList(item:Item){
    ITEMS.push(item);
  }
}
