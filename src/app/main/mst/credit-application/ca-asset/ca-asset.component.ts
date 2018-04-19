import {Component, OnDestroy, OnInit} from '@angular/core';
import {creditApplicationService} from "../credit-application.service";
import {caBgDetail} from "../model/ca-bgdetail";
import {caBgDetailSub} from "../model/ca-bgdetailsub";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ca-asset',
  templateUrl: './ca-asset.component.html',
})
export class CaAssetComponent implements OnInit , OnDestroy {
  subscripData: Subscription;
  subscripMaster: Subscription;

  listbgdetail : caBgDetail[];
  selectbgdetail : caBgDetail;
  newAsset : caBgDetail ;

  listbgdetailSub : caBgDetailSub[];
  selectbgdetailSub  : caBgDetailSub ;
  newSubAsset : caBgDetailSub ;

  index: number = 0;


  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (caHead) => {
        this.listbgdetail = caHead.listbgdetail ;
        //console.log(this.listbgdetail);

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

  }

  onSelectdetailSub(value : caBgDetailSub){
    this.selectbgdetailSub = value ;
    this.creditApplicationService.setSelectBgdetailSub(value);
  }

  onAddAsset(){
    this.newAsset = new caBgDetail();

    this.newAsset.ca_no =  this.creditApplicationService.caHead.ca_no ;
    if ( this.listbgdetail.length){ this.newAsset.sub_id = this.listbgdetail.length +1    }
    else {this.newAsset.sub_id = 1  }


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
    }
    ;
    this.listbgdetail = [...this.listbgdetail];
    if (this.listbgdetail[0])
    { this.selectbgdetail = this.listbgdetail[0]; }
  }

  onAddSubAsset(){
    this.newSubAsset = new caBgDetailSub();

    this.newSubAsset.ca_no = this.selectbgdetail.ca_no ;
    this.newSubAsset.sub_id = this.selectbgdetail.sub_id ;


    if ( (this.listbgdetailSub) && (this.listbgdetailSub.length) )  {
        this.newSubAsset.sub_id2 = this.listbgdetailSub.length + 1 ;
        this.listbgdetailSub = [ ...this.listbgdetailSub,this.newSubAsset];
    }
    else {
        this.newSubAsset.sub_id2 = 1;
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
      this.listbgdetailSub[i - 1].sub_id = i;
    }
    ;
    this.listbgdetailSub = [...this.listbgdetailSub];

    if(this.listbgdetailSub[0])
    {  this.selectbgdetailSub = this.listbgdetailSub[0] }
  }
}
