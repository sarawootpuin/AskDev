import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../../credit-application.service";
import {caHead} from "../../model/ca-head";
import {caAssersite} from "../../model/ca-assetsite";
import {caEntity} from "../../model/ca-entity";
import {cabgassersite} from "../../model/ca-bgassetsite";

@Component({
  selector: 'app-ca-machine',
  templateUrl: './machine.component.html',
})
export class CaMachineComponent implements OnInit, OnDestroy {
  subscripData: Subscription;
  subscripMaster: Subscription;

  maChine: cabgassersite = new cabgassersite();
  entity: caEntity;

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj: caHead) => {
        if ((obj.listbgassetsite) && (obj.listbgassetsite.length > 0)) {
          this.maChine = obj.listbgassetsite[0];
        }
        else if (obj.listbgassetsite) {

          this.maChine.ref_code = obj.ca_no;
          obj.listbgassetsite[0] = this.maChine
        }

        if(obj.caentity){
          this.entity = obj.caentity;
        }
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

  copyOwnr() {
    this.maChine.adds_l1 = this.entity.add_c;
    this.maChine.adds_l2 = this.entity.zip_c_desc + ' ' + this.entity.post_cd_c;
    this.maChine.adds_l3 = this.entity.tel_card;

  }
}
