/**
 * Created by tanapon.sa on 29/11/2560.
 */
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[alBlink]' })

export class BlinkDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    setInterval(() => {
      let style = "black";
      if(el.nativeElement.style.color && el.nativeElement.style.color == "black") {
        style = "red";
      }
      renderer.setElementStyle(el.nativeElement, 'color', style);
    }, 750);
  }

}
