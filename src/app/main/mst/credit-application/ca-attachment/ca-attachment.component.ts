import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionReadExcelComponent} from "../../../../shared/center/action-read-excel/action-read-excel.component";
import {creditApplicationService} from "../credit-application.service";
import {caHead} from "../model/ca-head";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-ca-attachment',
  templateUrl: './ca-attachment.component.html'
})
export class CaAttachmentComponent implements OnInit {

  @ViewChild('actionReadExcel') actionReadExcel: ActionReadExcelComponent;
  @ViewChild('alertFinish') alertFinish : AlertDialogComponent;

  caNo: string;
  comCode: string;
  constructor( private creditApplicationService: creditApplicationService) { }
  titleDownload = 'Download';
  partDownload = '';
  partDownloadTemp = '';

  ngOnInit() {

    this.caNo = this.creditApplicationService.caHead.ca_no.replace(/\//gi,"_");
    this.comCode = this.creditApplicationService.caHead.com_code;
    console.log(this.caNo);
    // this.actionReadExcel.findCaDirectoryPart().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   }
    // );
    this.checkFile(this.comCode, this.caNo);
    this.directoryTemplate(this.comCode);

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

  checkValueExcel(){
    //console.log(this.actionReadExcel.getmodelReadExcel());
    console.log(this.actionReadExcel.getPointGrade());
    //console.log(this.actionReadExcel.getNameManager());
    this.creditApplicationService.caHead.grade = this.actionReadExcel.getPointGrade().grade;
    this.creditApplicationService.caHead.score = this.actionReadExcel.getPointGrade().point;
   // this.creditApplicationService.caHead.scoring_date = this.actionReadExcel.getPointGrade().date;
    this.checkFile(this.comCode, this.caNo);

    this.alertFinish.setAction("INFORMATION");
    this.alertFinish.list_msg = [];
    this.alertFinish.addMessage('Grade : ' + this.creditApplicationService.caHead.grade +
      ' & Score : ' + this.creditApplicationService.caHead.score);
    this.alertFinish.open();
  }

  downloadFile(){
    //this.partDownload = "http:\\picask:DC8C3078BC63EAA@172.16.1.112\bgpl_doc_mobile1\0742_60\CREDIT_REPORT_FORM_0742_60";
    window.open(this.partDownload,'_blank');
    //window.open(this.partDownload,'Download')
  }

}
