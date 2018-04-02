import {
  AfterContentInit, AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges,
  OnInit, Output, Renderer2
} from '@angular/core';
// } from '@angular/core';
// import {MyCurrencyPipe} from "./my-currency.pipe";
import * as AutoNumeric from "AutoNumeric";

@Directive({
  selector: '[inputFormatNumber]'
})
export class InputFormatNumber implements OnInit {
  @Input() value: string = "";
  @Input() position: string = "";
  @Input() decimalPlace: number;
  @Input() currencySymbol: string = "";
  @Input() symbolPosition: string = "back";
  @Output() rawValue:number = 0;
  private el: HTMLInputElement;
  options = {
    styleRules : {
      userDefined: [
        // 1) If 'classes' is a string, set it if `true`, remove it if `false`
        { callback: rawValue => { return true; }, classes: 'thisIsTrue' },
        // 2) If 'classes' is an array with only 2 elements, set the first class if `true`, the second if `false`
        { callback: rawValue => rawValue % 2 === 0, classes: ['autoNumeric-even', 'autoNumeric-odd'] },
        // 3) Return only one index to use on the `classes` array (here, 'class3')
        { callback: rawValue => { return 2; }, classes: ['class1', 'class2', 'class3'] },
        // 4) Return an array of indexes to use on the `classes` array (here, 'class1' and 'class3')
        { callback: rawValue => { return [0, 2]; }, classes: ['class1', 'class2', 'class3'] },
        // 5) If 'classes' is `undefined` or `null`, then the callback is called with the AutoNumeric object passed as a parameter
        { callback: anElement => { return anElement.getFormatted(); } },
      ],
    },
  }

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
    this.el = this.elementRef.nativeElement;
    this.position = "right";
    this.decimalPlace = 2;
    this.currencySymbol = "";
    this.symbolPosition = "back";
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', this.position);
    this.onFormatNumber();

  }

  onFormatNumber() {
    if (this.symbolPosition == 'back') {
      this.el = new AutoNumeric(this.el, {
       // styleRules: AutoNumeric.options.styleRules.positiveNegative,
        decimalPlaces: this.decimalPlace,
        currencySymbol: this.currencySymbol,
       // currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.suffix,
        value : this.el.value
    });
    }
    else {
      this.el = new AutoNumeric(this.el, {
       // styleRules: AutoNumeric.options.styleRules.positiveNegative,
        decimalPlaces: this.decimalPlace,
        currencySymbol: this.currencySymbol,
        value : this.el.value
      });
    }


  }

  getRawValue()
  {
    var value = this.el.value;
    value = value.replace(new RegExp(',', "g"), "");
    value = value.replace(new RegExp(this.currencySymbol, "g"), "");

    return value;
  }

  convertToNumber(val)
  {
    var value = val;
    value = value.replace(new RegExp(',', "g"), "");
    value = value.replace(new RegExp(this.currencySymbol, "g"), "");
    return value.trim();

  }

  @HostListener('keydown', ["$event.target.value"])
  onKeydown(value) {
    value = value.replace(new RegExp(',', "g"), "");
    value = value.replace(new RegExp(this.currencySymbol, "g"), "");
    this.el.value = value;
    this.rawValue = value;
  }

}
