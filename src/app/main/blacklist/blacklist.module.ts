import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe} from '@angular/common';
import {BlacklistRoutingModule} from "./blacklist.routing.module";
import {ApplyBlacklistComponent} from "./blacklist-apply-blacklist/blacklist-apply-blacklist.component";
import {BlacklistcheckingComponent} from "./blacklist-checking/blacklist-checking.component";
import {CheckAMLOComponent} from "./blacklist-check-amlo/blacklist-check-amlo.component";
import {ResultseachComponent} from "./blacklist-resultseach/blacklist-resultseach.component";
import {BlacklistComponent} from "./blacklist.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApplyBlacklistService} from "./blacklist-apply-blacklist/blacklist-apply-blacklist-service";
import {BlacklistResultService} from "./blacklist-service";
import { BlInquiryComponent } from './blacklist-checking/blacklist-inquiry/blacklist-inquiry.component';
import {DialogModule} from "primeng/components/dialog/dialog";
import {
  ButtonModule, CalendarModule, GalleriaModule, MegaMenuModule, MenuItem, PanelModule,
  RadioButtonModule
} from "primeng/primeng";
import { DataTableModule } from "primeng/components/datatable/datatable";
import { TabViewModule } from "primeng/components/tabview/tabview";
import {TabvwblcheckingComponent} from "./blacklist-tabvwblchecking/blacklist-tabvwblchecking.component";
import { ExposureComponent } from './blacklist-exposure/blacklist-exposure.component';
import { ExposureinquiryComponent } from './blacklist-exposureinquiry/exposureinquiry.component';
import { ExposurereportComponent } from './blacklist-exposurereport/exposurereport.component';
import { SummaryComponent } from './blacklist-exposurereport/exposurereport-summary/summary.component';
import { BgplComponent } from './blacklist-exposurereport/exposurereport-bgpl/bgpl.component';
import { AskComponent } from './blacklist-exposurereport/exposurereport-ask/ask.component';
import {ServiceEndpoint} from "../../shared/config/service-endpoint";
import {ExposureReportService} from "./blacklist-exposurereport/exposurereport-service";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {HttpClient} from "@angular/common/http";
import {CenterModule} from "../../shared/center/center.module";
import {BlacklistExposurehistorycompanyComponent} from "./blacklist-exposurehistorycompany/blacklist-exposurehistorycompany.component";
import {BlacklistNcbComponent} from "./blacklist-ncb/blacklist-ncb.component";
import {BlacklistNcbImagesComponent} from "./blacklist-ncb/blacklist-ncb-images/blacklist-ncb-images.component";
import {BlacklistNcbInsertimagesComponent} from "./blacklist-ncb/blacklist-ncb-insertimages/blacklist-ncb-insertimages.component";
import {BlacklistNcbPdfComponent} from "./blacklist-ncb/blacklist-ncb-pdf/blacklist-ncb-pdf.component";
import {BlacklistNcbScreenComponent} from "./blacklist-ncb/blacklist-ncb-screen/blacklist-ncb-screen.component";
import {EntityDialogComponent} from "../mst/entity/entity-dialog/entity-dialog.component";
import {EntityService} from "../mst/entity/entity.service";
import {EntityModule} from "../mst/entity/entity.module";
import {BlacklistNcbEnquiryComponent} from "./blacklist-ncb-enquiry/blacklist-ncb-enquiry.component";
import {BlacklistNcbService} from "./blacklist-ncb-service";
import {BlacklistNcbScreenTodoComponent} from "./blacklist-ncb/blacklist-ncb-screen-todo/blacklist-ncb-screen-todo.component";
import {BlacklistShareCenterComponent} from "./blacklist-share-center/blacklist-share-center.component";
import {BlacklistNcbShowEnquiryComponent} from "./blacklist-ncb-showenquiry/blacklist-ncb-showenquiry.component";
import {BlacklistShowblacklistComponent} from "./blacklist-showblacklist/blacklist-showblacklist.component";
import {BlShareCenterService} from "./blacklist-share-center/blacklist-share-center-service";
import {BlacklistLanguage} from "./blacklist.language";
import {BlacklistNcbSearchComponent} from "./blacklist-ncb-search/blacklist-ncb-search.component";
import {BlacklistNcbSubjectResultComponent} from "./blacklist-ncb-subject-result/blacklist-ncb-subject-result.component";
import {BlacklistNcbViewNcrsComponent} from "./blacklist-ncb-view-ncrs/blacklist-ncb-view-ncrs.component";
import {PersonalInfoComponent} from "./blacklist-ncb-view-ncrs/ncrs-personal-info/personal-info.component";
import {NcrsAddressComponent} from "./blacklist-ncb-view-ncrs/ncrs-address/ncrs-address.component";
import {NcrsLoanComponent} from "./blacklist-ncb-view-ncrs/ncrs-loan/ncrs-loan.component";
import {NcrsAccDetailComponent} from "./blacklist-ncb-view-ncrs/ncrs-acc-detail/ncrs-acc-detail.component";
import {NcrsHistoryComponent} from "./blacklist-ncb-view-ncrs/ncrs-history/ncrs-history.component";
import {InputFormatNumber} from "../../shared/center/input-format-number.directive";

@NgModule({
  imports: [
    CommonModule,
    BlacklistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    DataTableModule,
    TabViewModule,
    MegaMenuModule,
    RadioButtonModule,
    CurrencyMaskModule,
    CenterModule,
    CalendarModule,
    EntityModule,
    GalleriaModule

  ],
  declarations: [
    ApplyBlacklistComponent,
    BlacklistcheckingComponent,
    CheckAMLOComponent,
    ResultseachComponent,
    BlacklistComponent,
    BlInquiryComponent,
    TabvwblcheckingComponent,
    ExposureComponent,
    ExposureinquiryComponent,
    ExposurereportComponent,
    SummaryComponent,
    AskComponent,
    BgplComponent,
    BlacklistExposurehistorycompanyComponent,
    BlacklistNcbComponent,
    BlacklistNcbImagesComponent,
    BlacklistNcbInsertimagesComponent,
    BlacklistNcbPdfComponent,
    BlacklistNcbScreenComponent,
    BlacklistNcbEnquiryComponent,
    BlacklistNcbScreenTodoComponent,
    BlacklistShareCenterComponent,
    BlacklistNcbShowEnquiryComponent,
    BlacklistShowblacklistComponent,
    BlacklistNcbSearchComponent,
    BlacklistNcbSubjectResultComponent,
    BlacklistNcbViewNcrsComponent,
    PersonalInfoComponent,
    NcrsAddressComponent,
    NcrsLoanComponent,
    NcrsAccDetailComponent,
    NcrsHistoryComponent,
    InputFormatNumber
  ],
  providers:[ApplyBlacklistService,DatePipe,BlacklistResultService,CurrencyPipe,DecimalPipe,ExposureReportService,BlacklistNcbService
             ,BlShareCenterService,BlacklistLanguage
            ]
  ,
  exports:[BlacklistNcbImagesComponent,BlacklistcheckingComponent,BlacklistComponent,BlacklistShareCenterComponent,BlacklistNcbShowEnquiryComponent,BlacklistShowblacklistComponent,InputFormatNumber]
})
export class BlacklistModule { }
