import {Component, Input, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caHead} from "../model/ca-head";
import {caApvHist} from "../model/ca-apvhist";
import {caCusapv} from "../model/ca-cusapv";
import {CaRevise} from "../model/ca-revise";
import {caListMaster} from "../model/ca_listmaster";
import { CaApproveAmend } from "../model/ca-approve-amend";

@Component({
  selector: 'app-ca-approve-lv',
  templateUrl: './ca-approve-lv.component.html',
})
export class CaApproveLvComponent implements OnInit, OnDestroy, OnChanges{
  @Input() task : string;
  @Input() taskShorten : string;
  subscripData: Subscription;
  subscriptionListMaster: Subscription;
  listcaapvhist: caApvHist[];
  selectCaApvhist: caApvHist;

  listcacusapv: caCusapv[];
  selectCaCusApv: caCusapv;

  listCaRevise: CaRevise[];
  selectCaRevise: CaRevise;

  listApproveAmendLs : CaApproveAmend[];
  selectApproveAmendLs : CaApproveAmend;
  caHead: caHead;
  listApprove: caListMaster[] = [];
  edit : boolean;
  creditType : string;
  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.caHead = new caHead();
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value: caHead) => {
        this.caHead = value;
        this.creditType = value.sbu_typ;
        this.listcaapvhist = value.listcaapvhist;
        if ((this.listcaapvhist) && (this.listcaapvhist.length > 0)) {
          this.selectCaApvhist = this.listcaapvhist[0];
          //this.onRowSelect(this.listBuyer[0]);
        }

        if (value.caentity) {
          if (value.caentity.listcusapv) {
            this.listcacusapv = value.caentity.listcusapv;
            if (this.listcacusapv.length > 0) {
              this.selectCaCusApv = this.listcacusapv[0];
            }
          }

          if (this.caHead.current_task.indexOf('Amend') > -1) {
            this.listcacusapv = this.listcacusapv.filter(list => list.approve_type == 2);
          }
          else {
            this.listcacusapv = this.listcacusapv.filter(list => list.approve_type == 1);
          }
        }

        this.listCaRevise = value.listrevise;
        if (this.listCaRevise.length > 0) {
          this.selectCaRevise = this.listCaRevise[0];
        }

        this.listApproveAmendLs = value.listapvamend;
        if(this.listApproveAmendLs.length > 0){
          this.selectApproveAmendLs = value.listapvamend.find(item => item.flg_sel == 'Y')
        }
      }
    );

    this.subscriptionListMaster = this.creditApplicationService.eventListMaster.subscribe(
      () => {
        //this.listApprove.push(new caListMaster("","","","","",""));
        //this.listApprove = this.listApprove.concat(this.creditApplicationService.listAPV_REVISE);
        this.listApprove= this.creditApplicationService.listAPV_REVISE;
      }
    )
  }

  ngOnDestroy() {
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }
    if (this.subscriptionListMaster != null) {
      this.subscriptionListMaster.unsubscribe();
    }
  }

  ngOnChanges(){
    this.edit = this.task == 'RV-01' ? true : false;
  }

  approveChange(value){
    this.listCaRevise[0].apprv_person = value.id_code;
    this.listCaRevise[0].apprv_name = value.remark;
  }

  testja(index : number){
    this.listApproveAmendLs.forEach(value => value.flg_sel = 'N')
    if(index > -1) 
      this.listApproveAmendLs[index].flg_sel = 'Y';
  }
}
