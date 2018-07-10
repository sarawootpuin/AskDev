import {Component, OnDestroy, OnInit} from "@angular/core";
import {ListReason} from "../model/getDataReason";
import {AppFormService} from "../appform.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html'
})
export class ReasonComponent implements OnInit, OnDestroy {
  data: ListReason[];
  dataFirst: ListReason;
  subscription: Subscription;

  constructor(private appFormService: AppFormService) {
    this.dataFirst = new ListReason();
  }

  ngOnInit() {
    this.data = this.appFormService.listTabReason;
    if (this.appFormService.listTabReason) {
      if (this.appFormService.listTabReason.length > 0) {
        this.dataFirst = this.appFormService.listTabReason[0];
      }
    }
    this.subscription = this.appFormService.eventTabReason.subscribe(
      (data) => {
        this.data = data;
        this.dataFirst = this.data[0];
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
