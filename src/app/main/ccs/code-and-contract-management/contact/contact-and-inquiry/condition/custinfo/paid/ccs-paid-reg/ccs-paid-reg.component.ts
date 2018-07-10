import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {cdsPaid_RegisModel} from "../../model/clientDataSet/cdsPaid_Regis";

@Component({
  selector: 'app-ccs-paid-reg',
  templateUrl: './ccs-paid-reg.component.html'
})
export class CcsPaidRegComponent implements OnInit {
  list_cdspaid_regis: cdsPaid_RegisModel[] = [];
  subscription: Subscription;
  cols: any[];
  receiveType: any[] = [];
  receiveType_item: any;

  constructor(private custService: CustinfoService) {
    this.receiveType_item = {label: 'All', value: null};
    this.receiveType.push(this.receiveType_item);
  }

  ngOnInit() {

    this.cols = [
      {field: 'DOCUMENT_DATE', header: 'Batch Date'},
      {field: 'DOCUMENT_NO', header: 'Receipt No.'},
      {field: 'DATE_PAY', header: 'Receipt Date'},
      {field: 'PAID_AMT', header: 'Paid Amount'},
      {field: 'RECEIVE_TYPE', header: 'Registration Type'},
      {field: 'AMOUNT', header: 'Registration Amount'},
      {field: 'VAT_AMOUNT', header: 'VAT Amount'},
      {field: 'PAID_DESC', header: 'Paid Type'}
    ];

    this.subscription = this.custService.emitMainJSON.subscribe(
      (data:any) => {
        this.list_cdspaid_regis = data.list_cdspaid_regis;

        for (let i = 0; i < this.list_cdspaid_regis.length; i++) {
          this.receiveType_item = {
            label: this.list_cdspaid_regis[i].RECEIVE_TYPE,
            value: this.list_cdspaid_regis[i].RECEIVE_TYPE
          };
          this.receiveType.push(this.receiveType_item);
        }

        this.receiveType = this.removeDuplicates(this.receiveType);
      }
    );
  }

  removeDuplicates(arr: any[]) {
    return arr.filter((arr, index, self) =>
      index === self.findIndex((t) => (
        t.value === arr.value
      ))
    )
  }

}
