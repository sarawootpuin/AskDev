import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe} from '@angular/common';
import {MainRoutingModule} from "./main.routing.module";
import {MainComponent} from "./main.component";
import {MainGuard} from "./main.guard";
import {UserModule} from "../shared/user/user.module";
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {MainService} from "./main.service";
//import {SubordinateModule} from "./subordinate/subordinate.module";
import {ServiceEndpoint} from "../shared/config/service-endpoint";
import {HomeModule} from "./home/home.module";
import {CenterModule} from "../shared/center/center.module";
import {AuthenModule} from "../authen/authen.module";
import {DateUtils} from "../shared/center/utils/date-utils";
//import {BlacklistModule} from "./blacklist/blacklist.module";
//import {IncompleteDocModule} from "./incomplete-doc/incomplete-doc.module";
//import {RegDirectCrModule} from "./regis-direct-credit/reg-direct-cr.module";
//import {AppformModule} from "./MST/appform/appform.module";
//import {ScoringModule} from "./scoring/scoring.module";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    UserModule,
    HomeModule,
    CenterModule
    // SubordinateModule,
    // BlacklistModule,
    // IncompleteDocModule,
    // RegDirectCrModule,
    // AppformModule,
    // ScoringModule

  ],
  declarations: [
    MainComponent,
    NavMenuComponent
  ],
  providers: [MainGuard, MainService, CurrencyPipe, DecimalPipe, ServiceEndpoint, DatePipe]
})
export class MainModule {
}
