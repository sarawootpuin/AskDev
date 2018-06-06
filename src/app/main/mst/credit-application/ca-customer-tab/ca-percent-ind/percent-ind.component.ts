import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {caPcnInd} from "../../model/ca-pcnind";
import {creditApplicationService} from "../../credit-application.service";
import {caHead} from "../../model/ca-head";
import {caListMaster} from "../../model/ca_listmaster";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-ca-percent-ind',
  templateUrl: './percent-ind.component.html',
})
export class CaPercentIndComponent implements OnInit,OnDestroy {

  subscripData: Subscription;
  subscripMaster: Subscription;

  myCaHead : caHead ;

  listIndus : caPcnInd[] ;
  selectIndus : caPcnInd ;

  listINE  : caListMaster[];
  listIND  : caListMaster[];


  @ViewChild('actiondialog') actiondialog: ActionDialogComponent;

  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {
    this.selectIndus = new caPcnInd();

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj : caHead ) => {
        this.myCaHead = obj ;
        this.listIndus = this.myCaHead.listpcnind ;

        if (this.listIndus){
          for (let i = 0;i < this.listIndus.length ; i++)
          {
            let ChooseNew = this.listINE.find(ObjTemp => ObjTemp.id_code == this.listIndus[i].new_ind_code);
            if (ChooseNew)
            {this.listIndus[i].new_ind_desc = ChooseNew.remark ; }

            let ChooseOld = this.listIND.find(ObjTemp => ObjTemp.id_code == this.listIndus[i].old_ind_code);
            if (ChooseOld)
            {this.listIndus[i].old_ind_desc = ChooseOld.remark ; }
          }
        }
      }
    );

    this.subscripMaster =  this.creditApplicationService.eventListMaster.subscribe(
      (obj) =>{
        this.listINE = this.creditApplicationService.listINE ;
        this.listIND = this.creditApplicationService.listIND ;

      }
    );
  }

  ngOnDestroy(){
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }

  pcntAction : string ;
  labelOkPcnt : string ;
  tempmySelectPCNT : caPcnInd = new caPcnInd() ;
  selectPCNT : boolean ;

  pcntAddorEdit(action: string) {
    this.pcntAction = action;
    this.selectPCNT = true;
    this.tempmySelectPCNT = new caPcnInd();
    if (action == 'Add') {
      this.tempmySelectPCNT.com_code = this.myCaHead.com_code;
      this.tempmySelectPCNT.sub_id = this.myCaHead.listpcnind.length + 1;
      this.tempmySelectPCNT.ent_code = this.myCaHead.cus_code;
      this.labelOkPcnt = 'Add' ;
      this.actiondialog.setTitle('Add');
      this.actiondialog.open();
    }
    else if (action == 'Edit') {
      if (this.selectIndus) {
        this.tempmySelectPCNT.new_ind_code = this.selectIndus.new_ind_code;
        this.tempmySelectPCNT.old_ind_code = this.selectIndus.old_ind_code;
        this.tempmySelectPCNT.ind_pcnt = this.selectIndus.ind_pcnt;
        this.tempmySelectPCNT.rmrk = this.selectIndus.rmrk;
        this.labelOkPcnt = 'Ok' ;
        this.actiondialog.setTitle('Edit');
        this.actiondialog.open();
      } else {
        this.pcntAction = "Please Select Record";
        this.selectPCNT = false;
        this.actiondialog.setTitle('Edit');
        this.actiondialog.open();
      }
    }
  }

  selectMultiIndustry(type: string, value: string) {
    let Choose = new caListMaster();
    if (type == 'New') {
      Choose = this.listINE.find(ObjTemp => ObjTemp.id_code == value);
      this.tempmySelectPCNT.new_ind_code = Choose.id_code;
      this.tempmySelectPCNT.new_ind_desc = Choose.remark;
    } else if (type == 'Old') {
      Choose = this.listIND.find(ObjTemp => ObjTemp.id_code == value);
      this.tempmySelectPCNT.old_ind_code = Choose.id_code;
      this.tempmySelectPCNT.old_ind_desc = Choose.remark;
    }
  }

  deletePCNT() {

    let delRow = this.listIndus.indexOf(this.selectIndus);
    this.listIndus.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.listIndus.length; i++) {
      this.listIndus[i - 1].sub_id = i;
    }
    ;
    this.listIndus = [...this.listIndus];
    this.creditApplicationService.caHead.listpcnind = this.listIndus ;

  }

  OkPcnt() {
    if (this.pcntAction == 'Add') {
      this.listIndus = [...this.listIndus, this.tempmySelectPCNT];
      this.creditApplicationService.caHead.listpcnind = this.listIndus;
    } else if (this.pcntAction == 'Edit') {
      this.selectIndus.new_ind_code = this.tempmySelectPCNT.new_ind_code;
      this.selectIndus.new_ind_desc = this.tempmySelectPCNT.new_ind_desc;
      this.selectIndus.old_ind_code = this.tempmySelectPCNT.old_ind_code;
      this.selectIndus.old_ind_desc = this.tempmySelectPCNT.old_ind_desc;
      this.selectIndus.ind_pcnt = this.tempmySelectPCNT.ind_pcnt;
      this.selectIndus.rmrk = this.tempmySelectPCNT.rmrk;
    }
  }
}
