import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BlacklistNcbService} from "../blacklist-ncb-service";
import {BlacklistNcbImagesComponent} from "./blacklist-ncb-images/blacklist-ncb-images.component";
import {BlacklistNcbScreenComponent} from "./blacklist-ncb-screen/blacklist-ncb-screen.component";
import {BlacklistNcbPdfComponent} from "./blacklist-ncb-pdf/blacklist-ncb-pdf.component";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-blacklist-ncb',
  templateUrl: './blacklist-ncb.component.html'
})
export class BlacklistNcbComponent implements OnInit, OnDestroy {

  constructor(private blacklistNcbService: BlacklistNcbService,
              private userStorage:UserStorage,
              private dataPipe:DatePipe
              ) {
  }

  @ViewChild("blacklistNcbImagesComponent") blacklistNcbImagesComponent: BlacklistNcbImagesComponent;
  @ViewChild("blacklistNcbScreenComponent") blacklistNcbScreenComponent: BlacklistNcbScreenComponent;
  @ViewChild("blacklistNcbPdfComponent") blacklistNcbPdfComponent: BlacklistNcbPdfComponent;
  showTodo: boolean = true;

  ngOnInit() {
    this.showTodo = this.blacklistNcbService.getShowTodo();
    if (!this.showTodo) {
      this.showData();
    }
  }

  ngOnDestroy() {
    this.blacklistNcbService.setShowTodo(true);
  }

  showData() {
    //console.log("testtttt");
    this.showScreen();
    this.showListImage();
    this.showPDF();
    this.blacklistNcbScreenComponent.showData();
  }

  handleTabChange(evt) {
    //console.log(evt);
    if (evt.index == 1) {
      this.showListImage();
    }
  }

  showPDF() {
    this.blacklistNcbPdfComponent.showListPDF();
  }

  showScreen() {
    this.blacklistNcbScreenComponent.getData();
  }

  showListImage() {
    // console.log("test");
    this.blacklistNcbImagesComponent.showListImage();
  }

