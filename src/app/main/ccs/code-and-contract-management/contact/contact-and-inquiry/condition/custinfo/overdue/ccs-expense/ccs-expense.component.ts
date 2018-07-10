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

  constructor(private custService: CustinfoService) {
    this.ds_Expense = new ExpenseModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.ds_Expense = data.ds_Expense;

        if (this.ds_Expense) {
          this.List_Expense = this.ds_Expense.List_Expense;
        }
      }
    );
  }

}
