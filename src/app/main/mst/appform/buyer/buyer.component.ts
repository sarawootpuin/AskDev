import {Component, Input, OnInit} from "@angular/core";
import {AppFormService} from "../appform.service";
import {ListBuyer} from "../model/getDataBuyer";
import {ListAnswer} from "../model/getListAnswer";

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html'
})
export class BuyerComponent implements OnInit {
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

    this.appFormService.eventTabBuyer.subscribe(
      (listTab) => {
        this.data = listTab;
        this.dataListAnswer = this.appFormService.listApplicationType;
        this.dataListJointBuyer = this.appFormService.listJointBuyer;
        this.disabled = this.appFormService.getAppFormData().disabled;
      }
    );

    this.appFormService.editEvent.subscribe(
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

  setDataSelect(data: ListBuyer) {
    if (data) {
      this.dataSelect = data;
    }
  }

}
