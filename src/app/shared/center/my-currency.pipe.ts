import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    // TODO comes from configuration settings
    this.DECIMAL_SEPARATOR = ".";
    this.THOUSANDS_SEPARATOR = ",";
  }

  transform(value: number | string, fractionSize: number = 2): string {
    let [ integer, fraction = "" ] = (value || "").toString()
      .split(this.DECIMAL_SEPARATOR);

    if(fractionSize > 0){
      let vSub = (fraction).substring(0, fractionSize);
      if(vSub.length < fractionSize){
        for(let i =vSub.length ; i < fractionSize ; i++){
          vSub = vSub+"0";
        }
      }
      fraction = this.DECIMAL_SEPARATOR + vSub;
    }else{
      fraction = "";
    }
    if(fraction==this.DECIMAL_SEPARATOR) {
      let str: string = "";
      for(let i =0 ; i < fractionSize ; i++){
        str = str+"0";
      }
      fraction += str;
    }

    if (integer){
      integer = integer.replace(/,/g,'');
      let integerNumber:Number = +integer ;
      if(integer == "-0") {
        integer = '-'+String(integerNumber)
      } else {
        integer = String(integerNumber) ;
      }
    }

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

    if(integer == '') {
      integer = '0';
    }

    return integer + fraction;
  }

  parse(value: string, fractionSize: number = 2): string {
    let [ integer, fraction = "" ] = (value || "").split(this.DECIMAL_SEPARATOR);

    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction ).substring(0, fractionSize)
      : "";

    return integer + fraction;
  }

  convertToNumber(val,symbol?)
  {
    var value = val;
    value = value.replace(new RegExp(',', "g"), "");
    value = value.replace(new RegExp(symbol, "g"), "");
    return value.trim();

  }


}
