import {Component, OnDestroy, OnInit} from '@angular/core';
import {MasterFormService} from "../masterform.service";
import {LazyLoadEvent, Message} from "primeng/primeng";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {insertupdateFlow} from "./model/insertupdateFlow.model";
import {deleteFlow} from "./model/deleteFlow.model";
import {Flow} from "./model/set-flow.model";

@Component({
  selector: 'app-set-flow',
  templateUrl: './set-flow.component.html',
  styleUrls: ['./set-flow.component.css']
})
export class SetFlowComponent implements OnInit, OnDestroy {

  msgs: Message[] = [];

  FlowLookUp: Flow[];
  dataSource: Flow[];

  modelInsertUpdate: insertupdateFlow;
  modelDelete: deleteFlow;

  subscription: Subscription;

  SelectedID: Number;
  SelectedName: String;
  totalRecords: Number;
  CurrMode: String = 'START';
  saveMode: Boolean = false;

  vFG_FlowLookUp: FormGroup;
  displayDlgNew: boolean = false;
  displayDlgDelete: boolean = false;
  displayErr: boolean = false;
  displaySuccessful: boolean = false;

  msgErr: String;

  vMaxFlowID: Number;
  vMsg:String;

  userName: string = '';
  code: string = '';

  constructor(private masterformService: MasterFormService,
              private userStorage: UserStorage) {
    this.vFG_FlowLookUp = new FormGroup({
      vFG_id: new FormControl(),
      vFG_name: new FormControl()
    });
  }

  ngOnInit() {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();

    this.onGetFlow();
    console.log('onInit:set-flow');

  }

  onGetFlow() {
    this.subscription = this.masterformService.getFlowLookUp("web", this.code).subscribe(
      (data: any) => {
        this.FlowLookUp = Flow.parse(data.LIST_DATA);
        // this.FlowLookUp = JSON.parse(JSON.stringify(data.LIST_DATA));

        this.vMaxFlowID = this.FlowLookUp[this.FlowLookUp.length-1].id.valueOf() + 1;
//console.log(this.FlowLookUp[this.FlowLookUp.length-1]);
        this.dataSource = this.FlowLookUp;
        this.totalRecords = this.dataSource.length;
        this.FlowLookUp = this.dataSource.slice(0, 8);

        this.SelectedID = this.FlowLookUp[0].id;
        this.SelectedName = this.FlowLookUp[0].name;

      }
    );
  }

  onSelectedRow(event) {
    this.SelectedID = event.data.id;
    this.SelectedName = event.data.name;
  }

  loadFlowLookUp(event: LazyLoadEvent) {
    // this.FlowLookUp = this.dataSource.slice(event.first, (event.first + event.rows));

    setTimeout(() => {
      if (this.dataSource) {
        this.FlowLookUp = this.dataSource.slice(event.first, (event.first + event.rows));
      }
    }, 200);
  }

  onNewClick() {
    this.CurrMode = 'NEW';
    this.saveMode = true;
    this.SelectedID = null;
    this.SelectedName = null;
  }

  onEditClick() {
    this.CurrMode = 'EDIT';
    this.saveMode = true;
  }

  onDeleteClick() {
    this.displayDlgDelete = true;
  }

  onCancelClick() {
    if (this.CurrMode == 'NEW') {
      this.SelectedID = this.dataSource[0].id;
      this.SelectedName = this.dataSource[0].name;
    }
    this.CurrMode = 'START';
    this.saveMode = false;
  }

  onSaveClick() {
    this.displayDlgNew = true;
  }

  onSubmit() {
    if (this.CurrMode === 'NEW') {

      if (this.onSearchFlowName(this.SelectedName)) {
        this.displayErr = true;
        this.msgErr = 'มี Flow Name:' + this.SelectedName + ' นี้แล้ว';
        this.SelectedID = this.dataSource[0].id;
        this.SelectedName = this.dataSource[0].name;
      }else {
        this.modelInsertUpdate = new insertupdateFlow();
        this.modelInsertUpdate.device = 'web';
        this.modelInsertUpdate.userName = this.code;
        this.modelInsertUpdate.id = this.vMaxFlowID;
        this.modelInsertUpdate.name = this.vFG_FlowLookUp.value.vFG_name;

        this.subscription = this.masterformService.InsertFlowLookUp(this.modelInsertUpdate).subscribe(
          (data: any) => {
            this.vMsg = data.CODE;

            if (this.vMsg === "200") {
              console.log('success');
              this.displaySuccessful = true;
              // this.msgs = [];
              // this.msgs.push({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
            } else {
              console.log('fail');
              this.displayErr = true;
              this.msgErr = data.MSG;
              console.log(this.msgErr);
              // this.msgs = [];
              // this.msgs.push({severity: 'info', summary: 'Fail', detail: 'Form Submitted'});
            }
            //console.log(data);
            this.onGetFlow();
          }
        );
      }
    } else if (this.CurrMode === 'EDIT') {
      this.modelInsertUpdate = new insertupdateFlow();
      this.modelInsertUpdate.device = 'web';
      this.modelInsertUpdate.userName = this.code;
      this.modelInsertUpdate.id = this.vFG_FlowLookUp.value.vFG_id;
      this.modelInsertUpdate.name = this.vFG_FlowLookUp.value.vFG_name;

      this.subscription = this.masterformService.UpdateFlowLookUp(this.modelInsertUpdate).subscribe(
        (data: any) => {
          this.vMsg = data.CODE;

          if (this.vMsg === "200") {
            this.displaySuccessful = true;
            // this.msgs = [];
            // this.msgs.push({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
          } else {
            this.displayErr = true;
            this.msgErr = data.MSG;
            // this.msgs = [];
            // this.msgs.push({severity: 'info', summary: 'Fail', detail: 'Form Submitted'});
          }

          this.onGetFlow();
        }
      );
    }

    this.CurrMode = 'START';
    this.saveMode = false;
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  onDeleteItem() {
    this.modelDelete = new deleteFlow();
    this.modelDelete.device = 'web';
    this.modelDelete.userName = this.code;
    this.modelDelete.id = this.vFG_FlowLookUp.value.vFG_id;

    this.subscription = this.masterformService.DeleteFlowLookUp(this.modelDelete).subscribe(
      (data: any) => {
        this.vMsg = data.CODE;

        if (this.vMsg === "200") {
          this.displaySuccessful = true;
          // this.msgs = [];
          // this.msgs.push({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
        } else {
          this.displayErr = true;
          this.msgErr = data.MSG;
          // this.msgs = [];
          // this.msgs.push({severity: 'info', summary: 'Fail', detail: 'Form Submitted'});
        }
        this.onGetFlow();
      }
    );

  }

  onSearchFlowName(pFlowName:String){
    let result:boolean = false;
    for(let i=0;i<=this.dataSource.length-1;i++){
      if (this.dataSource[i].name === pFlowName) {
        result = true;
        break;
      }
    }
    return result;
  }

}
