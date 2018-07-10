import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {AssetModel} from "../ccs-movement-master/ccs-asset";

@Component({
  selector: 'app-ccs-transfer-regis',
  templateUrl: './ccs-transfer-regis.component.html'
})
export class CcsTransferRegisComponent implements OnInit {
  list_Asset: AssetModel[] = [];
  vSelected_list_Asset: AssetModel;
  i: number;
  private subscription: Subscription;

  constructor(private custService: CustinfoService) {
    this.vSelected_list_Asset = new AssetModel();
    this.i = 0;
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        this.list_Asset = data.list_Asset;
        if (this.list_Asset.length > 0) {
          this.vSelected_list_Asset = this.list_Asset[this.i];
        }
      }
    );
  }

}
