import { Component, OnInit } from '@angular/core';
import {ModelEPS_BGPL} from "../exposurereport-model/modeleps_bgpl";
import {ExposureReportService} from "../exposurereport-service";
import {LazyLoadEvent} from "primeng/primeng";
import {Subscription} from "rxjs/Subscription";
import {ModelEPS_BGPLGUAR} from "../exposurereport-model/modeleps_bgplguar";
import {ModelEPS_BGPLSUM} from "../exposurereport-model/modeleps_bgplsum";
import {ModelEPS_BGPLGUARSUM} from "../exposurereport-model/modeleps_bgplguarsum";
import {ModelEPS_FACSELLER} from "../exposurereport-model/modeleps_facseller";
import {ModelEPS_FAC} from "../exposurereport-model/modeleps_fac";
import {ModelEPS_HIGHEST} from "../exposurereport-model/modeleps_highest";

@Component({
  selector: 'app-bgpl',
  templateUrl: './bgpl.component.html'
})
export class BgplComponent implements OnInit {

  ModelEPS_BGPL:ModelEPS_BGPL[];
  ModelEPS_BGPLSUM:ModelEPS_BGPLSUM[];
  ModelEPS_BGPLGUAR:ModelEPS_BGPLGUAR[];
  ModelEPS_BGPLGUARSUM:ModelEPS_BGPLGUARSUM[];
  ModelEPS_FAC:ModelEPS_FAC[];
  ModelEPS_FACSELLER:ModelEPS_FACSELLER[];
  ModelEPS_HIGHEST:ModelEPS_HIGHEST[];
  datasource:ModelEPS_BGPL[];
  datasourceGUAR:ModelEPS_BGPLGUAR[];
  datasourceFAC_SELLER:ModelEPS_FACSELLER[];
  totalRecords:number;
  totalRecordsGUAR:number;
  totalRecordsFAC_SELLER:number;
  subscription:Subscription;
  DAYLATE_LS:string;
  DAYLATE_HP:string;
  DAYLATE_PL:string;
  OS_HP:string;
  OS_LS:string;
  OS_PL:string;
  OS_TOTAL:string;
  DAYLATE_LS_GUAR:string;
  DAYLATE_HP_GUAR:string;
  DAYLATE_PL_GUAR:string;
  OS_HP_GUAR:string;
  OS_LS_GUAR:string;
  OS_PL_GUAR:string;
  OS_TOTAL_GUAR:string;
  FAC_ACC_ADVANCE:string;
  SUM_CR_LIMIT:string;
  SUM_ADVANCE_AMT:string;
  CREDIT_LINT_TOT:string;
  ADVANCE_AMT_TOT:string;
  APPROVE_AMT:string;
  ACC_ADVANCE:string;
  ACC_ADVANCE_GP:string;
  CR_GROUP:string;
  ///// HIGHEST AMT ////
  HI_BGP_HP : string;
  HI_BGP_LS : string;
  HI_BGP_PL : string;
  TOTAL_HI : string;
  HI_GUAR_BGP_HP : string;
  HI_GUAR_BGP_LS : string;
  HI_GUAR_BGP_PL : string;
  TOTAL_GUAR_HI : string;
  //////////////////////
  constructor(private ExposureReportService:ExposureReportService) { }

  ngOnInit() {
    // if(this.ExposureReportService.getModelEPS_BGPL())
    // {
    // this.ModelEPS_BGPL = this.ExposureReportService.getModelEPS_BGPL();
    // this.datasource = this.ModelEPS_BGPL;
    // this.totalRecords = this.datasource.length;
    //   //console.log(this.ModelEPS_BGPL);
    // }
  }

  public showEPS()
  {
  //  console.log("ShowEPS");
  //  console.log(this.ExposureReportService.getModelEPS_BGPL());
    this.ModelEPS_BGPL = this.ExposureReportService.getModelEPS_BGPL();
    this.ModelEPS_BGPLSUM = this.ExposureReportService.getModelEPS_BGPLSUM();
    this.datasource = this.ModelEPS_BGPL;
    this.totalRecords = this.datasource.length;
    this.DAYLATE_LS = this.ModelEPS_BGPLSUM[0].DAYLATE_LS;
    this.DAYLATE_HP = this.ModelEPS_BGPLSUM[0].DAYLATE_HP;
    this.DAYLATE_PL = this.ModelEPS_BGPLSUM[0].DAYLATE_PL;
    this.OS_HP = this.ModelEPS_BGPLSUM[0].OS_HP;
    this.OS_LS = this.ModelEPS_BGPLSUM[0].OS_LS;
    this.OS_PL = this.ModelEPS_BGPLSUM[0].OS_PL;
    this.OS_TOTAL = this.ModelEPS_BGPLSUM[0].OS_TOTAL;

  }

