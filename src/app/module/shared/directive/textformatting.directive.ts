import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextformatting]'
})
export class TextformattingDirective {

  @Input('appTextformatting') highlightColor: string;
  @Input('size') s: string;

  constructor(private el: ElementRef) { }

  public highLight(bgColor: string, size: string, color: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.transition = '1s';
    this.el.nativeElement.style.fontSize = size;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.highlightColor, this.s, 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight(null, null, null);
  }

}
