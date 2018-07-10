import { caBgDetail } from './../model/ca-bgdetail';
import { ActionDialogComponent } from './../../../../shared/center/action-dialog/action-dialog.component';
import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {creditApplicationService} from "../credit-application.service";
import {caBgDetailSub} from "../model/ca-bgdetailsub";
import {Subscription} from "rxjs/Subscription";
import {CaDetailappraisal} from "../model/ca-bgDetailappraisal";

@Component({
  selector: 'app-ca-asset',
  templateUrl: './ca-asset.component.html',
})
export class CaAssetComponent implements OnInit , OnDestroy {
  @Input() isReadonly : boolean;
  subscripData: Subscription;
  subscripMaster: Subscription;

  listbgdetail : caBgDetail[];
  selectbgdetail : caBgDetail;
  newAsset : caBgDetail ;

  listbgdetailSub : caBgDetailSub[];
  selectbgdetailSub  : caBgDetailSub ;
  newSubAsset : caBgDetailSub ;

  listbgDetailappraisal : CaDetailappraisal[];
  selectDetailappraisal : CaDetailappraisal ;
  newDetailappraisal : CaDetailappraisal ;
  caType : string;
  index: number = 0;

  @ViewChild('copyDialog') copyDialog : ActionDialogComponent;
  numberOfCopy : number = 0;
  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (caHead) => {
        this.listbgdetail = caHead.listbgdetail ;
        this.caType = caHead.ca_type;
        if ( (this.listbgdetail) && (this.listbgdetail.length > 0)  )
        {   this.onSelectdetail(this.listbgdetail[0]) ;  }

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

  onSelectdetail(value : caBgDetail){
    this.selectbgdetail = value ;
    this.listbgdetailSub = value.listbgdetailsub ;


    this.creditApplicationService.setSelectBgdetail(value);

    if ( (this.listbgdetailSub) && (this.listbgdetailSub.length > 0)  )
    { this.onSelectdetailSub(this.listbgdetailSub[0]) ;  }
    else{
      this.onSelectdetailSub(new caBgDetailSub());
    }

  }

  onSelectdetailSub(value : caBgDetailSub){
    this.selectbgdetailSub = value ;
    this.creditApplicationService.setSelectBgdetailSub(value);
  }

  onAddAsset(){
    this.newAsset = new caBgDetail();

    this.newAsset.ca_no =  this.creditApplicationService.caHead.ca_no ;

    if ( this.listbgdetail.length > 0){ this.newAsset.sub_id = this.listbgdetail.length +1    }
    else {this.newAsset.sub_id = 1  }

    this.newAsset.lc_flg = 'N';
    this.newAsset.with_vat = 'Y';
    this.newAsset.wh_tax = 0;
    this.newAsset.cal_inst_typ = 'Fix';
    this.newAsset.schedule = 'R';
    this.newAsset.adv_arr = 'V';
    this.newAsset.type_cal_pricing = '1';

    this.listbgdetail = [ ...this.listbgdetail,this.newAsset];
    this.creditApplicationService.caHead.listbgdetail = this.listbgdetail ;
    this.onSelectdetail(this.newAsset);
  }

  onDeleteAsset( selectasset :caBgDetail ){
    let delRow = this.listbgdetail.indexOf(selectasset);
    this.listbgdetail.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.listbgdetail.length; i++) {
      this.listbgdetail[i - 1].sub_id = i;
      this.listbgdetail[i - 1].listbgdetailsub.forEach(
        value => {
          value.sub_id = i
          value.subIdDisplay = i + '.' + value.sub_id2
          value.listbgdetailappraisal.forEach(
            detail => detail.sub_id = i
          )
        }
      )
      this.listbgdetail[i - 1].listcastep.forEach(
        value => value.sub_id = i
      )
    }

    this.listbgdetail = [...this.listbgdetail];
    //console.log(this.listbgdetail)
    this.creditApplicationService.caHead.listbgdetail = this.listbgdetail;
    if (this.listbgdetail[0]){
      this.onSelectdetail(this.listbgdetail[0]);
    // { this.selectbgdetail = this.listbgdetail[0];
    //   if(this.listbgdetailSub[0])
    //   {  this.onSelectdetail(this.listbgdetail[0]); }
    }
  }

  onAddSubAsset(){
    this.newSubAsset = new caBgDetailSub();

    this.newSubAsset.ca_no = this.selectbgdetail.ca_no ;
    this.newSubAsset.sub_id = this.selectbgdetail.sub_id ;


    if ( (this.listbgdetailSub) && (this.listbgdetailSub.length) )  {
        this.newSubAsset.sub_id2 = this.listbgdetailSub.length + 1 ;
        this.newSubAsset.subIdDisplay = this.newSubAsset.sub_id + '.' + this.newSubAsset.sub_id2;
        this.listbgdetailSub = [ ...this.listbgdetailSub,this.newSubAsset];
    }
    else {
      this.newSubAsset.sub_id2 = 1;
      this.newSubAsset.subIdDisplay = this.newSubAsset.sub_id + '.' + this.newSubAsset.sub_id2;
      this.listbgdetailSub = [this.newSubAsset];
    }
    this.selectbgdetail.listbgdetailsub = this.listbgdetailSub ;
    this.onSelectdetailSub(this.newSubAsset);
  }
  onDeleteSubAsset(selectsub :caBgDetailSub){
    let delRow = this.listbgdetailSub.indexOf(selectsub);
    this.listbgdetailSub.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.listbgdetailSub.length; i++) {
      this.listbgdetailSub[i - 1].sub_id2 = i;
    }

    this.listbgdetailSub = [...this.listbgdetailSub];

    if(this.listbgdetailSub[0])
    {  this.selectbgdetailSub = this.listbgdetailSub[0] }
  }

  howManyCopy(){
    this.numberOfCopy = 0;
    this.copyDialog.open();
  }

  onCopy(){
    for(let i = 0; i < this.numberOfCopy ; i++){
      this.copyAsset()
    }
  }

  copyAsset(){
    let objBgDetail : caBgDetail = JSON.parse(JSON.stringify(this.selectbgdetail));//Object.assign({},this.selectbgdetail)
    objBgDetail.sub_id = this.listbgdetail.length + 1;
    objBgDetail.listbgdetailsub.forEach(
      value => {
        value.sub_id = objBgDetail.sub_id
        value.subIdDisplay = value.sub_id + '.' + value.sub_id2;
        value.listbgdetailappraisal.forEach(
          element => {
            element.sub_id = value.sub_id
            element.sub_id2 = value.sub_id2
          }
        )
      }
    )
    objBgDetail.listcastep.forEach(
      value => value.sub_id = objBgDetail.sub_id
    )
    this.listbgdetail = [ ...this.listbgdetail,objBgDetail];
    this.creditApplicationService.caHead.listbgdetail = this.listbgdetail;
    //console.log(this.listbgdetail);
  }
}
