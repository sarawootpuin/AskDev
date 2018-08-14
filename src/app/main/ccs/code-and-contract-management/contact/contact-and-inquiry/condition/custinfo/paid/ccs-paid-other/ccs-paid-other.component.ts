import {Component, OnInit} from '@angular/core';
import {cdsPaid_OtherModel} from "./cdsPaid_OtherModel";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ccs-paid-other',
  templateUrl: './ccs-paid-other.component.html'
})
export class CcsPaidOtherComponent implements OnInit {
  list_cdspaid_other: cdsPaid_OtherModel[] = [];
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
      {field: 'document_date', header: 'Batch Date'},
      {field: 'document_no', header: 'Receipt No.'},
      {field: 'date_pay', header: 'Receipt Date'},
      {field: 'amount', header: 'Paid Amount'},
      {field: 'paid_desc', header: 'Paid Type'},
      {field: 'receive_name', header: 'Type'},
      {field: 'amount', header: 'Amount'},
      {field: 'remark', header: 'Remark'},
      {field: 'entry_number', header: 'ENTRY_NUMBER'}
    ];


    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_cdspaid_other = data.list_cdspaid_other;

        for (let i = 0; i < this.list_cdspaid_other.length; i++) {
          this.receiveType_item = {
            label: this.list_cdspaid_other[i].receive_name,
            value: this.list_cdspaid_other[i].receive_name
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
