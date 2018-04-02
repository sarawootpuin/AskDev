import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SaleCallHistory} from "../../model/Sale-Call-History";
import {SaleCallVisitService} from "../../sale-call-visit.service";
import {SaleCallHead} from "../../model/Sale-Call-Head";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-call-visit-calling-history',
  templateUrl: './call-visit-calling-history.component.html',
  styleUrls: ['./call-visit-calling-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CallVisitCallingHistoryComponent implements OnInit, OnDestroy {
  mySaleCallHistory: SaleCallHistory[] = [];
  subscription: Subscription;

  constructor(private saleCallVisitService: SaleCallVisitService) {
  }

  ngOnInit() {
    this.subscription = this.saleCallVisitService.eventsaleH.subscribe(
      (obj: SaleCallHead) => {
        this.mySaleCallHistory = obj.listHistory;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

}
