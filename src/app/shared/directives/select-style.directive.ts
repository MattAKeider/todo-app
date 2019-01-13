import {
  Directive,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appSelectStyle]'
})
export class SelectStyleDirective {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') textColor = 'black';
  @Input() isSelected;

  constructor() { }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    if (!this.isSelected) {
      this.backgroundColor = 'blue';
      this.textColor = 'white';
    }
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    if (!this.isSelected) {
      this.backgroundColor = 'white';
      this.textColor = 'black';
    }
  }

  @HostListener('click') click(event: Event) {
    this.backgroundColor = 'grey';
    this.textColor = 'black';
  }

}
