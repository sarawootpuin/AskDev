import { Component, OnInit } from '@angular/core';
import {ModelEPS_SUMCUS} from "../exposurereport-model/modeleps_sumcus";
import {ModelEPS_SUMGUAR} from "../exposurereport-model/modeleps_sumguar";
import {ExposureReportService} from "../exposurereport-service";
import {LazyLoadEvent} from "primeng/primeng";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  ModelEPS_SUMCUS:ModelEPS_SUMCUS[];
  datasource:ModelEPS_SUMCUS[];
  ModelEPS_SUMGUAR:ModelEPS_SUMGUAR[];
  datasourceGUAR:ModelEPS_SUMGUAR[];
  totalRecords:any;
  totalRecordsGUAR:any;
  constructor(private ExposureReportService:ExposureReportService) { }

  ngOnInit() {
  }

  public showEPSSUMMARY()
  {
    //  console.log("ShowEPS");
    //  console.log(this.ExposureReportService.getModelEPS_BGPL());
    this.ModelEPS_SUMCUS = this.ExposureReportService.getModelEPS_SUMCUS();
    this.ModelEPS_SUMGUAR = this.ExposureReportService.getModelEPS_SUMGUAR();
    this.datasource = this.ModelEPS_SUMCUS;
    this.datasourceGUAR = this.ModelEPS_SUMGUAR;
    this.totalRecords = this.datasource.length;
    this.totalRecordsGUAR = this.datasourceGUAR.length;
  }

  loadSUMMARY_CUS(event: LazyLoadEvent) {
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
        this.ModelEPS_SUMCUS = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  loadSUMMARY_GUAR(event: LazyLoadEvent) {
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
        this.ModelEPS_SUMGUAR = this.datasourceGUAR.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

}
