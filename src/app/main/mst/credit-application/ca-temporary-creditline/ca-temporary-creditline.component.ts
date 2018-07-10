import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {caTemporaryModel} from "../model/ca-temporary";
import {CaTempCreditLine} from "../model/ca-temp-credit-line";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../model/ca-head";
import {creditApplicationService} from "../credit-application.service";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-ca-temporary-creditline',
  templateUrl: './ca-temporary-creditline.component.html'
})
export class CaTemporaryCreditlineComponent implements OnInit {
  subscripData: Subscription;
  caTempCreditLine: CaTempCreditLine = new CaTempCreditLine();
  listCaTempCreditLine: CaTempCreditLine[] = [];
  checkCalendar: boolean = false;
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;
  caHead: caHead = new caHead();
  addMode: boolean = false;

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value: caHead) => {
        this.caHead = value;
        this.listCaTempCreditLine = this.caHead.listsellertempcreditline;
        if (this.listCaTempCreditLine && this.listCaTempCreditLine.length > 0) {
          this.caTempCreditLine = this.listCaTempCreditLine[0];
          this.addMode = true;
        }
      }
    );
  }

  amendChange(type) {
    if (type === 'T') {
      this.checkCalendar = false;
      //this.checkCalendar = true;
      /*clear value period*/
      //this.caTempCreditLine.eff_date = null;
      //this.caTempCreditLine.expire_date = null;
    } else if (type === 'P') {
      this.checkCalendar = true;
      this.caTempCreditLine.time = 0;
    }
  }

  deleteCaTempCreditLineSeller() {
    this.addMode = false;
    this.caTempCreditLine = new CaTempCreditLine();
    this.listCaTempCreditLine.splice(0,1);
  }

  addCaTempCreditLineSeller() {
    if (this.listCaTempCreditLine && this.listCaTempCreditLine.length > 0) {
      /*replace old value*/
      this.listCaTempCreditLine[0] = new CaTempCreditLine();
    }
    else {
      /*add to empty array*/
      this.listCaTempCreditLine.push(new CaTempCreditLine())
    }
    this.caTempCreditLine = this.listCaTempCreditLine[0]
    this.caTempCreditLine.com_code = this.caHead.com_code;
    this.caTempCreditLine.ca_no = this.caHead.ca_no;
    this.caTempCreditLine.sub_id = 1;
    this.caTempCreditLine.ref_amend_no = this.caHead.ca_no.amend_time;
    this.caTempCreditLine.cust_type = 'S';
    this.caTempCreditLine.join_grp_code = this.caHead.joint_seller_group;
    this.caTempCreditLine.group_name = this.caHead.join_group_name;
    this.caTempCreditLine.ca_limit = this.caHead.join_group_cr;
    this.caTempCreditLine.sbu_type = this.caHead.sbu_typ;
    this.addMode = true;
    // add  value

  }

  deleteWarning() {
    this.deleteDialog.open();
  }
}
