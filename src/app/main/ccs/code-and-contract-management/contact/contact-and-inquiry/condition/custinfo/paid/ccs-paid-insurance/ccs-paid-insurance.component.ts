import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {cdsPaid_InsModel} from "../../model/clientDataSet/cdsPaid_Ins";

@Component({
  selector: 'app-ccs-paid-insurance',
  templateUrl: './ccs-paid-insurance.component.html'
})
export class CcsPaidInsuranceComponent implements OnInit {
  list_cdspaid_ins:cdsPaid_InsModel[] = [];
  private subscription: Subscription;
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
      {field: 'receive_type', header: 'Insurance'},
      {field: 'receive_name', header: 'Compulsory'},
      {field: 'entry_number', header: 'ENTRY_NUMBER'}
    ];

    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        this.list_cdspaid_ins = data.list_cdspaid_ins;
        // console.log(this.list_cdspaid_ins);

        for (let i = 0; i < this.list_cdspaid_ins.length; i++) {
          this.receiveType_item = {
            label: this.list_cdspaid_ins[i].receive_type,
            value: this.list_cdspaid_ins[i].receive_type
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
