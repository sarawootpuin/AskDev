import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-cheque-return',
  templateUrl: './cheque-return.component.html'
})
export class CcsChequeReturnComponent implements OnInit {

  list_array: any[]
  constructor(private custService: CustinfoService) {
   }

  ngOnInit() {
    this.list_array = [
      {
        "category": "Cheque Return Charge",
        "total": "",
        "paid_amt": "",
        "waive_amt": "",
        "net_amt": "",
      }]
  }

}
