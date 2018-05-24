import {Component, OnInit, ViewChild, Input, OnChanges} from "@angular/core";
import {ActionReadExcelComponent} from "../../../../shared/center/action-read-excel/action-read-excel.component";
import {AppFormService} from "../appform.service";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
declare var $: any;
// import * as ExcelJs from 'exceljs/dist/exceljs.min.js';
// import * as Excel from 'exceljs';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html'
})
export class AttachmentComponent implements OnInit ,OnChanges {
  @ViewChild('actionReadExcel') actionReadExcel: ActionReadExcelComponent;
  @ViewChild('alertFinish') alertFinish : AlertDialogComponent;
  @Input() inquiry : boolean = false;
  @Input() caNo: string;
  comCode: string = "BGPL";

  constructor(private appFormService: AppFormService) {
  }

  titleDownload = 'Download';
  partDownload = '';
  partDownloadTemp = '';

  ngOnInit() {

  }

  ngOnChanges(){
    this.caNo = this.caNo.replace(/\//gi, "_");
    this.checkFile(this.comCode, this.caNo);
    this.directoryTemplate(this.comCode);
  }

  checkFile(comCode, caNo) {
    //console.log('comCode'+comCode);
    //console.log('caNo'+caNo);
    this.actionReadExcel.findCaDirectoryPart(comCode, caNo).subscribe(
      (data: any) => {
        //console.log('test');
        console.log(data);
        if (data.MSG == "Complete") {
          this.actionReadExcel.fileSelect = data.DATA.fileName;
          this.partDownload = data.DATA.part;
          this.partDownload = "http://picask:DC8C3078BC63EAA@" + this.partDownload.substring(2).replace(/\\/g, '/');
          console.log(this.partDownload);
        }
        //console.log(this.partDownload);
      }
    );
  }

  directoryTemplate(comCode) {
    this.actionReadExcel.findDirectoryTemplate(comCode).subscribe(
      (data: any) => {
        //console.log(data);
        if(data.CODE == '200'){
          this.partDownloadTemp = data.DATA;
          this.partDownloadTemp = "http://picask:DC8C3078BC63EAA@" + this.partDownloadTemp.substring(2).replace(/\\/g, '/');
          //console.log(this.partDownloadTemp)
        }
      }
    )
  }

  downloadFileTemplate() {
    let part = this.partDownloadTemp + '/' + $('#select :selected').text();
    //console.log(part)
    window.open(part, '_blank');
   // console.log($('#select :selected').text());
    //indow.open('window.close();', '_self', null)
    //console.log(this.partDownloadTemp);
  }

  onUpload(event) {
    console.log(event);
    // let workbook = new Excel.Workbook();
    // let workbook = new ExcelJs.Workbook();
    // workbook.xlsx.readFile(event)
    //   .then(function () {
//         // use workbook
//         resolve(workbook);
//       });
// //
// // // pipe from stream
//     let workbook = new Excel.Workbook();
//     stream.pipe(workbook.xlsx.createInputStream());

  }

  onError(event) {
    console.log(event);
  }

  checkValueExcel() {
    //console.log(this.actionReadExcel.getmodelReadExcel());
    console.log(this.actionReadExcel.getPointGrade());
    //console.log(this.actionReadExcel.getNameManager());
    this.appFormService.getAppFormData().grade = this.actionReadExcel.getPointGrade().grade;
    this.appFormService.getAppFormData().score = this.actionReadExcel.getPointGrade().point;
    this.appFormService.getAppFormData().scoring_date = this.actionReadExcel.getPointGrade().date;

    this.appFormService.setAnsWer(this.actionReadExcel.getPointGrade().ansWer);
    //console.log(this.appFormService.getAnsWer());
    //console.log(this.actionReadExcel.getPointGrade().ansWer);
    //console.log(this.comCode)
    //console.log(this.caNo)
    //console.log(this.partDownload);


    this.alertFinish.setAction("INFORMATION");
    this.alertFinish.list_msg = [];
    this.alertFinish.addMessage('Grade : ' + this.appFormService.getAppFormData().grade +
                                ' & Score : ' + this.appFormService.getAppFormData().score);
    this.alertFinish.open();
    this.checkFile(this.comCode, this.caNo);
  }

  downloadFile() {
    //this.partDownload = "http:\\picask:DC8C3078BC63EAA@172.16.1.112\bgpl_doc_mobile1\0742_60\CREDIT_REPORT_FORM_0742_60";
    window.open(this.partDownload, '_blank');
    //window.open(this.partDownload,'Download')
  }
}
