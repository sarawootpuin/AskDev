import { Component, OnInit } from '@angular/core';
import {CustinfoService} from "../../custinfo.service";
import {Subscription} from "rxjs/Subscription";
import {ChqGuarantee} from "./ccs-chq-guarantee.model";

@Component({
  selector: 'app-ccs-chq-guarantee',
  templateUrl: './ccs-chq-guarantee.component.html'
})
export class CcsChqGuaranteeComponent implements OnInit {
  list_ChqGuarantee: ChqGuarantee[] = [];
  subscription: Subscription;

  constructor(private custService: CustinfoService) { }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data: any) => {
        this.list_ChqGuarantee = data.list_ChqGuarantee;
      }
    );
  }

}
