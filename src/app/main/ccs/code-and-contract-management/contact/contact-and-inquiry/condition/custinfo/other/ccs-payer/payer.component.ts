import { Component, OnInit } from '@angular/core';
import {ReferFollowPersonModel} from "../ccs-refer-follow-person/refer-follow-person.model";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ccs-payer',
  templateUrl: './payer.component.html'
})
export class CcsPayerComponent implements OnInit {
  list_ReferPayPrsn: ReferFollowPersonModel[] = [];
  vSelected_Prsn: ReferFollowPersonModel;
  subscription: Subscription;
  i: number;

  constructor(private custService: CustinfoService) {
    this.vSelected_Prsn = new ReferFollowPersonModel();
    this.i = 0;
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data:any) => {
        // console.log(data);
        this.list_ReferPayPrsn = data.list_ReferPayPsrn;

        if (this.list_ReferPayPrsn.length > 0) {
          this.vSelected_Prsn = this.list_ReferPayPrsn[this.i];
        }

        // console.log(this.list_ReferPayPrsn);
      }
    );
  }
}
