import {Component, OnInit} from "@angular/core";
import {GetDataCustomer} from "../../model/getDataCustomer";
import {AppFormService} from "../../appform.service";
import {Industry} from "../../model/industry";

@Component({
  selector: 'app-percent-industry',
  templateUrl: './percent-industry.component.html'
})
export class PercentIndustryComponent implements OnInit {
  data: GetDataCustomer = new GetDataCustomer();
  dataTable: Industry[] = [];

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {

    this.data = this.appFormService.dataCustomer;
    if (this.data.ind) {
      this.dataTable = this.data.ind;
    }

    this.appFormService.eventTabCustomer.subscribe(
      (data) => {
        this.data = data;
        console.log(this.data);
        if (this.data.ind) {
          this.dataTable = this.data.ind;
        }
        else{
          this.dataTable = [];
        }
      }
    )
  }

}
