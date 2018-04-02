import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {ListGuarantor} from "../../model/getDataGuarantor";

@Component({
  selector: 'app-guarantor-detail',
  templateUrl: './guarantor-detail.component.html'
})
export class GuarantorDetailComponent implements OnInit, OnChanges {

  @Input("data") data: ListGuarantor;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.data == null) {
      this.data = new ListGuarantor();
    }
    console.log(this.data);
  }
}
