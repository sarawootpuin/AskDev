import {Component, OnDestroy, OnInit} from '@angular/core';
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../model/ca-head";

@Component({
  selector: 'app-ca-customer-tab',
  templateUrl: './ca-customer-tab.component.html'
})
export class CaCustomerTabComponent implements OnInit, OnDestroy {

  subscripData: Subscription;
  sbu_type : string ;
  constructor(private creditApplicationService: creditApplicationService ) {

  }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (caHead : caHead) => {
        this.sbu_type = caHead.sbu_typ ;
      }
    );
  }


  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }
  }
}
