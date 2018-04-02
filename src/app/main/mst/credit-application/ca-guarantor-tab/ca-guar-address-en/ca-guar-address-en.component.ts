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


}
