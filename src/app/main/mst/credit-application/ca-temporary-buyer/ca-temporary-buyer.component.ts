import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {caTemporaryModel} from "../model/ca-temporary";
import {CaTempCreditLine} from "../model/ca-temp-credit-line";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caBuyer} from "../model/ca-buyer";
import {caHead} from "../model/ca-head";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {CaTempBuyer} from "../model/ca-temp-buyer";

@Component({
  selector: 'app-ca-temporary-buyer',
  templateUrl: './ca-temporary-buyer.component.html'
})
export class CaTemporaryBuyerComponent implements OnInit {

  caTempCreditLine: CaTempCreditLine = new CaTempCreditLine();
  listCaTempCreditLine: CaTempCreditLine[] = [];
  selectedCaTempCreditLine: CaTempCreditLine = new CaTempCreditLine();
  subscripData: Subscription;
  listBuyer: CaTempBuyer[];
  selectedBuyer: CaTempBuyer = new CaTempBuyer();
  checkCalendar: boolean = false;
  caHead: caHead = new caHead();
  @ViewChild('showDialog') showDialog: ActionDialogComponent;
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value: caHead) => {
        this.caHead = value;
        this.listBuyer = this.caHead.listtempbuyer;
        this.listCaTempCreditLine = this.caHead.listbuyertempcreditline;
          if ((this.listCaTempCreditLine) && (this.listCaTempCreditLine.length > 0)) {
            this. selectedCaTempCreditLine = this. listCaTempCreditLine[0];
          }
        }
    );
  }

  amendChange(type) {
    if (type === 'T') {
      this.checkCalendar = false;
      /*clear value period*/
      //this.selectedCaTempCreditLine.eff_date = null;
      //this.selectedCaTempCreditLine.expire_date = null;

    } else if (type === 'P') {
      this.checkCalendar = true;
      this.selectedCaTempCreditLine.time = 0;
    }
  }


  addDialog() {
    this.showDialog.setTitle('Add Buyer');
    this.showDialog.open();
  }

  addCaTempCreditLine() {
    let caTempCreditLine = new CaTempCreditLine();
    let seqNo = 1;
    if (this.listCaTempCreditLine) {
      seqNo = this.listCaTempCreditLine.length + 1
    }
    caTempCreditLine.com_code = this.caHead.com_code;
    caTempCreditLine.ca_no = this.caHead.ca_no;
    caTempCreditLine.ent_code = this.selectedBuyer.buyer_code;
    caTempCreditLine.sub_id = seqNo;
    caTempCreditLine.cust_name = this.selectedBuyer.cust_name;
    caTempCreditLine.cust_type = 'B';
    caTempCreditLine.ref_amend_no = this.caHead.amend_time;
    caTempCreditLine.join_grp_code = this.selectedBuyer.join_grp_code;
    caTempCreditLine.group_name = this.selectedBuyer.group_name;
    caTempCreditLine.ca_limit = this.selectedBuyer.ca_limit;
    caTempCreditLine.sbu_type = this.caHead.sbu_typ;

    this.listCaTempCreditLine.push(caTempCreditLine);
    this.selectedCaTempCreditLine = caTempCreditLine;
  }

  deleteCaTempCreditLine() {
    this.listCaTempCreditLine.splice(this.listCaTempCreditLine.indexOf(this.selectedCaTempCreditLine), 1);
    let seqNo = 1;

    for (let data of this.listCaTempCreditLine) {
      data.sub_id = seqNo++;
    }
  }

  deleteWarning() {
    this.deleteDialog.open();
  }



}

