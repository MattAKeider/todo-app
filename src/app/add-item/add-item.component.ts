import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() sendItem = new EventEmitter<{contents:string}>();
  newItem = '';

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    this.sendItem.emit({contents:this.newItem});
    this.newItem = '';
  }

  onClear(){
    this.newItem = '';
  }

}
