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
  @Input() isSelected: boolean;

  constructor() { }

  @HostListener('mouseenter') mouseEnter(event: Event): void {
    if (!this.isSelected) {
      this.backgroundColor = 'blue';
      this.textColor = 'white';
    }
  }

  @HostListener('mouseleave') mouseLeave(event: Event): void {
    if (!this.isSelected) {
      this.backgroundColor = 'white';
      this.textColor = 'black';
    }
  }

  @HostListener('click') click(event: Event): void {
    this.backgroundColor = 'grey';
    this.textColor = 'black';
  }

}
