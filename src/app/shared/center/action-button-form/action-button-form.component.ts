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

    this.titleSubmit = 'Submit';
    this.titleReject = 'Reject';
    this.titleNew = 'New';
    this.titleEdit = 'Edit';
    this.titleSearch = 'Search';
    this.titleSave = 'Save'
    this.titlePrint = 'Print'
    this.titleCancel = 'Cancel'
    this.titleBack = 'Back'
    this.titleCalculator = 'Calculator'
    this.titleReturn = 'Return'
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
    window.close()
  }

}
