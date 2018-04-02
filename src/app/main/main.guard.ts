import {Injectable} from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild,
  CanDeactivate
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserCookies} from "../shared/user/user.cookies.service";

@Injectable()
export class MainGuard implements CanActivate, CanActivateChild, CanDeactivate<ComponentCanDeactivate> {

  constructor(private userCookies: UserCookies,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthen();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthen();
  }

  canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate();
  }


  isAuthen(): boolean {
    if (!this.userCookies.isLogin()) {
      this.router.navigate(['/authen']);
      return false;
    }
    return true;
  }
}

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}
