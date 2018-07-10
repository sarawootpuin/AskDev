import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {CdsPaid_InstModel} from "../../model/clientDataSet/cdsPaid_Inst";

@Component({
  selector: 'app-ccs-paid-installment',
  templateUrl: './ccs-paid-installment.component.html'
})
export class CcsPaidInstallmentComponent implements OnInit,OnDestroy {
  list_cdspaid_inst: CdsPaid_InstModel[] = [];
  private subscription: Subscription;

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        this.list_cdspaid_inst = data.list_cdspaid_inst;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
