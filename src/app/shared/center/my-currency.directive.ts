import {
  AfterContentInit, AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges,
  OnInit, Output, Renderer2
} from '@angular/core';
import {MyCurrencyPipe} from "./my-currency.pipe";

@Directive({
  selector: '[appMyCurrency]'
})
export class MyCurrencyDirective implements OnInit,OnChanges {
  @Input() value:string="";
  @Input() pos:string ="";
  @Input() fraction:number;
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: MyCurrencyPipe,
    private renderer:Renderer2
  ) {
    this.el = this.elementRef.nativeElement;
    this.pos = "right";
    this.fraction = 2;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value,this.fraction);
    this.renderer.setStyle(this.elementRef.nativeElement,'text-align',this.pos);
  }

  ngOnChanges(){
    this.el.value = this.currencyPipe.transform(this.value,this.fraction);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value,this.fraction); // opossite of transform
    if (this.el.value == '0') { this.el.value = ''  }
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value,this.fraction);
  }
  
}
