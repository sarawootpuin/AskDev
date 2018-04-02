import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {AppFormService} from "../../appform.service";
import {ListCollateral} from "../../model/getDataCollateral";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-collateral-list',
  templateUrl: './collateral-list.component.html'
})
export class CollateralListComponent implements OnInit {
  data: ListCollateral[] = [];
  dataSelect: ListCollateral;
  @Output("clickList") clickList = new EventEmitter<ListCollateral>();
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.listTabCollateral;
    if (this.data) {
      this.selectList(this.data[0]);
    }
    else {
      this.data = [];
    }
    this.appFormService.eventTabCollateral.subscribe(
      (data: any) => {
        this.data = data;
        this.selectList(this.data[0]);
      }
    )
  }

  selectList(selectedData) {
    this.clickList.emit(selectedData);
    this.dataSelect = selectedData;
  }

  addCollateral() {
    let collateral: ListCollateral = new ListCollateral();
    collateral.com_code = this.appFormService.getAppFormData().com_code;
    collateral.ap_no = this.appFormService.getAppFormData().ap_no;
    collateral.seq_no = this.data.length + 1;
    if (this.appFormService.getAppFormData().sbu_typ == 'P') {
      collateral.clt_cash_rcp = 0;
      collateral.deduct_pcn = 20;
    }
    this.data.push(collateral);
    this.dataSelect = collateral;
    this.clickList.emit(collateral);
  }

  deleteCollateral() {
    let index = this.dataSelect.seq_no - 1;
    this.data.splice(index, 1);
    let seqNo = 1;
    for (let data of this.data) {
      data.seq_no = seqNo;
      seqNo++;
    }
    if (this.data.length > 0) {
      this.dataSelect = this.data[0];
      this.clickList.emit(this.data[0]);
    }
    else {
      this.dataSelect = new ListCollateral();
      this.clickList.emit(new ListCollateral());
    }
  }

  deleteWarning(){
    this.deleteDialog.setAction("DELETE");
    this.deleteDialog.open();
  }
}
