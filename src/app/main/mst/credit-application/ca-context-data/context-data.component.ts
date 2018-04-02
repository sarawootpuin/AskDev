import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caContext} from "../model/ca-context";
import {caHead} from "../model/ca-head";

@Component({
  selector: 'app-ca-context-data',
  templateUrl: './context-data.component.html',

})
export class CaContextDataComponent implements OnInit, OnDestroy {


  subscripData: Subscription;

  listcacontext : caContext[] ;

  constructor(private creditApplicationService: creditApplicationService) {

  }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj: caHead) => {
        this.listcacontext = obj.listcacontext;
      }
    );

  }

  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }


  }


}

