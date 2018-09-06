import {Component, ElementRef, OnDestroy, OnInit, ViewChild, OnChanges} from "@angular/core";
import {creditApplicationService} from "../../credit-application.service";
import {caBgDetail} from "../../model/ca-bgdetail";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionLockScreenComponent} from "../../../../../shared/center/action-lock-screen/action-lock-screen.component";
import {caListMaster} from "../../model/ca_listmaster";
import {DateUtils} from "../../../../../shared/center/utils/date-utils";
import {TabView} from "primeng/primeng";
import {caStep} from "../../model/ca-step";
import {ActionDialogComponent} from "../../../../../shared/center/action-dialog/action-dialog.component";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../../model/ca-head";

@Component({
  selector: 'app-ca-finance',
  templateUrl: './ca-finance.component.html'
})
export class CaFinanceComponent implements OnInit, OnDestroy ,OnChanges {
  subscripData: Subscription;
  subscripMaster: Subscription;
  subscription :Subscription
  dataFin: caListMaster[];
  dataSubFin: caListMaster[];
  dataSubFinLs: caListMaster[];
  dataLease: caListMaster[];
  dataPaid: caListMaster[];
  dataBank: caListMaster[];
  dataBankIntRate: caListMaster[];
  dataIntRate: caListMaster[];
  dataCurType: caListMaster[];

  @ViewChild(TabView) tabView: TabView;
  @ViewChild('installIvat') installIvat: ElementRef;
  @ViewChild('installEvat') installEvat: ElementRef;
  @ViewChild('assetIvat') assetIvat: ElementRef;
  @ViewChild('assetEvat') assetEvat: ElementRef;
  @ViewChild('downEvat') downEvat: ElementRef;
  @ViewChild('downIvat') downIvat: ElementRef;
  @ViewChild('depIvat') depIvat: ElementRef;
  @ViewChild('depEvat') depEvat: ElementRef;
  @ViewChild('finEvatt') finEvatt: ElementRef;
  @ViewChild('finIvatt') finIvatt: ElementRef;


  @ViewChild('rvEvat') rvEvat: ElementRef;
  @ViewChild('rvIvat') rvIvat: ElementRef;

  @ViewChild('lockScreen') lockScreen: ActionLockScreenComponent;
  @ViewChild("warning") warning: AlertDialogComponent;
  @ViewChild('actionDialog') actionDialog: ActionDialogComponent;

  visiblePanel: boolean = false;
  checked: boolean = false;
  bgdetail: caBgDetail = new caBgDetail();
  vatRate: number;
  checkLoader: boolean = false;
  mode : string;


  constructor(private creditApplicationService: creditApplicationService,
              private dateUtils: DateUtils,
              private userStorage: UserStorage) {
    this.vatRate = Number(this.userStorage.getVatRate());
  }

