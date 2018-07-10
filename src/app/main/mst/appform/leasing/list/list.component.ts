import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {ListDetail} from "../../model/getDataDetail";
import {AppFormService} from "../../appform.service";
import {AlertDialogComponent} from "../../../../../shared/center/alert-dialog/alert-dialog.component";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy {
  data: ListDetail[] = [];
  dataSelect: ListDetail;
  @Output("clickList") clickList = new EventEmitter<ListDetail>();
  @ViewChild('deleteDialog') deleteDialog: AlertDialogComponent;
  subscription: Subscription;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.listTabLeasing;
    if (this.data) {
      if (this.data.length > 0) {
        this.selectList(this.data[0]);
      }
    }
    this.subscription = this.appFormService.eventListTabLeasing.subscribe(
      (data: any) => {
        this.data = data;
        this.selectList(this.data[0]);
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  selectList(selectedData) {
    this.dataSelect = selectedData;
    this.clickList.emit(selectedData);

  }

  addAsset() {
    let newAsset: ListDetail = new ListDetail();
    newAsset.ap_no = this.appFormService.getAppFormData().ap_no;
    newAsset.sub_id = this.data.length + 1;
    newAsset.lc_flg = 'N';
    newAsset.with_vat = 'Y';
    newAsset.wh_tax_flg = 'N';
    newAsset.wh_tax = 0;
    newAsset.cal_inst_typ = 'Fix';
    newAsset.schedule = 'R';
    newAsset.adv_arr = 'V';
    newAsset.adv_arr_name = 'Paid In Advance';
    newAsset.inputIvat = false;
    newAsset.type_cal_pricing = '1';
    this.data.push(newAsset);
    this.clickList.emit(newAsset);
  }

  deleteAsset() {
    let index = this.dataSelect.sub_id - 1;
    this.data.splice(index, 1);
    let seqNo = 1;
    for (let data of this.data) {
      data.sub_id = seqNo;
      seqNo++;
    }
    if (this.data.length > 0) {
      this.dataSelect = this.data[0];
      this.clickList.emit(this.data[0]);
    }
    else {
      this.dataSelect = new ListDetail();
      this.clickList.emit(new ListDetail());
    }
  }

  deleteWarning() {
    this.deleteDialog.setAction("DELETE");
    this.deleteDialog.open();
  }

}
