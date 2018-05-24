import {Component, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {creditApplicationService} from "../credit-application.service";
import {Subscription} from "rxjs/Subscription";
import {caExposure} from "../model/ca-exposure";

@Component({
  selector: 'app-ca-bg-exposure',
  templateUrl: './ca-bg-exposure.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .sty-Total {
      background-color: #96b9ea !important;
      color: #ffffff !important;
      font-weight: bold;
    }
  `
  ]
})
export class CaBgExposureComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionNewcard: Subscription;

  listcaexposure: caExposure[];
  // show_exposure: number;
  selectedExposur1 : caExposure;

  constructor(private creditApplicationService: creditApplicationService) {

  }

  ngOnInit() {
    this.subscriptionNewcard = this.creditApplicationService.eventCardNo.subscribe(
      (pnewCard: string) => {
        if (pnewCard) {

          this.subscription =
            this.creditApplicationService.getListBGExposure('web',
              this.creditApplicationService.caHead.com_code,
              this.creditApplicationService.caHead.ca_no,
              pnewCard).subscribe(
              (data: any) => {
                // console.log(data);
                this.listcaexposure = caExposure.parse(data.LIST_DATA);
                // console.log(caExposure.parse(data.DATA));
                // console.log(this.listcaexposure );
              })
        }
        // if (this.creditApplicationService.caHead.total_exposure_cap > 0) {
        //   this.show_exposure = this.creditApplicationService.caHead.total_exposure_cap.toLocaleString();
        // }
        // else {
        //   this.show_exposure = this.creditApplicationService.caHead.total_exposure.toLocaleString();
        // }
      })
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }

    if (this.subscriptionNewcard != null) {
      this.subscriptionNewcard.unsubscribe();
    }
  }

}
