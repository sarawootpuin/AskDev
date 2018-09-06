import {
  AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {TaskItem} from "../../todo-task/todo-task-item/task-item";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {TodoService} from "../../todo.service";
import {AppFormTodo} from "./app-form-todo";

@Component({
  selector: 'app-list-app-form',
  templateUrl: './list-app-form.component.html',
  styleUrls: ['./list-app-form.component.css']
})
export class ListAppFormComponent implements OnInit, OnChanges, OnDestroy,
  AfterViewInit {
  subscription: Subscription;
  @Input() task: TaskItem;
  listAppFormTodo: AppFormTodo[] = [];
  isLoading: boolean = false;
  @ViewChild('searchInput') searchInput: ElementRef;
  cols: any[];

  constructor(private todoService: TodoService,
              private userStorage: UserStorage,
              private router: Router) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'apNo', header: 'AP NO'},
      {field: 'caNo', header: 'CA No'},
      {field: 'sbuType', header: 'Business Type'},
      {field: 'custName', header: 'Customer Name'},
      {field: 'saleCallNo', header: 'Sale Call No'},
      {field: 'currentOwner', header: 'Current Owner'},
      {field: 'sendDate', header: 'Send Date'}
    ];
  }

  ngAfterViewInit() {
    this.resetSearchInput();
  }

  ngOnChanges() {
    let userCode = this.userStorage.getSuborCode();
    let comCode = this.userStorage.getComCodePort();
    let userName = this.userStorage.getSuborUserName();
    this.listAppFormTodo = [];
    this.resetSearchInput();

    if (this.task != undefined && this.task != null) {
      this.isLoading = true;
      this.subscription = this.todoService.getListAppForm(
        "web", userName , userCode, comCode, this.task.taskCode).subscribe(
        (data: any) => {
          if (data.CODE == 200) {
            this.listAppFormTodo = AppFormTodo.parse(data.LIST_DATA);
          } else {
          }
          this.isLoading = false;
        },
        (error: any) => {
          this.isLoading = false;
        });
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

  rowSelectList(todoSelected: AppFormTodo) {
    this.router.navigate(['/appForm']
      , {
        queryParams: {
          com_code: todoSelected.comCode,
          ap_no: todoSelected.apNo
        }
      });
  }

}
