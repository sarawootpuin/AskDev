import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CaTodoBgpl} from "./ca-todo-bgpl";
import {TaskItem} from "../../todo-task/todo-task-item/task-item";
import {Subscription} from "rxjs/Subscription";
import {TodoService} from "../../todo.service";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-ca-bgpl',
  templateUrl: './list-ca-bgpl.component.html',
  styleUrls: ['./list-ca-bgpl.component.css']
})
export class ListCaBgplComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  subscription: Subscription;
  @Input() task: TaskItem;
  listCaTodoBgpl: CaTodoBgpl[] = [];
  isLoading: boolean = false;
  @ViewChild('searchInput') searchInput: ElementRef;
  cols: any[];
  subscriptionAmend : Subscription

  constructor(private todoService: TodoService,
              private userStorage: UserStorage,
              private router: Router) { }

  ngOnInit() {
    this.cols = [
      {field: 'no', header: 'No'},
      {field: 'caNo', header: 'CA No'},
      {field: 'apNo', header: 'AP No'},
      {field: 'sbuType', header: 'Credit Type'},
      {field: 'custName', header: 'Customer Name'},
      {field: 'applyDt', header: 'Apply Date'},
      {field: 'mktName', header: 'Mkt. Name'},
      {field: 'expireDt', header: 'Expire Date'}
    ];
  }

  ngAfterViewInit() {
    this.resetSearchInput();
  }

  ngOnChanges() {
    // let userCode = this.userStorage.getCode();
    let comCode = this.userStorage.getComCode();
    let userCode : string
    let url = location.hash
    if(url.search('home')> 0){
      userCode = this.userStorage.getCode()
    }else{
      userCode = this.userStorage.getSuborCode()
    }
    this.listCaTodoBgpl = [];
    this.resetSearchInput();

    if (this.task != undefined && this.task != null) {
      this.isLoading = true;
      this.subscription = this.todoService.todoCA(
        "web", userCode,comCode , this.task.taskCode
      ).subscribe(
        (data: any) => {
          if (data.MSG == 'Complete') {
            this.listCaTodoBgpl = CaTodoBgpl.parse(data.LIST_DATA);
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
    if(this.subscriptionAmend){
      this.subscriptionAmend.unsubscribe()
    }
  }

  resetSearchInput() {
    if (this.searchInput != null) {
      this.searchInput.nativeElement.value = '';
    }
  }

  rowSelectList(caTodoBgpl: CaTodoBgpl) {
    if (this.task.taskCode !== 'CA-01-4') {
      this.router.navigate(['/ca'], {
        queryParams: {
          ca_no: caTodoBgpl.caNo,
          task : this.task.taskCode
        }
      });
    } else {
      this.subscriptionAmend = this.todoService.amendCa("web", this.userStorage.getUserName(), caTodoBgpl.comCode, caTodoBgpl.caNo).subscribe(
        (json: any) => {
          const {data} = json;
          console.log(data);
          if (json.CODE == '200') {
            this.router.navigate(['/ca'], {
              queryParams: {
                com_code: caTodoBgpl.comCode,
                ca_no: caTodoBgpl.caNo,
                task: 'AM-01'
              }
            });
          }
        }
      );
    }
  }
}
