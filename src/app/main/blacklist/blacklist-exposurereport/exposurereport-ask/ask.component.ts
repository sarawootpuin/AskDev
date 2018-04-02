import { Component, OnInit } from '@angular/core';
import {ExposureReportService} from "../exposurereport-service";
import {ModelEPS_BGPL} from "../exposurereport-model/modeleps_bgpl";
import {LazyLoadEvent} from "primeng/primeng";
import {ModelEPS_ASK} from "../exposurereport-model/modeleps_ask";
import {ModelEPS_ASKGUAR} from "../exposurereport-model/modeleps_askguar";
import {Subscription} from "rxjs/Subscription";
import {ModelEPS_ASKSUM} from "../exposurereport-model/modeleps_asksum";
import {ModelEPS_ASKGUARSUM} from "../exposurereport-model/modeleps_askguarsum";
import {ModelEPS_HIGHEST} from "../exposurereport-model/modeleps_highest";

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html'
})
export class AskComponent implements OnInit {

  ModelEPS_ASK:ModelEPS_ASK[];
  ModelEPS_ASKGUAR:ModelEPS_ASKGUAR[];
  ModelEPS_ASKSUM:ModelEPS_ASKSUM[];
  ModelEPS_ASKGUARSUM:ModelEPS_ASKGUARSUM[];
  ModelEPS_HIGHEST:ModelEPS_HIGHEST[];
  datasource:ModelEPS_ASK[];
  datasourceGUAR:ModelEPS_ASKGUAR[];
  totalRecords:number;
  totalRecordsGUAR:number;
  subscription:Subscription;
  DAYLATE_HP:string;
  DAYLATE_FP:string;
  DAYLATE_PL:string;
  OS_HP:string;
  OS_FP:string;
  OS_PL:string;
  OS_TOTAL:string;
  DAYLATE_HP_GUAR:string;
  DAYLATE_FP_GUAR:string;
  DAYLATE_PL_GUAR:string;
  OS_HP_GUAR:string;
  OS_FP_GUAR:string;
  OS_PL_GUAR:string;
  OS_TOTAL_GUAR:string;
  ///// HIGHEST AMT ////
  HI_ASK_HP : string;
  HI_ASK_FP : string;
  HI_ASK_PL : string;
  TOTAL_HI : string;
  HI_GUAR_ASK_HP : string;
  HI_GUAR_ASK_FP : string;
  HI_GUAR_ASK_PL : string;
  TOTAL_GUAR_HI : string;
  //////////////////////
  constructor(private ExposureReportService:ExposureReportService) { }

  ngOnInit() {

  }

  public showEPS()
  {
    //  console.log("ShowEPS");
    //  console.log(this.ExposureReportService.getModelEPS_BGPL());
    this.ModelEPS_ASK = this.ExposureReportService.getModelEPS_ASK();
    this.ModelEPS_ASKSUM = this.ExposureReportService.getModelEPS_ASKSUM();
    this.datasource = this.ModelEPS_ASK;
    this.totalRecords = this.datasource.length;
    //console.log();
    this.DAYLATE_HP = this.ModelEPS_ASKSUM[0].DAYLATE_HP;
    this.DAYLATE_FP = this.ModelEPS_ASKSUM[0].DAYLATE_FP;
    this.DAYLATE_PL = this.ModelEPS_ASKSUM[0].DAYLATE_PL;
    this.OS_HP = this.ModelEPS_ASKSUM[0].OS_HP;
    this.OS_FP = this.ModelEPS_ASKSUM[0].OS_FP;
    this.OS_PL = this.ModelEPS_ASKSUM[0].OS_PL;
    this.OS_TOTAL = this.ModelEPS_ASKSUM[0].OS_TOTAL;
  }

  public showHIGHEST() {
    this.ModelEPS_HIGHEST = this.ExposureReportService.getModelEPS_HIGHEST();
    if (this.ModelEPS_HIGHEST[0])
    {
      this.HI_ASK_HP = this.ModelEPS_HIGHEST[0].HI_ASK_HP;
      this.HI_ASK_FP = '0'
      this.HI_ASK_PL = '0';
      this.TOTAL_HI = this.HI_ASK_HP;
    }
    else
    {
      this.HI_ASK_HP = '0';
      this.HI_ASK_FP = '0';
      this.HI_ASK_PL = '0';
      this.TOTAL_HI = '0';
    }
    this.HI_GUAR_ASK_HP = '0';
    this.HI_GUAR_ASK_FP = '0';
    this.HI_GUAR_ASK_PL = '0';
    this.TOTAL_GUAR_HI = '0';
  }

  public showEPSGUAR()
  {
    //  console.log("ShowEPS");
    //  console.log(this.ExposureReportService.getModelEPS_BGPL());
    this.ModelEPS_ASKGUAR = this.ExposureReportService.getModelEPS_ASKGUAR();
    this.ModelEPS_ASKGUARSUM = this.ExposureReportService.getModelEPS_ASKGUARSUM();
    this.datasourceGUAR = this.ModelEPS_ASKGUAR;
    this.totalRecordsGUAR = this.datasourceGUAR.length;

    this.DAYLATE_HP_GUAR = this.ModelEPS_ASKGUARSUM[0].DAYLATE_HP;
    this.DAYLATE_FP_GUAR = this.ModelEPS_ASKGUARSUM[0].DAYLATE_FP;
    this.DAYLATE_PL_GUAR = this.ModelEPS_ASKGUARSUM[0].DAYLATE_PL;
    this.OS_HP_GUAR = this.ModelEPS_ASKGUARSUM[0].OS_HP;
    this.OS_FP_GUAR = this.ModelEPS_ASKGUARSUM[0].OS_FP;
    this.OS_PL_GUAR = this.ModelEPS_ASKGUARSUM[0].OS_PL;
    this.OS_TOTAL_GUAR = this.ModelEPS_ASKGUARSUM[0].OS_TOTAL;
  }

  loadEPS_ASK(event: LazyLoadEvent) {
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
        this.ModelEPS_ASK = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  loadEPS_ASKGUAR(event: LazyLoadEvent) {
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
      if(this.datasourceGUAR) {
        this.ModelEPS_ASKGUAR = this.datasourceGUAR.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }
}
