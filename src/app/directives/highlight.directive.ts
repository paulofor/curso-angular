import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,
            private rederer:Renderer2) { }


  @HostListener('mouseenter') onmouseenter() {
    this.rederer.addClass(this.el.nativeElement,'highlight');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.rederer.removeClass(this.el.nativeElement,'highlight');
  }
}
