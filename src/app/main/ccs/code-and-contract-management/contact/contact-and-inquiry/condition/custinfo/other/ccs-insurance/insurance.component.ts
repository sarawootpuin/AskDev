import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {insTransModel} from "./insTrans.model";
import {Subscription} from "rxjs/Subscription";
import {InsVolunModel} from "./insVolun.model";

@Component({
  selector: 'app-ccs-insurance',
  templateUrl: './insurance.component.html'
})
export class CcsInsuranceComponent implements OnInit {
  list_InsTrans: insTransModel[] = [];
  list_InsVolun: InsVolunModel[] = [];
  subscription: Subscription;

  vSelected_InsTrans: insTransModel;

  constructor(private custService: CustinfoService) {
    this.vSelected_InsTrans = new insTransModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_InsTrans = data.ds_ins.list_InsTrans;

        if (this.list_InsTrans) {
          this.list_InsVolun = this.list_InsTrans[0].list_InsVolun;
          this.vSelected_InsTrans = this.list_InsTrans[0];
        }
      }
    );
  }

}
