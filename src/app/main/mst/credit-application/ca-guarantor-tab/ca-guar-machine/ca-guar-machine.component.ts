import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {caGuarantor} from "../../model/ca-guarantor";
import {creditApplicationService} from "../../credit-application.service";

@Component({
  selector: 'app-ca-guar-machine',
  templateUrl: './ca-guar-machine.component.html',
  styleUrls: ['./ca-guar-machine.component.css']
})
export class CaGuarMachineComponent implements OnInit,OnDestroy {
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

