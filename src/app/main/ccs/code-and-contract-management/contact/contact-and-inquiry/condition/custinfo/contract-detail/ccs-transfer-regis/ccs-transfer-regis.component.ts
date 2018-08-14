import { Component, OnInit } from '@angular/core';
import { CustinfoService } from "../../custinfo.service";
import { Subscription } from "rxjs/Subscription";
import { AssetModel } from "../ccs-movement-master/ccs-asset";

@Component({
  selector: 'app-ccs-transfer-regis',
  templateUrl: './ccs-transfer-regis.component.html'
})
export class CcsTransferRegisComponent implements OnInit {
  list_Asset: AssetModel[] = [];
  vSelected_list_Asset: AssetModel;
  i: number;
  private subscription: Subscription;
  list_array: any[];

  constructor(private custService: CustinfoService) {
    this.vSelected_list_Asset = new AssetModel();
    this.i = 0;
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_Asset = data.list_Asset;
        if (this.list_Asset.length > 0) {
          this.vSelected_list_Asset = this.list_Asset[this.i];

          this.list_array = [
            {
              "category": "กรณี ขอใช้ทะเบียนจังหวัดเดิม",
              "charge": this.vSelected_list_Asset.lbl1 || this.vSelected_list_Asset.lbl9,
              "deposit": this.vSelected_list_Asset.lbl2 || this.vSelected_list_Asset.lbl10,
              "income": this.vSelected_list_Asset.lbl3 || this.vSelected_list_Asset.lbl11,
              "vat": this.vSelected_list_Asset.lbl4 || this.vSelected_list_Asset.lbl12
            },
            {
              "category": "กรณี ขอใช้ทะเบียนจังหวัดอื่น",
              "charge": this.vSelected_list_Asset.lbl5 ,
              "deposit": this.vSelected_list_Asset.lbl6,
              "income": this.vSelected_list_Asset.lbl7,
              "vat": this.vSelected_list_Asset.lbl8
            }]
        }
      }

    );


  }

}
