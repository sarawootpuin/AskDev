import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListCollateral} from "../model/getDataCollateral";
import {ListAnswer} from "../model/getListAnswer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-collateral',
  templateUrl: './collateral.component.html'
})
export class CollateralComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  data: ListCollateral[] = [];
  dataSelect: ListCollateral = new ListCollateral();
  dataListPayInterest: ListAnswer[] = [];
  disabled: string = 'N';
  @Input() inquiry: boolean;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.listTabCollateral;
    this.dataListPayInterest = this.appFormService.listPayInterestMethod;
    this.disabled = this.appFormService.getAppFormData().disabled;
    this.subscription = this.appFormService.eventTabCollateral.subscribe(
      (data) => {
        this.data = data;
        this.dataListPayInterest = this.appFormService.listPayInterestMethod;
        this.disabled = this.appFormService.getAppFormData().disabled;
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  setDataSelect(data: ListCollateral) {
    if (data) {
      this.dataSelect = data;
    }
  }

}
