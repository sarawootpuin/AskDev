import {Component, Input, OnInit} from "@angular/core";
import {ListBuyer} from "../../model/getDataBuyer";
import {AppFormService} from "../../appform.service";
import {ListAnswer} from "../../model/getListAnswer";

@Component({
  selector: 'app-detail-buyer',
  templateUrl: './detail-buyer.component.html'
})
export class DetailBuyerComponent implements OnInit {
  @Input("data") data: ListBuyer = new ListBuyer();
  @Input("lists") lists: ListAnswer[];
  @Input("listsJointB") listsJointB: ListAnswer[];
  editable: boolean = false;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    this.appFormService.editEvent.subscribe(
      (flag) => {
        this.editable = flag;
      }
    )
  }

  onBuyerGroupChange(index: any) {
    if (index > -1) {
      this.data.joint_buyer_group = this.listsJointB[index].id_code;
      this.data.cr_limit = this.listsJointB[index].remark1;
      this.data.sub_line_amt_group = this.listsJointB[index].remark1;
    }
    else {
      this.data.joint_buyer_group = '';
      this.data.cr_limit = '';
      this.data.sub_line_amt_group = '';
    }
  }
}
