import { Component, OnInit } from '@angular/core';
import {RepaymentModel} from "./repayment.model";
import {Subscription} from "rxjs/Subscription";
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-repayment',
  templateUrl: './repayment.component.html'
})
export class CcsRepaymentComponent implements OnInit {
  list_Repayment: RepaymentModel[] = [];
  subscription: Subscription;

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_Repayment = data.list_Repayment;
      }
    );
  }

}
