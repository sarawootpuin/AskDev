import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css']
})
export class ActionDialogComponent implements OnInit {
  @ViewChild('action_dialog') action_dialog: ElementRef;
  @Output("onCloseDialog") onCloseDialog:EventEmitter<any> = new EventEmitter();
  @Input("title") title: string;
  @Input() width: number;
  @Input() showChoose: boolean;
  @Input() showOk: boolean;
  @Input() showAdd: boolean;
  @Input() showYes: boolean;
  @Input() showEdit: boolean;
  @Input() showSave: boolean;
  @Input() showPrint: boolean;
  @Input() showCancel: boolean;
  @Input() showNo: boolean;
  @Input() showClose: boolean;

  @Output() onChoose: EventEmitter<any> = new EventEmitter();
  @Output() onOk: EventEmitter<any> = new EventEmitter();
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onYes: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onPrint: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onNo: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();


  constructor() {
    this.title = "";
    this.showChoose = false;
    this.showOk = false;
    this.showAdd = false;
    this.showYes = false;
    this.showEdit = false;
    this.showSave = false;
    this.showPrint = false;
    this.showCancel = false;
    this.showNo = false;
    this.showClose = false;
    this.width = 500 ;
  }

  ngOnInit() {
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  open() {
    $(this.action_dialog.nativeElement).modal({backdrop: "static", show: true});
  }

  close() {
    this.onCloseDialog.emit();
    $(this.action_dialog.nativeElement).modal('hide');
  }

  onChooseClick() {
    this.onChoose.emit();
  }

  onOkClick() {
    this.onOk.emit();
  }

  onAddClick() {
    this.onAdd.emit();
  }

  onYesClick() {
    this.onYes.emit();
  }

  onEditClick() {
    this.onEdit.emit();
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

  onNoClick() {
    this.onNo.emit();
  }

  onCloseClick() {
    this.onClose.emit();
  }


  //---------------- Set Button
  setShowChoose(show:boolean){
    this.showChoose = show ;
  }

  setShowOk(show:boolean){
    this.showOk = show ;
  }

  setShowAdd(show:boolean){
    this.showAdd = show ;
  }

  setShowYes(show:boolean){
    this.showYes = show ;
  }

  setShowEdit(show:boolean){
     this.showEdit = show ;
  }

  setShowSave(show:boolean){
    this.showSave = show ;
  }

  setShowPrint(show:boolean){
    this.showPrint = show ;
  }

  setShowCancel(show:boolean){
    this.showCancel = show ;
  }

  setShowNo(show:boolean){
    this.showNo = show ;
  }
}
