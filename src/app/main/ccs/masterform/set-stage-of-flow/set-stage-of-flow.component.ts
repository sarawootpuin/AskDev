import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MasterFormService} from "../masterform.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {LazyLoadEvent} from "primeng/primeng";
import {FlowStage} from "./model/setFlowStage.model";
import {Flow} from "../set-flow/model/set-flow.model";
import {insertupdateStage} from "./model/insertupdateStage.model";
import {Subscription} from "rxjs/Subscription";
import {deleteStage} from "./model/deleteStage.model";

@Component({
  selector: 'app-set-stage-of-flow',
  templateUrl: './set-stage-of-flow.component.html',
  styleUrls: ['./set-stage-of-flow.component.css']
})
export class SetStageOfFlowComponent implements OnInit {
  vFG_FlowStageLookUp: FormGroup;

  SelectedStageID: Number;
  SelectedStageName: String;
  SelectedFlowID: Number;
  totalRecords: Number;
  CurrMode: String = 'START';
  saveMode: Boolean = false;

  FlowLookUp: Flow[];
  dsFlowLookUp: Flow[];

  FlowStageLookUp: FlowStage[];
  FlowStageLookUpTmp: FlowStage[];
  dsFlowStageLookUp: FlowStage[];

  displayDlgNew: boolean = false;
  displayDlgDelete: boolean = false;
  displayErr: boolean = false;
  displaySuccessful: boolean = false;

  modelInsertUpdate :insertupdateStage;
  modelDelete: deleteStage;

  vMaxStageID: Number;

  subscription: Subscription;

  vMsg:String;
  msgErr: String;

  userName: string = '';
  code: string = '';

  constructor(private masterformService: MasterFormService,
              private userStorage: UserStorage) {
    this.vFG_FlowStageLookUp = new FormGroup({
      vFG_FlowID: new FormControl(),
      vFG_StageID: new FormControl(),
      vFG_StageName: new FormControl()
    });
  }

  ngOnInit() {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();

    this.onGetFlow();
    this.onGetFlowStage();
  }

  onGetFlow() {
    this.masterformService.getFlowLookUp("web", this.code).subscribe(
      (data: any) => {

        this.FlowLookUp = Flow.parse(data.LIST_DATA);

        this.dsFlowLookUp = this.FlowLookUp;
        this.SelectedFlowID = this.dsFlowLookUp[0].id;
      }
    );
  }

  onGetFlowStage() {
    this.masterformService.getFlowStageLookUp("web", this.code).subscribe(
      (data: any) => {
        this.FlowStageLookUp = FlowStage.parse(data.LIST_DATA);

        this.dsFlowStageLookUp = this.FlowStageLookUp;
        //filter
        this.onFilterStage(this.SelectedFlowID);

      }
    );
  }

  loadFlowStageLookUp(event: LazyLoadEvent) {
    setTimeout(() => {
      if (this.FlowStageLookUpTmp) {
        this.FlowStageLookUp = this.FlowStageLookUpTmp.slice(event.first, (event.first + event.rows));
      }
    }, 200);
  }

  onSelectFlow(event) {
    this.onFilterStage(event);
  }

  onFilterStage(pFlowID: Number) {
    this.FlowStageLookUp = this.dsFlowStageLookUp.filter(
      FlowStage => FlowStage.FlowID == pFlowID
    );

    this.FlowStageLookUpTmp = this.FlowStageLookUp;

    if (this.FlowStageLookUp.length > 0) {
      this.SelectedStageID = this.FlowStageLookUp[0].StageID;
      this.SelectedStageName = this.FlowStageLookUp[0].StageName;
      this.vMaxStageID = this.FlowStageLookUp[this.FlowStageLookUp.length-1].StageID.valueOf() + 1;
    } else {
      this.SelectedStageID = null;
      this.SelectedStageName = null;
      this.vMaxStageID = 0;
    }

    this.SelectedFlowID = pFlowID;
    this.totalRecords = this.FlowStageLookUp.length;

  }

  onSelectedRow(event) {
    this.SelectedStageID = event.data.StageID;
    this.SelectedStageName = event.data.StageName;
  }

  onNewClick() {
    this.CurrMode = 'NEW';
    this.saveMode = true;
    this.SelectedStageID = null;
    this.SelectedStageName = null;
  }

  onCancelClick() {
    if (this.CurrMode == 'NEW') {
      this.SelectedStageID = this.dsFlowStageLookUp[0].StageID;
      this.SelectedStageName = this.dsFlowStageLookUp[0].StageName;
    }
    this.CurrMode = 'START';
    this.saveMode = false;
  }

  onEditClick() {
    this.CurrMode = 'EDIT';
    this.saveMode = true;
  }

  onDeleteClick() {
    this.displayDlgDelete = true;
  }

  onSaveClick() {
    this.displayDlgNew = true;
  }

  onSubmit() {
    if (this.CurrMode === 'NEW') {
      if (this.onSearchStageName(this.SelectedStageName)) {
        this.displayErr = true;
        this.msgErr = 'มี Stage Name:' + this.SelectedStageName + ' นี้แล้ว';
        this.SelectedStageID = this.FlowStageLookUp[0].StageID;
        this.SelectedStageName = this.FlowStageLookUp[0].StageName;
      } else {
        this.modelInsertUpdate = new insertupdateStage();
        this.modelInsertUpdate.device = 'web';
        this.modelInsertUpdate.userName = this.code;
        this.modelInsertUpdate.flow_id = this.SelectedFlowID;
        this.modelInsertUpdate.stg_id = this.vMaxStageID;
        this.modelInsertUpdate.name = this.vFG_FlowStageLookUp.value.vFG_StageName;

        this.subscription = this.masterformService.InsertFlowStageLookUp(this.modelInsertUpdate).subscribe(
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
            this.onGetFlowStage();
          }
        );
      }
    } else if (this.CurrMode === 'EDIT') {
      this.modelInsertUpdate = new insertupdateStage();
      this.modelInsertUpdate.device = 'web';
      this.modelInsertUpdate.userName = this.code;
      this.modelInsertUpdate.flow_id = this.SelectedFlowID;
      this.modelInsertUpdate.stg_id = this.SelectedStageID;
      this.modelInsertUpdate.name = this.vFG_FlowStageLookUp.value.vFG_StageName;

      this.subscription = this.masterformService.UpdateFlowStageLookUp(this.modelInsertUpdate).subscribe(
        (data: any) => {
          this.vMsg = data.CODE;

          if (this.vMsg === "200") {
            this.displaySuccessful = true;
          } else {
            this.displayErr = true;
            this.msgErr = data.MSG;
          }

          this.onGetFlowStage();
        }
      );
    }

    this.CurrMode = 'START';
    this.saveMode = false;
  }

  onSearchStageName(pStageName:String){
    let result:boolean = false;
    for(let i=0;i<=this.FlowStageLookUp.length-1;i++){
      if (this.FlowStageLookUp[i].StageName === pStageName) {
        result = true;
        break;
      }
    }
    return result;
  }

  onDeleteItem() {
    this.modelDelete = new deleteStage();
    this.modelDelete.device = 'web';
    this.modelDelete.userName = this.code;
    this.modelDelete.flow_id = this.SelectedFlowID;
    this.modelDelete.stg_id = this.vFG_FlowStageLookUp.value.vFG_StageID;

    this.subscription = this.masterformService.DeleteFlowStageLookUp(this.modelDelete).subscribe(
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
        this.onGetFlowStage();
      }
    );

    this.CurrMode = 'START';
    this.saveMode = false;

    this.SelectedStageID = null;
    this.SelectedStageName = null;

  }
}
