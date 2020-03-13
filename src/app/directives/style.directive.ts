import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef,
              private r: Renderer2) {
    this.r.setStyle(el.nativeElement, 'color', 'red'); /* more universal code */
    // el.nativeElement.style.color = '#306174';                  /* good for browsers only */
  }
}
