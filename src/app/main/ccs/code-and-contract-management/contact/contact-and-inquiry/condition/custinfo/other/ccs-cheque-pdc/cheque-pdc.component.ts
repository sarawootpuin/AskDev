import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {CustinfoService} from "../../custinfo.service";
import {ChequePDCModel} from "./cheque-pdc.model";

@Component({
  selector: 'app-ccs-cheque-pdc',
  templateUrl: './cheque-pdc.component.html'
})
export class CcsChequePdcComponent implements OnInit {
  list_Cheque: ChequePDCModel[] = [];
  list_ChequeTmp: ChequePDCModel[] = [];
  subscription: Subscription;
  cols: any[] = [];

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_Cheque = data.list_Cheque;
        this.list_ChequeTmp = JSON.parse(JSON.stringify(this.list_Cheque));
        this.onFilterCheque('ALL'); // Default
      }
    );

    this.cols = [
      {value: 'ALL'},
      {value: 'PDC'},
      {value: 'Returned'},
      {value: 'Pay In'},
      {value: 'Clearing'}
    ];
  }

  onFilterCheque(pType) {
    // console.log(pType);
    this.list_Cheque = JSON.parse(JSON.stringify(this.list_ChequeTmp));

    if (pType != 'ALL') {
      this.list_Cheque = this.list_Cheque.filter(
        data => data.type == pType
      );
    }
  }

}
