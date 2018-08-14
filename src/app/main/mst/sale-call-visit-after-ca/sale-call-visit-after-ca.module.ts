import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {
  AccordionModule, CalendarModule, DataGridModule, DataTableModule, KeyFilterModule, PanelModule, ScrollPanelModule,
  SharedModule,
  TabViewModule
} from "primeng/primeng";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {CardModule} from "primeng/card";
import {CenterModule} from "../../../shared/center/center.module";
import {SaleCallVisitAfterCaRoutingModule} from "./sale-call-visit-after-ca.routing.module";
import {InformationComponent} from "./information/information.component";
import {SaleCallVisitAfterCaComponent} from "./sale-call-visit-after-ca.component";
import {EttendeesComponent} from "./ettendees/ettendees.component";
import {ExpenseComponent} from "./expense/expense.component";
import {VisitDetailComponent} from "./visit-detail/visit-detail.component";
import {SaleCallVisitAfterCaService} from "./sale-call-visit-after-ca.service";
import {ContactpersonModule} from "../contactperson/contactperson.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    PanelModule,
    AccordionModule,
    CenterModule,
    DataTableModule,
    SharedModule,
    DataGridModule,
    CurrencyMaskModule,
    CalendarModule,
    ScrollPanelModule,
    CardModule,
    SaleCallVisitAfterCaRoutingModule,
    ContactpersonModule,
    KeyFilterModule
  ],

  declarations: [
    /** All Component**/
    SaleCallVisitAfterCaComponent,
    InformationComponent,
    EttendeesComponent,
    ExpenseComponent,
    VisitDetailComponent

  ],
  providers: [SaleCallVisitAfterCaService]
})
export class SaleCallVisitAfterCaModule {

}
