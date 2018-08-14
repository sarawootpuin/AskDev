import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ArPlService} from "./ar-pl.service";
import {ArPlModel} from "./model/ar-pl";

@Component({
  selector: 'app-ar-pl',
  templateUrl: './ar-pl.component.html',
  styleUrls: ['./ar-pl.component.css']
})
export class ArPlComponent implements OnInit {
  TITLE: string = 'สินเชื่อส่วนบุคคล / Car Loan';
  loanModel: ArPlModel;

  private checkLoading:boolean;

  constructor(private route: ActivatedRoute,
              private loanService: ArPlService) {
    // this.loanModel = new ArPlModel();
    this.checkLoading = true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: Params) => {
        let agr_code = param['agrCode'];
        let com_code = param['comCode'];

        // if (com_code === 'BGPL') {
        //   this.TITLE = 'Direct Loan'
        // } else {
        //   this.TITLE = 'Personal Loan'
        // }

        this.loanService.getShowAll_Loan("web", this.loanService.userCode, agr_code, com_code).subscribe(
          (data: any) => {
            // console.log(data);

            this.loanModel = ArPlModel.parse(data.DATA);
            this.loanService.setLoanModel(this.loanModel);
            this.loanService.emitMainJSON.emit(this.loanModel);

            this.checkLoading = false;
          }
        );

      }
    );
  }

}
