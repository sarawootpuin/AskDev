import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caHead} from "../model/ca-head";
import {caApvHist} from "../model/ca-apvhist";
import {caCusapv} from "../model/ca-cusapv";

@Component({
  selector: 'app-ca-approve-lv',
  templateUrl: './ca-approve-lv.component.html',
})
export class CaApproveLvComponent implements OnInit , OnDestroy {
  subscripData: Subscription;
  subscripMaster: Subscription;

  listcaapvhist   : caApvHist[];
  selectCaApvhist : caApvHist;

  listcacusapv : caCusapv[];
  selectCaCusApv : caCusapv ;

  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value : caHead ) =>
      {
        this.listcaapvhist = value.listcaapvhist ;
        if ((this.listcaapvhist)  && (this.listcaapvhist.length > 1) )
        {
          this.selectCaApvhist = this.listcaapvhist[0];
          //this.onRowSelect(this.listBuyer[0]);
        }

        if (value.caentity){
          if (value.caentity.listcusapv)
          {
             this.listcacusapv = value.caentity.listcusapv ;
             if (this.listcacusapv.length > 1 ){
                 this.selectCaCusApv = this.listcacusapv[0];
             }
          }
        }


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

}