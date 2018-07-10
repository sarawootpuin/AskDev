import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {creditApplicationService} from "../../credit-application.service";
import {caGuarantor} from "../../model/ca-guarantor";
import {Subscription} from "rxjs/Subscription";
import {caListMaster} from "../../model/ca_listmaster";

@Component({
  selector: 'app-ca-guarantor',
  templateUrl: './ca-guarantor.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CaGuarantorComponent implements OnInit,OnDestroy {
  subscripData: Subscription;
  subscripMaster: Subscription;
  caGua : caGuarantor ;

  listFNMT : caListMaster[];
  listFNME : caListMaster[];
  listCRD  : caListMaster[];
  listNTY  : caListMaster[];
  listPOS_BG: caListMaster[];
  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {
    this.caGua = new caGuarantor() ;
    this.subscripData = this.creditApplicationService.eventSelectGuarantor.subscribe(
      (selectGua : caGuarantor) =>
      {
          this.caGua = selectGua ;
      }
    );

    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj)=> {
        //console.log('subscribe');
        this.listFNMT = this.creditApplicationService.listFNM ;
        this.listFNME = this.creditApplicationService.listFNME;
        this.listCRD = this.creditApplicationService.listCRD;
        this.listNTY  = this.creditApplicationService.listNTY;
        this.listPOS_BG = this.creditApplicationService.listPOS_BG;
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
