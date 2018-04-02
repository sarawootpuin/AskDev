import {Component, OnInit} from '@angular/core';
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {ModelNcbSubjectResult} from "../../blacklist-ncb-subject-result/model/modelNcbSubjectResult";
import {ModelLoanHead} from "./model/modelloanhead";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {ModelLoanDetail} from "./model/modelloandetail";

@Component({
  selector: 'app-ncrs-loan',
  templateUrl: './ncrs-loan.component.html'
})
export class NcrsLoanComponent implements OnInit {

  modelNcbSubjectResult: ModelNcbSubjectResult[] = [];
  modelLoanHead: ModelLoanHead[] = [];
  modelLoanDetail: ModelLoanDetail[] = [];
  tabSummaryDetail: any[] = [];

  constructor(private blacklistNcbService: BlacklistNcbService,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.modelNcbSubjectResult = this.blacklistNcbService.getModelNcbSubjectResult();
    if (this.modelNcbSubjectResult.length > 0) {
      this.modelNcbSubjectResult = this.blacklistNcbService.getModelNcbSubjectResult();
      let obj = {
        "ptracking_id": this.modelNcbSubjectResult[0].tracking_id,
        "psubject_id": this.modelNcbSubjectResult[0].subject_id,
        "userlogin": this.userStorage.getUserName()
      };

      this.blacklistNcbService.getNCBLoansSummaryHead(obj).subscribe(
        (data: any) => {
          if (data.CODE != "204")

            this.modelLoanHead = ModelLoanHead.parse(data.LIST_DATA);
          for (let i = 1; i < this.modelLoanHead.length; i++) {
            let objDetail = {
              "ptracking_id": this.modelNcbSubjectResult[0].tracking_id,
              "psubject_id": this.modelNcbSubjectResult[0].subject_id,
              "pseq": i,
              "paccount_type": this.modelLoanHead[i].ACCOUNT_TYPE,
              "userlogin": this.userStorage.getUserName()
            }
          //  console.log(objDetail)
            this.blacklistNcbService.getNCBLoansSummaryDetail(objDetail).subscribe(
              (datadetail:any) => {
                this.modelLoanDetail=[];
                this.modelLoanDetail = ModelLoanDetail.parse(datadetail.LIST_DATA);
                this.tabSummaryDetail.push(
                  {
                    "SEQ": this.modelLoanHead[i].ROWNUM,
                    "ACCOUNT_TYPE": this.modelLoanHead[i].ACCOUNT_TYPE,
                    "ACCOUNT_TYPE_THA": this.modelLoanHead[i].ACCOUNT_TYPE_THA,
                    "LIST_DATA": this.modelLoanDetail
                  }
                )
             //   console.log(this.tabSummaryDetail)
              }
            )
          }

        }
      );
    }
  }

}
