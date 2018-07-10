import { Component, OnInit } from '@angular/core';
import {VatCarHistModel} from "./vat-car-hist.model";
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ccs-vat-car-hist',
  templateUrl: './ccs-vat-car-hist.component.html'
})
export class CcsVatCarHistComponent implements OnInit {
  list_VatCarHist: VatCarHistModel[] = [];
  subscription: Subscription;

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_VatCarHist = data.list_VatCarHist;
      }
    );
  }

}
