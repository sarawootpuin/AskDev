import {Component, Input, OnChanges, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ActionReadExcelComponent} from "../../../../shared/center/action-read-excel/action-read-excel.component";
import {AppFormService} from "../appform.service";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {Subscription} from "rxjs/Subscription";
declare var $: any;
// import * as ExcelJs from 'exceljs/dist/exceljs.min.js';
// import * as Excel from 'exceljs';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html'
})
export class AttachmentComponent implements OnInit, OnChanges, OnDestroy {
  subscription: Subscription;
  subscriptionTemplate: Subscription;
  @ViewChild('actionReadExcel') actionReadExcel: ActionReadExcelComponent;
  @ViewChild('alertFinish') alertFinish: AlertDialogComponent;
  @Input() inquiry: boolean = false;
  @Input() caNo: string;
  comCode: string = "BGPL";

  constructor(private appFormService: AppFormService) {
  }

  titleDownload = 'Download';
  partDownload = '';
  partDownloadTemp = '';

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionTemplate != null) {
      this.subscriptionTemplate.unsubscribe();
    }
  }

  ngOnChanges() {
    this.caNo = this.caNo.replace(/\//gi, "_");
    this.directoryTemplate(this.comCode);
  }

  directoryTemplate(comCode) {
    this.subscriptionTemplate = this.actionReadExcel.findDirectoryTemplate(comCode).subscribe(
      (data: any) => {
        //console.log(data);
        if (data.CODE == '200') {
          this.partDownloadTemp = data.DATA;
          this.partDownloadTemp = "http://picask:DC8C3078BC63EAA@" + this.partDownloadTemp.substring(2).replace(/\\/g, '/');
        }
      }
    )
  }

  downloadFileTemplate() {
    let part = this.partDownloadTemp + '/' + $('#select :selected').text();
    window.open(part, '_blank');
  }

  checkValueExcel() {
    this.appFormService.getAppFormData().grade = this.actionReadExcel.getPointGrade().grade;
    this.appFormService.getAppFormData().score = this.actionReadExcel.getPointGrade().point;
    this.appFormService.getAppFormData().scoring_date = this.actionReadExcel.getPointGrade().date;

    this.appFormService.setAnsWer(this.actionReadExcel.getPointGrade().ansWer);

    this.alertFinish.setAction("INFORMATION");
    this.alertFinish.list_msg = [];
    this.alertFinish.addMessage('Grade : ' + this.appFormService.getAppFormData().grade +
      ' & Score : ' + this.appFormService.getAppFormData().score);
    this.alertFinish.open();
  }

  downloadFile() {
    window.open(this.partDownload, '_blank');
  }
}
