import {Component, Input, OnDestroy, OnInit, OnChanges} from "@angular/core";
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../model/ca-head";
import {caListMaster} from "../model/ca_listmaster";
import {caPricing} from "../model/ca-pricing";

@Component({
  selector: 'app-ca-condition-remark',
  templateUrl: './condition-remark.component.html',
})
export class CaConditionRemarkComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isReadonly: boolean;
  @Input() task: string;
  subscripData: Subscription;
  subscripMaster: Subscription;

  myCaHead: caHead;
  myCaPricing: caPricing;

  listRMK_MKT: caListMaster[] = [];
  listCOND_MKT: caListMaster[] = [];
  listRMK_ATT: caListMaster[] = [];
  selectCond: caListMaster;
  selectRemark: caListMaster;
  readOnlyRemarkAttchSheet : boolean;
  readOnlyPrvCondition : boolean;
  taskReadOnly: string[] = ["CA-01","CA-01-1","CA-05","AM-01","AM-01-1","RV-01"];
  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.myCaHead = new caHead();
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj: caHead) => {
        this.myCaHead = obj;
        this.myCaPricing = obj.listcapricing[0];
      }
    );

    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj) => {
        this.listRMK_MKT = this.creditApplicationService.listRMK_MKT;
        this.listCOND_MKT = this.creditApplicationService.listCOND_MKT;
        this.listRMK_ATT = this.creditApplicationService.listRMK_ATT;
        //listRMK_ATT
      }
    );
  }

  ngOnDestroy() {
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }
  }

  ngOnChanges(){
    if(this.taskReadOnly.includes(this.task)){ 
      this.readOnlyRemarkAttchSheet = false 
      this.readOnlyPrvCondition = false
      if(this.task = 'RV-01') {
        this.readOnlyPrvCondition = true
      }
    } else {
      this.readOnlyRemarkAttchSheet = true
    }
    //console.log(this.readOnlyRemarkAttchSheet);
    //console.log(this.task);
    //console.log(this.isReadonly);
  }

  onDbClickCondition(select: caListMaster) {
    if (!this.isReadonly) {
      if (this.myCaHead.ca_condition.length > 1) {
        this.myCaHead.ca_condition += '\n' + select.remark;
      }
      else {
        this.myCaHead.ca_condition += select.remark;
      }
    }
  }

  onRowSelect(selectCol: caListMaster) {
    if(!this.readOnlyRemarkAttchSheet){
      if (this.myCaPricing.remark_attached_sheet.length > 1) {
        this.myCaPricing.remark_attached_sheet += '\n' + selectCol.remark;
      }
      else {
        this.myCaPricing.remark_attached_sheet += selectCol.remark;
      }
    }
    //console.log(this.myCaPricing);
  }
}
