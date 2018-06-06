import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListPricing} from "../model/getDataPricing";
import {getDataAppForm} from "../model/getDataAppForm";
import {ListAnswer} from "../model/getListAnswer";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {
  dataHead: getDataAppForm;
  data: ListPricing[];
  dataFirst: ListPricing;
  dataListBank: ListAnswer[] = [];
  dataListInsRate: ListAnswer[] = [];
  dataBankInsRate: ListAnswer[] = [];
  disabled: string = 'N';
  @Input() inquiry: boolean;
  @ViewChild('intRate') intRate: ElementRef;
  @ViewChild('rateBank') rateBank: ElementRef;
  @ViewChild('rateM') rateM: ElementRef;
  @ViewChild('rateSpread') rateSpread: ElementRef;
  @ViewChild('facFeeAmt') facFeeAmt: ElementRef;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.dataFirst = new ListPricing();

    this.data = this.appFormService.listTabPricing;
    if (this.appFormService.listTabPricing) {
      this.dataFirst = this.appFormService.listTabPricing[0];
    }

    this.dataHead = this.appFormService.getAppFormData();
    this.dataListBank = this.appFormService.listBank;
    this.dataListInsRate = this.appFormService.listInsRate;
    this.dataBankInsRate = this.appFormService.listBankIntRate;
    this.disabled = this.appFormService.getAppFormData().disabled;
    this.rateChange();
    this.appFormService.eventTabPricing.subscribe(
      (data) => {
        this.data = data;
        this.dataFirst = data[0];
        this.dataHead = this.appFormService.getAppFormData();
        this.dataListBank = this.appFormService.listBank;
        this.dataListInsRate = this.appFormService.listInsRate;
        this.dataBankInsRate = this.appFormService.listBankIntRate;
        this.disabled = this.appFormService.getAppFormData().disabled;
        this.interestChange(this.dataFirst.rate_type);
        this.factFeeChange(this.dataFirst.factfee_type);
        this.rateChange();

      }
    )
  }

  rateChange() {
    if (this.dataFirst.rate_bank && this.dataFirst.rate_m) {
      let rateSelect = (this.dataBankInsRate.find((item) => {
        return item.id_code === this.dataFirst.rate_bank && item.remark === this.dataFirst.rate_m
      }));
      if (rateSelect) {
        this.dataFirst.bank_int_rate = rateSelect.remark1;
      }
      else {
        this.dataFirst.bank_int_rate = 0;
      }
    }
  }

  interestChange(rateType) {
    if (rateType === 'Fix') {
      this.rateBank.nativeElement.disabled = true;
      this.rateM.nativeElement.disabled = true;
      this.rateSpread.nativeElement.disabled = true;
    }
    else if (rateType === 'Float') {
      this.rateBank.nativeElement.disabled = false;
      this.rateM.nativeElement.disabled = false;
      this.rateSpread.nativeElement.disabled = false;
      this.dataFirst.int_rate = '';
    }
    else {
      this.rateBank.nativeElement.disabled = false;
      this.rateM.nativeElement.disabled = false;
      this.rateSpread.nativeElement.disabled = false;
      this.dataFirst.int_rate = '';
    }
  }

  factFeeChange(factFee) {
    if (factFee === '1') {
      this.dataFirst.factfee_amt_month = '';
      this.appFormService.editEvent.emit(false);
    }
    else if (factFee === '2') {
      this.appFormService.editEvent.emit(true);
    }
    else {
      this.dataFirst.factfee_amt_month = '';
      this.appFormService.editEvent.emit(false);
    }
  }
}
