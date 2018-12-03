import { Component } from '@angular/core';
import { ITEMS } from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do!!';

  onAddToList(item:string){
    ITEMS.push(item);
  }
}
