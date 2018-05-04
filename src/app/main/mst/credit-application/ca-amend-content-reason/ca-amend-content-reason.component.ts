import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {creditApplicationService} from "../credit-application.service";
import {caHead} from "../model/ca-head";
import {caAmendContent} from "../model/ca-amendcontent";

@Component({
  selector: 'app-ca-amend-content-reason',
  templateUrl: './ca-amend-content-reason.component.html'
})
export class CaAmendContentReasonComponent implements OnInit, OnDestroy {
  @Input() isReadonly : boolean;
  subscription: Subscription;
  listAmendContent: caAmendContent[];
  amendContent: caAmendContent = new caAmendContent();

  constructor(private creditApplicationService: creditApplicationService) {
  }

  ngOnInit() {
    this.subscription = this.creditApplicationService.eventCaHead.subscribe(
      (caHead: caHead) => {
        this.listAmendContent = caHead.listamendcontent;
        if(this.listAmendContent && this.listAmendContent.length > 0){
          this.amendContent = this.listAmendContent[0];
        }
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
