import { Component, OnInit } from '@angular/core';
import {ModelNcbScreen} from "./model/model_ncbscreen";
import {BlacklistNcbService} from "../../blacklist-ncb-service";
import {ModelNcbEnquiryCheckingFor} from "../../blacklist-ncb-enquiry/model/model_ncbenquirycheckingfor";
import {Subscription} from "rxjs/Subscription";
import {ModelNcbScreenStatus} from "./model/model_ncbscreen_status";
import {ModelNcbMkt} from "./model/model_ncbmkt";
import {ModelNcbBlResult} from "./model/model_ncbblresult";
import {ModelNcbEntCat} from "./model/model_ncbentcat";
import {ModelNcbResult} from "./model/model_ncbresult";
import {ModelNcbTracing} from "./model/model_ncbtracing";
import {ModelNcbBody} from "./model/model_ncbbody";
import {ModelNcbNewUsed} from "./model/model_ncbnewused";
import {ModelNcbRejectReason} from "./model/model_ncbrejectreason";

@Component({
  selector: 'app-blacklist-ncb-screen',
  templateUrl: './blacklist-ncb-screen.component.html'
})
export class BlacklistNcbScreenComponent implements OnInit {

  constructor(private blacklistNcbService: BlacklistNcbService) {
  }

  subscription: Subscription;
  subscriptionMkt: Subscription;
  subscriptionNcbResult: Subscription;
  subscriptionNcbRejectReason: Subscription;
  modelNcbScreen: ModelNcbScreen[] = [];
  modelNcbEnquiryCheckingFor: ModelNcbEnquiryCheckingFor[] = [];
  modelNcbScreenStatus:ModelNcbScreenStatus[]=[];
  modelNcbScreenAppStatus:ModelNcbScreenStatus[]=[];
  modelNcbBlResult:ModelNcbBlResult[]=[];
  modelNcbMkt:ModelNcbMkt[]=[];
  modelNcbEntCat:ModelNcbEntCat[]=[];
  modelNcbResult:ModelNcbResult[]=[];
  modelNcbTracing:ModelNcbTracing[]=[];
  modelNcbBody:ModelNcbBody[]=[];
  modelNcbNewUsed:ModelNcbNewUsed[]=[];
  modelNcbRejectReason:ModelNcbRejectReason[]=[];
  RUN_NO: string = "";
  CHECK_DT: Date;
  RECEIVE_DT: Date;
  ENT_TYPE: string = "";
  NAME: string = "";
  SURNAME: string = "";
  MKTSELECT :string="";
  CARD_ID: string = "";
  OTH_ID: string = "";
  BIRTH_DT: Date;
  MKT: string = "";
  BL_RESULT: string = "";
  NCB_CD: string = "";
  NCB_RPT: string = "";
  TRACING: string = "";
  UPDATE_BY: string = "";
  FIN_AMT: string = "";
  BDY: string = "";
  NEW_TR: string = "";
  REJECT_CD: string = "";
  DOWN_PCNT: string = "";
  REJECT_OTH: string = "";
  INFORM_MKT_FLG: boolean = false;
  CHECK_FOR: string = "";
  APP_ENT_TYPE: string = "";
  OCCP: string = "";
  FILE_COMP_FLG: boolean = false;
  RMRK: string = "";
  REF_NCB: string = "";
  O_CUS_ASK_FLG: boolean = false;
  O_CUS_BGPL_FLG: boolean = false;
  O_GUA_ASK_FLG: boolean = false;
  O_GUA_BGPL_FLG: boolean = false;
  GUA_COOP_FLG: boolean = false;
  SENT_NCB_DT: boolean = false;
  RECEIVE_CONSENT_DT: boolean = false;
  ESTIMATE_DISB_DT: Date;
  ENT_CAT: string = "";
  MOBILE_SOURCE: string = "";
  TRACKING_ID: string = "";
  BODY_ASSET: string = "";
  RUNNO_PDF: string = "";
  appStatus:boolean=false;

  ngOnInit() {
    // this.getData();
    this.showData();

    this.appStatus = this.blacklistNcbService.getShowTodo();
    if(!this.appStatus)
    {
      this.appStatus=true;
    }
    else{
      this.appStatus=false;
    }
  }

  showData()
  {
    this.getCheckingFor();
    this.getStatus();
    this.getAppStatus();
    this.getNcbMkt();
    this.getNcbBlResult();
    this.getNcbEntCat();
    this.getNcbResult();
    this.getNcbTracing();
    this.getNcbBody();
    this.getNcbNewUsed();
    this.getNcbRejectReason();
  }

  getNcbEntCat()
  {
    this.modelNcbEntCat = this.blacklistNcbService.getModelNcbEntCat();
    for(let i=0;i<this.modelNcbEntCat.length;i++)
    {
      if(this.ENT_CAT == this.modelNcbEntCat[i].VALUES)
      {
        this.ENT_CAT = this.modelNcbEntCat[i].CAPTION;
      }
    }
  }

