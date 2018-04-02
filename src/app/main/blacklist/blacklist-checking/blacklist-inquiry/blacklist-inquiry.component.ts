import { Component, OnInit } from '@angular/core';
import {BlacklistResultService} from "../../blacklist-service";
import {modelblinquiry} from "../../blacklist-resultseach/model/model-blinquiry";
import {Router} from "@angular/router";
import {BlacklistHistory} from "../../blacklist-resultseach/model/model-blacklisthistory";
import { Location } from '@angular/common';
import {LazyLoadEvent} from "primeng/primeng";
import {ModelExposureHistoryCompany} from "../../blacklist-resultseach/model/model-exposurehistorycomp";

@Component({
  selector: 'app-bl-inquiry',
  templateUrl: './blacklist-inquiry.component.html'
})
export class BlInquiryComponent implements OnInit {
  blinquiry : any;
  datasource_BlInquiry : any;
  BLHistory : BlacklistHistory[]=[];
  datasource : BlacklistHistory[]=[];
  modelExposure : ModelExposureHistoryCompany[]=[];
  datasourceExposure : ModelExposureHistoryCompany[]=[];
  totalRecords : number;
  totalRecords_BlInquiry  : number;
  totalRecords_Exposure  : number;
  remark : string="";
  constructor(private BLService :BlacklistResultService,private router:Router,private _location:Location)
  { }


  ngOnInit() {

    this.BLHistory = this.BLService.getBlacklistHistoryInquiry();
    this.blinquiry = this.BLService.getBLInquiry();

    if(this.blinquiry==null)
    {
      if (this.BLService.blShared){
        this.BLService.setComponentNameOnShow('result');
      }
      else {
        this.router.navigate(['blacklist/result']);
      }


    }
    else
    {
      this.remark = this.blinquiry[0].REMARK;
      this.BLHistory = this.BLService.getBlacklistHistoryInquiry();
      this.datasource = this.BLHistory;
      this.totalRecords = this.datasource.length;
      this.BLHistory = this.datasource.slice(0, 10);

      this.blinquiry = this.BLService.getBLInquiry();
      this.datasource_BlInquiry = this.blinquiry;
      this.totalRecords_BlInquiry   = this.datasource_BlInquiry.length;
      this.blinquiry = this.datasource_BlInquiry.slice(0, 10);

      this.modelExposure = this.BLService.getExposureHistoryCompany() ? this.BLService.getExposureHistoryCompany() : [];
      this.datasourceExposure = this.modelExposure;
      this.totalRecords_Exposure   = this.datasourceExposure.length;
      this.modelExposure = this.datasourceExposure.slice(0, 10);
    }
  }

  backPage()
  {

    if (this.BLService.blShared){
      this.BLService.setComponentNameOnShow('checking');
    }
    else {
      this._location.back();
    }
  }

  loadBLHistory(event: LazyLoadEvent) {


    setTimeout(() => {
      if(this.datasource) {
        this.BLHistory = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  onRowSelect(evt){
    this.remark = evt.data.REMARK;
  }

  loadExposure(event: LazyLoadEvent) {


    setTimeout(() => {
      if(this.datasourceExposure) {
        this.modelExposure = this.datasourceExposure.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  loadBLInquiry(event: LazyLoadEvent) {


    setTimeout(() => {
      if(this.datasource_BlInquiry) {
        this.blinquiry = this.datasource_BlInquiry.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

}
