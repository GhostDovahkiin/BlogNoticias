import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgWhite]'
})
export class BgWhiteDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'white !important';
  }
}
