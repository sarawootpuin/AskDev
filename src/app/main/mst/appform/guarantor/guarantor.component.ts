import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListGuarantor} from "../model/getDataGuarantor";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-guarantor',
  templateUrl: './guarantor.component.html'
})
export class GuarantorComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  data: ListGuarantor[];
  dataSelect: ListGuarantor = null;
  disabled: string = 'N';
  @Input() inquiry: boolean;

  constructor(private appFormService: AppFormService) {

  }

  ngOnInit() {
    this.subscription = this.appFormService.eventTabGuarantor.subscribe(
      (data) => {
        this.data = data;
        if (this.appFormService.getAppFormData()) {
          this.disabled = this.appFormService.getAppFormData().disabled;
        }
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setDataSelect(data: ListGuarantor) {
    this.dataSelect = data;
  }

}
