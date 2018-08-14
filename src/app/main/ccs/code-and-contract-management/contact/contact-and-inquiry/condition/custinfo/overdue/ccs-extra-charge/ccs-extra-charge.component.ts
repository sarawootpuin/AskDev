import { Component, OnInit } from '@angular/core';
import { CustinfoService } from "../../custinfo.service";
import { CustinfoModel } from './../../model/custinfo';

@Component({
  selector: 'app-ccs-extra-charge',
  templateUrl: './ccs-extra-charge.component.html'
})
export class CcsExtraChargeComponent implements OnInit {

  srviceCustModel: CustinfoModel;
  list_array: any[]
  constructor(private custService: CustinfoService) {
    this.srviceCustModel = new CustinfoModel();
  }

  ngOnInit() {
    this.list_array = [
      {
        "category": "Debt Extra Charge",
        "total": this.srviceCustModel.ds_extracharge.lblextra_debt,
        "paid_amt": this.srviceCustModel.ds_extracharge.lblextra_paid_debt,
        "waive_amt": this.srviceCustModel.ds_extracharge.lblextra_waive_debt,
        "net_amt": this.srviceCustModel.ds_extracharge.lblextra_debt_total,
      },
      {
        "category": "Legal Extra Charge",
        "total": this.srviceCustModel.ds_extracharge.lblextra_legal,
        "paid_amt": this.srviceCustModel.ds_extracharge.lblextra_paid_legal,
        "waive_amt": this.srviceCustModel.ds_extracharge.lblextra_waive_legal,
        "net_amt": this.srviceCustModel.ds_extracharge.lblextra_legal_total,
      }]
  }
}
