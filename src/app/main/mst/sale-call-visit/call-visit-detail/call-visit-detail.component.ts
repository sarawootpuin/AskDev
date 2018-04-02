import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SaleCallVisitService} from "../sale-call-visit.service";
import {DatePipe} from "@angular/common";
import {SaleCallDetail} from "../model/Sale-Call-Detail";
import {isUndefined} from "util";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-call-visit-detail',
  templateUrl: './call-visit-detail.component.html',
  styleUrls: ['./call-visit-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitDetailComponent implements OnInit, OnDestroy {
  mySaleCallD: SaleCallDetail[] = [];

  subscription: Subscription;
  SelectList: SaleCallDetail;
  newRec: SaleCallDetail;
  code: string = "";
  username: string = "";
  comCode: string = "";




  constructor(private saleCallVisitService: SaleCallVisitService,
              private dataPipe: DatePipe,
              private userStorage: UserStorage) {
  }

  ngOnInit() {

    this.code = this.userStorage.getCode();
    this.username = this.userStorage.getUserName();
    this.comCode = this.userStorage.getComCodePort();

    this.subscription = this.saleCallVisitService.eventsaleD.subscribe(
      (obj) => {
        this.mySaleCallD = obj;

        if (!isUndefined(this.mySaleCallD[0]))
          this.selectSaleCallDetail(this.mySaleCallD[0]);
      }
    );

    this.saleCallVisitService.eventselectsaleD.subscribe(
      (obj) => {this.SelectList = obj;}
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  selectSaleCallDetail(select: SaleCallDetail) {
    this.SelectList =  select ;
    this.saleCallVisitService.setselectsaleD(select);
  }

  newDetail() {

    let chekNew = false;
    if (!this.mySaleCallD[0]) {
      chekNew = true
    }
    else if (this.mySaleCallD[0].submit_flg == 'Y') {
      chekNew = true
    }
    else {
      chekNew = false
    }

    if (chekNew) {
      this.newRec = new SaleCallDetail(this.saleCallVisitService.saleH.sale_call_no, String( this.mySaleCallD.length + 1) );
      this.newRec.input_by = this.code;
      this.newRec.call_visit_by = this.code;
      this.newRec.call_visit_by = this.code;

      /// auto copy previous
      if ((this.mySaleCallD) && (this.mySaleCallD.length > 0) ){
        this.newRec.asset.asset_type = this.mySaleCallD[0].asset.asset_type ;
        this.newRec.asset.purpose = this.mySaleCallD[0].asset.purpose ;
        this.newRec.asset.brand = this.mySaleCallD[0].asset.brand ;
        this.newRec.asset.open_lc = this.mySaleCallD[0].asset.open_lc ;
        this.newRec.asset.fin_amt = this.mySaleCallD[0].asset.fin_amt ;
        this.newRec.asset.asset_detail = this.mySaleCallD[0].asset.asset_detail ;
        this.newRec.asset.competitor_bank = this.mySaleCallD[0].asset.competitor_bank ;
        this.newRec.asset.competitor_fin_pcnt = this.mySaleCallD[0].asset.competitor_fin_pcnt ;
        this.newRec.asset.competitor_irr = this.mySaleCallD[0].asset.competitor_irr ;
        this.newRec.asset.competitor_lease = this.mySaleCallD[0].asset.competitor_lease ;
        this.newRec.asset.competitor_other = this.mySaleCallD[0].asset.competitor_other ;
        this.newRec.asset.competitor_term = this.mySaleCallD[0].asset.competitor_term ;
        this.newRec.asset.credit_type = this.mySaleCallD[0].asset.credit_type ;
        this.newRec.asset.credit_type_other = this.mySaleCallD[0].asset.credit_type_other ;
        this.newRec.asset.relate_ent_code = this.mySaleCallD[0].asset.relate_ent_code ;
        this.newRec.asset.unit = this.mySaleCallD[0].asset.unit ;
      }

      this.mySaleCallD = [this.newRec, ...this.mySaleCallD];
      this.selectSaleCallDetail(this.mySaleCallD[0]);
    } else {
      console.log("Can'not Create");
    }
  }
}
