import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {SaleCallVisitService} from "../sale-call-visit.service";
import {Subscription} from "rxjs/Subscription";
import {SaleCallTodo} from "../../../home/todo/todo-list/list-sale-call/sale-call-todo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-call-visit-inquery',
  templateUrl: './call-visit-inquery.component.html',
  providers : [SaleCallVisitService]
})
export class CallVisitInqueryComponent implements OnInit,OnDestroy {

  subscription: Subscription;
  listSalecallTodo: SaleCallTodo[] = [];
  isLoading : boolean = true;
  cols: any[];
  isAmend : boolean = false;
  title : string;
  task : string;
  constructor(private userStorage: UserStorage,
              private saleCallVisitService: SaleCallVisitService,
              private router: Router) {
    
    this.cols = [
      {field: 'sale_call_no', header: 'Sale Call No'},
      {field: 'COMP_ENT_CODE', header: 'Customer Code'},
      {field: 'COMP_THA_NME', header: 'Customer Name'},
      {field: 'COMP_ENG_NME', header: 'Customer Name Eng'},
      {field: 'PROCESS_NAME', header: 'Program Name'},
      {field: 'MKT_NAME', header: 'Officer Name'}
    ];
  }

  ngOnInit() {
    let userName = this.userStorage.getUserName();
    let code = this.userStorage.getCode();
    this.isAmend = this.router.url.includes("amend");
    this.isAmend ? this.task = 'amend' : this.task = 'inquery';
    this.subscription = this.saleCallVisitService.getListSaleCall(
      "web", userName, this.task, code
    ).subscribe(
      (data: any) => {
        if (data.MSG == 'Complete') {
          this.isLoading = false;
          this.isAmend ? this.title = 'Sale Call Amend SMS' : this.title = 'Sale Call Inquery';
          this.listSalecallTodo = SaleCallTodo.parse(data.LIST_DATA);
          //console.log(this.listSalecallTodo);
        } else {
          //console.log(data,code,this.task);
          this.title = 'Error Service';
        }

        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = false;
      }
    );
  }

  rowSelectList(saleCallSelected: SaleCallTodo) {
    if (!this.isAmend) {
      this.router.navigate(['/../SaleCall'], {
        queryParams: {
          sale_call_no: saleCallSelected.sale_call_no,
          card_no: saleCallSelected.card_no,
          task : saleCallSelected.PROCESS_NAME
        }
      })
    } else {
      this.router.navigate(['/../SaleCall'], {
        queryParams: {
          sale_call_no: saleCallSelected.sale_call_no,
          card_no: saleCallSelected.card_no,
          task : saleCallSelected.PROCESS_NAME,
          amend : 'Y'
        }
      })
    }
  }

  ngOnDestroy(){
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

}
