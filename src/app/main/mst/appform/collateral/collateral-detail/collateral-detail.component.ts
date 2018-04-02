import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from "@angular/core";
import {ListCollateral} from "../../model/getDataCollateral";
import {ListAnswer} from "../../model/getListAnswer";
import {AppFormService} from "../../appform.service";
import {DateUtils} from "../../../../../shared/center/utils/date-utils";

@Component({
  selector: 'app-collateral-detail',
  templateUrl: './collateral-detail.component.html'
})
export class CollateralDetailComponent implements OnInit, OnChanges {
  @Input("data") data: ListCollateral;
  @Input() listPayInterest: ListAnswer[];
  @ViewChild('intRate') intRate: ElementRef;
  docNo: string = '';

  constructor(private appFormService: AppFormService,
              private dateUtils: DateUtils) {
    this.data = new ListCollateral();
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  interestChange(value) {
    if (value == 0) {
      this.data.int_rate = '';
      this.intRate.nativeElement.readOnly = true;
    }
    else {
      this.intRate.nativeElement.readOnly = false;
    }
  }

  pcnBlur() {
    if (this.appFormService.dataLoan.fin_amt_e_vat && this.data.deduct_pcn) {
      this.data.clt_amt = this.appFormService.dataLoan.fin_amt_e_vat * this.data.deduct_pcn / 100;
    }
  }

  cltAmountBlur() {
    if (this.data.clt_type == '7') {
      this.data.printcipal_clg_amt = this.data.clt_amt - this.data.clt_cash_rcp;
      this.data.clt_balance = this.data.printcipal_clg_amt;
      this.data.deduct_pcn = (this.data.clt_amt / this.appFormService.dataLoan.fin_amt_e_vat) * 100;
    }
  }

  cltCash() {
    if (this.data.clt_type == '3' || this.data.clt_type == '7') {
      this.data.printcipal_clg_amt = this.data.clt_amt - this.data.clt_cash_rcp;
      this.data.clt_balance = this.data.printcipal_clg_amt;
    }
  }

  cltTypeChange() {
    if (this.data.clt_type == '4') {
      this.data.clt_type_desc = 'Machine';
    }
    else if (this.data.clt_type == '5') {
      this.data.clt_type_desc = 'Invoice';

    }
    else if (this.data.clt_type == '6') {
      this.data.clt_type_desc = 'Stock';
    }
    else {
      this.data.clt_type_desc = 'Cash Deposit';
    }
  }

  onSelectMethod(inputDate) {
    return this.dateUtils.dateToString(inputDate, 'dd/MM/yyyy');
  }
}
