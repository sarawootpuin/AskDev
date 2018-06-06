import {Component, OnInit, ViewChild} from '@angular/core';
import { LazyLoadEvent } from "primeng/components/common/lazyloadevent";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import { ModelExposure } from "./model/model-exposure";
import {BlacklistResultService} from "../blacklist-service";
import {DecimalPipe} from "@angular/common";
import {ModelExposureComp} from "./model/model-exposurecomp";
import {ExposureTransfer} from "./model/model-exposuretrans";
import {MainService} from "../../main.service";

@Component({
  selector: 'app-exposure',
  templateUrl: './blacklist-exposure.component.html'
})
export class ExposureComponent implements OnInit {

  subscription: Subscription;
  datasource : ModelExposure[];
  myExposure : ModelExposure[];
  datasourcecomp : ModelExposureComp[];
  myExposurecomp : ModelExposureComp[];
  datasourcetransfer : ExposureTransfer[];
  myExposuretransfer : ExposureTransfer[];
  totalRecords : number;
  totalRecordscomp : number;
  loadProgressBar : Boolean=false;

  constructor(private router: Router,
              private  BLService : BlacklistResultService,
              private decimalpipe : DecimalPipe,
              private  MainService : MainService
  ) {}

  ngOnInit() {
    let paramblchk = this.BLService.getModelBLchk();
    this.loadProgressBar = true;
    if(paramblchk) {
      this.subscription = this.BLService.geExposureJSON(paramblchk.FIRST_NAME, paramblchk.LAST_NAME, paramblchk.iregisnumber, paramblchk.iagr_code, paramblchk.itype,paramblchk.ID_CODE).subscribe(
        (data: any) => {

          this.myExposure = ModelExposure.parse(data.LIST_DATA);
          this.datasource = this.myExposure;
          this.totalRecords = this.datasource.length;
          this.myExposure = this.datasource.slice(0, 10);
          this.loadProgressBar = false;
        }
      );
      // );

    }
  }

  onRowSelect(event)
  {

    this.subscription = this.BLService.geExposureCompanyJSON(event.data.FIRST_NAME,event.data.LAST_NAME,event.data.F_NAMET,event.data.L_NAMET,event.data.CARD_NO).subscribe(
      (data: any) => {
        this.myExposurecomp = ModelExposureComp.parse(data.LIST_DATA);

        this.datasourcecomp = this.myExposurecomp;
        this.totalRecordscomp = this.datasourcecomp.length;
        this.myExposurecomp = this.datasourcecomp.slice(0, 10);
      }
    );


    this.subscription = this.BLService.geExposureTransferJSON(event.data.CARD_NO).subscribe(
      (data: any) => {
        this.myExposuretransfer = ExposureTransfer.parse(data.LIST_DATA);

        this.datasourcetransfer = this.myExposuretransfer;
        this.totalRecordscomp = this.datasourcetransfer.length;
        this.myExposuretransfer = this.datasourcetransfer.slice(0, 10);
      }
    );
  }



  loadMyExposure(event: LazyLoadEvent) {


        setTimeout(() => {
            if(this.datasource) {
                this.myExposure = this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }

  loadMyExposureComp(event: LazyLoadEvent) {


    setTimeout(() => {
      if(this.datasourcecomp) {
        this.myExposurecomp = this.datasourcecomp.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  loadMyExposureTransfer(event: LazyLoadEvent) {


    setTimeout(() => {
      if(this.datasourcetransfer) {
        this.myExposuretransfer = this.datasourcetransfer.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }


}