  getNcbBlResult()
  {
    this.modelNcbBlResult = this.blacklistNcbService.getModelNcbBlResult();
    for(let i=0;i<this.modelNcbBlResult.length;i++)
    {
      if(this.BL_RESULT == this.modelNcbBlResult[i].VALUES)
      {
         this.BL_RESULT = this.modelNcbBlResult[i].CAPTION;
      }
    }
  }

  getNcbResult()
  {
    this.subscriptionNcbResult = this.blacklistNcbService.getNCBResult().subscribe(
      (data: any)=>{
        this.modelNcbResult = ModelNcbResult.parse(data.LIST_DATA);
        for(let i=0;i<this.modelNcbResult.length;i++)
        {
          if(this.modelNcbResult[i].REMARK == this.NCB_CD && this.modelNcbResult[i].COL_10 == this.NCB_RPT)
          {
            this.NCB_CD = this.modelNcbResult[i].REMARK;
          }
        }
      }
    );
  }

  getNcbRejectReason()
  {
    this.subscriptionNcbRejectReason = this.blacklistNcbService.getNCBRejectReason().subscribe(
      (data: any)=>{
        this.modelNcbRejectReason = ModelNcbRejectReason.parse(data.LIST_DATA);
        for(let i=0;i<this.modelNcbRejectReason.length;i++)
        {
          if(this.modelNcbRejectReason[i].ID_CODE == this.REJECT_CD)
          {
            this.REJECT_CD = this.modelNcbRejectReason[i].REMARK;
          }
        }
      }
    );
  }

  getStatus()
  {
    this.modelNcbScreenStatus = this.blacklistNcbService.getModelNcbScreenStatus();

  }

  getAppStatus()
  {
    this.modelNcbScreenAppStatus = this.blacklistNcbService.getModelNcbScreenStatus();
  }

  getNcbNewUsed()
  {
    this.modelNcbNewUsed = this.blacklistNcbService.getModelNcbNewUsed();
    for(let i=0;i<this.modelNcbNewUsed.length;i++)
    {
      if(this.NEW_TR == this.modelNcbNewUsed[i].VALUES)
      {
        this.NEW_TR = this.modelNcbNewUsed[i].CAPTION;
      }
    }
  }

  getNcbBody()
  {
    this.modelNcbBody = this.blacklistNcbService.getModelNcbBody();
    for(let i=0;i<this.modelNcbBody.length;i++)
    {
      if(this.BDY == this.modelNcbBody[i].VALUES)
      {
        this.BDY = this.modelNcbBody[i].CAPTION;
      }
    }
  }

  getNcbTracing()
  {
    this.modelNcbTracing = this.blacklistNcbService.getModelNcbTracing();
   // console.log(this.TRACING);
    for(let i=0;i<this.modelNcbTracing.length;i++)
    {
      if(this.TRACING == this.modelNcbTracing[i].VALUES)
      {
        this.TRACING = this.modelNcbTracing[i].CAPTION;
      }
    }

  }

  getNcbMkt()
  {
    let param;
    if(this.blacklistNcbService.getShowTodo())
    {
      param = "INSERT";
    }
    else{
      param = "UPDATE";
    }
   // console.log(param);

    this.MKTSELECT="";
    this.subscriptionMkt = this.blacklistNcbService.getNCBMkt(param).subscribe(
      (data: any)=>{
        this.modelNcbMkt = ModelNcbMkt.parse(data.LIST_DATA);
       // console.log(this.MKTSELECT);

        for(let i=0;i<this.modelNcbMkt.length;i++)
        {
          //console.log( i+1 + ' : ' +  this.MKT + ' - ' + this.modelNcbMkt[i].CODE);
          if(this.MKT == this.modelNcbMkt[i].CODE)
          {
           // console.log(i+'    '+this.modelNcbMkt[i].FULL_NAMET);
            this.MKTSELECT = this.modelNcbMkt[i].FULL_NAMET;
          }
        }

      }
    );



  }


  getCheckingFor()
  {
    this.subscription = this.blacklistNcbService.getNCBEnquiryCheckingFor().subscribe(
      (data: any)=>{
        this.modelNcbEnquiryCheckingFor = ModelNcbEnquiryCheckingFor.parse(data.LIST_DATA);
        this.modelNcbEnquiryCheckingFor.splice(0, 1);
        this.blacklistNcbService.setModelNcbEnquiryCheckingFor(this.modelNcbEnquiryCheckingFor);
      }
    );
  }

