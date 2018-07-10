import {Component, OnDestroy, OnInit} from "@angular/core";
import {ExposureService} from "./exposure.service";
import {ListExposure} from "../model/getDataExposure";
import {AppFormService} from "../appform.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-exposure',
  templateUrl: './exposure.component.html'
})
export class ExposureComponent implements OnInit, OnDestroy {
  data: ListExposure[] = [];
  subscription: Subscription;

  constructor(private exposureService: ExposureService,
              private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.subscription = this.appFormService.eventTabExposure.subscribe(
      (data: any) => {
        this.exposureService.getExposure("web",
          this.appFormService.getAppFormData().com_code,
          this.appFormService.getAppFormData().ca_no,
          this.appFormService.getAppFormData().new_card_no).subscribe(
          (data: any) => {
            this.data = ListExposure.parse(data.LIST_DATA);
          }
        );
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

}
