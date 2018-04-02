import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BlacklistChk} from "../blacklist-checking/model-blacklistchk";
import {BlacklistResultService} from "../blacklist-service";
import {BlacklistResult} from "./model/model-blacklistresult";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {BlacklistHistory} from "./model/model-blacklisthistory";
import {modelblinquiry} from "./model/model-blinquiry";
import { LazyLoadEvent } from "primeng/components/common/lazyloadevent";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {ModelExposureHistoryCompany} from "./model/model-exposurehistorycomp";


@Component({
  selector: 'app-resultseach',
  templateUrl: './blacklist-resultseach.component.html'
})
export class ResultseachComponent implements OnInit,OnDestroy {


  constructor(private  BLService : BlacklistResultService,private router: Router) { }
  myBlacklist :BlacklistResult[];
  myBlacklistUnique :any[];
  myBlacklistHistory : BlacklistHistory[]=[];
  subscription : Subscription;
  myBlacklistResult:any[];
  subscription_Exposure : Subscription;
  blinquiry : modelblinquiry[];
  modelExposure : ModelExposureHistoryCompany[];
  totalRecords: number;
  totalRecordsHistory : number;
  datasource: any[];
  datasourceHistory: BlacklistHistory[];
  selectedCar1 : BlacklistResult[];
  resultBlInquiry : modelblinquiry[]=[];
  @ViewChild('alertDialogComponent') alertDialogComponent:AlertDialogComponent;

  ngOnInit() {
    this.myBlacklistUnique = [];
    this.datasource = [];
    this.myBlacklistUnique = this.BLService.getListBlacklistResult();

    //console.log(this.BLService.getListBlacklistResult())
    this.myBlacklistHistory = this.BLService.getBlacklistHistory();
    if(this.myBlacklistUnique == null && this.myBlacklistHistory == null && this.BLService.getModelBLchk() == null || this.myBlacklistUnique == undefined || this.myBlacklistHistory == undefined)
    {
      if(this.BLService.blShared){
        this.BLService.setComponentNameOnShow('search');

      }
      else {
        this.router.navigate(['blacklist/search']);
      }

    }
    else {
     // console.log(this.myBlacklistUnique);
      this.myBlacklist = [];
      this.myBlacklistUnique = this.compressArray(this.myBlacklistUnique);
      let checkUserLogin = 0;
      for (let i = 0; i < this.myBlacklistUnique.length; i++)
      {
        if(this.myBlacklistUnique[0].value.userlogin)
        {
          checkUserLogin = checkUserLogin + 1;
        }
        if(checkUserLogin>0)
        {
          break;
        }
      }
      if(checkUserLogin>0) {
        for (let i = 0; i < this.myBlacklistUnique.length; i++) {
          this.myBlacklist.push({
            "AMLO": this.myBlacklistUnique[i].value.AMLO,
            "CHASSIS": this.myBlacklistUnique[i].value.CHASSIS,
            "ENG_NUM": this.myBlacklistUnique[i].value.ENG_NUM,
            "FIRST_NAME": this.myBlacklistUnique[i].value.FIRST_NAME,
            "ID_CARD": this.myBlacklistUnique[i].value.ID_CARD,
            "LAST_NAME": this.myBlacklistUnique[i].value.LAST_NAME
          })
        }
      //  console.log(this.myBlacklistUnique)
        this.myBlacklistUnique = this.compressArray(this.myBlacklist);
       // console.log(this.myBlacklistUnique)
      }

      // }
      // this.myBlacklist = {
      //   "value" : {
      //     "AMLO":this.myBlacklistUnique.value.AMLO,
      //     "CHASSIS":this.myBlacklistUnique.value.CHASSIS,
      //     "ENG_NUM":this.myBlacklistUnique.value.ENG_NUM,
      //     "FIRST_NAME":this.myBlacklistUnique.value.FIRST_NAME,
      //     "ID_CARD":this.myBlacklistUnique.value.ID_CARD,
      //     "LAST_NAME":this.myBlacklistUnique.value.LAST_NAME
      //   },
      // }

     // console.log(this.myBlacklist);

      // this.datasource = this.myBlacklist;
      // this.totalRecords = this.datasource.length;
      // this.myBlacklist = this.datasource.slice(0, 10);


      this.datasource = this.myBlacklistUnique;
      this.totalRecords = this.datasource.length;
      this.myBlacklistUnique = this.datasource.slice(0, 10);



      this.datasourceHistory = this.myBlacklistHistory;
      this.totalRecordsHistory = this.datasourceHistory.length;
      this.myBlacklistHistory = this.datasourceHistory.slice(0, 10);
    }

   //console.log(this.totalRecords);
  //    this.BLService.BlacklistEmit.subscribe(
  //      (obj) => {
  //        this.myBlacklist = obj;
  //      }
  //    );

  //     (BlacklistResult: BlacklistResult[]) => {
  //       console.log(BlacklistResult);
  //
  //     }
  //   );
  }

  compressArray(original:any) {

  var compressed = [];
  // make a copy of the input array
  var copy = original.slice(0);

  // first loop goes over every element
  for (var i = 0; i < original.length; i++) {

    var myCount = 0;
    // loop over every element in the copy and see if it's the same
    for (var w = 0; w < copy.length; w++) {
      if (JSON.stringify(original[i])== JSON.stringify(copy[w])) {
        // increase amount of times duplicate is found
        myCount++;
        // sets item to undefined
        delete copy[w];
      }
    }

    if (myCount > 0) {
      var a = new Object();
      a = {"value" :original[i],
      "count":myCount
      };
      compressed.push(a);
    }
  }

  return compressed;
};

  ngOnDestroy(){
    this.myBlacklist = null;
    this.myBlacklistHistory = null;
    this.myBlacklistUnique = [];
  }

  onRowSelect(event)
  {

    this.subscription_Exposure = this.BLService.getExposureHistoryCOmpanyJSON(event.data.value).subscribe(
      (data_Exposure : any) => {

        this.modelExposure = [];
       // console.log(data_Exposure);
        this.modelExposure = ModelExposureHistoryCompany.parse(data_Exposure.LIST_DATA);
        this.BLService.setExposureHistoryCompany(this.modelExposure);

        this.subscription = this.BLService.getBLInquiryJSON(event.data.value).subscribe(
          (data : any)=>{
            this.resultBlInquiry = [];
            this.blinquiry = [];
            this.blinquiry = modelblinquiry.parse(data.DATA.RESULT_LIST);
            for(let i=0;i<this.blinquiry.length;i++)
            {
              if(event.data.value.FIRST_NAME == this.blinquiry[i].FIRST_NAME && event.data.value.LAST_NAME == this.blinquiry[i].LAST_NAME && event.data.value.ID_CARD == this.blinquiry[i].ID_CARD)
              {
                this.resultBlInquiry.push(this.blinquiry[i]);
              }
            }
            this.BLService.setBLInquiry(this.resultBlInquiry);
            this.BLService.setBlacklistHistoryInquiry(data.DATA.HISTORY_LIST);
            if(this.BLService.blShared){
              this.BLService.setComponentNameOnShow('blinquiry');
            }
            else {
              this.router.navigate(['blacklist/result/blinquiry']);
            }

      }
    );




        //  console.log(data.DATA.HISTORY_LIST);
        }
      );


  }

  loadMyBlacklist(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
       // console.log("test");

        setTimeout(() => {
            if(this.datasource) {
                this.myBlacklistUnique = this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }

    loadmyBlacklistHistory(event: LazyLoadEvent) {
        setTimeout(() => {
            if(this.datasourceHistory) {
                this.myBlacklistHistory = this.datasourceHistory.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }

}
