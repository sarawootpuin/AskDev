import {Component, OnDestroy, OnInit} from '@angular/core';
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../model/ca-head";
import {caListMaster} from "../model/ca_listmaster";

@Component({
  selector: 'app-ca-condition-remark',
  templateUrl: './condition-remark.component.html',
})
export class CaConditionRemarkComponent implements OnInit, OnDestroy {

  subscripData: Subscription;
  subscripMaster: Subscription;

  myCaHead: caHead;

  listRMK_MKT : caListMaster[] = [];
  listCOND_MKT : caListMaster[] = [];
  selectCond : caListMaster ;

  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {

    this.myCaHead = new caHead() ;
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj : caHead ) => {
        this.myCaHead = obj ;
      }
    );

    this.subscripMaster =  this.creditApplicationService.eventListMaster.subscribe(
      (obj) => {
        this.listRMK_MKT = this.creditApplicationService.listRMK_MKT ;
        this.listCOND_MKT = this.creditApplicationService.listCOND_MKT ;
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


  onDbClickCondition(select : caListMaster){
   if (this.myCaHead.ca_condition.length > 1)
   { this.myCaHead.ca_condition += '\n' + select.remark ; }
   else
   { this.myCaHead.ca_condition += select.remark ;  }
  }
}
