import {Injectable} from "@angular/core";

@Injectable()
export class TextMaskType {

  private _mm_yyyy = [ /[0-1]/, /\d/, '/',  /[1-2]/, /\d/, /\d/,  /\d/] ;
  private _yyyy    = [ /[1-2]/, /\d/, /\d/,  /\d/] ;


  get mm_yyyy(): (RegExp | RegExp | string | RegExp | RegExp | RegExp | RegExp)[] {
    return this._mm_yyyy;
  }

  get yyyy(): (RegExp | RegExp | RegExp | RegExp)[] {
    return this._yyyy;
  }
}
