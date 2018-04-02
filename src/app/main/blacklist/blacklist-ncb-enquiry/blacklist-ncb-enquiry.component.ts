import { Component, OnInit } from '@angular/core';
import {ModelNcbEnquiry} from "./model/model_ncbenquiry";
import {Subscription} from "rxjs/Subscription";
import {BlacklistNcbService} from "../blacklist-ncb-service";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ModelNcbEnquiryCheckingFor} from "./model/model_ncbenquirycheckingfor";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import {ModelNcbImage} from "../blacklist-ncb/blacklist-ncb-images/model/modelNcbImage";
import {ModelNcbScreen} from "../blacklist-ncb/blacklist-ncb-screen/model/model_ncbscreen";
import {ModelNcbPdf} from "../blacklist-ncb/blacklist-ncb-pdf/model/modelNcbPdf";

@Component({
  selector: 'app-blacklist-ncb-enquiry',
  templateUrl: './blacklist-ncb-enquiry.component.html'
})
export class BlacklistNcbEnquiryComponent implements OnInit {

  constructor(private blacklistNcbService: BlacklistNcbService,
              private userStorage: UserStorage,
              private dataPipe : DatePipe,
              private router:Router
              ) {

  }

  modelNcbEnquiry: ModelNcbEnquiry[] = [];
  modelNcbEnquiryCheckingFor:ModelNcbEnquiryCheckingFor[]=[];
  modelNcbImage:ModelNcbImage[]=[];
  modelNcbScreen:ModelNcbScreen[]=[];
  modelNcbPdf:ModelNcbPdf[]=[];
  subscription: Subscription;
  subscriptionImage: Subscription;
  subscriptionDisplay: Subscription;
  pcheckfor: string = "";
  pname: string = "";
  psurname: string = "";
  ptradeid: string = "";
  pref_no: string = "";
  pchb_no_reason: string = "";
  pchb_no_tracking: string = "";
  pcheckdate: string = "";
  pcheckdateto: string = "";
  pncbdate: string = "";
  pncbdateto: string = "";
  page: string = "1";
  rows: string = "10";
  totalRecords: number = 0;
  comCode = this.userStorage.getComCode();

  ngOnInit() {
    this.getCheckingFor();
    this.comCode = this.userStorage.getComCode();
  }

  onRowDbClick(event)
  {
    console.log(event.data);
    this.subscriptionImage = this.blacklistNcbService.getNCBImage('&runno='+event.data.RUN_NO).subscribe(
      (data: any) => {
        //console.log(data.LIST_DATA);
        this.modelNcbImage = ModelNcbImage.parse(data.LIST_DATA);
        this.blacklistNcbService.setModelNcbImage(this.modelNcbImage);
      }
    );

    this.blacklistNcbService.setShowTodo(false);
    this.showNcbPdf(event.data.RUN_NO);
    this.showDisplayScreen(event.data.RUN_NO);

  }

  showNcbPdf(runNo?:string)
  {
    this.blacklistNcbService.getNCBPDF(runNo).subscribe(
      (data: any) => {
        //  console.log(data.LIST_DATA);
        this.modelNcbPdf = ModelNcbPdf.parse(data.LIST_DATA);
        this.blacklistNcbService.setModelNcbPdf(this.modelNcbPdf);
      }
    );
  }

  showDisplayScreen(runNo?:string)
  {
    this.subscriptionDisplay = this.blacklistNcbService.getNCBDisplay(runNo).subscribe(
      (data: any) => {
        //  console.log(data.LIST_DATA);
        this.modelNcbScreen = ModelNcbScreen.parse(data.LIST_DATA);
        this.blacklistNcbService.setModelNcbScreen(this.modelNcbScreen);
        this.router.navigate(['blacklist/ncb']);
      }
    );
  }

  getCheckingFor()
  {
    this.subscription = this.blacklistNcbService.getNCBEnquiryCheckingFor().subscribe(
    (data: any)=>{
      this.modelNcbEnquiryCheckingFor = ModelNcbEnquiryCheckingFor.parse(data.LIST_DATA);
      this.blacklistNcbService.setModelNcbEnquiryCheckingFor(this.modelNcbEnquiryCheckingFor);
    }
    );
  }

  getDataNcbEnquiry()
  {
    let params=
      {
        "pcheckfor":this.pcheckfor,
        "pname":this.pname,
        "psurname":this.psurname,
        "ptradeid":this.ptradeid,
        "pref_no":this.pref_no,
        "pchb_no_reason":String(this.pchb_no_reason),
        "pchb_no_tracking":String(this.pchb_no_tracking),
        "pcheckdate":this.dataPipe.transform(this.pcheckdate,'dd/MM/yyyy'),
        "pcheckdateto":this.dataPipe.transform(this.pcheckdateto,'dd/MM/yyyy'),
        "pncbdate":this.dataPipe.transform(this.pncbdate,'dd/MM/yyyy'),
        "pncbdateto":this.dataPipe.transform(this.pncbdateto,'dd/MM/yyyy'),
        "userlogin":this.userStorage.getUserName(),
        "page":"1",
        "rows":"10"
      }
      console.log(params);
    this.subscription = this.blacklistNcbService.getNCBEnquiry(params).subscribe(
      (data: any)=>{
        this.modelNcbEnquiry = ModelNcbEnquiry.parse(data.LIST_DATA);
        if(this.modelNcbEnquiry.length>0)
          this.totalRecords = Number(this.modelNcbEnquiry[0].TOTAL_ROWS?this.modelNcbEnquiry[0].TOTAL_ROWS:0);
        else
          this.totalRecords = 0;
        this.blacklistNcbService.setModelNcbEnquiry(this.modelNcbEnquiry);
      }
    );
  }

  loadNcbEnquiry(event)
  {
    console.log(event);
    let params=
    {

        "pcheckfor":this.pcheckfor,
        "pname":this.pname,
        "psurname":this.psurname,
        "ptradeid":this.ptradeid,
        "pref_no":this.pref_no,
        "pchb_no_reason":String(this.pchb_no_reason),
        "pchb_no_tracking":String(this.pchb_no_tracking),
        "pcheckdate":this.dataPipe.transform(this.pcheckdate,'dd/MM/yyyy'),
        "pcheckdateto":this.dataPipe.transform(this.pcheckdateto,'dd/MM/yyyy'),
        "pncbdate":this.dataPipe.transform(this.pncbdate,'dd/MM/yyyy'),
        "pncbdateto":this.dataPipe.transform(this.pncbdateto,'dd/MM/yyyy'),
        "userlogin":this.userStorage.getUserName(),
        "page":String(event.first/10+1),
        "rows":String(event.rows)
    }
    this.subscription = this.blacklistNcbService.getNCBEnquiry(params).subscribe(
      (data: any)=>{
        this.modelNcbEnquiry = ModelNcbEnquiry.parse(data.LIST_DATA);

        this.totalRecords = Number(this.modelNcbEnquiry[0].TOTAL_ROWS);
        console.log(this.totalRecords);
        this.blacklistNcbService.setModelNcbEnquiry(this.modelNcbEnquiry);
      }
    );
  }
}
