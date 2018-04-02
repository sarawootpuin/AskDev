import {Component, OnDestroy, OnInit} from '@angular/core';
import {caListMaster} from "../model/ca_listmaster";
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../model/ca-head";

@Component({
  selector: 'app-ca-recommend',
  templateUrl: './ca-recommend.component.html'
})
export class CaRecommendComponent implements OnInit ,OnDestroy{

  subscripData: Subscription;
  subscripMaster: Subscription;

  listReCommendation: caListMaster[] = [];
  selectCond : caListMaster ;

  rec_cond: any;
  rec_agr_flag: any;

  myCaHead: caHead = new caHead();

  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (caHead) => {
         // console.log('-------- Recommend -------');
         // console.log(caHead);
          this.myCaHead = caHead ;
          this.listReCommendation = this.creditApplicationService.listCOND_CA ;
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

  clearCondition(){
    this.myCaHead.rec_cond = '' ;
  }

  onDbClickCondition(select : caListMaster){
    if (this.myCaHead.rec_cond.length > 1)
    { this.myCaHead.rec_cond += '\n' + select.remark ; }
    else
    { this.myCaHead.rec_cond += select.remark ;  }
  }


}
