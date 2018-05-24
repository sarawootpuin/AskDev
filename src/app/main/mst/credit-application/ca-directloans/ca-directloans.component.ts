import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {caBgDetail} from "../model/ca-bgdetail";
import {creditApplicationService} from "../credit-application.service";
import {DateUtils} from "../../../../shared/center/utils/date-utils";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {caStep} from "../model/ca-step";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ca-directloans',
  templateUrl: './ca-directloans.component.html'
})
export class CaDirectloansComponent implements OnInit , OnDestroy {
  @Input() isReadonly : boolean;
  @Input() task : string;
  subscripData: Subscription;
  subscripMaster: Subscription;

  listbgdetail : caBgDetail[];
  selectbgdetail : caBgDetail =  new caBgDetail();
  step: caStep = new caStep();
  selectedStep : caStep = new caStep() ;

  newStep: boolean;
  vatRate: number;
  checkLoader : boolean = false;
  disabledForm : string = 'N';
  adv_arr_name : string ;

  strgrossIrr : string = 'Gross Irr' ;

  @ViewChild('calIrrLoanWarning') calIrrLoanWarning: AlertDialogComponent;
  @ViewChild('alertDialog') alertDialog: AlertDialogComponent;
  @ViewChild('insEVatLoan') insEVatLoan: ElementRef;
  @ViewChild('actionDialog') actionDialog: ActionDialogComponent;

  constructor(private creditApplicationService: creditApplicationService,
              private userStorage: UserStorage,
              private dateUtils: DateUtils) {
    this.vatRate = Number(this.userStorage.getVatRate());
  }

