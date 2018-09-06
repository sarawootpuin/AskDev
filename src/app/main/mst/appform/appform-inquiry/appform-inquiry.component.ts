import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {AppFormTodo} from "../../../home/todo/todo-list/list-app-form/app-form-todo";
import {TodoService} from "../../../home/todo/todo.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appform-inquiry',
  templateUrl: './appform-inquiry.component.html'
})
export class AppFormInQuiryComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  subscription: Subscription;
  isLoading: boolean = false;
  cols: any[];
  listAppFormTodo: AppFormTodo[] = [];
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private todoService: TodoService,
              private userStorage: UserStorage,
              private router: Router) {
    this.isLoading = false;
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
    let userCode = this.userStorage.getCode();
    let comCode = this.userStorage.getComCodePort();
    let userName = this.userStorage.getUserName();
    this.listAppFormTodo = [];
    this.resetSearchInput();

    this.isLoading = true;
    this.subscription = this.todoService.getListAppForm(
      "web", userName ,userCode, comCode, "AP-00").subscribe(
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

  ngAfterViewInit() {
    this.resetSearchInput();
  }

  ngOnChanges() {
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
          ap_no: todoSelected.apNo,
          taskCode: "AP-00"
        }
      });
  }

}
