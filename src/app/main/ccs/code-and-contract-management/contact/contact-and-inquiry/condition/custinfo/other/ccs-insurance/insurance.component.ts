import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {insTransModel} from "./insTrans.model";
import {Subscription} from "rxjs/Subscription";
import {InsVolunModel} from "./insVolun.model";

@Component({
  selector: 'app-ccs-insurance',
  templateUrl: './insurance.component.html'
})
export class CcsInsuranceComponent implements OnInit {
  list_InsTrans: insTransModel[] = [];
  list_InsVolun: InsVolunModel[] = [];
  subscription: Subscription;
  cols: any[];
  statusType: any[] = [];
  statusType_item: any;

  vSelected_InsTrans: insTransModel;

  constructor(private custService: CustinfoService) {
    this.vSelected_InsTrans = new insTransModel();

    this.statusType_item = {label: 'All', value: null};
    this.statusType.push(this.statusType_item);
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_InsTrans = data.ds_ins.list_InsTrans;

        // console.log(this.list_InsTrans);
        if (this.list_InsTrans.length > 0) {
          this.list_InsVolun = this.list_InsTrans[0].list_InsVolun;
          this.vSelected_InsTrans = this.list_InsTrans[0];

          for (let i = 0; i < this.list_InsTrans.length; i++) {
            this.statusType_item = {
              label: this.list_InsTrans[i].status_flg,
              value: this.list_InsTrans[i].status_flg
            };
            // console.log(this.statusType);
            this.statusType.push(this.statusType_item);
          }

          this.statusType = this.removeDuplicates(this.statusType);
        }
      }
    );

    this.cols = [
      {field: 'com_code', header: 'รหัสบริษัท'},
      {field: 'lblIns_Date', header: 'วันที่คุ้มครอง'},
      {field: 'lblKind_Of_Insurance', header: 'ชนิดประกันภัย'},
      {field: 'status_flg', header: 'สถานะ'},
      {field: 'cancel_date', header: 'วันที่ยกเลิก'}
    ];
  }

  removeDuplicates(arr: any[]) {
    return arr.filter((arr, index, self) =>
      index === self.findIndex((t) => (
        t.value === arr.value
      ))
    )
  }

}