  ngOnInit(){

    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (caHead) => {
        if ( caHead.sbu_typ == 'P' ) {
          this.listbgdetail = caHead.listbgdetail ;
          if ( (this.listbgdetail) && (this.listbgdetail.length > 0)  )
          {   this.selectbgdetail = this.listbgdetail[0] ;
              if ( caHead.sbu_typ =='P' ){
                 this.selectbgdetail.selectForCall = 6;
              }
              this.disburseChange( this.selectbgdetail.disburse_dt);
              this.disabledForm = 'Y';
          }
        }
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

  scheduleChange(){
    if (this.selectbgdetail.schedule === 'I') {
      this.selectbgdetail.installment_e_vat = '';
      this.insEVatLoan.nativeElement.disabled = true;
    }
    else {
      this.selectbgdetail.listcastep = [];
      this.insEVatLoan.nativeElement.disabled = false;
    }
  }

  firstChange(event){
    return this.dateUtils.dateToString(this.dateUtils.addMonth(event, 1), 'dd/MM/yyyy');
  }

  disburseChange(disburse){
    if (disburse.constructor.name != 'String' )
    { this.selectbgdetail.disburse_dt = this.dateUtils.dateToString(disburse, 'dd/MM/yyyy'); }
    if (this.selectbgdetail.disburse_dt === this.selectbgdetail.first) {
      this.selectbgdetail.adv_arr = 'V';
      this.adv_arr_name = 'Paid In Advance';
    }
    else {
      this.selectbgdetail.adv_arr = 'A';
      this.adv_arr_name = 'Paid In Rear';
    }
  }

  calculateLoanClick(){
    let calCheck: boolean = true;
    this.calIrrLoanWarning.list_msg = [];
    this.calIrrLoanWarning.title = 'Calculate Irr Warning';
    if (this.selectbgdetail.selectForCall == 6) {
      if (!this.selectbgdetail.fin_amt_e_vat) {
        this.calIrrLoanWarning.addMessage('- Request Credit Line');
      }
      if(!this.selectbgdetail.flat_rate){
        this.calIrrLoanWarning.addMessage('- Interest Rate');
      }
      if(!this.selectbgdetail.terms){
        this.calIrrLoanWarning.addMessage('- Terms');
      }
      if(!this.selectbgdetail.disburse_dt){
        this.calIrrLoanWarning.addMessage('- Disburse Date');
      }
      if(!this.selectbgdetail.first){
        this.calIrrLoanWarning.addMessage('- First Due');
      }
      if(this.selectbgdetail.schedule == 'I'){
        this.calIrrLoanWarning.addMessage('- Installment Step Not Cal');
      }
    }
    else if (this.selectbgdetail.selectForCall == 7) {
      if (!this.selectbgdetail.fin_amt_e_vat) {
        this.calIrrLoanWarning.addMessage('- Request Credit Line');
      }
      if(!this.selectbgdetail.terms){
        this.calIrrLoanWarning.addMessage('- Terms');
      }
      if(!this.selectbgdetail.disburse_dt){
        this.calIrrLoanWarning.addMessage('- Disburse Date');
      }
      if(!this.selectbgdetail.first){
        this.calIrrLoanWarning.addMessage('- First Due');
      }
      if(this.selectbgdetail.schedule == 'R' && !this.selectbgdetail.installment_e_vat){
        this.calIrrLoanWarning.addMessage('- Installment');
      }
    }
    if (this.calIrrLoanWarning.list_msg.length > 0) {
      calCheck = false;
      this.calIrrLoanWarning.open();
    }
    if (calCheck) {
      this.checkLoader = true;
      this.creditApplicationService.calculateIrr(this.selectbgdetail.sub_id, this.selectbgdetail.selectForCall).subscribe(
        (data: any) => {
          if (data.CODE == '200') {
            this.selectbgdetail.fin_amt_e_vat = data.LIST_DATA[0].finExcVat;
            this.selectbgdetail.fin_amt_vat = data.LIST_DATA[0].finVat;
            this.selectbgdetail.fin_amt_i_vat = data.LIST_DATA[0].finIncVat;
            this.selectbgdetail.installment_e_vat = data.LIST_DATA[0].installmentExcVat;
            this.selectbgdetail.installment_vat = data.LIST_DATA[0].installmentVat;
            this.selectbgdetail.installment_i_vat = data.LIST_DATA[0].installmentIncVat;
            this.selectbgdetail.flat_rate = data.LIST_DATA[0].flatRate;
            this.selectbgdetail.gross_irr = data.LIST_DATA[0].grossIrr;
            this.selectbgdetail.net_irr = data.LIST_DATA[0].netIrr;
            this.selectbgdetail.net_irr_inc_deposit = data.LIST_DATA[0].netIrrIncDeposit;
            this.checkLoader = false;
          }
        }
      )
    }
  }

  calInstallment() {
    this.alertDialog.reset();
    this.alertDialog.setModeSingle(0);
    this.alertDialog.setTitle('Calculate Installment');
    if (this.selectbgdetail.fin_amt_e_vat <= 0 || !this.selectbgdetail.fin_amt_e_vat) {
      this.alertDialog.list_msg.push('Request Credit Line must be greater than 0');
    }
    if (this.selectbgdetail.flat_rate <= 0 || !this.selectbgdetail.flat_rate) {
      this.alertDialog.list_msg.push('Interest Rate must be greater than 0');
    }
    if (this.selectbgdetail.terms <= 0 || !this.selectbgdetail.terms) {
      this.alertDialog.list_msg.push('Terms must be greater than 0');
    }
    if (!this.selectbgdetail.disburse_dt) {
      this.alertDialog.list_msg.push('กรุณาระบุวันที่ Disburse Date');
    }
    if (this.selectbgdetail.schedule === 'I') {
      this.alertDialog.list_msg.push('ค่างวดแบบ Step ไม่สามารถระบุโดยระบบได้!')
    }

    if (this.alertDialog.list_msg.length > 0) {
      this.alertDialog.open();
    }
    else {
      this.creditApplicationService.calInstallment(this.selectbgdetail.fin_amt_e_vat, this.selectbgdetail.terms, this.selectbgdetail.flat_rate).subscribe(
        (data: any) => {
          this.selectbgdetail.installment_e_vat = data.MSG;
        }
      )
    }
  }

  addEditStep(action: string) {
    if (action == 'add') {
      if (this.selectbgdetail.disburse_dt) {
        this.newStep = true;
        this.step = new caStep();
        this.step.ca_no = this.selectbgdetail.ca_no;
        this.step.sub_id = this.selectbgdetail.sub_id;
        this.step.sub_id2 = String(this.selectbgdetail.listcastep.length + 1);
        this.step.due_day = this.selectbgdetail.first.substr(0, 2);
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
    let a = [...this.selectbgdetail.listcastep];
    if (this.newStep) {
      a.push(this.step);
    }
    else{
      a[this.findSelectedIndex()] = this.step
    }
    this.selectbgdetail.listcastep = a;
  }

  delete() {
    let index = this.findSelectedIndex();
    this.selectbgdetail.listcastep = this.selectbgdetail.listcastep.filter((val, i) => i != index);
    for (let i = 0; i < this.selectbgdetail.listcastep.length; i++) {
      this.selectbgdetail.listcastep[i].sub_id2 = i + 1;
    }
  }

  findSelectedIndex(): number {
    return this.selectbgdetail.listcastep.indexOf(this.selectedStep);
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


}
