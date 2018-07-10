import { Component, OnDestroy, OnInit, ViewChild, Input, OnChanges } from "@angular/core";
import { ActionReadExcelComponent } from "../../../../shared/center/action-read-excel/action-read-excel.component";
import { creditApplicationService } from "../credit-application.service";
import { caHead } from "../model/ca-head";
import { AlertDialogComponent } from "../../../../shared/center/alert-dialog/alert-dialog.component";
import { Subscription } from "rxjs/Subscription";
import { ServiceEndpoint } from "../../../../shared/config/service-endpoint";
import { checkNoChangesNode } from "@angular/core/src/view/view";

@Component({
  selector: "app-ca-attachment",
  templateUrl: "./ca-attachment.component.html"
})
export class CaAttachmentComponent implements OnInit, OnDestroy , OnChanges {
  subscription: Subscription;
  subscriptionTemplate: Subscription;
  @ViewChild("actionReadExcel") actionReadExcel: ActionReadExcelComponent;
  @ViewChild("alertFinish") alertFinish: AlertDialogComponent;
  @Input() inquiry: boolean = false;
  @Input() caNo: string;
  @Input() comCode: string = "BGPL";
  constructor(private creditApplicationService: creditApplicationService,
              private service: ServiceEndpoint) {
  }
  titleDownload = "Download";
  partDownload = "";
  partDownloadTemp = "";

  ngOnInit() {
  
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if(this.subscriptionTemplate != null){
      this.subscriptionTemplate.unsubscribe()
    }
  }

  ngOnChanges() {
    this.caNo = this.caNo.replace(/\//gi, "_");
    this.directoryTemplate(this.comCode);
  }

  directoryTemplate(comCode) {
    console.log(comCode)
    this.subscriptionTemplate = this.actionReadExcel
      .findDirectoryTemplate(comCode)
      .subscribe((data: any) => {
        console.log(data);
        if (data.CODE == "200") {
          this.partDownloadTemp = data.DATA;
          this.partDownloadTemp =
            "http://picask:DC8C3078BC63EAA@" +
            this.partDownloadTemp.substring(2).replace(/\\/g, "/");
          //console.log(this.partDownloadTemp)
        }
      });
  }

  downloadFileTemplate() {
    let part = this.partDownloadTemp + "/" + $("#select :selected").text();
    window.open(part, "_blank");
  }

  checkValueExcel() {
    this.creditApplicationService.caHead.grade = this.actionReadExcel.getPointGrade().grade;
    this.creditApplicationService.caHead.score = this.actionReadExcel.getPointGrade().point;
    //this.creditApplicationService.caHead.scoring_date = this.actionReadExcel.getPointGrade().date;

    this.alertFinish.setAction("INFORMATION");
    this.alertFinish.list_msg = [];
    this.alertFinish.addMessage(
      "Grade : " +
        this.creditApplicationService.caHead.grade +
        " & Score : " +
        this.creditApplicationService.caHead.score
    );
    this.alertFinish.open();
  }

  downloadFile() {
    window.open(this.partDownload, "_blank");
  }

  private reportCompare() {
    let sbu_type = this.creditApplicationService.caHead.sbu_typ,
      strRepNameFr3 = "",
      strURL = "";
    if (sbu_type == "FDO") {
      strRepNameFr3 = "CA_COMPARE_DO_01.fr3";
    } else if (sbu_type == "P") {
      strRepNameFr3 = "CA_COMPARE_DL_01.fr3";
    } else {
      strRepNameFr3 = "CA_COMPARE_HPLS_01.fr3";
    }
    strURL =
      this.service.url_report +
      `/result?report=MKT\\${strRepNameFr3}&p_ca_no=${this.caNo}&p_id_card=${
        this.creditApplicationService.newCardNo
      }&ca_no=${this.caNo}&com_code=${this.comCode}&format=pdf&cmd_folder=${
        this.caNo
      }&cmd_path=1&cmd_pdf=${"CA_" + this.caNo}&draft=Y`;
    window.open(strURL, "_blank");
  }
}
