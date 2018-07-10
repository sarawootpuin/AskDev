import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {cdsPaid_VATModel} from "../../model/clientDataSet/cdsPaid_VAT";

@Component({
  selector: 'app-ccs-paid-vat',
  templateUrl: './ccs-paid-vat.component.html'
})
export class CcsPaidVatComponent implements OnInit {
  list_cdspaid_vat: cdsPaid_VATModel[] = [];
  private subscription: Subscription;

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        this.list_cdspaid_vat = data.list_cdspaid_vat;
      }
    );
  }

}
