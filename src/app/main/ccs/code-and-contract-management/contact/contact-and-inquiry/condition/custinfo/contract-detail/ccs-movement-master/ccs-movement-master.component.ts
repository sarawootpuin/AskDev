import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AssetModel} from "./ccs-asset";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ccs-movement-master',
  templateUrl: './ccs-movement-master.component.html'
})
export class CcsMovementMasterComponent implements OnInit {
  list_Asset: AssetModel[] = [];
  vSelected_list_Asset: AssetModel;
  i: number;

  private subscription: Subscription;

  constructor(private custService: CustinfoService) {
    // // this.vSelected_Asset = new AssetModel();
    this.i = 0;
    this.vSelected_list_Asset = new AssetModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data) => {
        this.list_Asset = data.list_Asset;

        if (this.list_Asset.length > 0) {
          this.vSelected_list_Asset = this.list_Asset[0];
        }
      }
    );

  }

}