  ngOnInit() {

    this.subscripData = this.creditApplicationService.eventBgdetail.subscribe(
      (value: caBgDetail) => {
        this.bgdetail = value;
        this.openLc();
        if (!this.bgdetail.type_cal_pricing) {
          this.bgdetail.type_cal_pricing = 1;
        }

        if (this.creditApplicationService.caHead.ca_type == "1")
        {
          this.bgdetail.free_text = "";
          this.mode = "Normal Mode";
        }
        else {
          if (this.bgdetail.free_text)
          {
            this.mode = "Free Text";
          }
          else {
            this.bgdetail.free_text = "";
            this.mode = "Normal Mode";
          }
        }

        this.handleChange(this.checked);

      }
    );

    //--------- list ans
    this.subscripMaster = this.creditApplicationService.eventListMaster.subscribe(
      (value) => {
        this.dataFin = this.creditApplicationService.listFIN;
        this.dataSubFin = this.creditApplicationService.listSUB_FIN;
        this.dataSubFinLs = this.creditApplicationService.listSUB_FINLS;
        this.dataLease = this.creditApplicationService.listLease;
        this.dataPaid = this.creditApplicationService.listPAID;
        this.dataBank = this.creditApplicationService.listBNK;
        this.dataBankIntRate = this.creditApplicationService.listBANK_INT_RATE;
        this.dataCurType = this.creditApplicationService.listCUR_TYPE;
        this.dataIntRate = this.creditApplicationService.listInsRate;
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

    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.bgdetail);
    
  }

  creditTypeChange(dataSelect: any) {
    if (dataSelect) {
      //console.log(dataSelect);
      //console.log(this.dataFin);
      this.bgdetail.credit_type = this.dataFin.find(
        (i) => dataSelect === i.id_code
      ).remark;
    }
    else {
      this.bgdetail.credit_type = '';
    }
    this.bgdetail.sub_fin = '';
    this.bgdetail.operating_lease = '';
    this.bgdetail.with_vat = 'Y';
    this.bgdetail.wh_tax = 0;
    if(this.bgdetail.fin_typ == 1) {
      this.bgdetail.dep_amt_e_vat = 0
      this.bgdetail.dep_amt_i_vat = 0
      this.bgdetail.dep_amt_vat = 0
      this.bgdetail.rv_amt_e_vat = 0
      this.bgdetail.rv_amt_i_vat = 0
      this.bgdetail.rv_amt_vat = 0
    }
    else if( this.bgdetail.fin_typ == 2){
      this.bgdetail.down_amt_e_vat = 0
      this.bgdetail.down_amt_i_vat = 0
      this.bgdetail.down_amt_vat = 0
    }
  }

  subFinChange(index) {
    if (index == -1) {
      this.bgdetail.sub_fin = '';
      this.bgdetail.buy_back_flg = '';
    }
    else {
      if (this.bgdetail.fin_typ == 1) {
        this.bgdetail.sub_fin = this.dataSubFin[index].id_code;
        this.bgdetail.buy_back_flg = this.dataSubFin[index].key2;
      }
      else {
        this.bgdetail.sub_fin = this.dataSubFinLs[index].id_code;
        this.bgdetail.buy_back_flg = this.dataSubFinLs[index].key2;
      }
    }
  }

  operatingLeaseChange(index) {
    if (index > -1) {

      this.bgdetail.operating_lease = this.dataLease[index].key1;
      if (this.dataLease[index].remark.search("Sales") > -1) {
        this.bgdetail.buy_back_flg = 'Y';
      }
      else {
        this.bgdetail.buy_back_flg = 'N';
      }
    }
  }

  openLc() {
    if (this.bgdetail.lc_flg === 'Y' || this.bgdetail.lc_flg === 'A') {
      this.visiblePanel = true;
    }
    else {
      this.visiblePanel = false;
    }
  }

  handleChange(value: boolean) {
    var isChecked = value;
    if (isChecked) {
      this.assetEvat.nativeElement.disabled = true;
      this.assetIvat.nativeElement.disabled = false;
      this.finEvatt.nativeElement.disabled = true;
      this.finIvatt.nativeElement.disabled = false;
      if (this.bgdetail.fin_typ == '1') {
        this.downEvat.nativeElement.disabled = true;
        this.downIvat.nativeElement.disabled = false;
      }
      else if (this.bgdetail.fin_typ == '2') {
        this.depEvat.nativeElement.disabled = true;
        this.depIvat.nativeElement.disabled = false;

        this.rvEvat.nativeElement.disabled = true;
        this.rvIvat.nativeElement.disabled = false;
      }
    }
    else {
      this.assetEvat.nativeElement.disabled = false;
      this.assetIvat.nativeElement.disabled = true;
      this.finEvatt.nativeElement.disabled = false;
      this.finIvatt.nativeElement.disabled = true;
      if (this.bgdetail.fin_typ == '1') {
        this.downEvat.nativeElement.disabled = false;
        this.downIvat.nativeElement.disabled = true;
      }
      else if (this.bgdetail.fin_typ == '2') {
        this.depEvat.nativeElement.disabled = false;
        this.depIvat.nativeElement.disabled = true;

        this.rvEvat.nativeElement.disabled = false;
        this.rvIvat.nativeElement.disabled = true;
      }
    }
  }

  checkStep(): boolean {
    let result: boolean = true;
    let toTerm: number = 0, fromTerm: number = 0, term = Number(this.bgdetail.terms);
    let dataStep = this.bgdetail.listcastep;
    let length = dataStep.length;
    for (let i = 0; i < dataStep.length; i++) {
      if (i == 0) {
        if (dataStep[i].from_term != '1') {
          this.warning.addMessage('- First Step Must Be 1');
          result = false;
        }
      }

      if (Number(dataStep[i].from_term) == toTerm + 1) {
        if (dataStep[i].from_term > dataStep[i].to_term) {
          this.warning.addMessage('- Number of Terms in Table incorrect');
          result = false;
        }
        if (toTerm >= dataStep[i].from_term) {
          this.warning.addMessage('- Number of Terms in Table incorrect');
          result = false;
        }
      }
      else {
        this.warning.addMessage('- Number of Terms in Table incorrect');
        result = false;
      }

      toTerm = Number(dataStep[i].to_term);
      fromTerm = Number(dataStep[i].from_term);
      if (i == length - 1) {
        if (dataStep[i].to_term != term) {
          this.warning.addMessage('- Invalid Period');
          result = false;
        }
      }
    }
    return result;
  }

  calculateClick() {
    let calCheck: boolean = true;
    this.warning.list_msg = [];
    this.warning.title = 'Calculate Irr Warning';
    if (this.bgdetail.type_cal_pricing == 1) {
      if (!this.bgdetail.disburse_dt) {
        this.warning.addMessage('- Disburse');
      }
      if (!this.bgdetail.first) {
        this.warning.addMessage('- First');
      }
      if (!this.bgdetail.fin_amt_e_vat) {
        this.warning.addMessage('- Financing Amount');
      }
      if (!this.bgdetail.gross_irr) {
        this.warning.addMessage('- Gross IRR');
      }
      if (!this.bgdetail.terms) {
        this.warning.addMessage('- Terms');
      }
      if (this.bgdetail.schedule == 'I') {
        this.warning.addMessage('- Installment');
      }
    }
    else if (this.bgdetail.type_cal_pricing == 2) {
      if (!this.bgdetail.disburse_dt) {
        this.warning.addMessage('- Disburse');
      }
      if (!this.bgdetail.first) {
        this.warning.addMessage('- First');
      }
      if (!this.bgdetail.fin_amt_e_vat) {
        this.warning.addMessage('- Financing Amount');
      }
      if (!this.bgdetail.flat_rate) {
        this.warning.addMessage('- Flat Rate');
      }
      if (!this.bgdetail.terms) {
        this.warning.addMessage('- Terms');
      }
      if (this.bgdetail.schedule == 'I') {
        this.warning.addMessage('- Installment');
      }
    }
    else if (this.bgdetail.type_cal_pricing == 3) {
      if (!this.bgdetail.disburse_dt) {
        this.warning.addMessage('- Disburse Date');
      }
      if (!this.bgdetail.first) {
        this.warning.addMessage('- First Due');
      }
      if (!this.bgdetail.fin_amt_e_vat) {
        this.warning.addMessage('- Financing Amount');
      }
      if (!this.bgdetail.terms) {
        this.warning.addMessage('- Terms');
      }

      if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'R' && !this.bgdetail.installment_e_vat) {
        this.warning.addMessage('- Installment');
      }
      else if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'I' && this.bgdetail.listcastep.length == 0) {
        this.warning.addMessage('- Installment');
      }
      else if (this.bgdetail.cal_inst_typ == 'Float' && !this.bgdetail.installment_e_vat) {
        this.warning.addMessage('- Installment');
      }

    }
    else if (this.bgdetail.type_cal_pricing == 4) {
      if (!this.bgdetail.disburse_dt) {
        this.warning.addMessage('- Disburse Date');
      }
      if (!this.bgdetail.first) {
        this.warning.addMessage('- First Due');
      }
      if (!this.bgdetail.gross_irr) {
        this.warning.addMessage('- Gross IRR');
      }
      if (!this.bgdetail.terms) {
        this.warning.addMessage('- Terms');
      }
      if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'R' && !this.bgdetail.installment_e_vat) {
        this.warning.addMessage('- Installment');
      }
      else if (this.bgdetail.cal_inst_typ == 'Fix' && this.bgdetail.schedule == 'I' && this.bgdetail.listcastep.length == 0) {
        this.warning.addMessage('- Installment');
      }
      else if (this.bgdetail.cal_inst_typ == 'Float' && !this.bgdetail.installment_e_vat) {
        this.warning.addMessage('- Installment');
      }
    }
    else if (this.bgdetail.type_cal_pricing == 5) {
      if (!this.bgdetail.disburse_dt) {
        this.warning.addMessage('- Disburse Date');
      }
      if (!this.bgdetail.first) {
        this.warning.addMessage('- First Due');
      }
      if (!this.bgdetail.terms) {
        this.warning.addMessage('- Terms');
      }
      if (!this.bgdetail.installment_e_vat && this.bgdetail.listcastep.length == 0) {
        this.warning.addMessage('- Installment');
      }
      else if (this.bgdetail.schedule == 'I' && this.bgdetail.listcastep.length == 0) {
        this.warning.addMessage('- Installment');
      }
    }
    else if ((this.bgdetail.cal_inst_typ === 'Fix') && (!this.bgdetail.schedule)) {
      this.warning.addMessage('- Schedule');
    }
    else if (!this.bgdetail.adv_arr) {
      this.warning.addMessage('- ADVANCE/ARR');
    }

    if(this.bgdetail.schedule == 'I'){
      this.checkStep();
    }
    if (this.warning.list_msg.length > 0) {
      calCheck = false;
      this.warning.open();
    }
    if (calCheck) {
      //console.log(this.bgdetail.type_cal_pricing);
      this.checkLoader = true;
      this.subscription = this.creditApplicationService.calculateIrr(this.bgdetail.sub_id, this.bgdetail.type_cal_pricing).subscribe(
        (callIrr: any) => {
          if (callIrr.CODE == '200') {
            //console.log(callIrr);
            this.bgdetail.fin_amt_e_vat = +callIrr.LIST_DATA[0].finExcVat;
            this.bgdetail.fin_amt_vat = +callIrr.LIST_DATA[0].finVat;
            this.bgdetail.fin_amt_i_vat = +callIrr.LIST_DATA[0].finIncVat;
            this.bgdetail.installment_e_vat = +callIrr.LIST_DATA[0].installmentExcVat;
            this.bgdetail.installment_vat = +callIrr.LIST_DATA[0].installmentVat;
            this.bgdetail.installment_i_vat = +callIrr.LIST_DATA[0].installmentIncVat;
            this.bgdetail.flat_rate = +callIrr.LIST_DATA[0].flatRate;
            this.bgdetail.gross_irr = +callIrr.LIST_DATA[0].grossIrr;
            this.bgdetail.net_irr = +callIrr.LIST_DATA[0].netIrr;
            this.checkLoader = false;
          }
        }
      )
    }
  }

  calculatefinfromAsset() {
    if (this.bgdetail.with_vat === 'Y') {
      if (this.bgdetail.fin_typ === '1') {
        this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_i_vat - this.bgdetail.down_amt_i_vat;
        this.bgdetail.fin_amt_vat = this.bgdetail.asst_amt_vat - this.bgdetail.down_amt_vat;
        this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_amt_i_vat - this.bgdetail.fin_amt_vat;
      }
      else if (this.bgdetail.fin_typ === '2') {
        this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_i_vat - this.bgdetail.dep_amt_i_vat;
        this.bgdetail.fin_amt_vat = this.bgdetail.asst_amt_vat - this.bgdetail.dep_amt_vat;
        this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_amt_i_vat - this.bgdetail.fin_amt_vat;
      }
    }
    else {
      if (this.bgdetail.fin_typ === '1') {
        this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.down_amt_e_vat;
      }
      else if (this.bgdetail.fin_typ === '2') {
        this.bgdetail.fin_amt_i_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.dep_amt_e_vat;
      }
      this.bgdetail.fin_amt_vat = '';
      this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_amt_i_vat;
    }
    if ((this.bgdetail.asst_amt_e_vat) && (this.bgdetail.fin_amt_e_vat)) {
      this.bgdetail.fin_ratio = Number(this.bgdetail.fin_amt_e_vat / this.bgdetail.asst_amt_e_vat).toFixed(2);
    }
  }

  calculateAsset(from: string) {
    if (from == 'E') {
      if (this.bgdetail.with_vat === 'Y') {
        this.bgdetail.asst_amt_vat = Number((this.bgdetail.asst_amt_e_vat ? this.bgdetail.asst_amt_e_vat : 0) * this.vatRate / 100).toFixed(2);
        this.bgdetail.asst_amt_i_vat = (Number(this.bgdetail.asst_amt_e_vat ? this.bgdetail.asst_amt_e_vat : 0) + Number(this.bgdetail.asst_amt_vat)).toFixed(2);
      }
      else {
        this.bgdetail.asst_amt_vat = 0;
        this.bgdetail.asst_amt_i_vat = this.bgdetail.asst_amt_e_vat ? this.bgdetail.asst_amt_e_vat : 0;
      }
    }
    else {
      if (this.bgdetail.with_vat == 'Y') {
        this.bgdetail.asst_amt_e_vat = Number((this.bgdetail.asst_amt_i_vat ? this.bgdetail.asst_amt_i_vat : 0) * 100 / (100 + this.vatRate)).toFixed(2);
        this.bgdetail.asst_amt_vat = Number((this.bgdetail.asst_amt_i_vat ? this.bgdetail.asst_amt_i_vat : 0) - this.bgdetail.asst_amt_e_vat).toFixed(2);
      }
      else {
        this.bgdetail.asst_amt_vat = 0;
        this.bgdetail.asst_amt_e_vat = this.bgdetail.asst_amt_i_vat ? this.bgdetail.asst_amt_i_vat : 0;
      }
    }
    //  this.calculatefinfromAsset();
  }

  calculateDown(from: any) {
    if (from == 'E') {
      this.bgdetail.down_amt_vat = Number((this.bgdetail.down_amt_e_vat ? this.bgdetail.down_amt_e_vat : 0) * this.vatRate / 100).toFixed(2);
      this.bgdetail.down_amt_i_vat = (Number(this.bgdetail.down_amt_e_vat ? this.bgdetail.down_amt_e_vat : 0) + Number(this.bgdetail.down_amt_vat)).toFixed(2);
    }
    else {
      this.bgdetail.down_amt_e_vat = Number((this.bgdetail.down_amt_i_vat ? this.bgdetail.down_amt_i_vat : 0) * 100 / (100 + this.vatRate)).toFixed(2);
      this.bgdetail.down_amt_vat = Number((this.bgdetail.down_amt_i_vat ? this.bgdetail.down_amt_i_vat : 0) - this.bgdetail.down_amt_e_vat).toFixed(2);
    }
    this.calculatefinfromAsset();
  }

  calculateDep(from: any) {
    if (from == 'E') {
      this.bgdetail.dep_amt_vat = Number(this.bgdetail.dep_amt_e_vat * this.vatRate / 100).toFixed(2);
      this.bgdetail.dep_amt_i_vat = (Number(this.bgdetail.dep_amt_e_vat) + Number(this.bgdetail.dep_amt_vat)).toFixed(2);
    }
    else {
      this.bgdetail.dep_amt_e_vat = Number(this.bgdetail.dep_amt_i_vat * 100 / (100 + this.vatRate)).toFixed(2);
      this.bgdetail.dep_amt_vat = (Number(this.bgdetail.dep_amt_i_vat) - Number(this.bgdetail.dep_amt_e_vat)).toFixed(2);
    }
    //console.log(this.bgdetail.dep_amt_i_vat);
    this.calculatefinfromAsset();
  }

  calculateRv() {
    this.bgdetail.rv_amt_vat = Number(this.bgdetail.rv_amt_e_vat * this.vatRate / 100).toFixed(2);
    this.bgdetail.rv_amt_i_vat = (Number(this.bgdetail.rv_amt_e_vat) + Number(this.bgdetail.rv_amt_vat)).toFixed(2);
    this.calculatefinfromAsset();
  }

  calculateFin() {
    this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_amt_e_vat ? this.bgdetail.fin_amt_e_vat : 0;
    if (this.bgdetail.with_vat === 'Y') {
      this.bgdetail.fin_amt_vat = Number(this.bgdetail.fin_amt_e_vat * this.vatRate / 100).toFixed(2);
      this.bgdetail.fin_amt_i_vat = (Number(this.bgdetail.fin_amt_e_vat) + Number(this.bgdetail.fin_amt_vat)).toFixed(2);
    }
    else {
      this.bgdetail.fin_amt_vat = '';
      this.bgdetail.fin_amt_i_vat = this.bgdetail.fin_amt_e_vat;
    }
    if (this.bgdetail.asst_amt_e_vat) {
      if (Number(this.bgdetail.asst_amt_e_vat) > 0) {
        this.bgdetail.fin_ratio = Number(this.bgdetail.fin_amt_e_vat / this.bgdetail.asst_amt_e_vat).toFixed(2);
      }
    }
  }

  calculateRatio() {
    if (this.bgdetail.asst_amt_e_vat) {
      this.bgdetail.fin_amt_e_vat = this.bgdetail.fin_ratio * this.bgdetail.asst_amt_e_vat;
      if (this.bgdetail.with_vat === 'Y') {
        this.bgdetail.fin_amt_vat = Number(this.bgdetail.fin_amt_e_vat * this.vatRate / 100).toFixed(2);
        this.bgdetail.fin_amt_i_vat = (Number(this.bgdetail.fin_amt_e_vat) + Number(this.bgdetail.fin_amt_vat)).toFixed(2);
      }
      else {
        this.bgdetail.fin_amt_vat = 0;
        this.bgdetail.fin_amt_i_vat = this.bgdetail.fin_amt_e_vat;
      }

      if (this.bgdetail.fin_typ === '1') {
        this.bgdetail.down_amt_e_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.fin_amt_e_vat;
        this.bgdetail.down_amt_vat = Number(this.bgdetail.down_amt_e_vat * this.vatRate / 100).toFixed(2);
        this.bgdetail.down_amt_i_vat = Number(this.bgdetail.down_amt_e_vat) + Number(this.bgdetail.down_amt_vat)        
      }
      else if (this.bgdetail.fin_typ === '2') {
        this.bgdetail.dep_amt_e_vat = this.bgdetail.asst_amt_e_vat - this.bgdetail.fin_amt_e_vat;
        this.bgdetail.dep_amt_vat = Number(this.bgdetail.dep_amt_e_vat * this.vatRate / 100).toFixed(2);
        this.bgdetail.dep_amt_i_vat = Number(this.bgdetail.dep_amt_e_vat) + Number(this.bgdetail.dep_amt_vat);
      }
    }
  }

  calculateInstallment(have) {
    if (have == "eVat") {
      this.bgdetail.installment_vat = Number(this.bgdetail.installment_e_vat * this.vatRate / 100).toFixed(2);
      this.bgdetail.installment_i_vat = Number(this.bgdetail.installment_e_vat) + Number(this.bgdetail.installment_vat);
    }
    else {
      this.bgdetail.installment_vat = Number(this.bgdetail.installment_i_vat * this.vatRate / (100 + this.vatRate)).toFixed(2);
      this.bgdetail.installment_e_vat = Number(this.bgdetail.installment_i_vat) - Number(this.bgdetail.installment_vat);
    }
  }

  calculateLc() {
    this.bgdetail.currency = this.bgdetail.currency ? this.bgdetail.currency : 0
    this.bgdetail.duty_pcnt = this.bgdetail.duty_pcnt ? this.bgdetail.duty_pcnt : 0;
    this.bgdetail.inst_pcnt_of_asst = this.bgdetail.inst_pcnt_of_asst ? this.bgdetail.inst_pcnt_of_asst : 0
    this.bgdetail.asst_amt_e_vat = Number(Number(this.bgdetail.asst_prce_forgn) * Number(this.bgdetail.currency) * (100 + Number(this.bgdetail.duty_pcnt)) / 100).toFixed(2);
    if (this.bgdetail.cal_inst_typ === 'Float' || (this.bgdetail.schedule === 'R' && this.bgdetail.cal_inst_typ === 'Fix')) {
      this.bgdetail.installment_e_vat = Number(Number(this.bgdetail.asst_amt_e_vat) * Number(this.bgdetail.inst_pcnt_of_asst) / 100).toFixed(2);
      this.calculateInstallment('eVat');
    }
    this.calculateFin();

  }

  advChange() {
    if (this.bgdetail.adv_arr === 'V') {
      this.bgdetail.first = this.bgdetail.disburse_dt;
    }
    else {
      this.bgdetail.first = this.dateUtils.addMonth(this.bgdetail.disburse_dt, 1);
    }
  }

  onSelectMethod(inputDate) {
    return this.dateUtils.dateToString(inputDate, 'dd/MM/yyyy');
  }

  rateChange() {

    if (this.bgdetail.bank_code && this.bgdetail.interest_rate_type) {
      let rateSelect = (this.dataBankIntRate.find((item) => {
        // return item.id_code === this.bgdetail.bank_code && item.remark === this.bgdetail.interest_rate_type
        return item.key1 === this.bgdetail.bank_code && item.remark === this.bgdetail.interest_rate_type
      }));

      if (rateSelect) {
        this.bgdetail.interest_rate = rateSelect.remark;
      }
      else {
        this.bgdetail.interest_rate = '';
      }
    }
  }

  onTabChange(index) {
    this.bgdetail.cal_inst_typ = this.tabView.tabs[index].header;
  }

  scheduleChange() {
    if (this.bgdetail.schedule === 'I') {
      this.bgdetail.installment_e_vat = '';
      this.bgdetail.installment_vat = '';
      this.bgdetail.installment_i_vat = '';
    }
    else if (this.bgdetail.schedule === 'R') {
      this.bgdetail.listcastep = [];
    }
  }

  onSelectDate(inputDate) {
    return this.dateUtils.dateToString(inputDate, 'dd/MM/yyyy');
  }

  newStep: boolean;
  step: caStep = new caStep();
  selectedStep: caStep;

  addEditStep(action: string) {
    if (action == 'add') {
      if (this.bgdetail.disburse_dt && this.bgdetail.first) {
        this.newStep = true;
        this.step = new caStep();
        this.step.ca_no = this.bgdetail.ca_no;
        this.step.sub_id = this.bgdetail.sub_id;
        this.step.sub_id2 = String(this.bgdetail.listcastep.length + 1);
        this.step.due_day = this.bgdetail.first.substr(0, 2);
        this.step.inst_vat = String(0);
        this.step.interval = String(1);
        this.actionDialog.setTitle('Add');
        this.actionDialog.open();
      }
      else {
        this.warning.list_msg = [];
        this.warning.addMessage('- Disburse');
        this.warning.open();
      }
    }
    else if (action == 'edit') {
      this.newStep = false;
      this.actionDialog.setTitle('Edit');
      this.actionDialog.open();
    }
  }

  addClick() {
    //console.log(this.step);
    if (this.step.inst_e_vat) {
      this.step.inst_vat = String((Number(this.step.inst_e_vat) * this.vatRate / 100).toFixed(2));
    }

    let listStep = [...this.bgdetail.listcastep];
    if (this.newStep) {
      listStep.push(this.step);
    }
    else {
      listStep[this.findSelectedIndex()] = this.step
    }
    this.bgdetail.listcastep = listStep;
  }

  delete() {
    let index = this.findSelectedIndex();
    this.bgdetail.listcastep = this.bgdetail.listcastep.filter((val, i) => i != index);
    for (let i = 0; i < this.bgdetail.listcastep.length; i++) {
      this.bgdetail.listcastep[i].sub_id2 = i + 1;
    }
  }

  findSelectedIndex(): number {
    return this.bgdetail.listcastep.indexOf(this.selectedStep);
  }

  onRowSelect(event) {
    this.step = this.cloneData(event.data);
  }

  cloneData(list: caStep): caStep {
    let step = new caStep();
    for (let i in list) {
      step[i] = list[i];
    }
    return step;
  }

  changeDisburseFirst(event: string) {
    if (this.bgdetail.disburse_dt == this.bgdetail.first) {
      this.bgdetail.adv_arr = 'V';
    }
    else {
      this.bgdetail.adv_arr = 'A';
    }
  }

  changeMode(){
    if(this.mode == "Normal Mode")
    {
      this.mode = "Free Text";
    }
    else {
      this.mode = "Normal Mode";
      this.bgdetail.free_text = "";
      this.bgdetail.net_irr = 0
      this.bgdetail.gross_irr = 0
    }
    // console.log(this.mode);
  }

  beginningPay(value){
    console.log(value);
    if(value == 'V') { // Paid In Advance 
      this.bgdetail.first = this.bgdetail.disburse_dt
    } else if (value == 'A') { // Paid In Rear
      this.bgdetail.first = this.dateUtils.addMonth(this.bgdetail.disburse_dt,1)
    } else {

    }
  }

}
