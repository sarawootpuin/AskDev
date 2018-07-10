import {Component, OnInit, ViewChild} from '@angular/core';
import {TransferComponent} from "../../../transfer.component";
import {ActionDialogComponent} from "../../../../../../../../../../../../shared/center/action-dialog/action-dialog.component";

@Component({
  selector: 'app-transf-cust-general',
  templateUrl: './transf-cust-general.component.html',
  styleUrls: ['./transf-cust-general.component.css']
})
export class TransfCustGeneralComponent implements OnInit {
  @ViewChild("blDialog") blDialog:ActionDialogComponent;

  constructor(private transferApp : TransferComponent ) { }

  ngOnInit() {
    this.transferApp.vSwitchPageTransfer = true;
  }

  openBL() {
    this.blDialog.open();
  }

}
