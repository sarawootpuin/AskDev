import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BlacklistResultService} from "../blacklist-service";
import {LazyLoadEvent} from "primeng/primeng";
import {Location} from '@angular/common';
import {modelblinquiry} from "../blacklist-resultseach/model/model-blinquiry";

@Component({
  selector: 'app-blacklist-showblacklist',
  templateUrl: './blacklist-showblacklist.component.html'
})
export class BlacklistShowblacklistComponent implements OnInit {

  @Input() FIRST_NAME = "";
  @Input() LAST_NAME = "";
  @Input() ID_CARD = "";
  blinquiry: any=null;
  resultBlInquiry: any[] = [];
  datasource_BlInquiry: any;
  totalRecords: number;
  totalRecords_BlInquiry: number;
  totalRecords_Exposure: number;
  remark: string="";

  constructor(private BLService: BlacklistResultService,
              private router: Router,
              private _location: Location) {
  }

  ngOnInit() {
    let jsonBL = {
      "data": {
        "FIRST_NAME": this.FIRST_NAME,
        "LAST_NAME": this.LAST_NAME,
        "ID_CARD": this.ID_CARD
      }
    }
    this.BLService.getBLInquiryJSON(jsonBL.data).subscribe(
      (data: any) => {
        //console.log(data);
        this.blinquiry = modelblinquiry.parse(data.DATA.RESULT_LIST);
        // for(let i=0;i<this.blinquiry.length;i++)
        // {
        //   if(jsonBL.data.FIRST_NAME == this.blinquiry[i].FIRST_NAME && jsonBL.data.LAST_NAME == this.blinquiry[i].LAST_NAME && jsonBL.data.ID_CARD == this.blinquiry[i].ID_CARD)
        //   {
        //     this.resultBlInquiry.push(this.blinquiry[i]);
        //   }
        // }
        this.BLService.setBLInquiry(this.blinquiry);
          console.log(this.blinquiry);
        if (this.blinquiry == null) {
          if (this.BLService.blShared) {
            this.BLService.setComponentNameOnShow('result');
          }
          else {
            this.router.navigate(['blacklist/result']);
          }


        }
        else {
          if (this.blinquiry[0]) {
            this.remark = this.blinquiry[0].REMARK;
            this.blinquiry = this.BLService.getBLInquiry();
            this.datasource_BlInquiry = this.blinquiry;
            this.totalRecords_BlInquiry = this.datasource_BlInquiry.length;
            this.blinquiry = this.datasource_BlInquiry.slice(0, 10);
          }
        }


      }
    );


   // this.blinquiry = this.BLService.getBLInquiry();
    //console.log(this.blinquiry);



  }

  onRowSelect(evt){
    this.remark = evt.data.REMARK;
  }

  backPage() {

    if (this.BLService.blShared) {
      this.BLService.setComponentNameOnShow('checking');
    }
    else {
      this._location.back();
    }
  }

  loadBLInquiry(event: LazyLoadEvent) {


    setTimeout(() => {
      if (this.datasource_BlInquiry) {
        this.blinquiry = this.datasource_BlInquiry.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }


}
