/**
 * Created by patcharapon.ch on 15/08/2560.
 */
import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ApplyBlacklistComponent} from "./blacklist-apply-blacklist/blacklist-apply-blacklist.component";
import {BlacklistComponent} from "./blacklist.component";
import {BlacklistcheckingComponent} from "./blacklist-checking/blacklist-checking.component";
import {CheckAMLOComponent} from "./blacklist-check-amlo/blacklist-check-amlo.component";
import {ResultseachComponent} from "./blacklist-resultseach/blacklist-resultseach.component";
import {BlInquiryComponent} from "./blacklist-checking/blacklist-inquiry/blacklist-inquiry.component";
import {TabvwblcheckingComponent} from "./blacklist-tabvwblchecking/blacklist-tabvwblchecking.component";
import {ExposureinquiryComponent} from "./blacklist-exposureinquiry/exposureinquiry.component";
import {ExposurereportComponent} from "./blacklist-exposurereport/exposurereport.component";
import {MainGuard} from "../main.guard";
import {BlacklistNcbComponent} from "./blacklist-ncb/blacklist-ncb.component";
import {BlacklistNcbEnquiryComponent} from "./blacklist-ncb-enquiry/blacklist-ncb-enquiry.component";
import {BlacklistNcbShowEnquiryComponent} from "./blacklist-ncb-showenquiry/blacklist-ncb-showenquiry.component";
import {BlacklistShowblacklistComponent} from "./blacklist-showblacklist/blacklist-showblacklist.component";
import {BlacklistNcbSearchComponent} from "./blacklist-ncb-search/blacklist-ncb-search.component";
import {BlacklistNcbSubjectResultComponent} from "./blacklist-ncb-subject-result/blacklist-ncb-subject-result.component";
import {BlacklistNcbViewNcrsComponent} from "./blacklist-ncb-view-ncrs/blacklist-ncb-view-ncrs.component";

var children;
const routes: Route[] = [
  // {path: '', redirectTo: 'drawdown', pathMatch: 'full'},
  {path: '', component: BlacklistComponent,children:[
    {path: 'apply', component: ApplyBlacklistComponent},
    {path:'checking',component : TabvwblcheckingComponent},
    {path: 'search',component: BlacklistcheckingComponent}]
  },
  // {path: 'apply', component: ApplyBlacklistComponent},
  // {path:'checking',component : TabvwblcheckingComponent},
  // {path: 'search',component: BlacklistcheckingComponent},
  {path: 'result',children:[
    {path: '',component: ResultseachComponent},
    {path: 'blinquiry',component: BlInquiryComponent}
  ]},
  {path: 'blacklist-showinquiry',component:BlacklistShowblacklistComponent},
  {path: 'amlo',component: CheckAMLOComponent},
  {path: 'blacklist-exposureinquiry',component: ExposureinquiryComponent},
  {path: 'blacklist-exposurereport',component:ExposurereportComponent},
  {path: 'ncb',component:BlacklistNcbComponent},
  {path: 'ncb-enquiry',component:BlacklistNcbEnquiryComponent},
  {path: 'ncb-showenquiry',component:BlacklistNcbShowEnquiryComponent},
  {path: 'ncb-search',component:BlacklistNcbSearchComponent},
  {path: 'ncb-subjectresult',component:BlacklistNcbSubjectResultComponent},
  {path: 'ncb-view-ncrs',component:BlacklistNcbViewNcrsComponent}
  //    {path: 'afterexpense', component: AfterexpenseComponent},
 //     {path: 'insurance', component: InsuranceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlacklistRoutingModule {
}
