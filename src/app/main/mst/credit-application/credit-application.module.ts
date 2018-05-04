import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule, CurrencyPipe, DatePipe, DecimalPipe} from '@angular/common';
import {CenterModule} from "../../../shared/center/center.module";
import {CreditApplicationRoutingModule} from "./credit-application.routing.module";
import {CreditApplicationComponent} from "./credit-application.component";
import {
  ButtonModule, DialogModule, FileUploadModule, PanelModule, TabViewModule, DataTableModule, SharedModule,
  CalendarModule, GalleriaModule, LightboxModule, SidebarModule, KeyFilterModule
} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
import {CaAddressThComponent} from "./ca-customer-tab/ca-address-th/address-th.component";
import {CaAddressEnComponent} from "./ca-customer-tab/ca-address-en/ca-address-en.component";
import {CaPercentIndComponent} from "./ca-customer-tab/ca-percent-ind/percent-ind.component";
import {CaMachineComponent} from "./ca-customer-tab/ca-machine/machine.component";
import {CaExposureComponent} from "./ca-customer-tab/ca-exposure/exposure.component";
import {CaCustomerComponent} from "./ca-customer-tab/ca-customer/customer.component";
import {CaConditionRemarkComponent} from "./ca-condition-remark/condition-remark.component";
import {CaSubcaComponent} from "./ca-subca/ca-subca.component";
import {CaProfileComponent} from "./ca-profile/profile.component";
import {CaApproveLvComponent} from "./ca-approve-lv/ca-approve-lv.component";
import {CaOpinionComponent} from "./ca-opinion/opinion.component";
import {CaImgdocComponent} from "./ca-imgdoc/imgdoc.component";
import {CaContextDataComponent} from "./ca-context-data/context-data.component";
import {CaCapComponent} from "./ca-cap/cap.component";
import {CaPricingComponent} from "./ca-fac-pricing/ca-pricing/pricing.component";
import {PricingNormalComponent} from "./ca-fac-pricing/ca-pricing/pricing-normal/pricing-normal.component";
import {PricingProjectComponent} from "./ca-fac-pricing/ca-pricing/pricing-project/pricing-project.component";
import {CaBuyerComponent} from "./ca-fac-pricing/ca-buyer/buyer.component";
import {CaCollateralComponent} from "./ca-collateral/collateral.component";
import {CaBuyerDocComponent} from "./ca-fac-pricing/ca-buyer/ca-buyer-doc/ca-buyer-doc.component";
import {CaBuyerDetailComponent} from "./ca-fac-pricing/ca-buyer/ca-buyer-detail/ca-buyer-detail.component";
import {CaDirectloansComponent} from "./ca-directloans/ca-directloans.component";
import {CaFloorPlanComponent} from "./ca-floor-plan/ca-floor-plan.component";
import {CaDutyStampComponent} from "./ca-duty-stamp/ca-duty-stamp.component";
import {CaRefComponent} from "./ca-ref/ca-ref.component";
import {CaCustomerTabComponent} from "./ca-customer-tab/ca-customer-tab.component";
import {CaGuarantorTabComponent} from "./ca-guarantor-tab/ca-guarantor-tab.component";
import {CaExposureTabComponent} from "./ca-customer-tab/ca-exposure-tab/ca-exposure-tab.component";
import {CaAsiaConditionComponent} from "./ca-customer-tab/ca-asia-condition/ca-asia-condition.component";
import {CaBgExposureComponent} from "./ca-bg-exposure/ca-bg-exposure.component";
import {CaGuarantorComponent} from "./ca-guarantor-tab/ca-guarantor/ca-guarantor.component";
import {creditApplicationService} from "./credit-application.service";
import {CaAssetComponent} from "./ca-asset/ca-asset.component";
import {RepaymentComponent} from "./ca-asset/repayment/repayment.component";
import {AssetDetailComponent} from "./ca-asset/asset-detail/asset-detail.component";
import {CaGuarAddressEnComponent} from "./ca-guarantor-tab/ca-guar-address-en/ca-guar-address-en.component";
import {CaGuarAsiaConditionComponent} from "./ca-guarantor-tab/ca-guar-asia-condition/ca-guar-asia-condition.component";
import {CaGuarCardComponent} from "./ca-guarantor-tab/ca-guar-card/ca-guar-card.component";
import {CaGuarAddressThComponent} from "./ca-guarantor-tab/ca-guar-address-th/ca-guar-address-th.component";
import {CaGuarExposureComponent} from "./ca-guarantor-tab/ca-guar-exposure/ca-guar-exposure.component";
import {CaGuarMachineComponent} from "./ca-guarantor-tab/ca-guar-machine/ca-guar-machine.component";
import {CaGuarPercentIndComponent} from "./ca-guarantor-tab/ca-guar-percent-ind/ca-guar-percent-ind.component";
import {CaFinanceComponent} from "./ca-asset/ca-finance/ca-finance.component";
import {EntityModule} from "../entity/entity.module";
import {InputSwitchModule} from 'primeng/primeng';
import {CaAttachmentComponent} from "./ca-attachment/ca-attachment.component";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {TextMaskModule} from "angular2-text-mask";
import {CaFacPricingComponent} from "./ca-fac-pricing/ca-fac-pricing.component";
import {CaRecommendComponent} from "./ca-recommend/ca-recommend.component";
import {BlacklistModule} from "../../blacklist/blacklist.module";
import {CaInqueryComponent} from "./ca-inquery/ca-inquery.component";
import {CaUseCreditlineComponent} from "./ca-use-creditline/ca-use-creditline.component";
import {CaAmendContentReasonComponent} from "./ca-amend-content-reason/ca-amend-content-reason.component";
import {CaAmendKeyinComponent} from "./ca-amend-keyin/ca-amend-keyin.component";
import {CaSearchAmendComponent} from "./ca-search-amend/ca-search-amend.component";
import {CardModule} from "primeng/card";
@NgModule({
  imports: [
    ButtonModule, DialogModule, FileUploadModule, PanelModule, TabViewModule, DataTableModule, SharedModule,
    CalendarModule,
    CommonModule,
    AccordionModule,
    FieldsetModule,
    RadioButtonModule,
    CreditApplicationRoutingModule,
    CurrencyMaskModule,CenterModule,
    GalleriaModule,LightboxModule,SidebarModule, FormsModule,PanelMenuModule,TooltipModule
    ,EntityModule,InputSwitchModule,TextMaskModule,KeyFilterModule,CardModule
  ],
  declarations: [CreditApplicationComponent,CaAddressThComponent,CaAddressEnComponent,CaPercentIndComponent
  ,CaMachineComponent,CaExposureComponent,CaCustomerComponent,CaConditionRemarkComponent,CaSubcaComponent,CaProfileComponent
  ,CaApproveLvComponent,CaOpinionComponent,CaImgdocComponent,CaContextDataComponent,CaCapComponent,CaPricingComponent,PricingNormalComponent
  ,PricingProjectComponent,CaBuyerComponent,CaCollateralComponent,CaBuyerDocComponent,CaBuyerDetailComponent,CaDirectloansComponent,CaFloorPlanComponent
  ,CaDutyStampComponent,CaRefComponent,CaCustomerTabComponent,CaGuarantorTabComponent
  ,CaExposureTabComponent,CaAsiaConditionComponent,CaBgExposureComponent,CaGuarantorComponent,CaAssetComponent,RepaymentComponent,AssetDetailComponent
  ,CaGuarAddressEnComponent,CaGuarAsiaConditionComponent,CaGuarCardComponent,CaGuarAddressThComponent,CaGuarExposureComponent,CaGuarMachineComponent
  ,CaGuarPercentIndComponent,AssetDetailComponent,CaFinanceComponent,CaAttachmentComponent,CaFacPricingComponent,CaRecommendComponent
  ,CaInqueryComponent,CaUseCreditlineComponent,CaAmendContentReasonComponent,CaAmendKeyinComponent,CaSearchAmendComponent
  ],
  providers:[CurrencyPipe,DecimalPipe,DatePipe,creditApplicationService]
})
export class CreditApplicationModule { }
