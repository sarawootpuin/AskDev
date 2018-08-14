import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArPlComponent} from "./ar-pl.component";
import {EntityModule} from "../../../../../../mst/entity/entity.module";
import {
  CalendarModule, DataTableModule, LightboxModule, OverlayPanelModule, PanelModule, SidebarModule, TabViewModule,
  TooltipModule
} from "primeng/primeng";
import {CenterModule} from "../../../../../../../shared/center/center.module";
import {FormsModule} from "@angular/forms";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {ArPlRoutingModule} from "./ar-pl.routing.module";
import {ArplAssetAndGuarComponent} from "./arpl-contract-detail/arpl-asset-and-guar/arpl-asset-and-guar.component";
import {ArplCloseAccountComponent} from "./arpl-collection/arpl-close-account/arpl-close-account.component";
import {ArplCollectionComponent} from "./arpl-collection/arpl-collection.component";
import {ArplCusPaidComponent} from "./arpl-paid/arpl-cus-paid/arpl-cus-paid.component";
import {ArplDirectDebitChargeComponent} from "./arpl-overdue/arpl-direct-debit-charge/arpl-direct-debit-charge.component";
import {ArplExpenseComponent} from "./arpl-overdue/arpl-expense/arpl-expense.component";
import {ArplExtraChargeComponent} from "./arpl-overdue/arpl-extra-charge/arpl-extra-charge.component";
import {ArplFollowupComponent} from "./arpl-contract-detail/arpl-followup/arpl-followup.component";
import {ArplMovementDepositComponent} from "./arpl-contract-detail/arpl-movement-deposit/arpl-movement-deposit.component";
import {ArplMovementRegComponent} from "./arpl-contract-detail/arpl-movement-reg/arpl-movement-reg.component";
import {ArplNegotiationCloseComponent} from "./arpl-collection/arpl-close-account/arpl-negotiation-close/arpl-negotiation-close.component";
import {ArplNegotiationComponent} from "./arpl-collection/arpl-update/arpl-negotiation/arpl-negotiation.component";
import {ArplOverdueInstComponent} from "./arpl-overdue/arpl-overdue-inst/arpl-overdue-inst.component";
import {ArplPaidInstComponent} from "./arpl-paid/arpl-paid-inst/arpl-paid-inst.component";
import {ArplPaidInsuranceComponent} from "./arpl-paid/arpl-paid-insurance/arpl-paid-insurance.component";
import {ArplPaidOtherComponent} from "./arpl-paid/arpl-paid-other/arpl-paid-other.component";
import {ArplPaidRegComponent} from "./arpl-paid/arpl-paid-reg/arpl-paid-reg.component";
import {ArplPenaltyComponent} from "./arpl-overdue/arpl-penalty/arpl-penalty.component";
import {ArplTaxCalComponent} from "./arpl-collection/arpl-tax-cal/arpl-tax-cal.component";
import {ArplUpdateComponent} from "./arpl-collection/arpl-update/arpl-update.component";
import {ArplAddrComponent} from "./other/arpl-addr/arpl-addr.component";
import {ArplAddrDialogComponent} from "./other/arpl-addr/arpl-addr-dialog/arpl-addr-dialog.component";
import {ArplWaiveComponent} from "./other/arpl-waive/arpl-waive.component";
import {ArplTotalLoanComponent} from "./other/arpl-total-loan/arpl-total-loan.component";
import {ArplRepossesComponent} from "./arpl-overdue/arpl-reposses/arpl-reposses.component";
import {ArplRepaymentComponent} from "./arpl-contract-detail/arpl-repayment/arpl-repayment.component";
import {ArplReferFollowPersonComponent} from "./other/arpl-refer-follow-person/arpl-refer-follow-person.component";
import {ArplPdcComponent} from "./other/arpl-pdc/arpl-pdc.component";
import {ArplPayerComponent} from "./other/arpl-payer/arpl-payer.component";
import {ArplPaidPartialComponent} from "./arpl-paid/arpl-paid-partial/arpl-paid-partial.component";
import {ArplPaidLegalComponent} from "./arpl-paid/arpl-paid-legal/arpl-paid-legal.component";
import {ArplPaidInst2Component} from "./arpl-paid/arpl-paid-inst2/arpl-paid-inst2.component";
import {ArplInsuranceHistoryComponent} from "./other/arpl-insurance/arpl-insurance-history/arpl-insurance-history.component";
import {ArplInsuranceComponent} from "./other/arpl-insurance/arpl-insurance.component";
import {ArplHistoryCollectionComponent} from "./other/arpl-history-collection/arpl-history-collection.component";
import {ArplGuarTelComponent} from "./other/arpl-guar/arpl-guar-tel/arpl-guar-tel.component";
import {ArplGuarComponent} from "./other/arpl-guar/arpl-guar.component";
import {ArplFinanceComponent} from "./other/arpl-finance/arpl-finance.component";
import {ArplDisasterComponent} from "./other/arpl-disaster/arpl-disaster.component";
import {ArplDirectDebitComponent} from "./other/arpl-direct-debit/arpl-direct-debit.component";
import {ArplChequeReturnComponent} from "./other/arpl-cheque-return/arpl-cheque-return.component";
import {ArPlService} from "./ar-pl.service";
import {TableModule} from "primeng/table";

@NgModule({
  imports: [
    CommonModule,OverlayPanelModule,
    ArPlRoutingModule,
    CenterModule, CalendarModule, FormsModule, SidebarModule, PanelModule, LightboxModule, TooltipModule,
    CurrencyMaskModule, TabViewModule, DataTableModule, EntityModule,TableModule
  ],
  declarations: [ArPlComponent,ArplAssetAndGuarComponent,ArplCloseAccountComponent,ArplCollectionComponent
  ,ArplCusPaidComponent,ArplDirectDebitChargeComponent,ArplExpenseComponent,ArplExtraChargeComponent,ArplFollowupComponent
  ,ArplMovementDepositComponent,ArplMovementRegComponent,ArplNegotiationCloseComponent,ArplNegotiationComponent
  ,ArplOverdueInstComponent,ArplPaidInstComponent,ArplPaidInsuranceComponent,ArplPaidOtherComponent
  ,ArplPaidRegComponent,ArplPenaltyComponent,ArplTaxCalComponent,ArplUpdateComponent,ArplAddrComponent,ArplAddrDialogComponent
  ,ArplWaiveComponent,ArplTotalLoanComponent,ArplRepossesComponent,ArplRepaymentComponent,ArplReferFollowPersonComponent
  ,ArplPdcComponent,ArplPayerComponent,ArplPaidPartialComponent,ArplPaidLegalComponent,ArplPaidInst2Component,ArplInsuranceHistoryComponent
  ,ArplInsuranceComponent,ArplHistoryCollectionComponent,ArplGuarTelComponent,ArplGuarComponent,ArplFinanceComponent
  ,ArplDisasterComponent,ArplDirectDebitComponent,ArplChequeReturnComponent],
  providers: [ArPlService]
})
export class ArPlModule { }