  public showEPSGUAR()
  {
    //  console.log("ShowEPS");
    //  console.log(this.ExposureReportService.getModelEPS_BGPL());
    this.ModelEPS_BGPLGUAR = this.ExposureReportService.getModelEPS_BGPLGUAR();
    this.ModelEPS_BGPLGUARSUM = this.ExposureReportService.getModelEPS_BGPLGUARSUM();
    this.datasourceGUAR = this.ModelEPS_BGPLGUAR;
    this.totalRecordsGUAR = this.datasourceGUAR.length;

    this.DAYLATE_LS_GUAR = this.ModelEPS_BGPLGUARSUM[0].DAYLATE_LS;
    this.DAYLATE_HP_GUAR = this.ModelEPS_BGPLGUARSUM[0].DAYLATE_HP;
    this.DAYLATE_PL_GUAR = this.ModelEPS_BGPLGUARSUM[0].DAYLATE_PL;
    this.OS_HP_GUAR = this.ModelEPS_BGPLGUARSUM[0].OS_HP;
    this.OS_LS_GUAR = this.ModelEPS_BGPLGUARSUM[0].OS_LS;
    this.OS_PL_GUAR = this.ModelEPS_BGPLGUARSUM[0].OS_PL;
    this.OS_TOTAL_GUAR = this.ModelEPS_BGPLGUARSUM[0].OS_TOTAL;
  }

  public showHIGHEST()
  {
    this.ModelEPS_HIGHEST = this.ExposureReportService.getModelEPS_HIGHEST();
    if (this.ModelEPS_HIGHEST[0])
    {
      this.HI_BGP_HP = this.ModelEPS_HIGHEST[0].HI_BGP_HP;
      this.HI_BGP_LS = this.ModelEPS_HIGHEST[0].HI_BGP_LS;
      this.HI_BGP_PL = '0';
      this.TOTAL_HI = String(Number(this.HI_BGP_HP)+Number(this.HI_BGP_LS));
    }
    else
    {
      this.HI_BGP_HP = '0';
      this.HI_BGP_LS = '0';
      this.HI_BGP_PL = '0';
      this.TOTAL_HI = '0';
    }
    this.HI_GUAR_BGP_HP = '0';
    this.HI_GUAR_BGP_LS = '0';
    this.HI_GUAR_BGP_PL = '0';
    this.TOTAL_GUAR_HI = '0';
  }

  public showFAC()
  {
    //  console.log("ShowEPS");
    //  console.log(this.ExposureReportService.getModelEPS_BGPL());
    this.ModelEPS_FAC = this.ExposureReportService.getModelEPS_FAC();
    this.ModelEPS_FACSELLER = this.ExposureReportService.getModelEPS_FACSELLER();
    this.datasourceFAC_SELLER = this.ModelEPS_FACSELLER;
    this.totalRecordsFAC_SELLER = this.datasourceFAC_SELLER.length;



    if (this.ModelEPS_FAC[0])
    {
      this.FAC_ACC_ADVANCE = this.ModelEPS_FAC[0].ACC_ADVANCE;
      this.APPROVE_AMT = this.ModelEPS_FAC[0].APPROVE_AMT;
      this.ACC_ADVANCE = this.ModelEPS_FAC[0].ACC_ADVANCE;
      this.ACC_ADVANCE_GP = this.ModelEPS_FAC[0].ACC_ADVANCE_GP;
      this.CR_GROUP = this.ModelEPS_FAC[0].CR_GROUP;
    }
    else
    {
      this.FAC_ACC_ADVANCE = '0';
      this.APPROVE_AMT = '0';
      this.ACC_ADVANCE = '0';
      this.ACC_ADVANCE_GP = '0';
      this.CR_GROUP = '0';
    }

    this.SUM_CR_LIMIT = this.ModelEPS_FACSELLER[0].SUM_CR_LIMIT;
    this.SUM_ADVANCE_AMT = this.ModelEPS_FACSELLER[0].SUM_ADVANCE_AMT;
    this.CREDIT_LINT_TOT = this.ModelEPS_FACSELLER[0].CREDIT_LINT_TOT ? this.ModelEPS_FACSELLER[0].CREDIT_LINT_TOT : '0';
    this.ADVANCE_AMT_TOT = this.ModelEPS_FACSELLER[0].ADVANCE_AMT_TOT ? this.ModelEPS_FACSELLER[0].ADVANCE_AMT_TOT : '0';
    this.CREDIT_LINT_TOT = this.ModelEPS_FACSELLER[0].CREDIT_LINT_TOT=='-' ? '0': this.ModelEPS_FACSELLER[0].CREDIT_LINT_TOT ;
    this.ADVANCE_AMT_TOT = this.ModelEPS_FACSELLER[0].ADVANCE_AMT_TOT=='-' ? '0' : this.ModelEPS_FACSELLER[0].ADVANCE_AMT_TOT;

  }


  loadEPS_BGPL(event: LazyLoadEvent) {
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
        this.ModelEPS_BGPL = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  loadEPS_BGPLGUAR(event: LazyLoadEvent) {
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
        this.ModelEPS_BGPLGUAR = this.datasourceGUAR.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  print(event)
  {

  }

  loadEPS_FAC_SELLER(event: LazyLoadEvent) {
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
      if(this.datasourceFAC_SELLER) {
        this.ModelEPS_FACSELLER = this.datasourceFAC_SELLER.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

}
