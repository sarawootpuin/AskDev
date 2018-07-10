/**
 * Created by tanapon.sa on 25/10/2560.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustinfoComponent} from "./custinfo.component";
import {CustinfoService} from "./custinfo.service";
import {CenterModule} from "../../../../../../../shared/center/center.module";
import {UpdateComponent} from './collection/update/update.component';
import {AddressComponent} from './other/address/address.component';
import {CustinfoRoutingModule} from "./custinfo.routing.module";
import {BlinkDirective} from "./Custom-Directive/blink.directive";
import {FormsModule} from "@angular/forms";
import {
  CalendarModule, DataTableModule, LightboxModule, PanelModule, SidebarModule, TabViewModule,
  TooltipModule, OverlayPanelModule, DropdownModule, AccordionModule, DataGridModule, TreeTableModule
} from "primeng/primeng";
import {CloseAccountComponent} from "./collection/close-account/close-account.component";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {TransferComponent} from "./collection/transfer/transfer.component";
import {TransferTabComponent} from "./collection/transfer/transfer-tab/transfer-tab.component";
import {TransferHistTabComponent} from "./collection/transfer/transfer-hist-tab/transfer-hist-tab.component";
import {TransferCustomerGuarantorComponent} from "./collection/transfer/transfer-customer-guarantor/transfer-customer-guarantor.component";
import {TransfCustAddressComponent} from "./collection/transfer/transfer-customer-guarantor/transf-cust/transf-cust-address/transf-cust-address.component";
import {TransfCustCardComponent} from "./collection/transfer/transfer-customer-guarantor/transf-cust/transf-cust-card/transf-cust-card.component";
import {TransfCustGeneralComponent} from "./collection/transfer/transfer-customer-guarantor/transf-cust/transf-cust-general/transf-cust-general.component";
import {TransfCustPayerComponent} from "./collection/transfer/transfer-customer-guarantor/transf-cust/transf-cust-payer/transf-cust-payer.component";
import {TransfGuarComponent} from "./collection/transfer/transfer-customer-guarantor/transf-guar/transf-guar.component";
import {TransfGuarAddressComponent} from "./collection/transfer/transfer-customer-guarantor/transf-guar/transf-guar-address/transf-guar-address.component";
import {TransfGuarCardComponent} from "./collection/transfer/transfer-customer-guarantor/transf-guar/transf-guar-card/transf-guar-card.component";
import {TransfGuarGeneralComponent} from "./collection/transfer/transfer-customer-guarantor/transf-guar/transf-guar-general/transf-guar-general.component";
import {TransfCustComponent} from "./collection/transfer/transfer-customer-guarantor/transf-cust/transf-cust.component";
import {EntityModule} from "../../../../../../mst/entity/entity.module";
import {CcsApplyReschedureComponent} from "./collection/ccs-apply-reschedure/apply-reschedure.component";
import {CcsChangeAddrFoComponent} from "./other/ccs-change-addr-fo/change-addr-fo.component";
import {CcsChangeAddrFoDialogComponent} from "./other/ccs-change-addr-fo/change-addr-fo-dialog/change-addr-fo-dialog.component";
import {CcsCalTaxComponent} from "./collection/css-cal-tax/cal-tax.component";
import {CcsChequePdcComponent} from "./other/ccs-cheque-pdc/cheque-pdc.component";
import {CcsChequeReturnComponent} from "./overdue/ccs-cheque-return/cheque-return.component";
import {CcsCommissionComponent} from "./other/ccs-commission/commission.component";
import {CcsCreditScoringReportComponent} from "./other/ccs-credit-scoring-report/credit-scoring-report.component";
import {CcsCusPaidComponent} from "./paid/ccs-cus-paid/cus-paid.component";
import {CcsDirectDebitComponent} from "./other/ccs-direct-debit/direct-debit.component";
import {CcsDisasterComponent} from "./other/ccs-disaster/disaster.component";
import {CcsFinanceComponent} from "./contract-detail/ccs-finance/finance.component";
import {CcsGuarantorComponent} from "./other/ccs-guarantor/guarantor.component";
import {CcsInsurance91Component} from "./other/ccs-insurance91/insurance91.component";
import {CcsInsuranceComponent} from "./other/ccs-insurance/insurance.component";
import {CcsInsuranceHistoryComponent} from "./other/ccs-insurance/ccs-insurance-history/insurance-history.component";
import {CcsInterfaceHistoryComponent} from "./collection/ccs-interface-history/interface-history.component";
import {CcsMktConditionComponent} from "./other/ccs-mkt-condition/mkt-condition.component";
import {CcsMrrRateComponent} from "./other/ccs-mrr-rate/mrr-rate.component";
import {CcsOutsourceDetailComponent} from "./contract-detail/ccs-outsource-detail/outsource-detail.component";
import {CcsPaidLegalComponent} from "./paid/ccs-paid-legal/paid-legal.component";
import {CcsPaidPartialComponent} from "./collection/ccs-paid-partial/paid-partial.component";
import {CcsPayerComponent} from "./other/ccs-payer/payer.component";
import {CcsPenaltiesComponent} from "./other/ccs-penalties/penalties.component";
import {CcsReceiveTypeComponent} from "./collection/ccs-paid-partial/receive-type/receive-type.component";
import {CcsReferFollowPersonComponent} from "./other/ccs-refer-follow-person/refer-follow-person.component";
import {CcsRepaymentComponent} from "./contract-detail/ccs-repayment/repayment.component";
import {CcsTotalLoanComponent} from "./other/ccs-total-loan/total-loan.component";
import {CcsVanTruckDetailComponent} from "./contract-detail/ccs-van-truck-detail/van-truck-detail.component";
import {CcsWaiveComponent} from "./other/ccs-waive/waive.component";
import {CcsWaiveDetailComponent} from "./other/ccs-waive/waive-detail/waive-detail.component";
import {ChangeTelComponent} from "./other/ccs-guarantor/change-tel/change-tel.component";
import {CcsDirectDebitChargeComponent} from "./overdue/ccs-direct-debit-charge/ccs-direct-debit-charge.component";
import {CcsExtraChargeComponent} from "./overdue/ccs-extra-charge/ccs-extra-charge.component";
import {CcsMovementDepositComponent} from "./contract-detail/ccs-movement-deposit/ccs-movement-deposit.component";
import {CcsMovementFollowupComponent} from "./contract-detail/ccs-movement-followup/ccs-movement-followup.component";
import {CcsMovementMasterComponent} from "./contract-detail/ccs-movement-master/ccs-movement-master.component";
import {CcsMovementRegbookComponent} from "./contract-detail/ccs-movement-regbook/ccs-movement-regbook.component";
import {CcsOverdueInsComponent} from "./overdue/ccs-overdue-ins/ccs-overdue-ins.component";
import {CcsOverdueVatComponent} from "./overdue/ccs-overdue-vat/ccs-overdue-vat.component";
import {CcsPaidInstallmentComponent} from "./paid/ccs-paid-installment/ccs-paid-installment.component";
import {CcsPaidInsuranceComponent} from "./paid/ccs-paid-insurance/ccs-paid-insurance.component";
import {CcsPaidRegComponent} from "./paid/ccs-paid-reg/ccs-paid-reg.component";
import {CcsPaidOtherComponent} from "./paid/ccs-paid-other/ccs-paid-other.component";
import {CcsPaidVatComponent} from "./paid/ccs-paid-vat/ccs-paid-vat.component";
import {CcsPenaltyComponent} from "./overdue/ccs-penalty/ccs-penalty.component";
import {CcsRepossesChargeComponent} from "./overdue/ccs-reposses-charge/ccs-reposses-charge.component";
import {UpdateService} from "./collection/update/update.service";
import {CcsExpenseComponent} from "./overdue/ccs-expense/ccs-expense.component";
import {TableModule} from "primeng/table";
import {CcsMovementFollowupService} from "./contract-detail/ccs-movement-followup/ccs-movement-followup.service";
import {CcsRegsuspendHistComponent} from "./other/ccs-regsuspend-hist/ccs-regsuspend-hist.component";
import {CcsVatCarHistComponent} from "./other/ccs-vat-car-hist/ccs-vat-car-hist.component";
import {CcsDealerComponent} from "./other/ccs-dealer/ccs-dealer.component";
import {CcsTransferRegisComponent} from "./contract-detail/ccs-transfer-regis/ccs-transfer-regis.component";
import {CcsOsBalanceComponent} from "./contract-detail/ccs-os-balance/ccs-os-balance.component";
import {RegHistService} from "./other/reg-hist/reg-hist.service";
import {RegHistComponent} from "./other/reg-hist/reg-hist.component";
import {CcsTelHistComponent} from "./other/ccs-tel-hist/ccs-tel-hist.component";

@NgModule({
  imports: [
    CommonModule,OverlayPanelModule,
    CustinfoRoutingModule,
    CenterModule, CalendarModule, FormsModule, SidebarModule, PanelModule, LightboxModule, TooltipModule,
    CurrencyMaskModule, TabViewModule, DataTableModule, EntityModule, DropdownModule,AccordionModule,DataGridModule,
    TreeTableModule, TableModule
  ],
  declarations: [CustinfoComponent, UpdateComponent, AddressComponent, BlinkDirective, CloseAccountComponent,
    TransferComponent, TransferTabComponent, TransferHistTabComponent, TransferCustomerGuarantorComponent,
    TransferCustomerGuarantorComponent,TransfCustComponent,TransfCustAddressComponent,TransfCustCardComponent,TransfCustGeneralComponent,
    TransfCustPayerComponent,TransfGuarComponent,TransfGuarAddressComponent,TransfGuarCardComponent,TransfGuarGeneralComponent,
  CcsApplyReschedureComponent,CcsChangeAddrFoComponent,CcsChangeAddrFoDialogComponent,CcsCalTaxComponent,CcsChequePdcComponent,CcsChequeReturnComponent
  ,CcsCommissionComponent,CcsCreditScoringReportComponent,CcsCusPaidComponent,CcsDirectDebitComponent,CcsDisasterComponent,CcsFinanceComponent,
  CcsGuarantorComponent,CcsInsurance91Component,CcsInsuranceComponent,CcsInsuranceHistoryComponent,CcsInterfaceHistoryComponent
  ,CcsMktConditionComponent,CcsMrrRateComponent,CcsOutsourceDetailComponent,CcsPaidLegalComponent,CcsPaidPartialComponent
  ,CcsPayerComponent,CcsPenaltiesComponent,CcsReceiveTypeComponent,CcsReferFollowPersonComponent,CcsRepaymentComponent
  ,CcsTotalLoanComponent,CcsVanTruckDetailComponent,CcsWaiveComponent,CcsWaiveDetailComponent,ChangeTelComponent,CcsDirectDebitChargeComponent
  ,CcsExtraChargeComponent,CcsMovementDepositComponent,CcsMovementFollowupComponent,CcsMovementMasterComponent,CcsMovementRegbookComponent
  ,CcsOverdueInsComponent,CcsOverdueVatComponent,CcsPaidInstallmentComponent,CcsPaidInsuranceComponent,CcsPaidRegComponent,CcsPaidOtherComponent
  ,CcsPaidVatComponent,CcsPenaltyComponent,CcsRepossesChargeComponent,CcsExpenseComponent,CcsRegsuspendHistComponent,CcsVatCarHistComponent,
    CcsDealerComponent,CcsTransferRegisComponent,CcsOsBalanceComponent,RegHistComponent,CcsTelHistComponent],
  providers: [CustinfoService,UpdateService,CcsMovementFollowupService,RegHistService]
})
export class CustinfoModule {
}
