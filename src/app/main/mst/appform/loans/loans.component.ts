import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListDetail} from "../model/getDataDetail";
import {ListStep} from "../model/getDataStep";
import {DateUtils} from "../../../../shared/center/utils/date-utils";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html'
})
export class LoansComponent implements OnInit {
  data: ListDetail = new ListDetail();
  displayDialog: boolean;
  newStep: boolean;
  step: ListStep = new ListStep();
  selected: ListStep;
  vatRate: number;
  checkLoader : boolean = false;
  disabled : string = 'N';
  @ViewChild('calIrrLoanWarning') calIrrLoanWarning: AlertDialogComponent;
  @ViewChild('alertDialog') alertDialog: AlertDialogComponent;
  @ViewChild('insEVatLoan') insEVatLoan: ElementRef;
  @ViewChild('actionDialog') actionDialog: ActionDialogComponent;

  constructor(private appFormService: AppFormService,
              private dateUtils: DateUtils,
              private userStorage: UserStorage) {
    this.vatRate = Number(this.userStorage.getVatRate());
  }

  ngOnInit() {
    if (this.appFormService.dataLoan) {
      this.data = this.appFormService.dataLoan;
    }
    this.disabled = this.appFormService.getAppFormData().disabled;
    this.appFormService.eventTabLoan.subscribe(
      (data) => {
        this.data = data;
        this.scheduleChange();
        this.disabled = this.appFormService.getAppFormData().disabled;
      }
    )
  }

  scheduleChange() {
    if (this.data.schedule === 'I') {
      this.data.installment_e_vat = '';
      this.insEVatLoan.nativeElement.disabled = true;
    }
    else {
      this.data.listStep = [];
      this.insEVatLoan.nativeElement.disabled = false;
    }
  }

  firstChange() {
    this.data.first = this.dateUtils.addMonth(this.data.disburse_dt, 1);
  }

  disburseChange() {
    if (this.data.disburse_dt === this.data.first) {
      this.data.adv_arr = 'V';
      this.data.adv_arr_name = 'Paid In Advance';
    }
    else {
      this.data.adv_arr = 'A';
      this.data.adv_arr_name = 'Paid In Rear';
    }
  }

  calculateLoanClick() {
    let calCheck: boolean = true;
    this.calIrrLoanWarning.list_msg = [];
    this.calIrrLoanWarning.title = 'Calculate Irr Warning';
    if (this.data.calculateItem == '6') {
      if (!this.data.fin_amt_e_vat) {
        this.calIrrLoanWarning.addMessage('- Request Credit Line');
      }
      if(!this.data.flat_rate){
        this.calIrrLoanWarning.addMessage('- Interest Rate');
      }
      if(!this.data.terms){
        this.calIrrLoanWarning.addMessage('- Terms');
      }
      if(!this.data.disburse_dt){
        this.calIrrLoanWarning.addMessage('- Disburse Date');
      }
      if(!this.data.first){
        this.calIrrLoanWarning.addMessage('- First Due');
      }
      if(this.data.schedule == 'I'){
        this.calIrrLoanWarning.addMessage('- Installment Step Not Cal');
      }
    }
    else if (this.data.calculateItem == '7') {
      if (!this.data.fin_amt_e_vat) {
        this.calIrrLoanWarning.addMessage('- Request Credit Line');
      }
      if(!this.data.terms){
        this.calIrrLoanWarning.addMessage('- Terms');
      }
      if(!this.data.disburse_dt){
        this.calIrrLoanWarning.addMessage('- Disburse Date');
      }
      if(!this.data.first){
        this.calIrrLoanWarning.addMessage('- First Due');
      }
      if(this.data.schedule == 'R' && !this.data.installment_e_vat){
        this.calIrrLoanWarning.addMessage('- Installment');
      }
    }
    if (this.calIrrLoanWarning.list_msg.length > 0) {
      calCheck = false;
      this.calIrrLoanWarning.open();
    }
    if (calCheck) {
      this.checkLoader = true;
      console.log("Before");
      console.log(this.data);
      this.appFormService.calculateIrr(this.data.sub_id, this.data.calculateItem).subscribe(
        (data: any) => {
          console.log("After");
          console.log(data);
          if (data.CODE == '200') {
            console.log(data.LIST_DATA[0]);
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
            console.log(this.data.gross_irr);
          }
        }
      )
    }
  }

  calInstallment() {
    this.alertDialog.reset();
    this.alertDialog.setModeSingle(0);
    this.alertDialog.setTitle('Calculate Installment');
    if (this.data.fin_amt_e_vat <= 0 || !this.data.fin_amt_e_vat) {
      this.alertDialog.list_msg.push('Request Credit Line must be greater than 0');
    }
    if (this.data.flat_rate <= 0 || !this.data.flat_rate) {
      this.alertDialog.list_msg.push('Interest Rate must be greater than 0');
    }
    if (this.data.terms <= 0 || !this.data.terms) {
      this.alertDialog.list_msg.push('Terms must be greater than 0');
    }
    if (!this.data.disburse_dt) {
      this.alertDialog.list_msg.push('กรุณาระบุวันที่ Disburse Date');
    }
    if (this.data.schedule === 'I') {
      this.alertDialog.list_msg.push('ค่างวดแบบ Step ไม่สามารถระบุโดยระบบได้!')
    }

    if (this.alertDialog.list_msg.length > 0) {
      this.alertDialog.open();
    }
    else {
      this.appFormService.calInstallment(this.data.fin_amt_e_vat, this.data.terms, this.data.flat_rate).subscribe(
        (data: any) => {
          this.data.installment_e_vat = data.MSG;
        }
      )
    }
  }

  addEditStep(action: string) {
    if (action == 'add') {
      if (this.data.disburse_dt) {
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
      else{
        alert('-disburse');
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
    else{
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
