import { Component, OnInit } from '@angular/core';
import {RegSuspendedModel} from "./RegSuspended.model";
import {Subscription} from "rxjs/Subscription";
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-regsuspend-hist',
  templateUrl: './ccs-regsuspend-hist.component.html'
})
export class CcsRegsuspendHistComponent implements OnInit {
  list_RegSuspended: RegSuspendedModel[] = [];
  selectItem: RegSuspendedModel;
  subscription: Subscription;

  constructor(private custService: CustinfoService) {
    this.selectItem = new RegSuspendedModel();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_RegSuspended = data.list_RegSuspended;
        if (this.list_RegSuspended.length > 0) {
          this.selectItem = this.list_RegSuspended[0];
        }

      }
    );
  }

}
