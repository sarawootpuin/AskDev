import {Component, OnInit} from "@angular/core";
import {ListReason} from "../model/getDataReason";
import {AppFormService} from "../appform.service";

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html'
})
export class ReasonComponent implements OnInit {
  data: ListReason[];
  dataFirst: ListReason;

  constructor(private appFormService: AppFormService) {
    this.dataFirst = new ListReason();
  }

  ngOnInit() {
    this.data = this.appFormService.listTabReason;
    if (this.appFormService.listTabReason) {
      if (this.appFormService.listTabReason.length > 0) {
        this.dataFirst = this.appFormService.listTabReason[0];
      }
    }
    this.appFormService.eventTabReason.subscribe(
      (data) => {
        this.data = data;
        this.dataFirst = this.data[0];
      }
    );
  }

}
