import { Component, OnInit } from '@angular/core';
import {BlacklistResultService} from "../blacklist-service";
import {ModelExposureHistory} from "./model/model-exposurehistory";
import {LazyLoadEvent} from "primeng/primeng";

@Component({
  selector: 'app-blacklist-exposurehistorycompany',
  templateUrl: './blacklist-exposurehistorycompany.component.html'
})
export class BlacklistExposurehistorycompanyComponent implements OnInit {

  constructor(private blacklistService : BlacklistResultService) { }
  modelExposureHistory : ModelExposureHistory[];
  datasource : ModelExposureHistory[];
  totalRecords : number;
  loadProgressBar:boolean=false;

  ngOnInit() {
    this.loadProgressBar = true;
    this.modelExposureHistory = this.blacklistService.getExposureHistory();
    this.datasource = this.modelExposureHistory;
    this.totalRecords = this.datasource.length;
    this.modelExposureHistory = this.datasource.slice(0, 10);
    this.loadProgressBar = false;
  }

  loadExposureHistory(event: LazyLoadEvent) {
    setTimeout(() => {
      if(this.datasource) {
        this.modelExposureHistory = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

}
