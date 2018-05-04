import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SaleCallHead} from "../model/Sale-Call-Head";
import {SaleCallVisitService} from "../sale-call-visit.service";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
import {ObjTemp} from "../model/ObjTemp";
import {SaleCallPcnt} from "../model/Sale-Call-Pcnt";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {TextMaskType} from "../../../../shared/config/text-mask-type";

declare var $: any;

@Component({
  selector: 'app-call-visit-information',
  templateUrl: './call-visit-information.component.html',
  styleUrls: ['./call-visit-information.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitInformationComponent implements OnInit,OnDestroy {
  saleCallH_Info: SaleCallHead = new SaleCallHead();
  subscription: Subscription;
  ListBUSTYPE: ObjTemp[];
  ListNATION: ObjTemp[];
  ListPROVINCE: ObjTemp[];
  ListNEWINDUSTRY: ObjTemp[];
  ListOLDINDUSTRY: ObjTemp[];
  myListPCNT: SaleCallPcnt [];
  mySelectPCNT: SaleCallPcnt;
  tempmySelectPCNT: SaleCallPcnt;
  OutURL: string;
  pcntAction: string = '';
  selectPCNT: boolean;
  code: string = "";
  username: string = "";
  comCode: string = "";

  @ViewChild('actiondialog') actiondialog: ActionDialogComponent;

  constructor(private saleCallVisitService: SaleCallVisitService,
              private serviceEndPoint: ServiceEndpoint,
              private textmask : TextMaskType,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.code = this.userStorage.getCode();
    this.username = this.userStorage.getUserName();
    this.comCode = this.userStorage.getComCodePort();

    this.OutURL = this.serviceEndPoint.url
      + this.serviceEndPoint.sale_call_api
      + "/ask/salecall/GetDBD?device=Web&user="
      + this.username + "&Comcode=" + this.comCode
      + "&dbdcode=" + "No";

    this.subscription = this.saleCallVisitService.eventsaleH.subscribe(
      (obj) => {
        this.saleCallH_Info = obj;
        this.myListPCNT = this.saleCallH_Info.listPCNT;
        this.ListBUSTYPE = this.saleCallVisitService.ListBUSTYPE;
        this.ListNATION = this.saleCallVisitService.ListNATION;
        this.ListPROVINCE = this.saleCallVisitService.ListPROVINCE;
        this.ListNEWINDUSTRY = this.saleCallVisitService.ListNEWINDUSTRY;
        this.ListOLDINDUSTRY = this.saleCallVisitService.ListOLDINDUSTRY;

      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setBusName(data: string) {
    this.saleCallH_Info.bussiness_detail_name = data;
  }

  setBuscode(data: string) {
    this.saleCallH_Info.bussiness_detail = data;
  }

  setBusType(data: string) {
    this.saleCallH_Info.bussiness_type = data;
  }

  setCluster(data: string) {
    this.saleCallH_Info.cluster = data;
  }

  deletePCNT() {

    let delRow = this.saleCallH_Info.listPCNT.indexOf(this.mySelectPCNT);
    this.saleCallH_Info.listPCNT.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.saleCallH_Info.listPCNT.length; i++) {
      this.saleCallH_Info.listPCNT[i - 1].sub_id = i;
    }
    ;
    this.saleCallH_Info.listPCNT = [...this.saleCallH_Info.listPCNT];
    console.log(this.saleCallVisitService.saleH);

  }

  labelOkPcnt : string = '' ;
  btnShowAdd : boolean = true;
  pcntAddorEdit(action: string) {
    this.pcntAction = action;
    this.selectPCNT = true;
    this.tempmySelectPCNT = new SaleCallPcnt();


    if (action == 'Add') {
      this.tempmySelectPCNT.com_code = this.saleCallH_Info.com_code;
      this.tempmySelectPCNT.sale_call_no = this.saleCallH_Info.sale_call_no;
      this.tempmySelectPCNT.sub_id = this.saleCallH_Info.listPCNT.length + 1;
      this.tempmySelectPCNT.ent_code = this.saleCallH_Info.comp_ent_code;
      this.labelOkPcnt = 'Add' ;
      this.btnShowAdd = true;
      this.actiondialog.setTitle('Add');
      this.actiondialog.open();
    }
    else if (action == 'Edit') {
      this.btnShowAdd = false;
      if (this.mySelectPCNT) {
        this.tempmySelectPCNT.new_ind_code = this.mySelectPCNT.new_ind_code;
        this.tempmySelectPCNT.new_ind_decs = this.mySelectPCNT.new_ind_decs;
        this.tempmySelectPCNT.xold_ind_code = this.mySelectPCNT.xold_ind_code;
        this.tempmySelectPCNT.old_ind_decs = this.mySelectPCNT.old_ind_decs;
        this.tempmySelectPCNT.ind_pcnt = this.mySelectPCNT.ind_pcnt;
        this.tempmySelectPCNT.rmrk = this.mySelectPCNT.rmrk;
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

  OkPcnt() {
    if (this.pcntAction == 'Add') {
      this.saleCallH_Info.listPCNT = [...this.saleCallH_Info.listPCNT, this.tempmySelectPCNT];
    } else if (this.pcntAction == 'Edit') {
      this.mySelectPCNT.new_ind_code = this.tempmySelectPCNT.new_ind_code;
      this.mySelectPCNT.new_ind_decs = this.tempmySelectPCNT.new_ind_decs;
      this.mySelectPCNT.xold_ind_code = this.tempmySelectPCNT.xold_ind_code;
      this.mySelectPCNT.old_ind_decs = this.tempmySelectPCNT.old_ind_decs;
      this.mySelectPCNT.ind_pcnt = this.tempmySelectPCNT.ind_pcnt;
      this.mySelectPCNT.rmrk = this.tempmySelectPCNT.rmrk;
    }
  }

  selectMultiIndustry(type: string, value: string) {
    let Choose = new ObjTemp();
    if (type == 'New') {
      Choose = this.ListNEWINDUSTRY.find(ObjTemp => ObjTemp.id == value);
      this.tempmySelectPCNT.new_ind_code = Choose.id;
      this.tempmySelectPCNT.new_ind_decs = Choose.display;
    } else if (type == 'Old') {
      Choose = this.ListOLDINDUSTRY.find(ObjTemp => ObjTemp.id == value);
      this.tempmySelectPCNT.xold_ind_code = Choose.id;
      this.tempmySelectPCNT.old_ind_decs = Choose.display;
    }

  }

  test(event : any){
        console.log(event);
        this.saleCallH_Info.performance_year = event  ;
  }
}