  ncbSave() {
    let typeSql;
    if (!this.showTodo) {
      typeSql = "UPDATE";
    }
    else {
      typeSql = "INSERT";
    }

    let json = {
      "pNotSendNCB": this.blacklistNcbScreenComponent.SENT_NCB_DT,
      "pType_SQL":typeSql,
      "pSENT_NCB_DT":this.blacklistNcbScreenComponent.modelNcbScreen[0].SENT_NCB_DT!='-'?this.dataPipe.transform(this.blacklistNcbScreenComponent.modelNcbScreen[0].SENT_NCB_DT,'dd/MM/yyyy'):"",
      "pNotReceiveConsent":this.blacklistNcbScreenComponent.RECEIVE_CONSENT_DT,
      "pRECEIVE_CONSENT_DT":this.blacklistNcbScreenComponent.modelNcbScreen[0].RECEIVE_CONSENT_DT!='-'?this.blacklistNcbScreenComponent.modelNcbScreen[0].RECEIVE_CONSENT_DT:"",
      "pInformMKT":this.blacklistNcbScreenComponent.INFORM_MKT_FLG,
      "pCheckDate":this.blacklistNcbScreenComponent.CHECK_DT?this.dataPipe.transform(this.blacklistNcbScreenComponent.CHECK_DT,'dd/MM/yyyy'):'',
      "pReceiveDate":this.blacklistNcbScreenComponent.RECEIVE_DT?this.dataPipe.transform(this.blacklistNcbScreenComponent.RECEIVE_DT,'dd/MM/yyyy'):'',
      "pEst_Disb_Date":this.blacklistNcbScreenComponent.ESTIMATE_DISB_DT?this.dataPipe.transform(this.blacklistNcbScreenComponent.ESTIMATE_DISB_DT,'dd/MM/yyyy'):"",
      "pHBD":this.blacklistNcbScreenComponent.BIRTH_DT?this.dataPipe.transform(this.blacklistNcbScreenComponent.BIRTH_DT,'dd/MM/yyyy'):'',
      "pChB_FileNotCom":this.blacklistNcbScreenComponent.FILE_COMP_FLG,
      "pChB_Old_ASK_Cus":this.blacklistNcbScreenComponent.O_CUS_ASK_FLG,
      "pChB_Old_BG_Cus":this.blacklistNcbScreenComponent.O_CUS_BGPL_FLG,
      "pChB_Old_ASK_Gua":this.blacklistNcbScreenComponent.O_GUA_ASK_FLG,
      "pChB_Old_BG_Gua":this.blacklistNcbScreenComponent.O_GUA_BGPL_FLG,
      "pChB_GuaOfCoop":this.blacklistNcbScreenComponent.GUA_COOP_FLG,
      "pTradeID":this.blacklistNcbScreenComponent.CARD_ID!='-'?this.blacklistNcbScreenComponent.CARD_ID:"",
      "pOtherID":this.blacklistNcbScreenComponent.OTH_ID!='-'?this.blacklistNcbScreenComponent.OTH_ID:"",
      "pPostValue":this.blacklistNcbScreenComponent.RUN_NO!='-'?this.blacklistNcbScreenComponent.RUN_NO:"",
      "pCheckFor":this.blacklistNcbScreenComponent.CHECK_FOR!='-'?this.blacklistNcbScreenComponent.CHECK_FOR:"",
      "pUserLogin":this.userStorage.getUserName(),
      "pStatus":this.blacklistNcbScreenComponent.ENT_TYPE?this.blacklistNcbScreenComponent.modelNcbScreenStatus.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.ENT_TYPE).VALUES:"",
      "pENT_CAT":this.blacklistNcbScreenComponent.modelNcbEntCat.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.ENT_CAT)?this.blacklistNcbScreenComponent.modelNcbEntCat.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.ENT_CAT).VALUES:"",
      "pName":this.blacklistNcbScreenComponent.NAME!='-'?this.blacklistNcbScreenComponent.NAME:"",
      "pSurName":this.blacklistNcbScreenComponent.SURNAME!='-'?this.blacklistNcbScreenComponent.SURNAME:"",
      "pMKTCode":this.blacklistNcbScreenComponent.MKT!='-'?this.blacklistNcbScreenComponent.MKT:"",
      "pBL_Result":this.blacklistNcbScreenComponent.BL_RESULT?this.blacklistNcbScreenComponent.modelNcbBlResult.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.BL_RESULT).VALUES:"",
      "pNCBRemark":this.blacklistNcbScreenComponent.NCB_CD!='-'?this.blacklistNcbScreenComponent.NCB_CD:"",
      "pNCBCOL_10":this.blacklistNcbScreenComponent.NCB_RPT!='-'?this.blacklistNcbScreenComponent.NCB_RPT:"",
      "pUserLoginCode":this.userStorage.getCode(),
      "pTracing":this.blacklistNcbScreenComponent.TRACING?this.blacklistNcbScreenComponent.modelNcbTracing.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.TRACING).VALUES:"",
      "pFin_AMT":this.blacklistNcbScreenComponent.FIN_AMT,
      "pBody":this.blacklistNcbScreenComponent.BDY?this.blacklistNcbScreenComponent.modelNcbBody.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.BDY).VALUES:"",
      "pNew_Used":this.blacklistNcbScreenComponent.NEW_TR?this.blacklistNcbScreenComponent.modelNcbNewUsed.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.NEW_TR).VALUES:"",
      "pRejectReasonID_CODE":this.blacklistNcbScreenComponent.REJECT_CD?this.blacklistNcbScreenComponent.modelNcbRejectReason.find(i=>i.REMARK == this.blacklistNcbScreenComponent.REJECT_CD).ID_CODE:"",
      "pDown":this.blacklistNcbScreenComponent.DOWN_PCNT!='-'?this.blacklistNcbScreenComponent.DOWN_PCNT:"",
      "pOther":this.blacklistNcbScreenComponent.OTH_ID!='-'?this.blacklistNcbScreenComponent.OTH_ID:"",
      "pRemark":this.blacklistNcbScreenComponent.RMRK!='-'?this.blacklistNcbScreenComponent.RMRK:"",
      "pOcc":this.blacklistNcbScreenComponent.OCCP!='-'?this.blacklistNcbScreenComponent.OCCP:"",
      "pTracking":this.blacklistNcbScreenComponent.TRACKING_ID!='-'?this.blacklistNcbScreenComponent.TRACKING_ID:"",
      "pBODY_ASSET":this.blacklistNcbScreenComponent.BODY_ASSET!='-'?this.blacklistNcbScreenComponent.BODY_ASSET:"",
      "pRunnoPDF":this.blacklistNcbScreenComponent.RUNNO_PDF!='-'?this.blacklistNcbScreenComponent.RUNNO_PDF:"",
      "pNCRS_SentDt":this.blacklistNcbScreenComponent.SENT_NCB_DT,
      "pApp_Sta":this.blacklistNcbScreenComponent.APP_ENT_TYPE?this.blacklistNcbScreenComponent.modelNcbScreenStatus.find(i=>i.CAPTION == this.blacklistNcbScreenComponent.APP_ENT_TYPE).VALUES:""

    }
    this.blacklistNcbService.applyNCB(json).subscribe(
      (data: any)=>{
        let msgApplyNCB = data;
      //  console.log(msgApplyNCB);
      }
    );
 //   console.log(json);
  }
}
