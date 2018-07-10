import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {creditApplicationService} from "../../credit-application.service";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {caEntity} from "../../model/ca-entity";
import {caListMaster} from "../../model/ca_listmaster";
import {Subscription} from "rxjs/Subscription";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";
import {caNationality} from "../../model/ca-nationality";
import {ActionDialogComponent} from "../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-ca-customer',
  templateUrl: './customer.component.html'
  // styleUrls: ['./ca-customer.component.css']
})

export class CaCustomerComponent implements OnInit, OnDestroy {
  @Input('business_detail') business_detail: string;
  @Output('business_detail_out') business_detail_out:EventEmitter<string> = new EventEmitter<string>();
  @Input() isReadOnly : boolean;
  caEntityDetail: caEntity = new caEntity();
  listNation: caNationality[] = [];
  selectedNation: caNationality;
  newNation: caNationality = new caNationality();
  isNew : boolean;

  subscripData: Subscription;
  subscripMaster: Subscription;

  listFNMT: caListMaster[];
  listFNME: caListMaster[];
  listCRD: caListMaster[];
  listNTY: caListMaster[];
  listNTN: caListMaster[];
  listPOS_BG: caListMaster[];

  urlGroupCus: string;
  dataGroupCus: any;
  OutURL: string;
  @ViewChild('nationDialog') nationDialog: ActionDialogComponent;

  constructor(private creditApplicationService: creditApplicationService,
              private serviceEndPoint: ServiceEndpoint,
              private userStorage: UserStorage,
              private service: ServiceEndpoint,) {

    this.OutURL = this.serviceEndPoint.url
      + this.serviceEndPoint.sale_call_api
      + "/ask/salecall/GetDBD?device=Web&user="
      + this.userStorage.getUserName() + "&Comcode=" + this.userStorage.getComCode()
      + "&dbdcode=" + "No";
    this.urlGroupCus = this.service.url + this.service.ca_api + '/ask/ca/GetListSearchUn';
    this.dataGroupCus = {
      "device": "web",
      "username": this.userStorage.getUserName(),
      "action": "GROUPCUS"
    }

  }

  onChange(val) {
    this.business_detail_out.emit(val);
  }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (obj) => {
        this.caEntityDetail = obj.caentity;
        this.listNation = this.caEntityDetail.listentitynation;
        //console.log(this.listNation);
        if (this.listNation.length > 0) {
          this.selectNation(this.listNation[0]);
        }
      }
    );

    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (obj) => {
        //console.log('subscribe');
        this.listFNMT = this.creditApplicationService.listFNM;
        this.listFNME = this.creditApplicationService.listFNME;
        this.listCRD = this.creditApplicationService.listCRD;
        this.listNTY = this.creditApplicationService.listNTY;
        this.listNTN = this.creditApplicationService.listNTN;
        this.listPOS_BG = this.creditApplicationService.listPOS_BG;
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


  setBusName(data: string) {
    this.caEntityDetail.bus_detail_desc = data;
  }

  setBuscode(data: string) {
    this.caEntityDetail.bus_detail = data;
  }

  setBusType(data: string) {
    this.caEntityDetail.business_type = data;
  }

  setCluster(data: string) {
    this.caEntityDetail.cluster_ind = data;
  }

  selectNation(selectedNation: caNationality) {
    this.newNation = this.cloneData(selectedNation);
  }

  addOrEditNation(action: string) {
    if (action == 'add') {
      this.isNew = true;
      this.newNation = new caNationality();
      this.newNation.com_code = this.creditApplicationService.caHead.com_code;
      this.newNation.ent_code = this.creditApplicationService.caHead.cus_code;
      this.newNation.sub_id = this.listNation.length + 1;
      this.nationDialog.setTitle('Add');
      this.nationDialog.open();
    }
    else if (action == 'edit'){
      this.isNew = false;
      this.nationDialog.setTitle('Edit');
      this.nationDialog.open();
    }
  }

  deleteNation(selectNation: caNationality) {
    let delRow = this.listNation.indexOf(selectNation);
    this.listNation.splice(delRow, 1);
    ////  Change  order
    for (let i = 1; i <= this.listNation.length; i++) {
      this.listNation[i - 1].sub_id = i;
    }
    this.listNation = [...this.listNation];
    if (this.listNation[0]) {
      this.selectNation(this.listNation[0]);
    }
  }

  onOkClick(){
    this.newNation.nation_full = this.listNTN.find((element)=>{
      return element.id_code == this.newNation.nationality;
    }).remark;

    let listTemp = [...this.listNation];
    if (this.isNew) {
      listTemp.push(this.newNation);
    }
    else {
      listTemp[this.findSelectedIndex()] = this.newNation;
    }
    this.listNation = listTemp;
    this.creditApplicationService.caHead.caentity.listentitynation = this.listNation;
  }

  cloneData(list: caNationality): caNationality {
    let step = new caNationality();
    for (let i in list) {
      step[i] = list[i];
    }
    return step;
  }

  findSelectedIndex(): number {
    return this.listNation.indexOf(this.selectedNation);
  }

  setGroup(data: string) {
    this.caEntityDetail.grp_code = data;
  }

  setGroupName(data: string) {
    this.caEntityDetail.grp_name = data;
  }
}
