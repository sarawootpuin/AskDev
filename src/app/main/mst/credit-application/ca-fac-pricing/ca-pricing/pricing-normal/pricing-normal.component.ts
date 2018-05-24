import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {caHead} from "../../../model/ca-head";
import {caPricing} from "../../../model/ca-pricing";
import {caListMaster} from "../../../model/ca_listmaster";
import {creditApplicationService} from "../../../credit-application.service";
import {DateUtils} from "../../../../../../shared/center/utils/date-utils";
import {UserStorage} from "../../../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-pricing-normal',
  templateUrl: './pricing-normal.component.html',

})
export class PricingNormalComponent implements OnInit , OnDestroy{
  @Input() task : string;
  subscripData: Subscription;
  subscripMaster: Subscription;
  dataHead: caHead = new caHead();
  data: caPricing[];
  dataFirst: caPricing;
  dataListBank: caListMaster[] = [];
  dataListInsRate: caListMaster[] = [];
  dataBankInsRate: caListMaster[] = [];
  disabled : string = 'Y';
  @ViewChild('intRate') intRate: ElementRef;
  @ViewChild('rateBank') rateBank: ElementRef;
  @ViewChild('rateM') rateM: ElementRef;
  @ViewChild('rateSpread') rateSpread: ElementRef;
  @ViewChild('facFeeAmt') facFeeAmt: ElementRef;

  constructor(private creditApplicationService: creditApplicationService,
              private dateUtils: DateUtils,
              private userStorage: UserStorage) {  }

  ngOnInit() {
    this.dataFirst = new  caPricing() ;
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value : caHead ) =>
      {
         this.dataHead = value ;
         if (this.dataHead)
         {
             this.data = this.dataHead.listcapricing ;
             if ( (this.data[0]) &&  (this.data[0].prc_typ == '1' )  )
             {
                 this.dataFirst = this.data[0];
                 //console.log(this.dataFirst);
                  this.interestChange(this.dataFirst.rate_type);
                  this.factFeeChange(this.dataFirst.factfee_type);
             }
         }
      }
    );


    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj)=> {
        this.dataListBank = this.creditApplicationService.listBNK;
        this.dataListInsRate = this.creditApplicationService.listInsRate;
        this.dataBankInsRate = this.creditApplicationService.listBANK_INT_RATE;
      }
    );
  }

  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }

  rateChange() {
    if (this.dataFirst.rate_bank && this.dataFirst.rate_m) {
      let rateSelect = (this.dataBankInsRate.find((item) => {
        return item.id_code === this.dataFirst.rate_bank && item.remark === this.dataFirst.rate_m
      }));
      if (rateSelect) {
        this.dataFirst.bank_int_rate = rateSelect.remark;
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
     // this.appFormService.editEvent.emit(false);
    }
    else if (factFee === '2') {
     // this.appFormService.editEvent.emit(true);
    }
    else {
      this.dataFirst.factfee_amt_month = '';
     // this.appFormService.editEvent.emit(false);
    }
  }

}
