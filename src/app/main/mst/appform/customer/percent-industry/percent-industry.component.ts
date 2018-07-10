import {Component, OnDestroy, OnInit} from "@angular/core";
import {GetDataCustomer} from "../../model/getDataCustomer";
import {AppFormService} from "../../appform.service";
import {Industry} from "../../model/industry";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-percent-industry',
  templateUrl: './percent-industry.component.html'
})
export class PercentIndustryComponent implements OnInit, OnDestroy {
  data: GetDataCustomer = new GetDataCustomer();
  dataTable: Industry[] = [];
  subscription: Subscription;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.data = this.appFormService.dataCustomer;
    if (this.data.ind) {
      this.dataTable = this.data.ind;
    }
    this.subscription = this.appFormService.eventTabCustomer.subscribe(
      (data) => {
        this.data = data;
        //console.log(this.data);
        if (this.data.ind) {
          this.dataTable = this.data.ind;
        }
        else {
          this.dataTable = [];
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
