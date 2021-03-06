import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {caGuarantor} from "../../model/ca-guarantor";
import {creditApplicationService} from "../../credit-application.service";

@Component({
  selector: 'app-ca-guar-card',
  templateUrl: './ca-guar-card.component.html',
  styleUrls: ['./ca-guar-card.component.css']
})
export class CaGuarCardComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  caGua : caGuarantor ;
  constructor(private creditApplicationService: creditApplicationService) { }

  ngOnInit() {

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
