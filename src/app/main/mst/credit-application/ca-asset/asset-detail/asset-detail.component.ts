import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from "@angular/core";
import {creditApplicationService} from "../../credit-application.service";
import {caListMaster} from "../../model/ca_listmaster";
import {ServiceEndpoint} from "../../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {TextMaskType} from "../../../../../shared/config/text-mask-type";
import {ActionDialogComponent} from "../../../../../shared/center/action-dialog/action-dialog.component";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {caBgDetailSub} from "../../model/ca-bgdetailsub";
import {CaDetailappraisal} from "../../model/ca-bgDetailappraisal";
import {Subscription} from "rxjs/Subscription";
import {searchobj} from "../../../../../shared/center/search-un/search-un-model/searchobj";
import { caBgDetail } from "../../model/ca-bgdetail";

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html'
})
export class AssetDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() isReadonly: boolean;

  listFAT: caListMaster[] = [];
  listFAC: caListMaster[] = [];
  listFAS: caListMaster[] = [];
  listEQP: caListMaster[] = [];
  listBDY: caListMaster[] = [];
  listENG_TYPE: caListMaster[] = [];
  listData = [];
  listDealer: searchobj[] = [];
  osCreditLine: string;

  listbgdetailappraisal: CaDetailappraisal[];
  detailappraisal: CaDetailappraisal = new CaDetailappraisal();
  bgdetailSub: caBgDetailSub = new caBgDetailSub();
  subscription: Subscription = null;
  subscriptionList: Subscription = null;
  currentTask: string;
  disabledAppraisal: boolean = true;
  OutURL: string;
  disabledGuarantee: boolean = true;
  @Input('caDetailappraisal') caDetailappraisal = new CaDetailappraisal();
  @ViewChild('addDialog') addDialog: ActionDialogComponent;
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;

  constructor(private creditApplicationService: creditApplicationService,
              private serviceEndPoint: ServiceEndpoint,
              private textmask: TextMaskType,
              private userStorage: UserStorage) {

  }

  ngOnChanges(simpleChanges: SimpleChanges) {

  }

  ngOnInit() {
    this.subscription = this.creditApplicationService.eventBgdetailSub.subscribe(
      (detailSub: caBgDetailSub) => {
        this.currentTask = this.creditApplicationService.getCaHead().current_task;
        if (this.currentTask == 'Scoring' || this.currentTask == 'Scoring Approve') {
          this.disabledAppraisal = false;
        }
        this.bgdetailSub = detailSub;
        if (!this.bgdetailSub.listbgdetailappraisal) {
          this.bgdetailSub.listbgdetailappraisal = [];
        }

        //console.log(this.bgdetailSub);
        this.listbgdetailappraisal = this.bgdetailSub.listbgdetailappraisal;
        this.listDealer = this.bgdetailSub.listdetailsubdealer;
        if (this.listDealer) {
          this.listDealer.forEach((value) => {
            value.col3 ? this.disabledGuarantee = false : this.disabledGuarantee = true;
          });
        }
        this.OutURL = this.serviceEndPoint.url + this.serviceEndPoint.sale_call_api
          + "/ask/salecall/GetINTRO?device=web&user=" + this.userStorage.getUserName()
          + "&Comcode=" + this.userStorage.getComCode() + "&INTRO_MTHD_CD=20&condition"+ "&ca_no="+ this.bgdetailSub.ca_no;

        this.onChangeFat('');
        this.onChangeFac('');
      }
    );

    //--------- list ans
    this.subscriptionList = this.creditApplicationService.eventListMaster.subscribe(
      (value) => {
        this.listFAT = this.creditApplicationService.listFAT;
        this.listFAC = this.creditApplicationService.listFAC;
        this.listFAS = this.creditApplicationService.listFAS;
        this.listEQP = this.creditApplicationService.listEQP;
        this.listBDY = this.creditApplicationService.listBDY;
        this.listENG_TYPE = this.creditApplicationService.listENG_TYPE;
        if (this.listFAC) (this.onChangeFat('OnInit'));
        if (this.listFAS) (this.onChangeFac('OnInit'));
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionList != null) {
      this.subscriptionList.unsubscribe();
    }
  }

  onChangeFat(mode: string) {
    if (mode != 'OnInit') {
      let assetSelect = (this.listFAT.find((item) => {
        return item.id_code === this.bgdetailSub.asst_type
      }));
      /*this.bgdetailSub.asset_type = assetSelect.remark;
       this.bgdetailSub.asst_code = '';
       this.bgdetailSub.asst_sub_code = '';*/
    }
    if (this.creditApplicationService.listFAC) {
      let filterFac: caListMaster[] = [];
      filterFac = this.creditApplicationService.listFAC.filter(listObj => listObj.key1 == this.bgdetailSub.asst_type);
      this.listFAC = filterFac;
    }
  }

  onChangeFac(mode: string) {
    if (mode != 'OnInit') {
      //this.bgdetailSub.asst_sub_code = '';
    }
    if (this.creditApplicationService.listFAS) {
      let filterFas: caListMaster[] = [];
      filterFas = this.creditApplicationService.listFAS.filter(listObj => (( listObj.key1 == this.bgdetailSub.asst_type )
      && (listObj.key2 == this.bgdetailSub.asst_code) ));
      this.listFAS = filterFas;
    }
  }

  
  clearValueCaDetail = () =>{
    let detail : caBgDetail = this.creditApplicationService.getCaHead().listbgdetail[this.bgdetailSub.sub_id-1]
    detail.dealer_code = '';
    detail.buy_back_amt = 0;
  }

  setDealerName(value: string) {
    this.bgdetailSub.dealer_name = value;
  }

  setDealerCode(value: string) {
    this.bgdetailSub.dealer_code = value;
    this.listDealer = this.listData.filter((member) => {
      return member.col2 == this.bgdetailSub.dealer_code;
    });
    //console.log(this.listDealer);
    this.listDealer.forEach((value) => {
      value.col3 ? this.disabledGuarantee = false : this.disabledGuarantee = true;
    });
    this.bgdetailSub.listdetailsubdealer = this.listDealer;
    this.clearValueCaDetail()
    //console.log(this.bgdetailSub.listdetailsubdealer);
    //this.creditApplicationService.setSelectBgdetailSub(this.bgdetailSub);
  }

  setCaNo(value: string) {
    this.bgdetailSub.buy_back_grnty_no = '';
    //console.log(value);
    //this.bgdetailSub.buy_back_grnty_no = value;
    //value.length > 0 ? this.bgdetailSub.selectbb = 'Y' : this.bgdetailSub.selectbb = 'N';
  }

  setOs(value: string) {
    this.bgdetailSub.osCreditLine = '0';
  }

  openAddDialog() {
    this.detailappraisal = new CaDetailappraisal();
    // this.detailappraisal.ca_no = this.bgdetailSub.ca_no;
    this.detailappraisal.sub_id = this.bgdetailSub.sub_id;
    this.detailappraisal.sub_id2 = this.bgdetailSub.sub_id2;
    //console.log(this.detailappraisal);
    this.addDialog.setTitle('Add Pricing');
    this.addDialog.open();
  }

  setDataDetailAppraisal(event) {

    this.listbgdetailappraisal.push(this.detailappraisal);
    //console.log(this.detailappraisal);
    this.bgdetailSub.listbgdetailappraisal = this.listbgdetailappraisal;

    this.creditApplicationService.setSelectBgdetailSub(this.bgdetailSub);
  }

  opendeleteDialog() {
    this.deleteDialog.open();
  }

  deleteSelection() {
    //console.log(this.detailappraisal);
    //console.log(this.listbgdetailappraisal.indexOf(this.detailappraisal));
    this.listbgdetailappraisal.splice(this.listbgdetailappraisal.indexOf(this.detailappraisal), 1);
  }

  onRowSelect(event) {
    this.detailappraisal = event;
    //console.log(event)
  }

  setListData(value: searchobj[]) {
    this.listData = value;
  }

  
  buybackChange(value: string) {
    let detail : caBgDetail = this.creditApplicationService.getCaHead().listbgdetail[this.bgdetailSub.sub_id-1]
    if (value) {
      this.bgdetailSub.osCreditLine = this.listDealer.find((element) => {
        return element.col3 == value;
      }).col4;
      detail.dealer_code = this.bgdetailSub.dealer_code
      detail.buy_back_amt = this.bgdetailSub.osCreditLine;
    } else {
      this.bgdetailSub.osCreditLine = '0';
      detail.dealer_code = '';
      detail.buy_back_amt = '';
    }
  }

}
