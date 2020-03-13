import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef,
              private r: Renderer2) {
    this.r.setStyle(el.nativeElement, 'color', '#6b5b95'); /* more universal code */
    // el.nativeElement.style.color = '#306174';                  /* good for browsers only */
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', '#feb236');
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
  }
}
