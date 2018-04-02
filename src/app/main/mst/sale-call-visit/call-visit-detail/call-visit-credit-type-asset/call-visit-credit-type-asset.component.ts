import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SaleCallVisitService} from "../../sale-call-visit.service";
import {SaleCallAsset} from "../../model/Sale-Call-Asset";
import {SaleCallDetail} from "../../model/Sale-Call-Detail";
import {isUndefined} from "util";
import {ObjTemp} from "../../model/ObjTemp";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-call-visit-credit-type-asset',
  templateUrl: './call-visit-credit-type-asset.component.html',
  styleUrls: ['./call-visit-credit-type-asset.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitCreditTypeAssetComponent implements OnInit,OnDestroy {
  mySaleCallVisitAsset: SaleCallAsset;

  subscription: Subscription;
  Credit_P: boolean = false;
  Credit_HP: boolean = false;
  Credit_LS: boolean = false;
  Credit_FIM: boolean = false;
  Credit_FEX: boolean = false;
  Credit_FDO: boolean = false;

  FinnanAsset_M: boolean = false;
  FinnanAsset_V: boolean = false;

  Purpose_R: boolean = false;
  Purpose_S: boolean = false;
  Purpose_H: boolean = false;
  Purpose_O: boolean = false;
  Purpose_O_note: string = '';

  ListBank :  ObjTemp[];

  componentReadOnly : boolean = true ;

  constructor(private saleCallVisitService: SaleCallVisitService) {
  }

  ngOnInit() {
    this.subscription = this.saleCallVisitService.eventselectsaleD.subscribe(
      (obj: SaleCallDetail) => {
        this.mySaleCallVisitAsset = obj.asset;

        this.Credit_P = false;
        this.Credit_HP  = false;
        this.Credit_LS  = false;
        this.Credit_FIM  = false;
        this.Credit_FEX  = false;
        this.Credit_FDO  = false;

        this.FinnanAsset_M  = false;
        this.FinnanAsset_V  = false;

        this.Purpose_R  = false;
        this.Purpose_S  = false;
        this.Purpose_H  = false;
        this.Purpose_O  = false;
        this.Purpose_O_note  = '';



        if (!isUndefined(this.mySaleCallVisitAsset)) {

          if (!isUndefined(this.mySaleCallVisitAsset.credit_type)) {
            this.getCredit(this.mySaleCallVisitAsset.credit_type);
          }

          if (!isUndefined(this.mySaleCallVisitAsset.asset_type)) {
            this.getFinanAsset(this.mySaleCallVisitAsset.asset_type);
          }

          if (!isUndefined(this.mySaleCallVisitAsset.purpose)) {
            this.getPurpose(this.mySaleCallVisitAsset.purpose);
          }
        }

        this.ListBank = this.saleCallVisitService.ListBANK ;

        if (obj.submit_flg == 'Y' ){  this.componentReadOnly = true }
        else { this.componentReadOnly = false }


      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  getCredit(asset: string) {
    if (asset.search("P") > -1) {
      if (asset[0] == 'P') {
        this.Credit_P = true;
      }
    }
    if (asset.search("HP") > -1) {
      this.Credit_HP = true;
    }
    if (asset.search("LS") > -1) {
      this.Credit_LS = true;
    }
    if (asset.search("FIM") > -1) {
      this.Credit_FIM = true;
    }
    if (asset.search("FEX") > -1) {
      this.Credit_FEX = true;
    }
    if (asset.search("FDO") > -1) {
      this.Credit_FDO = true;
    }
  }

  getFinanAsset(asset_type: string) {
    if (asset_type.search("Machine") > -1) {
      this.FinnanAsset_M = true;
    }

    if (asset_type.search("Vehicle") > -1) {
      this.FinnanAsset_V = true;
    }
  }

  getPurpose(purpose: string) {
    if (purpose.search("Replace the old one") > -1) {
      this.Purpose_R = true;
    }

    if (purpose.search("Support new order") > -1) {
      this.Purpose_S = true;
    }

    if (purpose.search("Hiring replacement") > -1) {
      this.Purpose_H = true;
    }

    if (purpose.search("Other") > -1) {
      this.Purpose_O = true;
      if (purpose.search(":") > -1) {
        this.Purpose_O_note = purpose.substr(purpose.search(":") + 1, purpose.length);
      }
    }
  }

  setCredit() {
    this.mySaleCallVisitAsset.credit_type = '';
    if (this.Credit_P == true) {
      this.mySaleCallVisitAsset.credit_type = 'P'
    }
    ;
    if (this.Credit_HP == true) {
      if (this.mySaleCallVisitAsset.credit_type != '') {
        this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
      }
      this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'HP';
    }
    if (this.Credit_LS == true) {
      if (this.mySaleCallVisitAsset.credit_type != '') {
        this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
      }
      this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'LS';
    }
    if (this.Credit_FIM == true) {
      if (this.mySaleCallVisitAsset.credit_type != '') {
        this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
      }
      this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'FIM';
    }
    if (this.Credit_FEX == true) {
      if (this.mySaleCallVisitAsset.credit_type != '') {
        this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
      }
      this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'FEX';
    }
    if (this.Credit_FDO == true) {
      if (this.mySaleCallVisitAsset.credit_type != '') {
        this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + ',';
      }
      this.mySaleCallVisitAsset.credit_type = this.mySaleCallVisitAsset.credit_type + 'FDO';
    }
  }

  setFinanAsset() {
    this.mySaleCallVisitAsset.asset_type = '';
    if (this.FinnanAsset_M == true) {
      this.mySaleCallVisitAsset.asset_type = 'Machine';
      if (this.FinnanAsset_V == true) {
        this.mySaleCallVisitAsset.asset_type = this.mySaleCallVisitAsset.asset_type + ',Vehicle';
      }
    } else if (this.FinnanAsset_V == true) {
      this.mySaleCallVisitAsset.asset_type = 'Vehicle';
    }
  }

  setPurpose() {
    this.mySaleCallVisitAsset.purpose = '';
    if (this.Purpose_R == true) {
      this.mySaleCallVisitAsset.purpose = 'Replace the old one';
    }

    if (this.Purpose_S == true) {
      if (this.mySaleCallVisitAsset.purpose != '') {
        this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + ',';
      }
      this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + 'Support new order';
    }

    if (this.Purpose_H == true) {
      if (this.mySaleCallVisitAsset.purpose != '') {
        this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + ',';
      }
      this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + 'Hiring replacement';
    }

    if (this.Purpose_O == true) {
      if (this.mySaleCallVisitAsset.purpose != '') {
        this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + ',';
      }
      this.mySaleCallVisitAsset.purpose = this.mySaleCallVisitAsset.purpose + 'Other : ' + this.Purpose_O_note;

    } else {
      this.Purpose_O_note = '';
    }
  }
}