  getData()
  {
    this.getStatus();
    this.getAppStatus();
    this.modelNcbScreen = this.blacklistNcbService.getModelNcbScreen();
    this.RUN_NO=this.modelNcbScreen[0].RUN_NO;
    if(this.modelNcbScreen[0].CHECK_DT!="-")
      this.CHECK_DT=new Date(this.modelNcbScreen[0].CHECK_DT);
    if(this.modelNcbScreen[0].RECEIVE_DT!="-")
      this.RECEIVE_DT=new Date(this.modelNcbScreen[0].RECEIVE_DT)
    this.ENT_TYPE=this.modelNcbScreen[0].ENT_TYPE;
    this.NAME=this.modelNcbScreen[0].NAME;
    this.SURNAME=this.modelNcbScreen[0].SURNAME;
    this.CARD_ID=this.modelNcbScreen[0].CARD_ID;
    this.OTH_ID=this.modelNcbScreen[0].OTH_ID;
    if(this.modelNcbScreen[0].BIRTH_DT!="-")
      this.BIRTH_DT=new Date(this.modelNcbScreen[0].BIRTH_DT);
    this.MKT=this.modelNcbScreen[0].MKT;
    this.BL_RESULT=this.modelNcbScreen[0].BL_RESULT;
    this.NCB_CD=this.modelNcbScreen[0].NCB_CD;
    this.NCB_RPT=this.modelNcbScreen[0].NCB_RPT;
    this.TRACING=this.modelNcbScreen[0].TRACING;
    this.UPDATE_BY=this.modelNcbScreen[0].UPDATE_BY;
    this.FIN_AMT=this.modelNcbScreen[0].FIN_AMT;
    this.BDY=this.modelNcbScreen[0].BDY;
    this.NEW_TR=this.modelNcbScreen[0].NEW_TR;
    this.REJECT_CD=this.modelNcbScreen[0].REJECT_CD;
    this.DOWN_PCNT=this.modelNcbScreen[0].DOWN_PCNT;
    this.REJECT_OTH=this.modelNcbScreen[0].REJECT_OTH;
    this.INFORM_MKT_FLG=this.modelNcbScreen[0].INFORM_MKT_FLG=="-"?false:true;
    this.CHECK_FOR=this.modelNcbScreen[0].CHECK_FOR;
    this.APP_ENT_TYPE=this.modelNcbScreen[0].APP_ENT_TYPE;
    this.OCCP=this.modelNcbScreen[0].OCCP;
    this.FILE_COMP_FLG=this.modelNcbScreen[0].FILE_COMP_FLG.toUpperCase()=="Y"?false:true;
    this.RMRK=this.modelNcbScreen[0].RMRK;
    this.REF_NCB=this.modelNcbScreen[0].REF_NCB;
    this.O_CUS_ASK_FLG=this.modelNcbScreen[0].O_CUS_ASK_FLG=="-"?false:true;
    this.O_CUS_BGPL_FLG=this.modelNcbScreen[0].O_CUS_BGPL_FLG=="-"?false:true;
    this.O_GUA_ASK_FLG=this.modelNcbScreen[0].O_GUA_ASK_FLG=="-"?false:true;
    this.O_GUA_BGPL_FLG=this.modelNcbScreen[0].O_GUA_BGPL_FLG=="-"?false:true;
    this.GUA_COOP_FLG=this.modelNcbScreen[0].GUA_COOP_FLG=="-"?false:true;
    this.SENT_NCB_DT=this.modelNcbScreen[0].SENT_NCB_DT=="-"?true:false;
    this.RECEIVE_CONSENT_DT=this.modelNcbScreen[0].RECEIVE_CONSENT_DT=="-"?true:false;
    if(this.modelNcbScreen[0].ESTIMATE_DISB_DT!="-")
      this.ESTIMATE_DISB_DT=new Date(this.modelNcbScreen[0].ESTIMATE_DISB_DT);
    this.ENT_CAT=this.modelNcbScreen[0].ENT_CAT;
    this.MOBILE_SOURCE=this.modelNcbScreen[0].MOBILE_SOURCE;
    this.TRACKING_ID=this.modelNcbScreen[0].TRACKING_ID;
    this.BODY_ASSET=this.modelNcbScreen[0].BODY_ASSET;
    this.RUNNO_PDF=this.modelNcbScreen[0].RUNNO_PDF;
    //console.log(this.ENT_TYPE);
    for(let i=0;i<this.modelNcbScreenStatus.length;i++)
    {
      if(this.ENT_TYPE == this.modelNcbScreenStatus[i].VALUES)
      {
        this.ENT_TYPE = this.modelNcbScreenStatus[i].CAPTION;
      }
    }

    for(let i=0;i<this.modelNcbScreenAppStatus.length;i++)
    {
      if(this.APP_ENT_TYPE == this.modelNcbScreenAppStatus[i].VALUES)
      {
        this.APP_ENT_TYPE = this.modelNcbScreenAppStatus[i].CAPTION;
      }
    }
  //  this.ENT_TYPE="G";
  //  this.NAME = "TEST";
    //console.log(this.NAME);

    //console.log(this.ENT_TYPE);
  }
}
