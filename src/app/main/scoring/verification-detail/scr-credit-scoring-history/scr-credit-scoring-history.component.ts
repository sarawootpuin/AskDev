import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VerificationDetailService} from "../verification-detail.service";
import {CreditScoringHistoryModel} from "../../model/creditScoringHistory.model";


@Component({
  selector: 'app-scr-credit-scoring-history',
  templateUrl: './scr-credit-scoring-history.component.html',
  styleUrls: ['./scr-credit-scoring-history.component.css']
})
export class ScrCreditScoringHistoryComponent implements OnInit {

  entType: string;
  entCd: string;
  comCode: string;
  dataTable: CreditScoringHistoryModel[] = [];
  selectedData: CreditScoringHistoryModel = new CreditScoringHistoryModel();
  selectMode: string;


  constructor(private verificationDetailService: VerificationDetailService) {
  }

  ngOnInit() {
    this.entType = this.verificationDetailService.tabMain.ent_typ;
    this.entCd = this.verificationDetailService.tabMain.ent_cd;
    this.comCode = this.verificationDetailService.tabMain.com_code;

    if (this.verificationDetailService.checkReadOnly == true) {
      this.selectMode = "";
    }
    else {
      this.selectMode = "single";
    }


    this.verificationDetailService.getCreditScoringHistory(this.entType, this.entCd, this.comCode).subscribe(
      (data: any) => {
        if (data.CODE == "200") {
          this.dataTable = CreditScoringHistoryModel.parse(data.LIST_DATA);
        }
      }
    );
  }

  onRowSelect(event) {
    this.verificationDetailService.setCreditScoringHistory(this.selectedData);
  }
}
