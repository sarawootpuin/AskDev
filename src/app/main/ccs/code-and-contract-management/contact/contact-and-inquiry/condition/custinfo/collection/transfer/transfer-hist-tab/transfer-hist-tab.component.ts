import { Component, OnInit } from '@angular/core';
import {TransferHistModel} from "../transferHist.model";
import {Subscription} from "rxjs/Subscription";
import {CustinfoService} from "../../../custinfo.service";

@Component({
  selector: 'app-transfer-hist-tab',
  templateUrl: './transfer-hist-tab.component.html',
  styleUrls: ['./transfer-hist-tab.component.css']
})
export class TransferHistTabComponent implements OnInit {
  private subscription: Subscription;
  list_TransferHist: TransferHistModel[] = [];

  constructor(private custService: CustinfoService) {
  }

  ngOnInit() {
    this.subscription = this.custService.emitMainJSON.subscribe(
      (data : any) => {
        if (data.list_TransferHist.length > 0) {
          this.list_TransferHist = data.list_TransferHist;
        }
      }
    );
  }

}
