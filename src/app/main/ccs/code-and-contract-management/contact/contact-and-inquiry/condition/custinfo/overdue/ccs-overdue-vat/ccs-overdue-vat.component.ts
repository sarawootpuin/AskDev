import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {OvervatModel} from "../../model/overvat";
import {cdsOver_VatModel} from "../../model/clientDataSet/cdsOver_Vat";

@Component({
  selector: 'app-ccs-overdue-vat',
  templateUrl: './ccs-overdue-vat.component.html'
})
export class CcsOverdueVatComponent implements OnInit {
  ds_overvat: OvervatModel;
  list_cdsover_vat: cdsOver_VatModel[] = [];
  private subscription: Subscription;

  constructor(private custService: CustinfoService) {
    this.ds_overvat = new OvervatModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        this.ds_overvat = data.ds_overvat;

        if(this.ds_overvat.list_cdsover_vat.length > 0 ) {
          this.list_cdsover_vat = this.ds_overvat.list_cdsover_vat;
        }
      }
    );
  }

}
