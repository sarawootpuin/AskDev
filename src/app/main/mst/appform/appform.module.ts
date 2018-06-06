import {NgModule} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {AppFormRoutingModule} from "./appform.routing.module";
import {AppFormComponent} from "./appform.component";
import {LoansComponent} from "./loans/loans.component";
import {BuyerComponent} from "./buyer/buyer.component";
import {LeasingComponent} from "./leasing/leasing.component";
import {CollateralComponent} from "./collateral/collateral.component";
import {KeyFilterModule} from 'primeng/keyfilter';
import {
  AccordionModule,
  ButtonModule,
  CalendarModule,
  DataTableModule,
  DialogModule,
  FieldsetModule,
  FileUploadModule,
  InputSwitchModule,
  PanelModule,
  RadioButtonModule,
  SharedModule,
  TabViewModule
} from "primeng/primeng";
import {PricingComponent} from "./pricing/pricing.component";
import {ExposureComponent} from "./exposure/exposure.component";
import {ContextComponent} from "./context/context.component";
import {ListComponent} from "./leasing/list/list.component";
import {DetailComponent} from "./leasing/detail/detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerComponent} from "./customer/customer.component";
import {ListBuyerComponent} from "./buyer/list-buyer/list-buyer.component";
import {DetailBuyerComponent} from "./buyer/detail-buyer/detail-buyer.component";
import {ReasonComponent} from "./reason/reason.component";
import {AttachmentComponent} from "./attachment/attachment.component";
import {ApplySaleCallComponent} from "./applysalecall/applysalecall.component";
import {GuarantorComponent} from "./guarantor/guarantor.component";
import {GuarantorListComponent} from "./guarantor/guarantor-list/guarantor-list.component";
import {GuarantorDetailComponent} from "./guarantor/guarantor-detail/guarantor-detail.component";
import {CollateralListComponent} from "./collateral/collateral-list/collateral-list.component";
import {CollateralDetailComponent} from "./collateral/collateral-detail/collateral-detail.component";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {CenterModule} from "../../../shared/center/center.module";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {EntityModule} from "../entity/entity.module";
import {AddressEnComponent} from "./customer/address-en/address-en.component";
import {AddressThComponent} from "./customer/address-th/address-th.component";
import {PercentIndustryComponent} from "./customer/percent-industry/percent-industry.component";
import {BankCardComponent} from "./customer/bank-card/bank-card.component";
import {InformationComponent} from "./customer/information/information.component";
import {RecommendationComponent} from "./recommendation/recommendation.component";
import {BlacklistModule} from "../../blacklist/blacklist.module";
import {CardModule} from "primeng/card";
import {AppFormInQuiryComponent} from "./appform-inquiry/appform-inquiry.component";
import {AppformReassignComponent} from "./appform-reassign/appform-reassign.component";
import {AppFormService} from "./appform.service";

@NgModule({
  imports: [/*import module*/
    CommonModule,
    AppFormRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    FieldsetModule,
    PanelModule,
    DialogModule,
    FileUploadModule,
    TabViewModule, DataTableModule, SharedModule,
    RadioButtonModule,
    DropdownModule,
    CenterModule,
    CalendarModule,
    CurrencyMaskModule,
    EntityModule,
    InputSwitchModule,
    BlacklistModule,
    KeyFilterModule,
    CardModule
  ],
  declarations: [/*import Component In Module*/
    AppFormComponent, ApplySaleCallComponent,
    PricingComponent,
    ExposureComponent, ContextComponent,
    LoansComponent, CustomerComponent,
    LeasingComponent, ListComponent, DetailComponent,
    BuyerComponent, ListBuyerComponent, DetailBuyerComponent, ReasonComponent, AttachmentComponent,
    GuarantorComponent,
    GuarantorListComponent,
    GuarantorDetailComponent,
    CollateralComponent,
    CollateralListComponent,
    CollateralDetailComponent,
    InformationComponent,
    BankCardComponent,
    PercentIndustryComponent,
    AddressThComponent,
    AddressEnComponent,
    RecommendationComponent,
    AppFormInQuiryComponent,
    AppformReassignComponent
  ],
  providers: [DatePipe,AppFormService]

})
export class AppformModule {
}
