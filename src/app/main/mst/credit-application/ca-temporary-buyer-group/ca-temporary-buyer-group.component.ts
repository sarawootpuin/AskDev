import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {caTemporaryModel} from "../model/ca-temporary";
import {CaTempCreditLineGroup} from "../model/ca-temp-credit-line-group";
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caHead} from "../model/ca-head";
import {caBuyer} from "../model/ca-buyer";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {CaTempCreditLine} from "../model/ca-temp-credit-line";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {CaTempBuyer} from "../model/ca-temp-buyer";

@Component({
  selector: 'app-ca-temporary-buyer-group',
  templateUrl: './ca-temporary-buyer-group.component.html'
})
export class CaTemporaryBuyerGroupComponent implements OnInit {

  listCaTempCreditLineGroup: CaTempCreditLineGroup[] = [];
  selectedCaTempCreditLineGroup: CaTempCreditLineGroup = new CaTempCreditLineGroup();
  subscripData: Subscription;
  listBuyer: CaTempBuyer[];
  selectedBuyer: CaTempBuyer = new CaTempBuyer();
  caHead: caHead = new caHead();
  @ViewChild('showDialog') showDialog: ActionDialogComponent;
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;

  checkCalendar: boolean = false;

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value: caHead) => {
        this.caHead = value;
        this.listBuyer = this.caHead.listtempbuyerg;
        this.listCaTempCreditLineGroup = this.caHead.listbuyertempcreditlinegroup;
        if ((this.listCaTempCreditLineGroup) && (this.listCaTempCreditLineGroup.length > 0)) {
          this. selectedCaTempCreditLineGroup = this. listCaTempCreditLineGroup[0];
        }
      }
    );
  }

  amendChange(type) {
    if (type === 'T') {
      this.checkCalendar = false;
      /*clear value period*/
      //this.selectedCaTempCreditLineGroup.eff_date = null;
      //this.selectedCaTempCreditLineGroup.expire_date = null;
    } else if (type === 'P') {
      this.checkCalendar = true;
      this.selectedCaTempCreditLineGroup.time = 0;
    }
  }

  openDialogBuyer() {
    this.showDialog.setTitle('Add Buyer');
    this.showDialog.open();
  }

  addCaTempCreditLineGroup() {
    let seqNo = 1;
    if (this.listCaTempCreditLineGroup) {
      seqNo = this.listCaTempCreditLineGroup.length + 1
    }

    let caTempCreditLineGroup = new CaTempCreditLineGroup();
    caTempCreditLineGroup.com_code = this.caHead.com_code;
    caTempCreditLineGroup.ca_no = this.caHead.ca_no;
    caTempCreditLineGroup.sub_id = seqNo;
    caTempCreditLineGroup.cust_type = 'B';
    caTempCreditLineGroup.ref_amend_no = this.caHead.amend_time;
    caTempCreditLineGroup.join_grp_code = this.selectedBuyer.join_grp_code;
    caTempCreditLineGroup.group_name = this.selectedBuyer.group_name;
    caTempCreditLineGroup.ca_limit = this.selectedBuyer.ca_limit;
    caTempCreditLineGroup.sbu_type = this.caHead.sbu_typ;

    this.listCaTempCreditLineGroup.push(caTempCreditLineGroup);
    this.selectedCaTempCreditLineGroup = caTempCreditLineGroup;

  }

  deleteCaTempCreditLineGroup() {
    this.listCaTempCreditLineGroup.splice(this.listCaTempCreditLineGroup.indexOf(this.selectedCaTempCreditLineGroup), 1);

    let seqNo = 1;

    for (let data of this.listCaTempCreditLineGroup) {
      data.sub_id = seqNo++;
    }

  }

  deleteWarning() {
    this.deleteDialog.open();
  }

}

