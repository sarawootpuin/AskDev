import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {VerificationDetailService} from "../verification-detail.service";
import {ScrSubjModel} from "../../model/scrsubject.model";
import {MainTabModel} from "../../model/mainTab.model";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {AlertDialogComponent} from "../../../../shared/center/alert-dialog/alert-dialog.component";
import {ActionDialogComponent} from "../../../../shared/center/action-dialog/action-dialog.component";
import {StringUtils} from "../../../../shared/config/string-utils";
import {ModelNcbImage} from "../../../blacklist/blacklist-ncb/blacklist-ncb-images/model/modelNcbImage";
import {BlacklistNcbService} from "../../../blacklist/blacklist-ncb-service";
import {ScrVerifyHistoryComponent} from "../../scr-verify-history/scr-verify-history.component";

@Component({
  selector: 'app-header-verification-detail',
  templateUrl: './header-verification-detail.component.html',
  styleUrls: ['./header-verification-detail.component.css']
})
export class HeaderVerificationDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionSave: Subscription;
  subscriptionDelete: Subscription;
  subscriptionSubmit: Subscription;
  subscriptionRetry: Subscription;
  mainTab: MainTabModel;
  listQuestionTab: ScrSubjModel[] = [];
  idxTab: number;
  alertScrCorp: boolean = false;
  alertVerifyHist: boolean = false;
  alertCreditScoringHist: boolean = false;
  idxHeaderTab: number;
  idxSubHeaderTab: number;
  resultGrade: String;
  tempPmtGrdngAgrCode: string = '';
  tempPmntGrdng: string = '';
  tempPmntGrdngAsOf: string = '';
  tempPrimScrResult: string = '';
  tempPrimScr: string = '';
  checkReadOnly :Boolean;
  checkEnquiry:Boolean;
  strConfirmDialog :string = '';
  actionType:string = '';
  isWarning : Boolean;
  @Output("onTabNameChange") onTabNameChange: EventEmitter<string> = new EventEmitter();
  @ViewChild('dialogHeaderVerify') dialogHeaderVerify: AlertDialogComponent;
  @ViewChild('creditScoringHistoryDialog') creditScoringHistoryDialog: ActionDialogComponent;
  @ViewChild('verifyHistoryDialog') verifyHistoryDialog: ActionDialogComponent;
  @ViewChild('decisionGradeDialog') decisionGradeDialog: ActionDialogComponent;
  @ViewChild('paymentGradeDialog') paymentGradeDialog: ActionDialogComponent;
  @ViewChild('scrCorpDialog') scrCorpDialog: ActionDialogComponent;
  @ViewChild('dialogConfirm') dialogConfirm: AlertDialogComponent;
  @ViewChild("scrVerifyHistory") scrVerifyHistory:ScrVerifyHistoryComponent;
  modelNcbImage: ModelNcbImage[]=[];

  constructor(private router: Router, private verficationDetailService: VerificationDetailService
    , private datePipe: DatePipe,private stringUtils:StringUtils,private blacklistNcbService:BlacklistNcbService) {

  }

  ngOnInit() {
    this.checkReadOnly = this.verficationDetailService.checkReadOnly;
    this.checkEnquiry  = this.verficationDetailService.checkEnquiry;
    this.verficationDetailService.eventTabMain.subscribe(
      (obj: MainTabModel) => {
        this.checkEnquiry = this.verficationDetailService.checkEnquiry;
        this.checkReadOnly = this.verficationDetailService.checkReadOnly;
        this.mainTab = obj;
        this.scrVerifyHistory.getInitData(this.mainTab.ref_no,this.mainTab.com_code);
      }
    );
    this.verficationDetailService.eventResultGrade.subscribe(
      (obj: String) => {
        this.resultGrade = obj;
      }
    );
    this.verficationDetailService.eventIdxTab.subscribe(
      (obj: number) => {
        this.idxTab = obj;
      }
    );
    this.verficationDetailService.eventListQuestionTab.subscribe(
      (obj: ScrSubjModel[]) => {
        this.listQuestionTab = obj;

      }
    );
    this.verficationDetailService.refreshData();
  }

  setTabId(idx: number) {
    //cal grand total score in page
    this.idxTab = idx;
    this.verficationDetailService.setIdxCalScore(idx);
  }

  onCalScoreClick() {
    this.verficationDetailService.calScoringAllPage();
  }

  onSaveClick() {
    let msgValidate = this.verficationDetailService.validateDataSave();
    if (msgValidate == "Complete") {
      this.subscriptionSave = this.verficationDetailService.onSaveScoring().subscribe(
        (data: any) => {
          if (data.MSG == "Complete") {
            this.setAlertDialog('INFORMATION',"Save Complete");
          }
          else{
            this.setAlertDialog('ERROR',data.MSG);
          }
        },
        (error: any) => {
            this.setAlertDialog('ERROR',error);
        }
      );
    }
    else {
      this.isWarning = true;
      this.setAlertDialog('WARNING',msgValidate)
    }
  }

  onDeleteClick() {
    // Please Confirm to Delete
    this.subscriptionDelete = this.verficationDetailService.onDeleteScoring().subscribe(
      (data: any) => {
        if (data.MSG == "Complete") {
         this.setAlertDialog('INFORMATION',"Cancel Complete");
        }
      },
      (error: any) => {
        this.setAlertDialog('ERROR',error);
      }
    );
  }

  onChangeHeaderTab(e) {
    //fix sub tab
    let idxHaveSubHeaderTab = 2;
    let numSubHeaderTab = 5;
    this.idxHeaderTab = e.index;
   console.log(e.index);

    if ((this.idxHeaderTab > idxHaveSubHeaderTab) && (this.idxHeaderTab < 6)) {
      this.idxHeaderTab = this.idxHeaderTab + numSubHeaderTab;
    }

    if (this.idxHeaderTab === 0) {
      this.onTabNameChange.emit('main');
    }
    else if (this.idxHeaderTab === 6){
      this.onTabNameChange.emit('img');
    }
    else {
      this.setTabId(this.idxHeaderTab - 1);
      this.onTabNameChange.emit('question');
    }

  }

  onChangeSubHeaderTab(e) {

    this.idxSubHeaderTab = e.index;
    this.setTabId((this.idxHeaderTab + this.idxSubHeaderTab) - 1);
    this.onTabNameChange.emit('question');
  }

  onSavePaymentGrade() {
    if ((this.tempPmtGrdngAgrCode) && (this.tempPmntGrdng) && (this.tempPmntGrdngAsOf)) {
      this.mainTab.pmnt_grdng_agr_code = this.tempPmtGrdngAgrCode;
      this.mainTab.pmnt_grdng = this.tempPmntGrdng;
      this.mainTab.pmnt_grdng_asof = this.tempPmntGrdngAsOf;
      this.verficationDetailService.setMainTab(this.mainTab);
      this.paymentGradeDialog.close();
    }
    else {
      this.isWarning = true;
      this.setAlertDialog('WARNING',"กรุณาใส่ข้อมูลให้ครบถ้วน");
    }
  }

  showDialogPaymentGrade() {
    this.tempPmtGrdngAgrCode = this.mainTab.pmnt_grdng_agr_code;
    this.tempPmntGrdng = this.mainTab.pmnt_grdng;
    this.tempPmntGrdngAsOf = this.mainTab.pmnt_grdng_asof;
    // this.alertPayment = true;
    this.paymentGradeDialog.open();

  }

  onSaveDecisionGrade() {
    if(this.verficationDetailService.IsGrade(this.tempPrimScr))
    {
      this.mainTab.prim_scr = this.tempPrimScr;
      this.mainTab.prim_scr_rsult = this.tempPrimScrResult;
      // this.alertDecision = !this.alertDecision;
      this.decisionGradeDialog.close();
    }
    else {
      this.isWarning = true;
      this.setAlertDialog("WARNING","กรุณาใส่เกรดตามที่ Policy ได้ระบุไว้")
    }

  }


  showDialogDecisionGrade() {
    let msgValidate = this.verficationDetailService.validateDialogDecisionGrade();
    if (msgValidate == "Complete") {
      this.tempPrimScr = this.mainTab.prim_scr;
      this.tempPrimScrResult = this.mainTab.prim_scr_rsult;
      // this.alertDecision = true;
      this.decisionGradeDialog.open();
    }
    else {
       this.setAlertDialog('WARNING',msgValidate);
    }
  }

  showDialogCorp() {
    this.verficationDetailService.eventCopyQuestionTab.emit(true);
    // this.alertScrCorp = true;
    this.scrCorpDialog.open();
  }
  onCloseAlertScrCorp(){
    // this.alertScrCorp=!this.alertScrCorp;
    this.scrCorpDialog.close();
    this.verficationDetailService.eventCopyQuestionTab.emit(true);
  }

  onShowDialogVerifyHist() {
    this.alertVerifyHist = true;
  }

  onCloseDialogVerifyHist(){
    this.alertVerifyHist=!this.alertVerifyHist;
  }

  onShowDialogCreditScoringHist() {
    this.alertCreditScoringHist = true;
  }

  onCloseDialogCreditScoringHist(){
    this.alertCreditScoringHist=!this.alertCreditScoringHist;
  }

  onChangedate(indate: any) {
    let strDate = this.datePipe.transform(indate, 'dd/MM/yyyy');
    return strDate;

  }
  clickVerifyHistory(){
    this.verifyHistoryDialog.open();
  }


  // Mos //
  clickCreditScoringHistory(){
    this.verficationDetailService.setTabMainTemp(this.mainTab);
    this.creditScoringHistoryDialog.open();
  }

  selectCreditScoringHistory(){
    this.verficationDetailService.clickCreditScoringHistory(true);
  }


  submitClick() {
    let msgValidate =this.verficationDetailService.validateDataSubmit();
    if (msgValidate =="Complete")
    {
      this.subscriptionSubmit = this.verficationDetailService.onSubmitScoring().subscribe(
        (data: any) => {

          if (data.MSG == "Complete") {
            if (this.mainTab.stg_id == '4') {this.setAlertDialog('INFORMATION',"Sumit Complete")}
            else {this.setAlertDialog('INFORMATION',"Send To: "+data.DATA.VER_NAME)}
          }
        },
        (error: any) => {
          this.setAlertDialog('ERROR',error)
        }
      );

    }
    else{
      this.isWarning = true;
      this.setAlertDialog('WARNING',msgValidate)
    }
  }

  retryClick() {
    this.subscriptionRetry = this.verficationDetailService.onRetryScoring().subscribe(
      (data: any) => {

        if(data.MSG == "Complete")
        {
          this.setAlertDialog('INFORMATION',"Send To: "+data.DATA.VER_NAME);
        }
      },
      (error: any) => {
        this.setAlertDialog('ERROR',error);
      }
    );
  }

  onConfirmDialogCancel(){
    this.actionType='CANCEL';
    this.strConfirmDialog =this.stringUtils.TitleDialog.CANCEL;
    this.onConfirmDialog();
  }

  onConfirmDialogSave(){
    this.actionType='SAVE';
    this.strConfirmDialog =this.stringUtils.TitleDialog.SAVE;
    this.onConfirmDialog();
  }

  onConfirmDialogSubmit(){
    this.actionType='SUBMIT';
    this.strConfirmDialog =this.stringUtils.TitleDialog.SUBMIT;
    this.onConfirmDialog();
  }

  onConfirmDialogReject(){
    this.actionType='REJECT';
    this.onConfirmDialog();
  }

  onConfirmDialog(){
    this.dialogConfirm.setAction(this.actionType);
    this.dialogConfirm.open();
  }
  onClickCloseConfirmDialog(){
    this.dialogConfirm.close();
  }
  onCallAction(){
    this.isWarning=false;
    if (this.actionType == 'SAVE') {
      this.onSaveClick();
    }
    else if (this.actionType == 'CANCEL') {
      this.onDeleteClick();
    }
    else if (this.actionType == 'SUBMIT') {
      this.submitClick();
    }
    else if (this.actionType == 'REJECT') {
      this.retryClick();
    }
  }
  onCloseDialogHeaderVerify(){
    // if ((this.actionType != 'save') && (this.isWarning == false)){}
      if (this.isWarning == false) {
        console.log('inlooop');
        window.scrollTo(0,0);
        setTimeout(()=>{
        this.router.navigate(['/home']);
        },200);
      }
  }

  setAlertDialog(action:string,msg:string){
    this.dialogHeaderVerify.setAction(action);
    this.dialogHeaderVerify.setMessage(msg);
    this.dialogHeaderVerify.open();
  }

  ngOnDestroy() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionSave != null) {
      this.subscriptionSave.unsubscribe();
    }
    if (this.subscriptionDelete != null) {
      this.subscriptionDelete.unsubscribe();
    }

    if (this.subscriptionSubmit != null) {
      this.subscriptionSubmit.unsubscribe();
    }
    if (this.subscriptionRetry != null) {
      this.subscriptionRetry.unsubscribe();
    }

  }



}
