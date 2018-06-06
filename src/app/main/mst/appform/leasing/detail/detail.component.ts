import {AfterContentChecked, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from "@angular/core";
import {ListDetail} from "../../model/getDataDetail";
import {ListAnswer} from "../../model/getListAnswer";
import {DateUtils} from "../../../../../shared/center/utils/date-utils";
import {TabView} from "primeng/primeng";
import {ListStep} from "../../model/getDataStep";
import {UserStorage} from "../../../../../shared/user/user.storage.service";
import {AppFormService} from "../../appform.service";
import {ActionLockScreenComponent} from "../../../../../shared/center/action-lock-screen/action-lock-screen.component";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionDialogComponent} from "../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit, AfterContentChecked, OnChanges {
  @Input("data") data: ListDetail;
  @Input("dataFin") dataFin: ListAnswer[];
  @Input("dataSubFin") dataSubFin: ListAnswer[];
  @Input("dataSubFinLs") dataSubFinLs: ListAnswer[];
  @Input("dataLease") dataLease: ListAnswer[];
  @Input("dataPaid") dataPaid: ListAnswer[];
  @Input() dataCurType: ListAnswer[];
  @Input() dataBank: ListAnswer[];
  @Input() dataIntRate: ListAnswer[];
  @Input() dataBankIntRate: ListAnswer[];
  @ViewChild(TabView) tabView: TabView;
  @ViewChild('installIvat') installIvat: ElementRef;
  @ViewChild('installEvat') installEvat: ElementRef;
  @ViewChild('assetIvat') assetIvat: ElementRef;
  @ViewChild('assetEvat') assetEvat: ElementRef;
  @ViewChild('downEvat') downEvat: ElementRef;
  @ViewChild('downIvat') downIvat: ElementRef;
  @ViewChild('depositEvat') depositEvat: ElementRef;
  @ViewChild('depositIvat') depositIvat: ElementRef;
  @ViewChild('finEvatt') finEvatt: ElementRef;
  @ViewChild('finIvatt') finIvatt: ElementRef;
  @ViewChild('rvEvat') rvEvat: ElementRef;
  @ViewChild('rvIvat') rvIvat: ElementRef;
  @ViewChild('lockScreen') lockScreen: ActionLockScreenComponent;
  @ViewChild("calIrrWarning") calIrrWarning: AlertDialogComponent;
  @ViewChild('actionDialog') actionDialog: ActionDialogComponent;

  visiblePanel: boolean = false;
  newStep: boolean;
  step: ListStep = new ListStep();
  selected: ListStep;
  vatRate: number;
  checkLoader: boolean = false;
  disabled: string = 'N';

  constructor(private dateUtils: DateUtils,
              private userStorage: UserStorage,
              private appFormService: AppFormService) {
    this.vatRate = Number(this.userStorage.getVatRate());
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
  }

  ngOnChanges() {
    if (this.appFormService.listTabLeasing) {
      if (this.appFormService.listTabLeasing.length > 0) {
        this.scheduleChange();
      }
    }
  }


  creditTypeChange(dataSelect: any) {
    this.data.inputIvat = false;
    if (dataSelect) {
      this.data.fin_type_name = this.dataFin.find(
        (i) => dataSelect === i.id_code
      ).remark;
    }
    else {
      this.data.fin_type_name = '';
    }
    this.data.sub_fin = '';
    this.data.operating_lease = '';
    this.data.with_vat = 'Y';
    this.data.wh_tax_flg = 'N';
    this.inputChange();
    //this.handleChange(!this.isChecked);
  }

  subFinChange(index) {
    if (index == -1) {
      this.data.sub_fin = '';
      this.data.buy_back_flg = '';
    }
    else {
      if (this.data.fin_typ == 1) {
        this.data.sub_fin = this.dataSubFin[index].id_code;
        this.data.buy_back_flg = this.dataSubFin[index].remark1;
      }
      else {
        this.data.sub_fin = this.dataSubFinLs[index].id_code;
        this.data.buy_back_flg = this.dataSubFinLs[index].remark1;
      }
    }
  }

  operatingLeaseChange(index) {
    if (index > -1) {
      this.data.operating_lease = this.dataLease[index].remark1;
      if (this.dataLease[index].remark.search("Sales") > -1) {
        this.data.buy_back_flg = 'Y';
      }
      else {
        this.data.buy_back_flg = 'N';
      }
    }
  }

  openLc() {
    if (this.data.lc_flg === 'Y' || this.data.lc_flg === 'A') {
      this.visiblePanel = true;
    }
    else {
      this.visiblePanel = false;
    }
  }

  changeFirst(event: string) {
    if (this.data.adv_arr === 'V') {
      this.data.first = event;
    }
    else {
      this.data.first = this.dateUtils.addMonth(event, 1);
    }
  }

  calculateClick() {
    let calCheck: boolean = true;
    this.calIrrWarning.list_msg = [];
    this.calIrrWarning.title = 'Calculate Irr Warning';
    if (this.data.type_cal_pricing == '1') {
      if (!this.data.disburse_dt) {
        this.calIrrWarning.addMessage('- Disburse');
      }
      if (!this.data.first) {
        this.calIrrWarning.addMessage('- First');
      }
      if (!this.data.fin_amt_e_vat) {
        this.calIrrWarning.addMessage('- Financing Amount');
      }
      if (!this.data.gross_irr) {
        this.calIrrWarning.addMessage('- Gross IRR');
      }
      if (!this.data.terms) {
        this.calIrrWarning.addMessage('- Terms');
      }
      if(this.data.schedule == 'I'){
        this.calIrrWarning.addMessage('- Installment');
      }
    }
    else if (this.data.type_cal_pricing == '2') {
      if (!this.data.fin_amt_e_vat) {
        this.calIrrWarning.addMessage('- Financing Amount');
      }
      if (!this.data.flat_rate) {
        this.calIrrWarning.addMessage('- Flat Rate');
      }
      if (!this.data.terms) {
        this.calIrrWarning.addMessage('- Terms');
      }
      if(this.data.schedule == 'I'){
        this.calIrrWarning.addMessage('- Installment');
      }
      if (!this.data.disburse_dt) {
        this.calIrrWarning.addMessage('- Disburse');
      }
    }
    else if (this.data.type_cal_pricing == '3') {
      if (!this.data.disburse_dt) {
        this.calIrrWarning.addMessage('- Disburse Date');
      }
      if (!this.data.first) {
        this.calIrrWarning.addMessage('- First Due');
      }
      if (!this.data.fin_amt_e_vat) {
        this.calIrrWarning.addMessage('- Financing Amount');
      }
      if (!this.data.terms) {
        this.calIrrWarning.addMessage('- Terms');
      }

      if (this.data.cal_inst_typ == 'Fix' && this.data.schedule == 'R' && !this.data.installment_e_vat) {
        this.calIrrWarning.addMessage('- Installment');
      }
      else if (this.data.cal_inst_typ == 'Fix' && this.data.schedule == 'I' && this.data.listStep.length == 0) {
        this.calIrrWarning.addMessage('- Installment');
      }
      else if (this.data.cal_inst_typ == 'Float' && !this.data.installment_e_vat) {
        this.calIrrWarning.addMessage('- Installment');
      }
    }
    else if (this.data.type_cal_pricing == '4') {
      if (!this.data.disburse_dt) {
        this.calIrrWarning.addMessage('- Disburse Date');
      }
      if (!this.data.first) {
        this.calIrrWarning.addMessage('- First Due');
      }
      if (!this.data.gross_irr) {
        this.calIrrWarning.addMessage('- Gross IRR');
      }
      if (!this.data.terms) {
        this.calIrrWarning.addMessage('- Terms');
      }
      if (this.data.cal_inst_typ == 'Fix' && this.data.schedule == 'R' && !this.data.installment_e_vat) {
        this.calIrrWarning.addMessage('- Installment');
      }
      else if (this.data.cal_inst_typ == 'Fix' && this.data.schedule == 'I' && this.data.listStep.length == 0) {
        this.calIrrWarning.addMessage('- Installment');
      }
      else if (this.data.cal_inst_typ == 'Float' && !this.data.installment_e_vat) {
        this.calIrrWarning.addMessage('- Installment');
      }
    }
    else if (this.data.type_cal_pricing == '5') {
      if (!this.data.disburse_dt) {
        this.calIrrWarning.addMessage('- Disburse Date');
      }
      if (!this.data.first) {
        this.calIrrWarning.addMessage('- First Due');
      }
      if (!this.data.terms) {
        this.calIrrWarning.addMessage('- Terms');
      }
      if (!this.data.installment_e_vat && this.data.listStep.length == 0) {
        this.calIrrWarning.addMessage('- Installment');
      }
      else if (this.data.schedule == 'I' && this.data.listStep.length == 0) {
        this.calIrrWarning.addMessage('- Installment');
      }
    }
    if (this.calIrrWarning.list_msg.length > 0) {
      calCheck = false;
      this.calIrrWarning.open();
    }
    if (calCheck) {
      this.checkLoader = true;
      this.appFormService.calculateIrr(this.data.sub_id, this.data.type_cal_pricing).subscribe(
        (data: any) => {
          console.log(data);
          if (data.CODE == '200') {
            this.data.fin_amt_e_vat = data.LIST_DATA[0].finExcVat;
            this.data.fin_amt_vat = data.LIST_DATA[0].finVat;
            this.data.fin_amt_i_vat = data.LIST_DATA[0].finIncVat;
            this.data.installment_e_vat = data.LIST_DATA[0].installmentExcVat;
            this.data.installment_vat = data.LIST_DATA[0].installmentVat;
            this.data.installment_i_vat = data.LIST_DATA[0].installmentIncVat;
            this.data.flat_rate = data.LIST_DATA[0].flatRate;
            this.data.gross_irr = data.LIST_DATA[0].grossIrr;
            this.data.net_irr = data.LIST_DATA[0].netIrr;
            this.data.net_irr_inc_deposit = data.LIST_DATA[0].netIrrIncDeposit;
            this.checkLoader = false;
          }
        }
      )
    }
  }

  inputChange() {
    if (this.data.inputIvat) {
      this.assetEvat.nativeElement.disabled = true;
      this.assetIvat.nativeElement.disabled = false;
      this.finEvatt.nativeElement.disabled = true;
      this.finIvatt.nativeElement.disabled = false;
      if (this.data.fin_typ == '1') {
        this.downEvat.nativeElement.disabled = true;
        this.downIvat.nativeElement.disabled = false;
      }
      else if (this.data.fin_typ == '2') {
        this.depositEvat.nativeElement.disabled = true;
        this.depositIvat.nativeElement.disabled = false;
        this.rvEvat.nativeElement.disabled = true;
        this.rvIvat.nativeElement.disabled = false;
      }
    }
    else {
      this.assetEvat.nativeElement.disabled = false;
      this.assetIvat.nativeElement.disabled = true;
      this.finEvatt.nativeElement.disabled = false;
      this.finIvatt.nativeElement.disabled = true;
      if (this.data.fin_typ == '1') {
        if (this.downEvat) {
          this.downEvat.nativeElement.disabled = false;
          this.downIvat.nativeElement.disabled = true;
        }
      }
      else if (this.data.fin_typ == '2') {
        if (this.depositEvat) {
          this.depositEvat.nativeElement.disabled = false;
          this.depositIvat.nativeElement.disabled = true;
          this.rvEvat.nativeElement.disabled = false;
          this.rvIvat.nativeElement.disabled = true;
        }
      }
    }
  }

  calculatefinfromAsset() {
    if (this.data.with_vat === 'Y') {
      if (this.data.fin_typ === '1') {
        this.data.fin_amt_i_vat = this.data.asst_amt_i_vat - this.data.down_amt_i_vat;
        this.data.fin_amt_vat = this.data.asst_amt_vat - this.data.down_amt_vat;
        this.data.fin_amt_e_vat = this.data.fin_amt_i_vat - this.data.fin_amt_vat;
      }
      else if (this.data.fin_typ === '2') {
        this.data.fin_amt_i_vat = this.data.asst_amt_i_vat - this.data.dep_amt_i_vat;
        this.data.fin_amt_vat = this.data.asst_amt_vat - this.data.dep_amt_vat;
        this.data.fin_amt_e_vat = this.data.fin_amt_i_vat - this.data.fin_amt_vat;
      }
    }
    else {
      if (this.data.fin_typ === '1') {
        this.data.fin_amt_i_vat = this.data.asst_amt_e_vat - this.data.down_amt_e_vat;
      }
      else if (this.data.fin_typ === '2') {
        this.data.fin_amt_i_vat = this.data.asst_amt_e_vat - this.data.dep_amt_e_vat;
      }
      this.data.fin_amt_vat = '';
      this.data.fin_amt_e_vat = this.data.fin_amt_i_vat;
    }
    if (this.data.asst_amt_e_vat) {
      this.data.fin_ratio = Number((this.data.fin_amt_e_vat ? this.data.fin_amt_e_vat : 0) / this.data.asst_amt_e_vat).toFixed(2);
    }
  }

  calculateAsset(from: any) {
    if (from == 'E') {
      if (this.data.with_vat === 'Y') {
        this.data.asst_amt_vat = Number((this.data.asst_amt_e_vat ? this.data.asst_amt_e_vat : 0) * this.vatRate / 100).toFixed(2);
        this.data.asst_amt_i_vat = (Number(this.data.asst_amt_e_vat ? this.data.asst_amt_e_vat : 0) + Number(this.data.asst_amt_vat)).toFixed(2);
      }
      else {
        this.data.asst_amt_vat = 0;
        this.data.asst_amt_i_vat = (this.data.asst_amt_e_vat ? this.data.asst_amt_e_vat : 0);
      }
    }
    else {
      if (this.data.with_vat == 'Y') {
        this.data.asst_amt_e_vat = Number((this.data.asst_amt_i_vat ? this.data.asst_amt_i_vat : 0) * 100 / (100 + this.vatRate)).toFixed(2);
        this.data.asst_amt_vat = Number((this.data.asst_amt_i_vat ? this.data.asst_amt_i_vat : 0) - this.data.asst_amt_e_vat).toFixed(2);
      }
      else {
        this.data.asst_amt_vat = 0;
        this.data.asst_amt_e_vat = (this.data.asst_amt_i_vat ? this.data.asst_amt_i_vat : 0);
      }
    }
    this.calculatefinfromAsset();
  }

  calculateDown(from: any) {
    if (from == 'E') {
      if (this.data.with_vat === 'Y') {
        this.data.down_amt_vat = Number((this.data.down_amt_e_vat ? this.data.down_amt_e_vat : 0) * this.vatRate / 100).toFixed(2);
        this.data.down_amt_i_vat = (Number(this.data.down_amt_e_vat ? this.data.down_amt_e_vat : 0) + Number(this.data.down_amt_vat)).toFixed(2);
      }
      else {
        this.data.down_amt_vat = 0;
        this.data.down_amt_i_vat = (this.data.down_amt_e_vat ? this.data.down_amt_e_vat : 0);
      }
    }
    else {
      if (this.data.with_vat == 'Y') {
        this.data.down_amt_e_vat = Number((this.data.down_amt_i_vat ? this.data.down_amt_i_vat : 0) * 100 / (100 + this.vatRate)).toFixed(2);
        this.data.down_amt_vat = Number((this.data.down_amt_i_vat ? this.data.down_amt_i_vat : 0) - this.data.down_amt_e_vat).toFixed(2);
      }
      else {
        this.data.down_amt_vat = 0;
        this.data.down_amt_i_vat = (this.data.down_amt_e_vat ? this.data.down_amt_e_vat : 0);
      }
    }
    this.calculatefinfromAsset();
  }

  calculateDep(from: any) {
    if (from == 'E') {
      if (this.data.with_vat === 'Y') {
        this.data.dep_amt_vat = Number((this.data.dep_amt_e_vat ? this.data.dep_amt_e_vat : 0) * this.vatRate / 100).toFixed(2);
        this.data.dep_amt_i_vat = (Number(this.data.dep_amt_e_vat ? this.data.dep_amt_e_vat : 0) + Number(this.data.dep_amt_vat)).toFixed(2);
      }
      else {
        this.data.dep_amt_e_vat = 0;
        this.data.dep_amt_i_vat = (this.data.dep_amt_e_vat ? this.data.dep_amt_e_vat : 0);
      }
    }
    else {
      if (this.data.with_vat == 'Y') {
        this.data.dep_amt_e_vat = Number((this.data.dep_amt_i_vat ? this.data.dep_amt_i_vat : 0) * 100 / (100 + this.vatRate)).toFixed(2);
        this.data.dep_amt_vat = Number((this.data.dep_amt_i_vat ? this.data.dep_amt_i_vat : 0) - this.data.dep_amt_e_vat).toFixed(2);
      }
      else {
        this.data.dep_amt_vat = 0;
        this.data.dep_amt_e_vat = (this.data.dep_amt_i_vat ? this.data.dep_amt_i_vat : 0);
      }
    }
    this.calculatefinfromAsset();
  }

  calculateRv(from: any) {
    if (from == 'E') {
      if (this.data.with_vat === 'Y') {
        this.data.rv_amt_e_vat = this.data.rv_amt_e_vat ? this.data.rv_amt_e_vat : 0;
        this.data.rv_amt_vat = Number(this.data.rv_amt_e_vat * this.vatRate / 100).toFixed(2);
        this.data.rv_amt_i_vat = (Number(this.data.rv_amt_e_vat) + Number(this.data.rv_amt_vat)).toFixed(2);
      }
      else {
        this.data.rv_amt_e_vat = this.data.rv_amt_e_vat ? this.data.rv_amt_e_vat : 0;
        this.data.rv_amt_vat = 0;
        this.data.rv_amt_i_vat = this.data.rv_amt_e_vat;
      }
    }
    else {
      if (this.data.with_vat === 'Y') {
        this.data.rv_amt_i_vat = this.data.rv_amt_i_vat ? this.data.rv_amt_i_vat : 0;
        this.data.rv_amt_e_vat = Number(this.data.rv_amt_i_vat * 100 / (100 + this.vatRate)).toFixed(2);
        this.data.rv_amt_vat = Number(this.data.rv_amt_i_vat - this.data.rv_amt_e_vat).toFixed(2);
      }
      else {
        this.data.rv_amt_i_vat = this.data.rv_amt_i_vat ? this.data.rv_amt_i_vat : 0;
        this.data.rv_amt_vat = 0;
        this.data.rv_amt_e_vat = this.data.rv_amt_i_vat;
      }
    }
    this.calculatefinfromAsset();
  }

  calculateFin(from: any) {
    if (from == 'E') {
      if (this.data.with_vat === 'Y') {
        this.data.fin_amt_e_vat = this.data.fin_amt_e_vat ? this.data.fin_amt_e_vat : 0;
        this.data.fin_amt_vat = Number(this.data.fin_amt_e_vat * this.vatRate / 100).toFixed(2);
        this.data.fin_amt_i_vat = (Number(this.data.fin_amt_e_vat) + Number(this.data.fin_amt_vat)).toFixed(2);
      }
      else {
        this.data.fin_amt_e_vat = this.data.fin_amt_e_vat ? this.data.fin_amt_e_vat : 0;
        this.data.fin_amt_vat = '';
        this.data.fin_amt_i_vat = this.data.fin_amt_e_vat;
      }
    }
    else {
      if (this.data.with_vat == 'Y') {
        this.data.fin_amt_i_vat = this.data.fin_amt_i_vat ? this.data.fin_amt_i_vat : 0;
        this.data.fin_amt_e_vat = Number(this.data.fin_amt_i_vat * 100 / (100 + this.vatRate)).toFixed(2);
        this.data.fin_amt_vat = Number(this.data.fin_amt_i_vat - this.data.fin_amt_e_vat).toFixed(2);
      }
      else {
        this.data.fin_amt_i_vat = this.data.fin_amt_i_vat ? this.data.fin_amt_i_vat : 0;
        this.data.fin_amt_vat = 0;
        this.data.fin_amt_e_vat = this.data.fin_amt_i_vat;
      }
    }
    if (this.data.asst_amt_e_vat) {
      if (Number(this.data.asst_amt_e_vat)) {
        this.data.fin_ratio = Number(Number(this.data.fin_amt_e_vat) / Number(this.data.asst_amt_e_vat)).toFixed(2);
      }
    }
  }

  calculateRatio() {
    if (this.data.asst_amt_e_vat) {
      this.data.fin_amt_e_vat = this.data.fin_ratio * this.data.asst_amt_e_vat;
      if (this.data.with_vat === 'Y') {
        this.data.fin_amt_vat = Number(this.data.fin_amt_e_vat * this.vatRate / 100).toFixed(2);
        this.data.fin_amt_i_vat = (Number(this.data.fin_amt_e_vat) + Number(this.data.fin_amt_vat)).toFixed(2);
      }
      else {
        this.data.fin_amt_vat = '';
        this.data.fin_amt_i_vat = this.data.fin_amt_e_vat;
      }

      if (this.data.fin_typ === '1') {
        this.data.down_amt_e_vat = this.data.asst_amt_e_vat - this.data.fin_amt_e_vat;
        if (this.data.with_vat === 'Y') {
          this.data.down_amt_vat = Number(this.data.down_amt_e_vat * this.vatRate / 100).toFixed(2);
          this.data.down_amt_i_vat = Number(this.data.down_amt_e_vat) + Number(this.data.down_amt_vat);
        }
        else {
          this.data.down_amt_vat = '';
          this.data.down_amt_i_vat = this.data.down_amt_e_vat;
        }
      }
      else if (this.data.fin_typ === '2') {
        this.data.dep_amt_e_vat = this.data.asst_amt_e_vat - this.data.fin_amt_e_vat;
        if (this.data.with_vat === 'Y') {
          this.data.dep_amt_vat = Number(this.data.dep_amt_e_vat * this.vatRate / 100).toFixed(2);
          this.data.dep_amt_i_vat = Number(this.data.dep_amt_e_vat) + Number(this.data.dep_amt_vat);
        }
        else {
          this.data.dep_amt_vat = '';
          this.data.dep_amt_i_vat = this.data.dep_amt_e_vat;
        }
      }
    }
  }

  calculateInstallment(have) {
    if (have == "eVat") {
      this.data.installment_e_vat = this.data.installment_e_vat ? this.data.installment_e_vat : 0;
      this.data.installment_vat = Number(this.data.installment_e_vat * this.vatRate / 100);
      this.data.installment_i_vat = Number(this.data.installment_e_vat) + Number(this.data.installment_vat);
    }
    else {
      this.data.installment_i_vat = this.data.installment_i_vat ? this.data.installment_i_vat : 0;
      this.data.installment_vat = Number(this.data.installment_i_vat * this.vatRate / (100 + this.vatRate)).toFixed(2);
      this.data.installment_e_vat = Number(this.data.installment_i_vat) - Number(this.data.installment_vat);
    }
  }

  calculateLc() {
    this.data.asst_amt_e_vat = Number(Number(this.data.asst_prce_forgn) * Number(this.data.currency ? this.data.currency : 0) * (100 + Number(this.data.duty_pcnt ? this.data.duty_pcnt : 0)) / 100).toFixed(2);
    if (this.data.cal_inst_typ === 'Float' || (this.data.schedule === 'R' && this.data.cal_inst_typ === 'Fix')) {
      this.data.installment_e_vat = Number(Number(this.data.asst_amt_e_vat) * Number(this.data.inst_pcnt_of_asst ? this.data.inst_pcnt_of_asst : 0) / 100).toFixed(2);
      this.calculateInstallment('eVat');
    }
    this.calculateFin('E');

  }

  scheduleChange() {
    if (this.data.schedule === 'I') {
      this.data.installment_e_vat = 0;
      this.data.installment_vat = 0;
      this.data.installment_i_vat = 0;
    }
    else if (this.data.schedule === 'R') {
      this.data.listStep = [];
    }
  }

  rateChange() {
    if (this.data.bank_code && this.data.interest_rate_type) {
      let rateSelect = (this.dataBankIntRate.find((item) => {
        return item.id_code === this.data.bank_code && item.remark === this.data.interest_rate_type
      }));

      if (rateSelect) {
        this.data.interest_rate = rateSelect.remark1;
      }
      else {
        this.data.interest_rate = '';
      }
    }

    this.data.listStep = [];
    this.data.schedule = '';
  }

  onTabChange(index) {
    if (this.appFormService.getAppFormData().disabled != 'N') {
      this.data.cal_inst_typ = this.tabView.tabs[index].header;
      if (this.data.cal_inst_typ === 'Fix') {

      }
      else {
      }
    }
  }

  advChange() {
    if (this.data.adv_arr === 'V') {
      this.data.first = this.data.disburse_dt;
    }
    else {
      this.data.first = this.dateUtils.addMonth(this.data.disburse_dt, 1);
    }
  }

  addEditStep(action: string) {
    if (action == 'add') {
      if (this.data.disburse_dt && this.data.first) {
        this.newStep = true;
        this.step = new ListStep();
        this.step.ap_no = this.data.ap_no;
        this.step.sub_id = this.data.sub_id;
        this.step.sub_id2 = String(this.data.listStep.length + 1);
        this.step.due_day = this.data.first.substr(0, 2);
        this.step.inst_vat = String(0);
        this.step.interval = String(1);
        this.actionDialog.setTitle('Add');
        this.actionDialog.open();
      }
      else {
        this.calIrrWarning.list_msg = [];
        this.calIrrWarning.addMessage('- Disburse');
        this.calIrrWarning.open();
      }
    }
    else if (action == 'edit') {
      this.newStep = false;
      this.actionDialog.setTitle('Edit');
      this.actionDialog.open();
    }
  }

  addClick() {
    if (this.step.inst_e_vat) {
      this.step.inst_vat = String((Number(this.step.inst_e_vat) * this.vatRate / 100).toFixed(2));
    }
    let a = [...this.data.listStep];
    if (this.newStep) {
      a.push(this.step);
    }
    else {
      a[this.findSelectedIndex()] = this.step
    }
    this.data.listStep = a;
  }

  delete() {
    let index = this.findSelectedIndex();
    this.data.listStep = this.data.listStep.filter((val, i) => i != index);
    for (let i = 0; i < this.data.listStep.length; i++) {
      this.data.listStep[i].sub_id2 = i + 1;
    }
  }

  findSelectedIndex(): number {
    return this.data.listStep.indexOf(this.selected);
  }

  onRowSelect(event) {
    this.step = this.cloneData(event.data);
  }

  cloneData(list: ListStep): ListStep {
    let step = new ListStep();
    for (let i in list) {
      step[i] = list[i];
    }
    return step;
  }
}
