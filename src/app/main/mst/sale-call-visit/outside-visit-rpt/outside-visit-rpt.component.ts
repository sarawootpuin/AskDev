import {Component, OnInit, ViewChild} from '@angular/core';
import {DateUtils} from "../../../../shared/center/utils/date-utils";
import {ServiceEndpoint} from "../../../../shared/config/service-endpoint";
import {UserStorage} from "../../../../shared/user/user.storage.service";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-outside-visit-rpt',
  templateUrl: './outside-visit-rpt.component.html'
})
export class OutsideVisitRptComponent implements OnInit {
  startDate: string;
  endDate: string;
  msg: string;
  @ViewChild('dialogWarining') dialogWarining: AlertDialogComponent;


  constructor(private dateUtils: DateUtils,
              private service: ServiceEndpoint,
              private userStorage: UserStorage) {
  }

  ngOnInit() {
    this.startDate = this.dateUtils.currentDate();
    this.endDate = this.dateUtils.currentDate();
  }

  checkValidate() {
    let msg = '';
    if ((this.startDate) && (this.endDate)) {
      if (this.dateUtils.compareDate(this.startDate, this.endDate) == 1) {
        msg = "End date less than start date ";
      }
    }
    else  msg = "Please select date";

    return msg;
  }

  onPrint() {
    this.msg = this.checkValidate();
    console.log(this.msg);
    if (this.msg == '') {
      let strAttach = this.service.url_report + `/result?report=MKT\\Outside_Work_01.fr3&pVisitD_F=${this.startDate}&pVisitD_T=${this.endDate}&pUserID=${this.userStorage.getCode()}&format=pdf`;
      window.open(strAttach, '_blank');
    }
    else {
      this.dialogWarining.open();
    }
  }

  onCloseDialogWarning() {
    this.dialogWarining.close();
  }


}
