import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {caTemporaryModel} from "../model/ca-temporary";
import {CaTempCreditLineGroup} from "../model/ca-temp-credit-line-group";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {caHead} from "../model/ca-head";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";

@Component({
  selector: 'app-ca-temporary-seller-group',
  templateUrl: './ca-temporary-seller-group.component.html'
})
export class CaTemporarySellerGroupComponent implements OnInit {
  caTempCreditLineGroup: CaTempCreditLineGroup = new CaTempCreditLineGroup();
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;
  caHead: caHead = new caHead();
  subscripData: Subscription;
  addMode: boolean = false;
  listCaTempCreditLineGroup: CaTempCreditLineGroup[] = [];


  checkCalendar: boolean = false;

  constructor(private  creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.subscripData = this.creditApplicationService.eventCaHead.subscribe(
      (value: caHead) => {
        this.caHead = value;
        this.listCaTempCreditLineGroup = this.caHead.listsellertempcreditlinegroup;

        if (this.listCaTempCreditLineGroup && this.listCaTempCreditLineGroup.length > 0) {
          this.caTempCreditLineGroup = this.listCaTempCreditLineGroup[0];
          this.addMode = true;
        }

      }
    );
  }

  amendChange(type) {
    if (type === 'T') {
      this.checkCalendar = false;
      /*clear value period*/
      //this.caTempCreditLineGroup.eff_date = null;
      //this.caTempCreditLineGroup.expire_date = null;
    } else if (type === 'P') {
      this.checkCalendar = true;
      this.caTempCreditLineGroup.time = 0;
    }
  }

  deleteCaTempCreditLineGroupSeller() {
    this.addMode = false;
    this.caTempCreditLineGroup = new CaTempCreditLineGroup();
    this.listCaTempCreditLineGroup.splice(0,1);
  }

  addCaTempCreditLineGroupSeller() {
    if (this.listCaTempCreditLineGroup && this.listCaTempCreditLineGroup.length > 0) {
      /*replace old value*/
      this.listCaTempCreditLineGroup[0] = new CaTempCreditLineGroup();
    }
    else {
      /*add to empty array*/
      this.listCaTempCreditLineGroup.push(new CaTempCreditLineGroup())
    }
    this.caTempCreditLineGroup = this.listCaTempCreditLineGroup[0]
    this.caTempCreditLineGroup = this.listCaTempCreditLineGroup[0];
    this.caTempCreditLineGroup.com_code = this.caHead.com_code;
    this.caTempCreditLineGroup.ca_no = this.caHead.ca_no;
    this.caTempCreditLineGroup.sub_id = 1;
    this.caTempCreditLineGroup.ref_amend_no = this.caHead.ca_no.amend_time;
    this.caTempCreditLineGroup.cust_type = 'S';
    this.caTempCreditLineGroup.join_grp_code = this.caHead.joint_seller_group;
    this.caTempCreditLineGroup.group_name = this.caHead.join_group_name;
    this.caTempCreditLineGroup.ca_limit = this.caHead.join_group_cr;
    this.caTempCreditLineGroup.sbu_type = this.caHead.sbu_typ;
    this.addMode = true;
  }

  deleteWarning() {
    this.deleteDialog.open();
  }
}

