import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {RelateContact} from "./ccs-relate.model";
import {RelateContactDtail} from "./ccs-relate-dtail.model";
import {CustinfoService} from "../../custinfo.service";

@Component({
  selector: 'app-ccs-relate',
  templateUrl: './ccs-relate.component.html'
})
export class CcsRelateComponent implements OnInit {
  list_Relate: RelateContact[] = [];
  list_RelateDtail: RelateContactDtail[] = [];
  subscription: Subscription;
  vSelected: RelateContact;

  constructor(private custService: CustinfoService) {
    this.vSelected = new RelateContact();
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_Relate = data.list_RelateContact;

        if (this.list_Relate) {
          this.list_RelateDtail = this.list_Relate[0].LIST_DTAIL;
        }
      }
    );
  }

}
