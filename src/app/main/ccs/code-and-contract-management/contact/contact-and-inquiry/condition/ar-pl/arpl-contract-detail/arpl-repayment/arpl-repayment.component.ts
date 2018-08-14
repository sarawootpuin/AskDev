import { Component, OnInit } from '@angular/core';
import {RepaymentModel} from "../../../custinfo/contract-detail/ccs-repayment/repayment.model";
import {Subscription} from "rxjs/Subscription";
import {ArPlService} from "../../ar-pl.service";

@Component({
  selector: 'app-arpl-repayment',
  templateUrl: './arpl-repayment.component.html'
})
export class ArplRepaymentComponent implements OnInit {
  list_Repayment: RepaymentModel[] = [];
  private subscription: Subscription;

  constructor(private loanService: ArPlService) { }

  ngOnInit() {
    this.subscription = this.loanService.emitMainJSON.subscribe(
      (data : any) => {
        this.list_Repayment = data.list_Repayment;
      }
    );
  }

}
