import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionReadExcelComponent} from "../../../../shared/center/action-read-excel/action-read-excel.component";
import {AppFormService} from "../appform.service";
import {ReturnPart} from "../../../../shared/center/action-read-excel/ReturnPart";
// import * as ExcelJs from 'exceljs/dist/exceljs.min.js';
// import * as Excel from 'exceljs';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html'
})
export class AttachmentComponent implements OnInit {
  @ViewChild('actionReadExcel') actionReadExcel:ActionReadExcelComponent;
  caNo : string;
  comCode : string;
  constructor(private appFormService : AppFormService) { }
  titleDownload = 'Download';
  titleDownloadTemp = 'Download Temp';
  partDownload = '';

  ngOnInit() {
    this.caNo = this.appFormService.getAppFormData().ca_no.replace(/\//gi,"_");
    this.comCode = this.appFormService.getAppFormData().com_code;
    console.log(this.caNo);
    // this.actionReadExcel.findCaDirectoryPart().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   }
    // );
    this.checkFile(this.comCode, this.caNo);
  }

  checkFile(comCode, caNo) {
    this.actionReadExcel.findCaDirectoryPart(comCode, caNo).subscribe(
      (data: any) => {
        console.log(data);
        if (data.MSG == "Complete") {
          this.actionReadExcel.fileSelect = data.DATA.fileName;
          this.partDownload = data.DATA.part;
          this.partDownload = "http://picask:DC8C3078BC63EAA@" + this.partDownload.substring(2).replace(/\\/g,'/');
          console.log(this.partDownload);
        }
      }
    );
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

  onError(event){
    console.log(event);
  }

  checkValueExcel(){
    //console.log(this.actionReadExcel.getmodelReadExcel());
    console.log(this.actionReadExcel.getPointGrade());
    //console.log(this.actionReadExcel.getNameManager());
    this.appFormService.getAppFormData().grade = this.actionReadExcel.getPointGrade().grade;
    this.appFormService.getAppFormData().score = this.actionReadExcel.getPointGrade().point;
    this.appFormService.getAppFormData().scoring_date = this.actionReadExcel.getPointGrade().date;
    console.log(this.comCode)
    console.log(this.caNo)
    console.log(this.partDownload);
    this.checkFile(this.comCode, this.caNo);
  }

  downloadFile(){
    //this.partDownload = "http:\\picask:DC8C3078BC63EAA@172.16.1.112\bgpl_doc_mobile1\0742_60\CREDIT_REPORT_FORM_0742_60";
    window.open(this.partDownload,'_blank');
    //window.open(this.partDownload,'Download')
  }
}
