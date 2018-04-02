import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {BlacklistResultService} from "../blacklist-service";
import {Router} from "@angular/router";
import {ModelAmlo} from "./model/model-amlo";
import {LazyLoadEvent} from "primeng/primeng";

@Component({
  selector: 'app-check-amlo',
  templateUrl: './blacklist-check-amlo.component.html'
})
export class CheckAMLOComponent implements OnInit {
  subscription:Subscription;
  myAMLO:ModelAmlo[];
  datasource:ModelAmlo[];
  totalRecords:number;
  remark:string;
  loadProgressBar:boolean=false;
  constructor(private router: Router,
              private  BLService : BlacklistResultService) { }

  ngOnInit() {
    this.loadProgressBar = true;
    this.subscription = this.BLService.getAMLOJSON().subscribe(
      (data: any) => {
        this.myAMLO = ModelAmlo.parse(data.LIST_DATA);
        //console.log(this.myExposure);
        this.datasource = this.myAMLO;
        this.totalRecords = this.datasource.length;
        this.myAMLO = this.datasource.slice(0, 10);
        this.loadProgressBar = false;
      }
    );
  }

  onRowSelect(event)
  {

    console.log(event);
    this.remark = event.data.REMARK;
    //console.log(this.selectedCar1);

    // this.subscription = this.BLService.getBLInquiryJSON(event.data).subscribe(
    //   (data)=>{
    //     console.log(data);
    //     this.blinquiry = modelblinquiry.parse(data.DATA.RESULT_LIST);
    //     this.BLService.setBLInquiry(this.blinquiry);
    //     this.BLService.setBlacklistHistoryInquiry(data.DATA.HISTORY_LIST)
    //     this.router.navigate(['blacklist/result/blinquiry']);
    //   }
    // );

   }

  loadMyAMLO(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    // console.log("test");
    // console.log(this.datasource);

    setTimeout(() => {
      if(this.datasource) {
        this.myAMLO = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

}
