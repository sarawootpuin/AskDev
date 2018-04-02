import {Component, OnInit, ViewChild} from '@angular/core';
import {ModelSearchExposureDialog} from "./model-searchexposuredialog";
import {Router} from "@angular/router";
import {BlacklistResultService} from "../blacklist-service";
import {MainService} from "../../main.service";
import {Subscription} from "rxjs/Subscription";
import {LazyLoadEvent} from "primeng/primeng";
import {ExposureReportService} from "./exposurereport-service";
import {BgplComponent} from "./exposurereport-bgpl/bgpl.component";
import {AskComponent} from "./exposurereport-ask/ask.component";
import {SummaryComponent} from "./exposurereport-summary/summary.component";
import * as fileSaver from "file-saver";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {EntityDialogComponent} from "../../mst/entity/entity-dialog/entity-dialog.component";
import {EntityModel} from "../../mst/entity/model/entity-model";
import {UserStorage} from "../../../shared/user/user.storage.service";

@Component({
  selector: 'app-exposurereport',
  templateUrl: './exposurereport.component.html'
})
export class ExposurereportComponent implements OnInit {
  location: Location;
  ModelSearchDialog: ModelSearchExposureDialog[];
  datasource: ModelSearchExposureDialog[];
  totalRecords: number;
  subscription: Subscription;
  waiting:Boolean;
  waitingdialog:Boolean;
  ID_CARD : string;
  NAME_ENG : string;
  NAME_THA : string;
  exportExcelRemark : string;
  _url : string;
  _bl_tps : string;
  modelExcel : any;

  @ViewChild("BgplComponent_") BgplComponent_:BgplComponent;
  @ViewChild("ASKComponent_") ASKComponent_:AskComponent;
  @ViewChild("SummaryComponent_") SummaryComponent_:SummaryComponent;
  @ViewChild("entityDialogComponent") entityDialogComponent:EntityDialogComponent;

  constructor(private router: Router,
              private  BLService: BlacklistResultService,
              private  MainService: MainService,
              private ExposureReportService:ExposureReportService,
              private ServiceEndpoint : ServiceEndpoint,
              private  userStorage:UserStorage
  ) {
    this._url = ServiceEndpoint.url;
    this._bl_tps = ServiceEndpoint.bl_tps;
  }

  ngOnInit() {
    this.waiting = false;
    this.exportExcelRemark = ' Print Excel';
  }

  display: boolean = false;

  Cancel()
  {
    this.BLService.DestroyService;
    this.ExposureReportService.DestroyService;
    this.subscription.unsubscribe();
    this.waiting = false;
  }
  showDialog() {
    this.waitingdialog = true;
    this.display = true;
    this.entityDialogComponent.showDialog();
    // this.subscription = this.BLService.getSearchExposureDialogJSON().subscribe(
    //   (data: any) => {
    //     this.ModelSearchDialog = ModelSearchExposureDialog.parse(data.LIST_DATA);
    //     //console.log(this.myExposure);'
    //     this.datasource = this.ModelSearchDialog;
    //     this.totalRecords = this.datasource.length;
    //     // this.ModelSearchDialog = this.datasource.slice(0, 10);
    //     this.waitingdialog = false;
    //   }
    // );

  }

