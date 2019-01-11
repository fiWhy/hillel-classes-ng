import { Directive, HostListener, ElementRef, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[cSticky]'
})
export class StickyDirective implements OnInit {
  private top: number;
  private defaultClass = 'sticky';

  @Input() cSticky;
  @Input() relation: string;

  @HostBinding('class.sticky') sticky;

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    this.toggleSticky();
  }

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.top = window.pageYOffset + this.actualParentElement.getBoundingClientRect().top;
    this.toggleSticky();
  }

  private get actualParentElement() {
    return this.relation ? document.querySelector(this.relation) : this.el.nativeElement.parentElement;
  }

  toggleSticky() {
    this.sticky = window.pageYOffset >= this.top;
  }

}