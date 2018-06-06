import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../../../credit-application.service";
import {caBuyer} from "../../../model/ca-buyer";
import {caListMaster} from "../../../model/ca_listmaster";

@Component({
  selector: 'app-ca-buyer-detail',
  templateUrl: './ca-buyer-detail.component.html',
})
export class CaBuyerDetailComponent implements OnInit, OnDestroy {
  subscripData: Subscription;
  subscripMaster: Subscription;

  selectBuyer: caBuyer;

  listAPT: caListMaster[];

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.selectBuyer = new caBuyer();
    if (this.creditApplicationService.getCaHead()) {
      if (this.creditApplicationService.getCaHead().listcabuyer.length > 0) {
        this.selectBuyer = this.creditApplicationService.getCaHead().listcabuyer[0];
      }
    }

    this.subscripData = this.creditApplicationService.eventcabuyer.subscribe(
      (value: caBuyer) => {
        this.selectBuyer = value;
      }
    );

    this.listAPT = this.creditApplicationService.listAPT;
    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj) => {
        this.listAPT = this.creditApplicationService.listAPT;
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

}