  getexposurereport(entityModel:EntityModel)
  {

     this.display=false;
     //let dataObject = this.ExposureReportService.getDataselect();
     let dataObject = {  ID_CARD : entityModel.cardNo,
                         ENG_NAME : entityModel.fNameE ? entityModel.fNameE + ' '+entityModel.lNameE:entityModel.fNameE,
                         THA_NAME : entityModel.fNameT ? entityModel.fNameT + ' '+entityModel.lNameT:entityModel.fNameT
                      };
    if(dataObject) {
       this.waiting = true;
       this.ID_CARD = dataObject.ID_CARD;
       this.NAME_ENG = dataObject.THA_NAME;
       this.NAME_THA = dataObject.ENG_NAME

       this.subscription = this.ExposureReportService.getDataExposureReport("BL", dataObject.ID_CARD).subscribe(
         (data: any) => {
           this.modelExcel = data;
           this.modelExcel.pcode = this.ID_CARD;
           this.modelExcel.name_eng = dataObject.ENG_NAME;
           this.modelExcel.name_tha = dataObject.THA_NAME;
           this.modelExcel.userlogin = this.userStorage.getUserName();

           this.ExposureReportService.setModelEPS_BGPL(data.DATA.AGREEMENT_BGPL);
           this.ExposureReportService.setModelEPS_BGPLGUAR(data.DATA.AGREEMENT_BGPLGUAR);
           this.ExposureReportService.setModelEPS_ASK(data.DATA.AGREEMENT_ASK);
           this.ExposureReportService.setModelEPS_ASKGUAR(data.DATA.AGREEMENT_ASKGUAR);
           this.ExposureReportService.setModelEPS_BGPLSUM(data.DATA.AGREEMENT_BGPL_SUM);
           this.ExposureReportService.setModelEPS_BGPLGUARSUM(data.DATA.AGREEMENT_BGPLGUAR_SUM);
           this.ExposureReportService.setModelEPS_ASKSUM(data.DATA.AGREEMENT_ASK_SUM);
           this.ExposureReportService.setModelEPS_ASKGUARSUM(data.DATA.AGREEMENT_ASKGUAR_SUM);
           this.ExposureReportService.setModelEPS_FAC(data.DATA.FAC);
           this.ExposureReportService.setModelEPS_FACSELLER(data.DATA.FAC_SELLER);
           this.ExposureReportService.setModelEPS_HIGHEST(data.DATA.HIGHEST_AMT);
           this.ExposureReportService.setModelEPS_SUMCUS(data.DATA.SUMMARY_CUS);
           this.ExposureReportService.setModelEPS_SUMGUAR(data.DATA.SUMMARY_GUAR);
           if(this.waiting)
           {
           this.BgplComponent_.showEPS();
           this.BgplComponent_.showEPSGUAR();
           this.BgplComponent_.showFAC()
           this.BgplComponent_.showHIGHEST();
           this.ASKComponent_.showEPS();
           this.ASKComponent_.showEPSGUAR();
           this.ASKComponent_.showHIGHEST();
           this.SummaryComponent_.showEPSSUMMARY();
           }
           this.waiting = false;
           //console.log(this.ExposureReportService.getModelEPS_BGPL());
         }
       );
     }
  }

  exportexcel(pcode:string,pnameEng:string,pnameTha:string)
  {
    this.exportExcelRemark = ' Loading...';
    let result:any;
    //result = window.location.assign('http://localhost:8080/MKS_WebServices/ask/blacklist/ExcelExposureReport?pcode='+link);
    this.subscription = this.ExposureReportService.exportExcelExposure(pcode,pnameEng,pnameTha).subscribe(
      (response: any) => {

        var blob = new Blob([response], {type: 'application/vnd.ms-excel'});
        var filename = 'ExposureReport.xlsx';
        fileSaver.saveAs(blob, filename);
        this.exportExcelRemark = ' Print Excel';
      }
    );


      //this.exportExcelRemark = ' Print Excel';

  //  this.exportExcelRemark = ' Print Excel';
    //this.document.location.href = 'localhost:8080/MKS_WebServices/blacklist-exposurereport-ask/blacklist/ExcelExposureReport?pcode='+link;
    // this.router.navigateByUrl('localhost:8080/MKS_WebServices/blacklist-exposurereport-ask/blacklist/ExcelExposureReport?pcode'+link);
  }

  handleRowClick(event)
  {
    this.ExposureReportService.setDataselect(event.data);
  }

  loadMySearchDialog(event: LazyLoadEvent) {
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
        this.ModelSearchDialog = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }
}
