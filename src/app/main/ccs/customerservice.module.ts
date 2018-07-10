import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerserviceComponent} from './customerservice.component';
import {CustomerserviceRouting} from "./customerservice.routing.module"
import {
  ButtonModule, DataTableModule, DialogModule, DropdownModule, GrowlModule, MenubarModule,
  SharedModule, OverlayPanelModule
} from "primeng/primeng";

import {MasterformComponent} from './masterform/masterform.component';
import {SetFlowComponent} from './masterform/set-flow/set-flow.component';
import {MasterFormService} from "./masterform/masterform.service";
import { ReactiveFormsModule} from "@angular/forms";
import { SetStageOfFlowComponent } from './masterform/set-stage-of-flow/set-stage-of-flow.component';
import { CodeAndContractManagementComponent } from './code-and-contract-management/code-and-contract-management.component';
import { ContactComponent } from './code-and-contract-management/contact/contact.component';
import { ContactAndInquiryComponent } from './code-and-contract-management/contact/contact-and-inquiry/contact-and-inquiry.component';
import { RequestchargeComponent } from './code-and-contract-management/contact/requestcharge/requestcharge.component';
import {CCMService} from "./code-and-contract-management/ccm.service";
import { LegalInfoComponent } from './code-and-contract-management/contact/contact-and-inquiry/condition/legal-info/legal-info.component';
import { LegalPlComponent } from './code-and-contract-management/contact/contact-and-inquiry/condition/legal-pl/legal-pl.component';
import { ConditionComponent } from './code-and-contract-management/contact/contact-and-inquiry/condition/condition.component';
import {CustinfoModule} from "./code-and-contract-management/contact/contact-and-inquiry/condition/custinfo/custinfo.module";
import {CenterModule} from "../../shared/center/center.module";


@NgModule({
  imports: [
    CommonModule,
    CustomerserviceRouting,
    DialogModule,
    ButtonModule, DropdownModule,
    MenubarModule, DataTableModule, SharedModule,
    ReactiveFormsModule,
    GrowlModule,CustinfoModule,OverlayPanelModule,CenterModule
  ],
  declarations: [ CustomerserviceComponent, MasterformComponent, SetFlowComponent, SetStageOfFlowComponent, CodeAndContractManagementComponent, ContactComponent, ContactAndInquiryComponent, RequestchargeComponent, LegalInfoComponent, LegalPlComponent, ConditionComponent],
  providers: [MasterFormService,CCMService]
})
export class CustomerserviceModule {
}
