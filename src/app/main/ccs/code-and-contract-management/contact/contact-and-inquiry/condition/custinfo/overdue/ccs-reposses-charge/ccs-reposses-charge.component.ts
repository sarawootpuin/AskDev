import { CustinfoModel } from './../../model/custinfo';
import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-reposses-charge',
  templateUrl: './ccs-reposses-charge.component.html'
})
export class CcsRepossesChargeComponent implements OnInit {

  srviceCustModel: CustinfoModel;
  list_array : any[]
  constructor(private custService: CustinfoService) {
    this.srviceCustModel = new CustinfoModel();

   }
 
  ngOnInit() {
    this.list_array = [
      {
        "category": "Status Charge",
        "total": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_status,
        "paid_amt": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_paid_status,
        "waive_amt":this.srviceCustModel.ds_stslegalreposchrge.lblcharge_waive_status,
        "net_amt": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_net_status,
      },
      {
        "category": "Legal Charge",
        "total": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_legal,
        "paid_amt": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_paid_legal,
        "waive_amt":this.srviceCustModel.ds_stslegalreposchrge.lblcharge_waive_legal,
        "net_amt": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_net_legal,
      },
      {
        "category": "Reposses Up Country Charge",
        "total": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_repos,
        "paid_amt": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_paid_repos,
        "waive_amt":this.srviceCustModel.ds_stslegalreposchrge.lblcharge_waive_repos,
        "net_amt": this.srviceCustModel.ds_stslegalreposchrge.lblcharge_net_repos,
      }
    ]
  }

}
