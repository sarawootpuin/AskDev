import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {SaleCallVisitComponent} from './sale-call-visit.component';
import {SaleCallVisitRoutingModule} from "./sale-call-visit.routing.module";
import {CenterModule} from "../../../shared/center/center.module";
import {CallVisitHeadComponent} from "./call-visit-head/call-visit-head.component";
import {
  CalendarModule, DataTableModule, KeyFilterModule, SharedModule, TabViewModule,
  TooltipModule
} from 'primeng/primeng';
import {CallVisitInformationComponent} from "./call-visit-information/call-visit-information.component";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {CallVisitDetailComponent} from "./call-visit-detail/call-visit-detail.component";
import {CallVisitResultComponent} from "./call-visit-detail/call-visit-result/call-visit-result.component";
import {CallVisitCreditTypeAssetComponent} from "./call-visit-detail/call-visit-credit-type-asset/call-visit-credit-type-asset.component";
import {CallVisitAttendeesComponent} from "./call-visit-detail/call-visit-attendees/call-visit-attendees.component";
import {CallVisitExpenseComponent} from "./call-visit-detail/call-visit-expense/call-visit-expense.component";
import {CallVisitExposureComponent} from "./call-visit-detail/call-visit-exposure/call-visit-exposure.component";
import {CallVisitCallingHistoryComponent} from "./call-visit-detail/call-visit-calling-history/call-visit-calling-history.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EntityModule} from "../entity/entity.module";
import {PanelModule} from 'primeng/primeng';
import {TextMaskModule} from "angular2-text-mask";
import {ContactpersonModule} from "../contactperson/contactperson.module";
import {CallVistiTelesaleComponent} from "./call-visit-detail/call-visit-telesale/call-visti-telesale.component";
import {CallVisitInqueryComponent} from "./call-visit-inquery/call-visit-inquery.component";
import {CallVisitCrossExpenseComponent} from "./call-visit-cross-expense/call-visit-cross-expense.component";
import { AgmCoreModule } from '@agm/core';
import {OutsideVisitRptComponent} from "./outside-visit-rpt/outside-visit-rpt.component";
//
//
// const googleMapsCore = AgmCoreModule.forRoot({
//   apiKey : 'AIzaSyCTuueJ8iqoCoVVG96mvNL7_XWBC4iizr0',
//   ////   AIzaSyCTuueJ8iqoCoVVG96mvNL7_XWBC4iizr0   AIzaSyD1dcTmGu_H5Cy9bRw2b2Ld92TLTJumGTs
// });

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SaleCallVisitRoutingModule,
    CenterModule,
    TabViewModule,
    CurrencyMaskModule,
    CalendarModule,
    TextMaskModule,
    DataTableModule,
    SharedModule,KeyFilterModule,
    EntityModule,PanelModule,TooltipModule,ContactpersonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPLkQAslJ7_67GjXm7AmEV6qFoxt1P6Vg',
      libraries: ["places"]
    }),
    ReactiveFormsModule
   // ,googleMapsCore
  ],
  declarations: [SaleCallVisitComponent, CallVisitHeadComponent,
    CallVisitInformationComponent, CallVisitDetailComponent,
    CallVisitResultComponent, CallVisitCreditTypeAssetComponent,
    CallVisitAttendeesComponent, CallVisitExpenseComponent,
    CallVisitExposureComponent, CallVisitCallingHistoryComponent, CallVistiTelesaleComponent,
    CallVisitInqueryComponent,CallVisitCrossExpenseComponent,OutsideVisitRptComponent]
})
export class SaleCallVisitModule {
}
