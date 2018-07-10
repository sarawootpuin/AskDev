import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common"
import {CustinfoService} from "../../custinfo.service";
import {TransferComponent} from "../transfer.component";
import {EntityDialogComponent} from "../../../../../../../../mst/entity/entity-dialog/entity-dialog.component";
import {ActionDialogComponent} from "../../../../../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-transfer-customer-guarantor',
  templateUrl: './transfer-customer-guarantor.component.html',
  styleUrls: ['./transfer-customer-guarantor.component.css']
})
export class TransferCustomerGuarantorComponent implements OnInit {

  @ViewChild("entityDialogComponent") entityDialogComponent:EntityDialogComponent;
  @ViewChild("blHistDialog") blHistDialog:ActionDialogComponent;

  constructor(private locatn: Location,
  private custService: CustinfoService,
  private appTransfer: TransferComponent) { }

  ngOnInit() {
  }

  onBackPage(){
    this.appTransfer.vHide = false;
    this.custService.BackPage(this.locatn);
  }

  showDialog() {
    this.entityDialogComponent.showDialog();
  }

  openBLHist() {
    this.blHistDialog.open();
  }

}
