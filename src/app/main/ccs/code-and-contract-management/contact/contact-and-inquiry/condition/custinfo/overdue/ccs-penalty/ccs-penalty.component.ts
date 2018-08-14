import { Component, OnInit } from '@angular/core';
import { CustinfoService } from "../../custinfo.service";
import { PenaltyModel } from "../../model/penalty";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-ccs-penalty',
  templateUrl: './ccs-penalty.component.html',
})
export class CcsPenaltyComponent implements OnInit {
  ds_penalty: PenaltyModel;
  subscription: Subscription;

  list_array: any[] = [];


  constructor(private custService: CustinfoService) {
    this.ds_penalty = new PenaltyModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.ds_penalty = data.ds_penalty;

        this.list_array = [
          {
            "category": "Interest Charge Actually Incurred",
            "total": this.ds_penalty.lblpinterest_actual,
            "paid_amt": this.ds_penalty.lblppaid_interest,
            "waive_amt": this.ds_penalty.lblpwaive_interest,
            "net_amt": this.ds_penalty.lblpnet_interest,
          },
          {
            "category": "Interest Charge as the result of payment as of this payment",
            "total": this.ds_penalty.lblpinterest_overdue,
            "paid_amt": "",
            "waive_amt": "",
            "net_amt": "",

          },
          {
            "category": "Late Charge Actually",
            "total": this.ds_penalty.lblplate_actual,
            "paid_amt": this.ds_penalty.lblppaid_late,
            "waive_amt": this.ds_penalty.lblpwaive_late,
            "net_amt": this.ds_penalty.lblpnet_late,
          },
          {
            "category": "Late Charge as the result of payment as of this payment",
            "total": this.ds_penalty.lblplate_overdue,
            "paid_amt": "",
            "waive_amt": "",
            "net_amt": "",

          },
          {
            "category": "Returned Cheque Charge",
            "total": this.ds_penalty.lblprtn_charge,
            "paid_amt": this.ds_penalty.lblppaid_rtn_charge,
            "waive_amt": this.ds_penalty.lblpwaive_rtn_charge,
            "net_amt": this.ds_penalty.lblpnet_rtn_charge,

          },
          {
            "category": "Direct Cheque Charge",
            "total": this.ds_penalty.lblpdirect_debit_charge,
            "paid_amt": this.ds_penalty.lblppaid_direct_debit_charge,
            "waive_amt": this.ds_penalty.lblpwaive_direct_debit_charge,
            "net_amt": this.ds_penalty.lblpnet_direct_debit_charge,

          },
          {
            "category": "Status Charge",
            "total": this.ds_penalty.lblpstatus_charge,
            "paid_amt": this.ds_penalty.lblppaid_status_charge,
            "waive_amt": this.ds_penalty.lblpwaive_status_charge,
            "net_amt": this.ds_penalty.lblpnet_status_charge,

          },
          {
            "category": "Debt Extra Charge",
            "total": this.ds_penalty.lblpdebt_extra_charge,
            "paid_amt": this.ds_penalty.lblppaid_debt_extra_charge,
            "waive_amt": this.ds_penalty.lblpwaive_debt_extra_charge,
            "net_amt": this.ds_penalty.lblpnet_debt_extra_charge,

          },
          {
            "category": "Legal Extra Charge",
            "total": this.ds_penalty.lblplegal_extra_charge,
            "paid_amt": this.ds_penalty.lblppaid_legal_extra_charge,
            "waive_amt": this.ds_penalty.lblpwaive_legal_extra_charge,
            "net_amt": this.ds_penalty.lblpnet_legal_extra_charge,

          },
          {
            "category": "Repossess Up Country Charge",
            "total": this.ds_penalty.lblprepos_charge,
            "paid_amt": this.ds_penalty.lblppaid_repos_charge,
            "waive_amt": this.ds_penalty.lblpwaive_repos_charge,
            "net_amt": this.ds_penalty.lblpnet_repos_charge,

          },
          {
            "category": "Legal Charge",
            "total": this.ds_penalty.lblplegal_charge,
            "paid_amt": this.ds_penalty.lblppaid_legal_charge,
            "waive_amt": this.ds_penalty.lblpwaive_legal_charge,
            "net_amt": this.ds_penalty.lblpnet_legal_charge,

          },
        ];
      }
    );

  }
}
