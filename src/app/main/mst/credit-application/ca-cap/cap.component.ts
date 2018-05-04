import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caCapCl} from "../model/ca-capcl";
import {caCapClOwner} from "../model/ca-capclowner";
import {caHead} from "../model/ca-head";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {caCapstore} from "../model/ca-capstore";
import {caCapOthstore} from "../model/ca-capothstore";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {UserStorage} from "../../../../shared/user/user.storage.service";

@Component({
  selector: 'app-ca-cap',
  templateUrl: './cap.component.html',
})
export class CaCapComponent implements OnInit,OnDestroy {
  @Input() isReadonly : boolean;
  subscripData: Subscription;
  subscripMaster: Subscription;

  listCapcl : caCapCl[];
  selectCapcl : caCapCl;

  listCapClOwner : caCapClOwner[];
  selectCapClOwner : caCapClOwner ;

  listCapClOwnerFromStore : caCapClOwner[];

  listCapStore : caCapstore[];
  selectCapStore :caCapstore ;

  listcapothstore : caCapOthstore[];

  caTotalExposure : number = 0 ;
  caRequestCap : number = 0 ;
  tempcaRequestCap : number = 0 ;
  caOverCap : number = 0 ;
  tempcaOverCap : number = 0 ;

  @ViewChild('actiondialog') actiondialog: ActionDialogComponent;
  @ViewChild('alertCap') alertCap: AlertDialogComponent;

  constructor(private creditApplicationService: creditApplicationService,
              private userStorage: UserStorage) { }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value : caHead ) =>
      {
        this.listCapcl = value.listcacapcl ;
        this.listCapClOwner = value.listcacapclowner ;

        this.caTotalExposure = value.total_exposure ;


        if (value.caentity) {
           this.listCapStore = value.caentity.listcapstore ;
           this.listcapothstore = value.caentity.listcapothstore ;
        };

        if ((this.listCapcl) &&( this.listCapcl.length > 0 )) {
            this.selectCapcl = this.listCapcl[0];
            this.caRequestCap = this.selectCapcl.total_cap_amt ;
        }

        this.calOverCap ;
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

  openDialog(){
    this.actiondialog.setTitle('Request Cap');
    this.tempcaOverCap = this.caOverCap ;
    this.tempcaRequestCap =  this.tempcaRequestCap ;
    this.getlistCapClOwnerFromStore() ;
    this.actiondialog.open();
  }

  calOverCap(){
    if ( this.caTotalExposure > this.caRequestCap){
      this.tempcaOverCap = this.caTotalExposure - this.tempcaRequestCap ;
    }
    else{
      this.tempcaOverCap = 0 ;
    }
  }

  getlistCapClOwnerFromStore(){
    this.listCapClOwnerFromStore = [];
    let running_code =  0 ;
    if ((this.selectCapcl) && (this.selectCapcl.cancel_by != '')){
       running_code = this.selectCapcl.running_code ;
    }

    for(let i = 0 ; i < this.listCapStore.length ; i++){
      let newRec = new caCapClOwner();
      newRec.running_code = running_code;
      newRec.seq_no = i+1;
      newRec.com_code = this.listCapStore[i].com_code;
      newRec.sbu_type = this.listCapStore[i].sbu_typ;
      newRec.seller_code = this.listCapStore[i].cus_code;
      newRec.flg_cap = 'N';
      newRec.joint_seller_group = this.listCapStore[i].joint_seller_group;
      newRec.cust_group = this.listCapStore[i].grp_code;
      newRec.this_approve = this.listCapStore[i].os_pri;
      newRec.seller_name = this.listCapStore[i].cus_name;
      this.listCapClOwnerFromStore.push(newRec);
    }
  }

  onOkCap(){
    this.caRequestCap = this.tempcaRequestCap ;
    this.caOverCap    = this.tempcaOverCap ;
    this.listCapClOwner = this.listCapClOwnerFromStore ;
    this.creditApplicationService.caHead.listcacapclowner = this.listCapClOwner ;

    if ((this.selectCapcl) && (this.selectCapcl.cancel_by != '')){
      this.selectCapcl.total_cap_amt = this.caRequestCap ? this.caRequestCap : 0 ;
      this.selectCapcl.total_exposure = this.caTotalExposure ? this.caTotalExposure : 0;
      this.selectCapcl.over_cap = this.caOverCap ? this.caOverCap : 0;
    } else{
      this.selectCapcl = new caCapCl() ;
      this.selectCapcl.running_code = 0;
      this.selectCapcl.total_cap_amt = this.caRequestCap ? this.caRequestCap : 0 ;
      this.selectCapcl.total_exposure = this.caTotalExposure ? this.caTotalExposure : 0;
      this.selectCapcl.current_ca = this.creditApplicationService.caHead.ca_no;
      this.selectCapcl.cancel_dt = '';
      this.selectCapcl.cancel_by = '';
      this.selectCapcl.input_date = '';
      this.selectCapcl.input_by = '';
      this.selectCapcl.last_usr = '';
      this.selectCapcl.last_upd = '';
      this.selectCapcl.over_cap = this.caOverCap ? this.caOverCap : 0;
      this.listCapcl.push(this.selectCapcl);
    }

  }

  onClickCheck(value){
    let data ;
    if (value){
      data = 'Y';
    }else {
      data= 'N';
    }
    return data;
  }

  onClickCancelCap(){
    this.alertCap.reset();
    this.alertCap.setAction('CANCEL');
    this.alertCap.open() ;
  }

  okCancelCap(){
    if ((this.selectCapcl) && (this.selectCapcl.cancel_by == '')){
      this.selectCapcl.cancel_by = this.userStorage.getCode() ;
      this.selectCapcl.cancel_dt = new Date().toLocaleDateString('en-GB') ;

      for(let i = 0 ; i < this.listCapClOwner.length;i++){
        this.listCapClOwner[i].flg_cap = 'N';
        this.listCapClOwner[i].cancel_by = this.userStorage.getCode() ;
        this.listCapClOwner[i].cancel_dt = new Date().toLocaleDateString('en-GB') ;
      }
    };

    console.log(this.selectCapcl);
    console.log(this.listCapClOwner);

  }

}
