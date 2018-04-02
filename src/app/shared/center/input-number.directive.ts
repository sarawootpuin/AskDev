import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appInputNumber]'
})
export class InputNumberDirective implements OnInit{
  @Input() textPos: string;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
    this.textPos = 'right';
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement,'text-align',this.textPos);
    console.log(this.elementRef);
    if(this.elementRef.nativeElement.readOnly){
      this.renderer.setStyle(this.elementRef.nativeElement,'color','red');
    }
  }

}
