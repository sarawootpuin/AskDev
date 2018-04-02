import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StringUtils} from "../../config/string-utils";
declare var $: any;

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  @ViewChild('alert_dialog') alert_dialog: ElementRef;
  @Input("title") title: string;
  @Input("action")  action: string;
  @Input("msg") msg: string;
  @Input("list_msg") list_msg: string[];
  @Input("mode_single") single: number = 1; // 0 = multiple msg , 1= single msg
  @Output("onOK") onOK: EventEmitter<any> = new EventEmitter();
  @Output("onCancel") onCancel: EventEmitter<any> = new EventEmitter();
  @Output("onCloseDialog") onCloseDialog: EventEmitter<any> = new EventEmitter();
  showOK: boolean;
  showCancel: boolean;
  symbol: string;



  constructor(private stringUtils: StringUtils) {
    this.title = "Warning";
    this.msg = "Found Problem";
    this.list_msg = ["Found Problem1", "Found Problem2"];
    this.single = 1;
    this.action = "WARNING";
    this.symbol = "WARNING";
    this.showOK = true;
    this.showCancel = false;

  }

  ngOnInit() {
     this.setAction(this.action);
  }

  setTitle(newTitle: string) {

  }

  setAction(newAction: string) {
    this.action = newAction.toUpperCase();
    if (this.action == 'SAVE') {
      this.setMessage(this.stringUtils.TitleDialog.SAVE);
    }
    else if (this.action == 'SUBMIT') {
      this.setMessage(this.stringUtils.TitleDialog.SUBMIT);
    }
    else if (this.action == 'REJECT') {
      this.setMessage(this.stringUtils.TitleDialog.REJECT);
    }
    else if (this.action == 'DELETE') {
      this.setMessage(this.stringUtils.TitleDialog.DELETE);
    }
    else if (this.action == 'RETURN'){
      this.setMessage(this.stringUtils.TitleDialog.RETURN);
    }
    else if (this.action == 'CANCEL') {
      this.setMessage(this.stringUtils.TitleDialog.CANCEL);
    }
    else if (this.action == 'PRINT') {
      this.setMessage(this.stringUtils.TitleDialog.PRINT);
    }
    else if (this.action == 'ADD') {
      this.setMessage(this.stringUtils.TitleDialog.ADD);
    }
    else if (this.action == 'EDIT') {
      this.setMessage(this.stringUtils.TitleDialog.EDIT);
    }
    else if (this.action == 'PROCESS') {
      this.setMessage(this.stringUtils.TitleDialog.PROCESS);
    }
    else if (this.action == 'EXIT') {
      this.setMessage(this.stringUtils.TitleDialog.EXIT);
    }
    //set button and symbol
    if ((this.action === 'WARNING') || (this.action === 'ERROR') || (this.action === 'INFORMATION')) {
      this.showOK = true;
      this.showCancel = false;
      this.symbol = this.action;
    }
    else if (newAction === 'CUSTOM') {
      this.showOK = true;
      this.showCancel = true;
      this.symbol = this.action;
    }
    else {
      this.showOK = true;
      this.showCancel = true;
      this.symbol = 'QUESTION';
    }
    //set title
    if (this.action === 'ERROR') {
      this.title = 'Error';
    }
    else if (this.action === 'WARNING') {
      this.title = 'Warning';
    }
    else if (this.action === 'INFORMATION') {
      this.title = 'Information';
    }
    else if (this.action === 'CUSTOM)') {
      this.title ='';
    }
    else {
      this.title = 'Confirm';
    }
  }

  setMessage(newMsg: string) {
    this.msg = newMsg;
  }

  addMessage(newMsg: string) {
    this.list_msg.push(newMsg);
  }

  setModeSingle(mode: number) {
    this.single = mode;
  }

  reset() {
    this.title = "";
    this.msg = "";
    this.action = "";
    this.symbol = "";
    this.list_msg = [];
  }

  open() {
    $(this.alert_dialog.nativeElement).modal({backdrop: "static", show: true});
  }

  close() {
    this.onCloseDialog.emit();
    $(this.alert_dialog.nativeElement).modal('hide');
  }

  onOKClick() {
    this.onOK.emit();
    $(this.alert_dialog.nativeElement).modal('hide');
  }

  onCancelClick() {
    this.onCancel.emit();
    $(this.alert_dialog.nativeElement).modal('hide');
  }
}
