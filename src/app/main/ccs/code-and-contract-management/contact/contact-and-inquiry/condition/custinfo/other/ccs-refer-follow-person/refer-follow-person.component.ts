import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {ReferFollowPersonModel} from "./refer-follow-person.model";

@Component({
  selector: 'app-ccs-refer-follow-person',
  templateUrl: './refer-follow-person.component.html'
})
export class CcsReferFollowPersonComponent implements OnInit {
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
        console.log(data);
        this.list_ReferPayPrsn = data.list_ReferPayPrsn;
        this.vSelected_Prsn = this.list_ReferPayPrsn[this.i];
        console.log(this.list_ReferPayPrsn);
      }
    );
  }

}
