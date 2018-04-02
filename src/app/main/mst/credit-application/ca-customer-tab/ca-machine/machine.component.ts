import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../../credit-application.service";
import {caHead} from "../../model/ca-head";
import {caAssersite} from "../../model/ca-assetsite";

@Component({
  selector: 'app-ca-machine',
  templateUrl: './machine.component.html',
})
export class CaMachineComponent implements OnInit,OnDestroy {
  subscripData: Subscription;
  subscripMaster: Subscription;

  maChine : caAssersite = new caAssersite() ;

  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj : caHead ) => {
        if ( (obj.listassetsite) && (obj.listassetsite.length > 0) )
        {  this.maChine = obj.listassetsite[0] ;  }
        else if (obj.listassetsite)
        {
          this.maChine.com_code = obj.com_code ;
          this.maChine.ref_code = obj.ca_no ;
          this.maChine.main_entry = 1 ;
          this.maChine.order_from = 1 ;
          this.maChine.order_to = 1 ;
           obj.listassetsite[0] = this.maChine  }
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

  copyOwnr(){
    this.maChine.loc_addr1 = this.maChine.owner_addr1 ;
    this.maChine.loc_addr2 = this.maChine.owner_addr2 ;
    this.maChine.loc_addr3 = this.maChine.owner_addr3 ;
    this.maChine.loc_addr4 = '' ;
  }
}
