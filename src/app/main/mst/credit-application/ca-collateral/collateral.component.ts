import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caHead} from "../model/ca-head";
import {caCollateral} from "../model/ca-collateral";
import {caListMaster} from "../model/ca_listmaster";

@Component({
  selector: 'app-ca-collateral',
  templateUrl: './collateral.component.html'
})
export class CaCollateralComponent implements OnInit, OnDestroy {
  @Input() isReadonly: boolean;
  subscripData: Subscription;
  subscripMaster: Subscription;

  listcacollateral: caCollateral[];
  selectCollateral: caCollateral;
  myCaHead: caHead;
  cltTypeLosn: boolean = false;
  openCltDetailTab: boolean = true;

  dataListBank: caListMaster[];
  dataListInsRate: caListMaster[];
  dataBankInsRate: caListMaster[];

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.selectCollateral = new caCollateral();
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value: caHead) => {
        this.myCaHead = value;

        if (this.myCaHead.sbu_typ == 'P') {
          this.cltTypeLosn = true
        }

        this.listcacollateral = value.listcacollateral;

        if ((this.listcacollateral) && (this.listcacollateral.length > 0)) {
          this.selectCollateral = this.listcacollateral[0];
          this.getCltTypeDesc(this.selectCollateral.clt_type);

        }

      }
    );

    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj) => {
        this.dataListBank = this.creditApplicationService.listBNK;
        this.dataListInsRate = this.creditApplicationService.listInsRate;
        this.dataBankInsRate = this.creditApplicationService.listBANK_INT_RATE;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }

  rowSelect(value: caCollateral) {
    this.selectCollateral = value;
    this.getCltTypeDesc(this.selectCollateral.clt_type);
  }

  addCollateral() {
    let newRec = new caCollateral();
    newRec.com_code = this.myCaHead.com_code;
    newRec.ca_no = this.myCaHead.ca_no;

    let maxSeq = this.listcacollateral.length ? this.listcacollateral.length : 0;
    newRec.seq_no = maxSeq + 1;

    if (!this.cltTypeLosn) {
      newRec.clt_type = '1'
    }
    else {
      newRec.clt_type = '4'
    }

    this.selectCollateral = newRec;
    this.getCltTypeDesc(this.selectCollateral.clt_type);

    this.listcacollateral = [...this.listcacollateral, this.selectCollateral];
    this.creditApplicationService.caHead.listcacollateral = this.listcacollateral;
  }

  deleteCollateral() {
    let delRow = this.listcacollateral.indexOf(this.selectCollateral);
    this.listcacollateral.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.listcacollateral.length; i++) {
      this.listcacollateral[i - 1].seq_no = i;
    }
    this.listcacollateral = [...this.listcacollateral];
    this.creditApplicationService.caHead.listcacollateral = this.listcacollateral;
  }

  getCltTypeDesc(value: string) {
    let typeDesc = ''
    if (value == '1') {
      typeDesc = 'P/N'
    }
    else if (value == '2') {
      typeDesc = 'Cheque'
    }
    else if (value == '3') {
      typeDesc = 'CreditLine Guarantee'
    }
    else if (value == '4') {
      typeDesc = 'Machine'
    }
    else if (value == '5') {
      typeDesc = 'Invoice'
    }
    else if (value == '6') {
      typeDesc = 'Stock'
    }
    else if (value == '7') {
      typeDesc = 'Cash Deposit'
    }
    this.selectCollateral.clt_type_desc = typeDesc;

    if ((value == '3') || (value == '7')) {
      this.openCltDetailTab = false
    }
    else {
      this.openCltDetailTab = true;
    }

  }

  changedate(indate: any) {
    return this.creditApplicationService.changedate(indate);
  }

  calDeposit(action: string) {
    let finAmt = this.myCaHead.listbgdetail[0].fin_amt_e_vat ? this.myCaHead.listbgdetail[0].fin_amt_e_vat : 0;

    if (finAmt) {
      if ((action == 'pcn') && (this.selectCollateral.deduct_pcn)) {
        if (this.selectCollateral.deduct_pcn > 30) {
          this.selectCollateral.deduct_pcn = 30;
        }
        else if (this.selectCollateral.deduct_pcn < 0) {
          this.selectCollateral.deduct_pcn = 0;
        }
        this.selectCollateral.clt_amt = finAmt * this.selectCollateral.deduct_pcn / 100;
      } else if ((action == 'amt') && (this.selectCollateral.clt_amt)) {
        this.selectCollateral.deduct_pcn = (this.selectCollateral.clt_amt / finAmt) * 100;
      }

      // this.selectCollateral.clt_cash_rcp = this.selectCollateral.clt_cash_rcp ? this.selectCollateral.clt_cash_rcp : 0 ;
      //  this.selectCollateral.clt_balance = this.selectCollateral.deduct_amt -  this.selectCollateral.clt_cash_rcp ;

      if (!this.openCltDetailTab && this.selectCollateral.clt_type == '7') {
        this.selectCollateral.printcipal_clg_amt = this.selectCollateral.clt_amt - this.selectCollateral.clt_cash_rcp;
        this.selectCollateral.clt_balance = this.selectCollateral.printcipal_clg_amt;
      }

    }
    ;

  }

  callCollateral(action: string) {
    let finAmt = this.myCaHead.listbgdetail[0].fin_amt_e_vat ? this.myCaHead.listbgdetail[0].fin_amt_e_vat : 0;
    let depositpcn = this.selectCollateral.deduct_pcn ? this.selectCollateral.deduct_pcn : 0;
    let depositamt = this.selectCollateral.deduct_amt ? this.selectCollateral.deduct_amt : 0;
    let depositcheque = this.selectCollateral.clt_balance ? this.selectCollateral.clt_balance : 0;
    let depositcash = this.selectCollateral.clt_cash_rcp ? this.selectCollateral.clt_cash_rcp : 0;

  }

}
