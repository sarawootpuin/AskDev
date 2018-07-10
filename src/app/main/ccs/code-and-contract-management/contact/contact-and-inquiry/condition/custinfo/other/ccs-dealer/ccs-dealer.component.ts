import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {DealerModel} from "./ccs-dealer.model";

@Component({
  selector: 'app-ccs-dealer',
  templateUrl: './ccs-dealer.component.html'
})
export class CcsDealerComponent implements OnInit {
  ds_Dealer: DealerModel;
  subscription: Subscription;

  constructor(private custService: CustinfoService) {
    this.ds_Dealer = new DealerModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.ds_Dealer = data.ds_Dealer;

      }
    );
  }

}
