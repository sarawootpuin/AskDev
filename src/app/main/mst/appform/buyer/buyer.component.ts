import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListBuyer} from "../model/getDataBuyer";
import {ListAnswer} from "../model/getListAnswer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html'
})
export class BuyerComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionEdit: Subscription;
  dataSelect: ListBuyer = new ListBuyer();
  data: ListBuyer[] = [];
  dataListAnswer: ListAnswer[] = [];
  dataListJointBuyer: ListAnswer[] = [];
  disabled: string = 'N';
  @Input() inquiry: boolean;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.listTabBuyer;
    this.dataListAnswer = this.appFormService.listApplicationType;
    this.dataListJointBuyer = this.appFormService.listJointBuyer;
    this.disabled = this.appFormService.getAppFormData().disabled;

    this.subscription = this.appFormService.eventTabBuyer.subscribe(
      (listTab) => {
        this.data = listTab;
        this.dataListAnswer = this.appFormService.listApplicationType;
        this.dataListJointBuyer = this.appFormService.listJointBuyer;
        this.disabled = this.appFormService.getAppFormData().disabled;
      }
    );

    this.subscriptionEdit = this.appFormService.editEvent.subscribe(
      (flag) => {
        if (flag) {
          for (let index in this.data) {
            this.data[index].factoring_fee = '';
            this.data[index].min_facfee = '';
            this.data[index].max_facfee = '';
          }
        }
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionEdit != null) {
      this.subscriptionEdit.unsubscribe();
    }
  }

  setDataSelect(data: ListBuyer) {
    if (data) {
      this.dataSelect = data;
    }
  }

}
