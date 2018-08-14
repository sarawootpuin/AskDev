import {Component, OnInit} from '@angular/core';
import {MovementRegTransModel} from "./movementRegTrans.model";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {MovementRegModel} from "./movementReg.model";
import {AssetModel} from "../ccs-movement-master/ccs-asset";

@Component({
  selector: 'app-ccs-movement-regbook',
  templateUrl: './ccs-movement-regbook.component.html'
})
export class CcsMovementRegbookComponent implements OnInit {
  list_MMReg: MovementRegModel[] = [];
  // vSelect_MMReg: MovementRegModel;

  list_MMRegTrans: MovementRegTransModel[] = [];
  vSelect_MMRegTrans: MovementRegTransModel;
  subscription: Subscription;
  // lblMovement_Status: string;

  list_Asset: AssetModel[] = [];
  vSelected_list_Asset: AssetModel;
  i: number;

  constructor(private custService: CustinfoService) {
    this.vSelect_MMRegTrans = new MovementRegTransModel();
    this.i = 0;
    this.vSelected_list_Asset = new AssetModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {

        this.list_Asset = data.list_Asset;

        if (this.list_Asset.length > 0) {
          this.vSelected_list_Asset = this.list_Asset[0];
        }

        if (data.list_MMRegTrans.length > 0) {
          this.list_MMRegTrans = data.list_MMRegTrans;
          this.vSelect_MMRegTrans = data.list_MMRegTrans[0];
          this.list_MMReg = data.list_MMRegTrans[0].list_MMReg;
          // console.log(this.list_MMReg);
          // this.lblMovement_Status = data.list_MMRegTrans[0].lblMovement_Status;

        }
      }
    );
  }

}
