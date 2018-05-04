import {Injectable} from '@angular/core';
import {CookieOptions, CookieService} from "ngx-cookie";

@Injectable()
export class UserCookies {
  public authen_key: string = 'isLogin';
  public remember_key: string = 'isRemember';

  constructor(private _cookieService: CookieService) {
  }

  storeLogin(remember: boolean | false) {
    let expiresAt = new Date();
    expiresAt.setDate(new Date().getDate() + 90);
    let options: CookieOptions = {};
    if (remember) {
      options = {
        expires: expiresAt
      };
    }

    //this._cookieService.put(this.authen_key, 'Y', options);
    sessionStorage.setItem(this.authen_key, 'Y')
  }

  storeRemember(remember: boolean|false) {
    let r: string = '';
    if (remember) {
      r = 'Y';
    } else {
      r = 'N'
    }
    //this._cookieService.put(this.remember_key, r);
    sessionStorage.setItem(this.remember_key, r)
  }

  isRemember():boolean{
    //let isRemember = this._cookieService.get(this.remember_key);
    let isRemember = sessionStorage.getItem(this.remember_key)
    if (isRemember == null) {
      return false;
    } else if (isRemember == 'Y') {
      return true;
    } else {
      return false;
    }
  }

  isLogin(): boolean {
    //let isLogin = this._cookieService.get(this.authen_key);
    let isLogin = sessionStorage.getItem(this.authen_key);
    if (isLogin == null) {
      return false;
    } else if (isLogin == 'Y') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    //this._cookieService.remove(this.authen_key);
    sessionStorage.removeItem(this.authen_key)
  }
}
