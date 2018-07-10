import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {PenaltyModel} from "../../model/penalty";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-ccs-penalty',
  templateUrl: './ccs-penalty.component.html'
})
export class CcsPenaltyComponent implements OnInit {
  ds_penalty: PenaltyModel;
  subscription: Subscription;

  constructor(private custService: CustinfoService) {
    this.ds_penalty = new PenaltyModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data:any) => {
        this.ds_penalty = data.ds_penalty;
      }
    );
  }

}
