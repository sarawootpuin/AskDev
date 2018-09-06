import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {CalcExtendVat} from "./ccs-calc-extend-vat.model";
import {DateUtils} from "../../../../../../../../../shared/center/utils/date-utils";

@Component({
  selector: 'app-ccs-calc-extend-vat',
  templateUrl: './ccs-calc-extend-vat.component.html'
})
export class CcsCalcExtendVatComponent implements OnInit {
  list_CalcExtendVat: CalcExtendVat[] = [];
  vSelected: CalcExtendVat;
  now:string;

  subscription: Subscription;
  constructor(private custService: CustinfoService,
              private date: DateUtils) {
    this.vSelected = new CalcExtendVat();
    this.now = this.date.currentDate();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_CalcExtendVat = data.list_CalcExtendVat;

        if (this.list_CalcExtendVat.length > 0) {
          this.vSelected = this.list_CalcExtendVat[0];
        }

      }
    );
  }

}
