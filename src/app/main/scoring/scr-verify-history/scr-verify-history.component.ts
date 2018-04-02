import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrVerifyHistoryService} from "./scr-verify-history.service";
import {ScoringVerifyHistoryModel} from "../model/scoringVerifyHistory.model";
import {Subscription} from "rxjs/Subscription";



@Component({
  selector: 'app-scr-verify-history',
  templateUrl: './scr-verify-history.component.html',
  styleUrls: ['./scr-verify-history.component.css']
})
export class ScrVerifyHistoryComponent implements OnInit {

  dataTable : ScoringVerifyHistoryModel[] = [];
  refNo: string;
  comCode: string;
  subscription: Subscription;

  constructor(private scrVerifyHistoryService: ScrVerifyHistoryService) {
  }

  ngOnInit() {
  }

  getInitData(refNo:string,comCode:string){
    console.log('refNo:'+refNo);
    this.scrVerifyHistoryService.getScoringVerifyHistory(refNo,comCode).subscribe(
      (data: any) => {
        console.log(data);
        if (data.CODE == "200") {
          this.dataTable = ScoringVerifyHistoryModel.parse(data.LIST_DATA);
        }
      }
    );
  }


}
