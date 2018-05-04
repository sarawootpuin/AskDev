import {Component, Input, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListCollateral} from "../model/getDataCollateral";
import {ListAnswer} from "../model/getListAnswer";

@Component({
  selector: 'app-collateral',
  templateUrl: './collateral.component.html'
})
export class CollateralComponent implements OnInit {

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
    this.appFormService.eventTabCollateral.subscribe(
      (data) => {
        this.data = data;
        this.dataListPayInterest = this.appFormService.listPayInterestMethod;
        this.disabled = this.appFormService.getAppFormData().disabled;
      }
    )
  }

  setDataSelect(data: ListCollateral) {
    if (data) {
      this.dataSelect = data;
      console.log(this.dataSelect);
    }
  }

}
