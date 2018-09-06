import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
import {Router} from "@angular/router";
declare var $: any;


@Component({
  selector: 'app-action-button-form',
  templateUrl: './action-button-form.component.html',
  styleUrls: ['./action-button-form.component.css']
})
export class ActionButtonFormComponent implements OnInit {
  @Input() title: string = "";
  @Input() showSubmit: boolean;
  @Input() showReject: boolean;
  @Input() showNew: boolean;
  @Input() showEdit: boolean;
  @Input() showSearch: boolean;
  @Input() showSave: boolean;
  @Input() showPrint: boolean;
  @Input() showCancel: boolean;
  @Input() showBack: boolean;
  @Input() showCalculator: boolean;
  @Input() showReturn: boolean;
  @Input() showExit: boolean ;
  @Input() showClose: boolean ;
  // new-----------
  @Input() showSubmitOnlySelect: boolean ;
  @Input() showSubmitAll: boolean ;
  @Input() showProcess: boolean ;
  @Input() showClear: boolean ;
  @Input() showPayment: boolean;
  @Input() showImportEx : boolean;
  @Input() showEmail : boolean;
  @Input() showRenew : boolean;

  //gad
  @Input() showPayer: boolean;
  @Input() showApply: boolean;
  @Input() showExcel: boolean;
  //
  // new-----------

  @Input() titleSubmit: string;
  @Input() titleReject: string;
  @Input() titleNew: string;
  @Input() titleEdit: string;
  @Input() titleSearch: string;
  @Input() titleSave: string;
  @Input() titlePrint: string;
  @Input() titleCancel: string;
  @Input() titleBack: string;
  @Input() titleCalculator: string;
  @Input() titleReturn: string;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onReject: EventEmitter<any> = new EventEmitter();
  @Output() onNew: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onPrint: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onBack: EventEmitter<any> = new EventEmitter();
  @Output() onCalculator: EventEmitter<any> = new EventEmitter();
  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  // new-----------
  @Input() titleSubmitOnlySelect: string ;
  @Input() titleSubmitAll: string ;
  @Input() titleProcess: string ;
  @Input() titleClear: string ;
  @Input() titlePayment: string;
  @Input() titleImportEx: string;
  @Input() titleEmail : string;
  @Input() titleRenew : string;
  @Input() titlePayer : string;
  //gad
  @Input() titleApply : string;
  @Input() titleExcel : string;

  @Output() onSubmitOnlySelect: EventEmitter<any> = new EventEmitter();
  @Output() onSubmitAll: EventEmitter<any> = new EventEmitter();
  @Output() onProcess: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();
  @Output() onPayment: EventEmitter<any> = new EventEmitter();
  @Output() onImportEx: EventEmitter<any> = new EventEmitter();
  @Output() onEmail: EventEmitter<any> = new EventEmitter();
  @Output() onRenew: EventEmitter<any> = new EventEmitter();
  @Output() onPayer: EventEmitter<any> = new EventEmitter();
  // new-----------
  //gad
  @Output() onApply: EventEmitter<any> = new EventEmitter();
  @Output() onExcel: EventEmitter<any> = new EventEmitter();



  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;

  constructor(private router: Router) {
    this.showSubmit = false;
    this.showReject = false;
    this.showNew = false;
    this.showBack = false;
    this.showSearch = false;
    this.showEdit = false;
    this.showSave = false;
    this.showPrint = false;
    this.showCancel = false;
    this.showCalculator = false;
    this.showReturn = false;
    this.showExit = true;  ////////////  true
    this.showClose = false;
    //new --------
    this.showSubmitOnlySelect = false;
    this.showSubmitAll = false;
    this.showProcess = false;
    this.showClear = false;
    this.showPayment = false;
    this.showImportEx = false;
    this.showEmail = false;
    this.showRenew = false;
    //gad
    this.showPayer = false;
    this.showApply = false;
    this.showExcel = false;
    //new --------

    this.titleSubmit = 'Submit';
    this.titleReject = 'Reject';
    this.titleNew = 'New';
    this.titleEdit = 'Edit';
    this.titleSearch = 'Search';
    this.titleSave = 'Save';
    this.titlePrint = 'Print';
    this.titleCancel = 'Cancel';
    this.titleBack = 'Back';
    this.titleCalculator = 'Calculator';
    this.titleReturn = 'Return';
    //new --------
    this.titleSubmitOnlySelect = 'Submit Only Select';
    this.titleSubmitAll = 'Submit All';
    this.titleProcess = 'Process';
    this.titleClear = 'Clear';
    this.titlePayment = 'Payment';
    this.titleImportEx = 'Import Excel File';
    this.titleEmail = 'Send Mail';
    this.titleRenew = 'Renew';
    //gad
    this.titlePayer = 'Payer';
    this.titleApply = 'Apply';
    this.titleExcel = 'Excel';
    //new --------
  }

  ngOnInit() {
  }

  onSubmitClick() {
    this.onSubmit.emit();
  }

  onRejectClick() {
    this.onReject.emit();
  }

  onCalculatorClick() {
    this.onCalculator.emit();
  }

  onNewClick() {
    this.onNew.emit();
  }

  onBackClick() {
    this.onBack.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onSearchClick() {
    this.onSearch.emit();
  }

  onSaveClick() {
    this.onSave.emit();
  }

  onPrintClick() {
    this.onPrint.emit();
  }

  onCancelClick() {
    this.onCancel.emit();
  }

  onReturnClick() {
    this.onReturn.emit();
  }

  // new ------
  onSubmitOnlySelectClick() {
    this.onSubmitOnlySelect.emit();
  }
  onSubmitAllClick(){
    this.onSubmitAll.emit();
  }
  onProcessClick(){
    this.onProcess.emit();
  }
  onClearClick(){
    this.onClear.emit();
  }
  onPaymentClick(){
    this.onPayment.emit();
  }
  onImportExClick(){
    this.onImportEx.emit();
  }
  onEmailClick(){
    this.onEmail.emit();
  }
  onRenewClick(){
    this.onRenew.emit();
  }
  //gad
  onPayerClick(){
    this.onPayer.emit();
  }

  onApplyClick(){
    this.onApply.emit();
  }

  onExcelClick(){
    this.onExcel.emit();
  }
  //

  // new ------

  onExit(){
    this.Questiondialog.reset();
    this.Questiondialog.setAction('EXIT');
    this.Questiondialog.open();
  }

  okExist(){
    if( $('div.modal.fade.show').length >1) {
      $('.modal').modal('hide');
    }
    else
      this.router.navigate(['/home']);

  }
  onClose(){
    console.log(' close ');
    window.close()
  }

}
