import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TaskItem} from "../../../todo-task/todo-task-item/task-item";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {UserStorage} from "../../../../../../shared/user/user.storage.service";
import {TodoService} from "../../../todo.service";
import {ToDoVerifierStg1} from "./model/todo-verifier-stg1";
import {ListSearchComVerified} from "./model/list-search-com-verified";
import {ListMarketingVerified} from "./model/list-marketing-verified";
import {ListInOutVerified} from "./model/list-in-out-verified";
import {ListAssgnStusVerified} from "./model/list-assgn-stus-verified";
import {ActionDialogComponent} from "../../../../../../shared/center/action-dialog/action-dialog.component";
import {AlertDialogComponent} from "../../../../../../shared/center/alert-dialog/alert-dialog.component";
declare var $: any;

@Component({
  selector: 'app-list-verified',
  templateUrl: './list-verified.component.html',
  styleUrls: ['./list-verified.component.css']
})
export class ListVerifiedComponent implements OnInit, OnChanges, OnDestroy,
  AfterViewInit {
  subscription: Subscription;
  @Input() task: TaskItem;
  isLoading: boolean = false;
  @ViewChild('searchInput') searchInput: ElementRef;
  listTodoVerifier: ToDoVerifierStg1[] = [];
  listSearchCom: ListSearchComVerified[] = [];
  listEmpCom: ListSearchComVerified[] = [];
  listMarketing: ListMarketingVerified[] = [];
  listInOut: ListInOutVerified[] = [];
  listAssgnStus: ListAssgnStusVerified[] = [];
  cols: any[];

  // Mos //
  @ViewChild('dialogFormVerified') dialogFormVerified: ActionDialogComponent;
  //@ViewChild('dialogFormVerified') dialogFormVerified: ElementRef;
  @ViewChild('alerDialog') alerDialog: AlertDialogComponent;
  selectedTodo: ToDoVerifierStg1[] = [];
  indexCom: number;

  destCom: string;
  verfier: string;
  inOut: string;
  assgnStus: string;
  comment: string;

  @ViewChild("dropCom") dropCom: ElementRef;
  @ViewChild("dropVer") dropVer: ElementRef;
  @ViewChild("dropInOut") dropInOut: ElementRef;
  @ViewChild("dropAssgnStus") dropAssgnStus: ElementRef;

  constructor(private todoService: TodoService,
              private userStorage: UserStorage,
              private router: Router) {
  }

  ngOnInit() {
    // this.cols = [
    //   {field: 'orgCom', header: 'ต้นทาง',style:{'width':'100px'}},
    //   {field: 'workCom', header: 'ปลายทาง',style:{'width':'100px'}},
    //   {field: 'refNo', header: 'เลขอ้างอิง',style:{'width':'150px'}},
    //   {field: 'entType', header: 'ประเภท Entity',style:{'width':'150px'}},
    //   {field: 'name', header: 'ชื่อ-นามสกุล',style:{'width':'150px'}},
    //   {field: 'verEmpNme', header: 'Verifier',style:{'width':'150px'}},
    //   {field: 'inOut', header: 'ประเภทการตรวจสอบ',style:{'width':'150px'}},
    //   {field: 'assgnStus', header: 'สถานะAssignงาน',style:{'width':'150px'}},
    //   {field: 'mktEmpName', header: 'User MKT/CS',style:{'width':'150px'}},
    //   {field: 'prvStg', header: 'Stageก่อนหน้า',style:{'width':'100px'}},
    //   {field: 'entCd', header: 'รหัสEntity',style:{'width':'100px'}},
    //   {field: 'zipCd', header: 'รหัสไปรษณีย์',style:{'width':'100px'}},
    //   {field: 'revDtel', header: 'Comment',style:{'width':'250px'}},
    // ];
  }

  ngAfterViewInit() {

  }

  ngOnChanges() {
    let userName = this.userStorage.getUserName();
    this.listTodoVerifier = [];
    this.listSearchCom = [];
    this.listEmpCom = [];
    this.listMarketing = [];
    this.listInOut = [];
    this.listAssgnStus = [];
    if (this.task != undefined && this.task != null) {
      this.isLoading = true;
      this.subscription = this.todoService.getScoringTodoAssginTaskPost(
        "web", userName, "Owner", 1).subscribe(
        (data: any) => {
          if (data.MSG == 'Complete') {

            console.log(data);

            this.listTodoVerifier = ToDoVerifierStg1.parse(data.LIST_DATA);
            this.listSearchCom = ListSearchComVerified.parse(data.DATA.LIST_SEARCH_COM);
            this.listEmpCom = ListSearchComVerified.parse(data.DATA.LIST_EMP_COM);
            this.listMarketing = ListMarketingVerified.parse(data.DATA.LIST_MARKETING);
            this.listInOut = ListInOutVerified.parse(data.DATA.LIST_IN_OUT);
            this.listAssgnStus = ListAssgnStusVerified.parse(data.DATA.LIST_ASSGN_STUS);

            console.log(this.listEmpCom);

            // Mos //
            this.indexCom = 0;
            this.verfier = this.listEmpCom[0].listVerifier[0].verifier;
            this.inOut = this.listInOut[0].inOut;
            this.assgnStus = this.listAssgnStus[0].assgnStus;

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

  rowSelectList(todoSelected: ToDoVerifierStg1) {
    console.log(todoSelected)
  }

  // Mos //
  openDialog() {
    if (this.selectedTodo.length > 0) {
      this.dialogFormVerified.open();
    }
    else {
      this.alerDialog.setTitle('Warning Information');
      this.alerDialog.setMessage('Please select data');
      this.alerDialog.open();
    }
  }

  // Mos //
  clearDropdown(){
    this.destCom = "";
    this.verfier = "";
    this.inOut = "";
    this.assgnStus = "";
    this.comment = "";

    this.indexCom = 0;
    this.dropCom.nativeElement.value = this.listEmpCom[0].comCode;
    this.dropVer.nativeElement.value = this.listEmpCom[0].listVerifier[0].verifier;
    this.dropInOut.nativeElement.value = this.listInOut[0].inOut;
    this.dropAssgnStus.nativeElement.value = this.listAssgnStus[0].assgnStus;
  }

  // Mos //
  submitData() {
    this.destCom = this.listEmpCom[this.indexCom].comCode;
    let data = {"com" : this.destCom,
                "ver" : this.verfier,
                "inOut" : this.inOut,
                "assgn" : this.assgnStus,
                "comment" : this.comment};
    console.log(data);

    console.log("Json");
    console.log(this.selectedTodo);

    for(let json of this.selectedTodo)
    {
      json.workCom = this.destCom;
      json.verEmpNme = this.verfier;
      json.inOut = this.inOut;
      json.assgnStus = this.assgnStus;
      json.revDtel = this.comment;
    }

    console.log("Modified Json");
    console.log(JSON.stringify(this.selectedTodo));

    let userName = this.userStorage.getUserName();
    this.todoService.submitScoringTodoAssginTask(
      "web", userName, this.selectedTodo).subscribe(
      (data: any) => {
        if (data.MSG == 'Complete') {
          this.alerDialog.setTitle('');
          this.alerDialog.setMessage('Sumbit Complete');
          this.alerDialog.open();

          this.selectedTodo = [];
          this.clearDropdown();
        }
        else {
          console.log(data);
        }
      }
    );
  }
}
