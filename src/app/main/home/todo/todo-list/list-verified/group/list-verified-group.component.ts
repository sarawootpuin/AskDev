import {
  AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {TaskItem} from "../../../todo-task/todo-task-item/task-item";
import {ActivatedRoute, Router} from "@angular/router";
import {UserStorage} from "../../../../../../shared/user/user.storage.service";
import {TodoService} from "../../../todo.service";
import {ToDoVerifier} from "./todo-verifier";

@Component({
  selector: 'app-list-verified-group',
  templateUrl: './list-verified-group.component.html',
  styleUrls: ['./list-verified-group.component.css']
})
export class ListVerifiedGroupComponent implements OnInit, OnChanges, OnDestroy,
  AfterViewInit {
  subscription: Subscription;
  @Input() task: TaskItem;
  isLoading: boolean = false;
  @ViewChild('searchInput') searchInput: ElementRef;
  listTodoVerifier: ToDoVerifier[] = [];
  cols: any[];

  constructor(private todoService: TodoService,
              private userStorage: UserStorage,
              private router: Router) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'ref_no', header: 'เลขที่อ้างอิง'},
      {field: 'ent_typ', header: 'ประเภท Entity'},
      {field: 'ent_cd', header: 'รหัส Entity'},
      {field: 'ent_cat', header: 'บุคคล/นิติบุคคล'},
      {field: 'name', header: 'ชื่อ-นามสกุล'},
      {field: 'start_scr_dt', header: 'เริ่มทำ Scoring'},
      {field: 'run_no', header: 'Running'},
    ];
  }

  ngAfterViewInit() {
    this.resetSearchInput();
  }

  ngOnChanges() {
    let userName = this.userStorage.getUserName();
    let comCode = this.userStorage.getComCodePort();
    this.listTodoVerifier = [];
    this.resetSearchInput();


    if (this.task != undefined && this.task != null) {
      this.isLoading = true;
      this.subscription = this.todoService.getScoringTodo(
        "web", userName, comCode, parseInt(this.task.taskCode.substring(3))
      ).subscribe(
        (data: any) => {
          if (data.MSG == 'Complete') {
            this.listTodoVerifier = ToDoVerifier.parse(data.LIST_DATA);
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

  rowSelectList(todoVerifier: ToDoVerifier) {
    //alert(todoVerifier.ref_no);
    window.scrollTo(0,0);
    setTimeout(()=>{
      this.router.navigate(['/scoring/verify-detail']
        , {
          queryParams: {
            run_no: todoVerifier.run_no,
            com_code: todoVerifier.com_code,
            ref_no: todoVerifier.ref_no,
            ent_cd: todoVerifier.ent_cd,
            stg_id: this.task.taskCode.substring(3)
          }
        });
    },200);
    // this.router.navigate(['/SaleCall'], {
    //   queryParams: {
    //     sale_call_no: saleCallSelected.sale_call_no,
    //     card_no: saleCallSelected.card_no
    //   }
    // });
  }
}
