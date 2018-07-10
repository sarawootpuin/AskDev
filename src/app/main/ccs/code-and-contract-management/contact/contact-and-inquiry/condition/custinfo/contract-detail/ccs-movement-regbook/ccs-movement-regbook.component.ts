import {Component, OnInit} from '@angular/core';
import {MovementRegTransModel} from "./movementRegTrans.model";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {MovementRegModel} from "./movementReg.model";

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

  constructor(private custService: CustinfoService) {
    this.vSelect_MMRegTrans = new MovementRegTransModel();
    // this.vSelect_MMReg = new MovementRegModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {

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
