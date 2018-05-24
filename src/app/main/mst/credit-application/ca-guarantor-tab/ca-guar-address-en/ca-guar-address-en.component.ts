import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {caGuarantor} from "../../model/ca-guarantor";
import {creditApplicationService} from "../../credit-application.service";

@Component({
  selector: 'app-ca-guar-address-en',
  templateUrl: './ca-guar-address-en.component.html',
  styleUrls: ['./ca-guar-address-en.component.css']
})
export class CaGuarAddressEnComponent implements OnInit,OnDestroy {

  subscription: Subscription;
  caGua : caGuarantor ;
  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {
    this.caGua = new caGuarantor() ;
    this.subscription = this.creditApplicationService.eventSelectGuarantor.subscribe(
      (selectGua : caGuarantor) =>
      {
        this.caGua = selectGua ;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  copyOwner(panel: string) {
    if (panel == 'VAT') {
      this.caGua.add_c = this.caGua.address;
      this.caGua.post_cd_c = this.caGua.post_cd;
      this.caGua.tel_card = this.caGua.tel;
    } else if (panel == 'OFFICE') {
      this.caGua.add_o = this.caGua.address;
      this.caGua.post_cd_o = this.caGua.post_cd;
      this.caGua.tel_o = this.caGua.tel;
      this.caGua.fax_office = this.caGua.fax_current;
      this.caGua.near_o = this.caGua.near;
    } else if (panel == 'MAIL') {
      this.caGua.add_m = this.caGua.address;
      this.caGua.post_cd_m = this.caGua.post_cd;
    }
  }


}
