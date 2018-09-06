import {
  AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {TaskItem} from "../../todo-task/todo-task-item/task-item";
import {TodoService} from "../../todo.service";
import {SaleCallTodo} from "./sale-call-todo";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {Router} from "@angular/router";
import {DataTable, Message} from "primeng/primeng";

@Component({
  selector: 'app-list-sale-call',
  templateUrl: './list-sale-call.component.html',
  styleUrls: ['./list-sale-call.component.css']
})
export class ListSaleCallComponent implements OnInit, OnChanges, OnDestroy,
  AfterViewInit {
  subscription: Subscription;
  @Input() task: TaskItem;
  listSalecallTodo: SaleCallTodo[] = [];
  isLoading: boolean = false;
  @ViewChild('searchInput') searchInput: ElementRef;
  cols: any[];

  constructor(private todoService: TodoService,
              private userStorage: UserStorage,
              private router: Router) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'COM_CODE', header: 'COM CODE'},
      {field: 'sale_call_no', header: 'Sale Call No'},
      {field: 'COMP_ENT_CODE', header: 'Customer Code'},
      {field: 'COMP_THA_NME', header: 'Customer Name'},
      {field: 'COMP_ENG_NME', header: 'Customer Name Eng'},
      {field: 'MKT_NAME', header: 'Officer Name'}
    ];
  }

  ngAfterViewInit() {
    this.resetSearchInput();
  }

  ngOnChanges() {
    // let userName = this.userStorage.getSuborUserName();
    // let code = this.userStorage.getSuborCode();

    let code : string
    let userName : string
    let url = location.hash
    if(url.search('home')> 0){
      code = this.userStorage.getCode()
      userName = this.userStorage.getUserName()
    }else{
      code = this.userStorage.getSuborCode()
      userName = this.userStorage.getSuborUserName();
    }

    this.listSalecallTodo = [];
    this.resetSearchInput();

    if (this.task != undefined && this.task != null) {
      this.isLoading = true;
      this.subscription = this.todoService.getListSaleCall(
        "web", userName, this.task.taskName, code
      ).subscribe(
        (data: any) => {
          console.log(data);
          if (data.MSG == 'Complete') {
            this.listSalecallTodo = SaleCallTodo.parse(data.LIST_DATA);
          } else {
          }

          this.isLoading = false;
        },
        (error: any) => {
          this.isLoading = false;
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  resetSearchInput() {
    if (this.searchInput != null) {
      this.searchInput.nativeElement.value = '';
    }
  }

  rowSelectList(saleCallSelected: SaleCallTodo) {
    console.log(this.router.navigate)
    if (this.task.taskName == 'Cross Expense') {
      this.router.navigate(['/SaleCall/crossExpense'], {
       queryParams: {
          sale_call_no: saleCallSelected.sale_call_no,
          seq: saleCallSelected.SEQ_NO,
          task : this.task.taskName
        }
      });
    }else {
      this.router.navigate(['/SaleCall'], {
        queryParams: {
          sale_call_no: saleCallSelected.sale_call_no,
          card_no: saleCallSelected.card_no,
          task : this.task.taskName
        }
      });
    }
  }

}
