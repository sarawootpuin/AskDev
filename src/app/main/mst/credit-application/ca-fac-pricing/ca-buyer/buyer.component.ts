import {Component, Input, OnChanges, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {creditApplicationService} from "../../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {caHead} from "../../model/ca-head";
import {caBuyer} from "../../model/ca-buyer";
import {caBuyerDoc} from "../../model/ca-buyerdoc";
import {EntityDialogComponent} from "../../../entity/entity-dialog/entity-dialog.component";
import {EntityModel} from "../../../entity/model/entity-model";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";

@Component({
  selector: 'app-ca-buyer',
  templateUrl: './buyer.component.html',
})
export class CaBuyerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isReadonly: boolean;
  @Input() important: boolean;
  @Input() taskShorten: string;
  tabReadonly: boolean;
  subscripData: Subscription;
  subscripMaster: Subscription;

  listBuyer: caBuyer[];
  selectBuyer: caBuyer = new caBuyer();
  masterBuyerDoc: caBuyerDoc[];
  loading: boolean;
  @ViewChild("entity_dialog") entity_dialog: EntityDialogComponent;
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;

  constructor(private creditApplicationService: creditApplicationService,
              private service: ServiceEndpoint,
              private userStorage: UserStorage,
              private ServiceEndpoint: ServiceEndpoint) {
  }

  ngOnInit() {
    this.selectBuyer = new caBuyer();
    this.setValue(this.creditApplicationService.getCaHead());
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value: caHead) => {
        this.setValue(value);
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

  ngOnChanges() {
    this.tabReadonly = ((this.isReadonly == false) || (this.important == false)) ? false : true;
  }

  setValue(value: caHead) {
    this.listBuyer = value.listcabuyer;
    if ((this.listBuyer) && (this.listBuyer.length > 0)) {
      //this.selectBuyer = this.listBuyer[0]
      this.onRowSelect(this.listBuyer[0]);
      if (this.selectBuyer.listcabuyerdoc) {
        this.setMasterBuyerDoc(this.selectBuyer.listcabuyerdoc);
      }
    }
  }

  setMasterBuyerDoc(value: caBuyerDoc[]) {
    if (value) {
      this.masterBuyerDoc = caBuyerDoc.parse(value);
      for (let i = 0; i < this.masterBuyerDoc.length; i++) {
        this.masterBuyerDoc[i].input_by = this.userStorage.getCode();
        this.masterBuyerDoc[i].factored_ifany = 'N';
        this.masterBuyerDoc[i].select_o = 'N';
        this.masterBuyerDoc[i].select_p = 'N';
        this.masterBuyerDoc[i].select_c = 'N';
        this.masterBuyerDoc[i].remark = '';
      }
      //console.log(this.masterBuyerDoc);
    }
  }

  onRowSelect(value: caBuyer) {
    this.selectBuyer = value;
    this.creditApplicationService.setSelectBuyer(value);
  }

  openEntity() {
    this.entity_dialog.title = 'Buyer';
    this.entity_dialog.showDialog();
  }

  getEntity(entityModel: EntityModel) {

    let newBuyer = new caBuyer();
    newBuyer.com_code = entityModel.comCode;
    newBuyer.ca_no = this.creditApplicationService.caHead.ca_no;
    newBuyer.seq_no = this.listBuyer.length + 1;
    newBuyer.ver_waive = 'N';
    newBuyer.app_type = '2';
    newBuyer.app_type_desc = 'WITH RECOURSE';
    this.creditApplicationService.checkFactoring(entityModel.entCode, entityModel.newCardNo).subscribe(
      (data: any) => {

        if (data.CODE === "200" && data.LIST_DATA.length > 0) {
          newBuyer.buyer_code = data.LIST_DATA[0].entCode;
        }
        else {
          newBuyer.buyer_code = entityModel.entCode;
        }
        newBuyer.buyer_name = entityModel.fNameE + " " + entityModel.lNameE;

        let master = this.masterBuyerDoc;

        for (let i = 0; i < master.length; i++) {
          master[i].buyer_code = newBuyer.buyer_code;
        }
        newBuyer.listcabuyerdoc = master;

        this.listBuyer = [...this.listBuyer, newBuyer];
        this.creditApplicationService.caHead.listcabuyer = this.listBuyer;
        this.onRowSelect(newBuyer);

      }
    );

  }

  deleteWarning() {
    this.deleteDialog.setAction('DELETE');
    this.deleteDialog.open();
  }

  deleteBuyer() {
    let index = this.selectBuyer.seq_no - 1;
    this.listBuyer.splice(index, 1);
    let seqNo = 1;
    for (let data of this.listBuyer) {
      data.seq_no = seqNo;
      seqNo++;
    }
    this.listBuyer = [...this.listBuyer];
    this.creditApplicationService.caHead.listcabuyer = this.listBuyer;
    if (this.listBuyer.length > 0) {
      this.onRowSelect(this.listBuyer[0]);
    }
    else {
      this.selectBuyer = new caBuyer();
    }
  }

  callAttach() {
    let ca_no: string = this.creditApplicationService.caHead.ca_no.replace("/", "_");
    //let strAttach = this.service.url_report + `/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.userStorage.getComCode()}&format=pdf`;
    let rv_time = this.creditApplicationService.caHead.revise_time;
    let strAttach = this.service.url_report + `/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.userStorage.getComCode()}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'ATT_' + ca_no + '_RV'+rv_time }&draft=${'N'}`;
    window.open(strAttach, '_blank');
  }

  editEntity(){
    this.loading = false;
    let strURL = this.ServiceEndpoint.url + this.ServiceEndpoint.app_name + "/#/editEntity/edit/"+this.selectBuyer.buyer_code;
    //let strURL = 'http://localhost:4200' + "/#/editEntity/edit/"+this.selectBuyer.buyer_code;
    window.open(strURL);

  }
}
