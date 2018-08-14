import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import { CustinfoModel } from './../../model/custinfo';

@Component({
  selector: 'app-ccs-direct-debit-charge',
  templateUrl: './ccs-direct-debit-charge.component.html'
})
export class CcsDirectDebitChargeComponent implements OnInit {

  srviceCustModel: CustinfoModel;
  list_array : any[]
  constructor(private custService: CustinfoService) {
    this.srviceCustModel = new CustinfoModel();
   }

  ngOnInit() {
    this.list_array = [
      {
        "category": "Direct Debit Charge",
        "total": "",
        "paid_amt": "",
        "waive_amt":"",
        "net_amt": "",
      }]
  }

}
