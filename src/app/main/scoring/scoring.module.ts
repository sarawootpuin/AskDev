import { NgModule } from '@angular/core';
import {HeaderVerificationDetailComponent} from "./verification-detail/header-verification-detail/header-verification-detail.component";
import {mainTabVerificationDetailComponent} from "./verification-detail/mainTab-verification-detail/mainTab-verification-detail.component";
import {TableVerificationDetailComponent} from "./verification-detail/table-verification-detail/table-verification-detail.component";
import {ScoringRoutingModule} from "./scoring.routing.module";
import {VerificationDetailComponent} from "./verification-detail/verification-detail.component";
import {CommonModule, DatePipe} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HomeModule} from "../home/home.module";
import {MainModule} from "../main.module";
import {MainGuard} from "../main.guard";
import {MainService} from "../main.service";
import {
  AccordionModule, ButtonModule, CalendarModule, DataTableModule, DialogModule, DropdownModule, InputTextModule,
  MenubarModule,
  MenuItem,
  SharedModule,
  TabMenuModule, TabViewModule
} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {VerificationDetailService} from "./verification-detail/verification-detail.service";
import { TodoVerifierComponent } from './verification-detail/todo-verifier/todo-verifier.component';
import { QuestiontabsVerificationDetailComponent } from './verification-detail/questiontabs-verification-detail/questiontabs-verification-detail.component';
import {ScrAlertJrstFinComponent} from "./verification-detail/scr-alert-jrst-fin/scr-alert-jrst-fin.component";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {CenterModule} from "../../shared/center/center.module";
import {UserModule} from "../../shared/user/user.module";
import {ScrVerifyHistoryComponent} from "./scr-verify-history/scr-verify-history.component";
import {ScrCreditScoringHistoryComponent} from "./verification-detail/scr-credit-scoring-history/scr-credit-scoring-history.component";
import {ScoringEnquiryComponent} from "./verification-detail/scoring-enquiry/scoring-enquiry.component";
import {ScrRetryToReverifyComponent} from "./scr-retry-to-reverify/scr-retry-to-reverify.component";
import {RetryToReVerifyService} from "./scr-retry-to-reverify/scr-retry-to-reverify.service";
import {ScrChangeMktNameComponent} from "./scr-change-mkt-name/scr-change-mkt-name.component";
import {ScrChangeDepartmentComponent} from "./scr-change-department/scr-change-department.component";
import {ChangeMktNameService} from "./scr-change-mkt-name/scr-change-mkt-name.service";
import {ChangeDepartmentService} from "./scr-change-department/scr-change-department.service";
import {BlacklistModule} from "../blacklist/blacklist.module";
import {ScrVerifyHistoryService} from "./scr-verify-history/scr-verify-history.service";


@NgModule({
  imports: [
    ScoringRoutingModule,
    CommonModule,
    RouterModule,
    AccordionModule,
    ButtonModule,
    TabMenuModule
   // BrowserAnimationsModule
    ,MenubarModule
   , DataTableModule
    ,SharedModule
    ,DropdownModule
    ,TabViewModule
    ,InputTextModule
    ,DialogModule
    ,CalendarModule
    ,FormsModule
    ,CurrencyMaskModule
    ,CenterModule
    ,UserModule
    ,BlacklistModule

],
  declarations: [
    VerificationDetailComponent,
    HeaderVerificationDetailComponent,
    mainTabVerificationDetailComponent,
    TableVerificationDetailComponent,
    TodoVerifierComponent,
    QuestiontabsVerificationDetailComponent,
    ScrAlertJrstFinComponent,
    ScrVerifyHistoryComponent,
    ScrCreditScoringHistoryComponent,
    ScoringEnquiryComponent,
    ScrRetryToReverifyComponent,
    ScrChangeMktNameComponent,
    ScrChangeDepartmentComponent
    ]
  ,providers:[VerificationDetailService,DatePipe,RetryToReVerifyService,ChangeMktNameService,ChangeDepartmentService,ScrVerifyHistoryService]
  ,
  exports:[ScrVerifyHistoryComponent]
})
export class ScoringModule {

}
