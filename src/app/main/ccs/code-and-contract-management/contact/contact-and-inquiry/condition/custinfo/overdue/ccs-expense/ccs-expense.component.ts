import { Component, OnInit } from '@angular/core';
import {ListExpenseModel} from "./List-Expense.model";
import {ExpenseModel} from "./ccs-expense.model";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ccs-expense',
  templateUrl: './ccs-expense.component.html'
})
export class CcsExpenseComponent implements OnInit {
  ds_Expense: ExpenseModel;
  List_Expense: ListExpenseModel[] = [];
  subscription: Subscription;

  list_array:any[];

  constructor(private custService: CustinfoService) {
    this.ds_Expense = new ExpenseModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.ds_Expense = data.ds_Expense;

        if (this.ds_Expense) {
          this.List_Expense = this.ds_Expense.List_Expense;

          this.list_array = [
            {
              "category": "Col Exp",
              "total": this.ds_Expense.lblExp_Col_Amt,
              "paid_amt": this.ds_Expense.lblExp_Col_Paid,
              "net_amt": this.ds_Expense.lblExp_Col_Total,
            },
            {
              "category": "Legal Fee",
              "total": this.ds_Expense.lblExp_Lg_Fee_Amt,
              "paid_amt": this.ds_Expense.lblExp_Lg_Fee_Paid,
              "net_amt": this.ds_Expense.lblExp_Lg_Fee_Total,
            },
            {
              "category": "Legal Exp",
              "total": this.ds_Expense.lblExp_Lg_Exp_Amt,
              "paid_amt": this.ds_Expense.lblExp_Lg_Exp_Paid,
              "net_amt": this.ds_Expense.lblExp_Lg_Exp_Total,
            },
            {
              "category": "Other Exp",
              "total": this.ds_Expense.lblExp_Other_Amt,
              "paid_amt": this.ds_Expense.lblExp_Other_Paid,
              "net_amt": this.ds_Expense.lblExp_Other_Total,
            },
            {
              "category": "Regis Exp",
              "total": this.ds_Expense.lblExp_Regis_Amt,
              "paid_amt": this.ds_Expense.lblExp_Regis_Paid,
              "net_amt": this.ds_Expense.lblExp_Regis_Total,
            },
            {
              "category": "Regis Exp(VAT)",
              "total": this.ds_Expense.lblExp_Regis_VAT_Amt,
              "paid_amt": this.ds_Expense.lblExp_Regis_VAT_Paid,
              "net_amt": this.ds_Expense.lblExp_Regis_VAT_Total,
            },
            {
              "category": "Advance Registration",
              "total": this.ds_Expense.lblAdv_Regis_Amt,
              "paid_amt": this.ds_Expense.lblAdv_Regis_Paid,
              "net_amt": this.ds_Expense.lblAdv_Regis_Total,
            },
          ]
        }
      }
    );


  }

}
