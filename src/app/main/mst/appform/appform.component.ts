import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {AppFormService} from "./appform.service";
import {getDataAppForm} from "./model/getDataAppForm";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ListAnswer} from "./model/getListAnswer";
import {ApplyEmit} from "./model/applyEmit";
import {AppFormNew} from "./model/appFormNew";
import {AppFormRenew} from "./model/appFormRenew";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ProductNewRenew} from "./model/productNewRenew";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {DateUtils} from "../../../shared/center/utils/date-utils";
import {ListBuyer} from "./model/getDataBuyer";
import {ReturnSave} from "./model/returnSave";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {ActionDialogComponent} from "../../../shared/center/action-dialog/action-dialog.component";
import {ListDetail} from "./model/getDataDetail";
import {SideTabComponent} from "../../../shared/center/side-tab/side-tab.component";
import {BlShareCenterService} from "../../blacklist/blacklist-share-center/blacklist-share-center-service";
import {ApplyNewService} from "./applysalecall/applysalecall.service";
import {ExposureService} from "./exposure/exposure.service";
import {Subscription} from "rxjs/Subscription";

declare var $: any;

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  providers: [AppFormService, ExposureService, ApplyNewService]
})
export class AppFormComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionSave : Subscription;
  subscriptionAnswer : Subscription;
  subscriptionIrr: Subscription;
  subscriptionReason : Subscription;
  typeBeforeSave: string;
  com_code: string;
  ap_no: string;
  action: string;
  listJointSeller: ListAnswer[] = [];
  listIntro: ListAnswer[] = [];
  listAnalyst: ListAnswer[] = [];
  listAnalystLeader: ListAnswer[] = [];
  appFormNew: AppFormNew;
  appFormRenew: AppFormRenew;
  applyEmit: ApplyEmit = new ApplyEmit();
  productNewRenew: ProductNewRenew[];
  confirmMsg: string[];
  returnSave: ReturnSave;
  checkLoader: boolean = false;
  disabled: string = 'N';
  task: string;
  taskCode: string;
  comment: string;
  approvePerson: string;
  openTab: string = 'Customer';
  subParams: Subscription;
  isLoading: boolean = true;
  inquiry: boolean = false;

  @ViewChild('confirmDialog') confirmDialog: ActionDialogComponent;
  @ViewChild('newRenewDialog') newRenewDialog: ActionDialogComponent;
  @ViewChild('alertDialog') alertDialog: AlertDialogComponent;
  @ViewChild('saveDialog') saveDialog: AlertDialogComponent;
  @ViewChild('alertWarning') alertWarning: AlertDialogComponent;
  @ViewChild('analyst') analyst: ElementRef;
  @ViewChild('warningBlacklist') warningBlacklist: AlertDialogComponent;
  @ViewChild('warningGuarantor') warningGuarantor: AlertDialogComponent;
  @ViewChild('caApproveDialog') caApproveDialog: ActionDialogComponent;
  @ViewChild('sideTabComponent') sideTabComponent: SideTabComponent;
  @ViewChild('blackListDialog') blackListDialog: ActionDialogComponent;


  constructor(private appFormService: AppFormService,
              private Route: ActivatedRoute,
              private user: UserStorage,
              private dateUtils: DateUtils,
              private router: Router,
              private serviceEndPoint: ServiceEndpoint,
              private blShareCenterService: BlShareCenterService) {

    this.com_code = this.Route.snapshot.queryParams['com_code'];
    this.ap_no = this.Route.snapshot.queryParams['ap_no'];
    this.applyEmit.type = this.Route.snapshot.queryParams['type'];
    if (!this.applyEmit.type) {
      this.applyEmit.type = '';
    }
    this.taskCode = this.Route.snapshot.queryParams['taskCode'];
  }

  ngOnInit() {
    // Note // Send Sbu_Type & Type For Use Model Same As Apply New And Apply Renew And Apply Renew Old // Send But Don't Use //

    this.approvePerson = this.user.getUserName();
    this.task = "Reject";

    this.appFormService.getProductNewRenew(this.applyEmit.type).subscribe(
      (data: any) => {
        if (data.MSG == "Complete") {
          this.productNewRenew = ProductNewRenew.parse(data.LIST_DATA);
        }
      }
    );
    this.subParams = this.Route.queryParams.subscribe(
      (params: Params) => {
        this.ap_no = params['ap_no'];
        this.com_code = params['com_code'];
        this.applyEmit.type = params['type'];
        if (!this.applyEmit.type) {
          this.applyEmit.type = '';
        }
        this.taskCode = params['taskCode'];
        this.appFormService.clearData();
        this.data = new getDataAppForm();
        this.genDetailAppForm();
      }
    );

  }

  ngOnDestroy() {
    this.alertDialog.close();
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionIrr != null) {
      this.subscriptionIrr.unsubscribe();
    }
    if(this.subscriptionAnswer){
      this.subscriptionAnswer.unsubscribe()
    }
    if(this.subscriptionSave){
      this.subscriptionSave.unsubscribe()
    }
    if(this.subscriptionReason){
      this.subscriptionReason.unsubscribe
    }
  }

  jointChange(index) {
    if (index > -1) {
      this.data.joint_seller_group = this.listJointSeller[index].id_code;
      this.data.join_group_cr = this.listJointSeller[index].remark1;
    }
    else {
      this.data.joint_seller_group = '';
      this.data.join_group_cr = '';
    }
  }

  sourceChange() {
    this.data.intro_by = '';
    this.data.intro_by_name = '';
    this.controlIntro(this.data.intro_mthd_cd);
  }

  setIntroName(data: string) {
    this.data.intro_by_name = data;
  }

  setIntroValue(data: string) {
    this.data.intro_by = data;
  }

  analystLeaderChange(data: any) {
    this.data.verify_head = data;
    if (this.user.getCode() != this.data.verify_head) {
      this.data.verifier = '';
      if (this.data.verify_head) {
        this.analyst.nativeElement.disabled = true;
      }
      else {
        this.analyst.nativeElement.disabled = false;
      }
    }
    else {
      this.analyst.nativeElement.disabled = false;
    }
  }

  checkStep(subId: any): boolean {
    let result: boolean = true;
    let toTerm: number = 0, fromTerm: number = 0, term = Number(this.data.listDetail[subId-1].terms);
    let dataStep = this.data.listDetail[subId-1].listStep;
    let length = dataStep.length;
    for (let i = 0; i < dataStep.length; i++) {
      if (i == 0) {
        if (dataStep[i].from_term != '1') {
          this.alertWarning.addMessage('- First Step Must Be 1');
          result = false;
        }
      }
      if (Number(dataStep[i].from_term) == toTerm + 1) {
        if (dataStep[i].from_term > dataStep[i].to_term) {
          this.alertWarning.addMessage('- Number of Terms in Table incorrect');
          result = false;
        }
        if (toTerm >= dataStep[i].from_term) {
          this.alertWarning.addMessage('- Number of Terms in Table incorrect');
          result = false;
        }
      }
      else {
        this.alertWarning.addMessage('- Number of Terms in Table incorrect');
        result = false;
      }

      toTerm = Number(dataStep[i].to_term);
      fromTerm = Number(dataStep[i].from_term);

      if (i == length - 1) {
        if (dataStep[i].to_term != term) {
          this.alertWarning.addMessage('- Invalid Period');
          result = false;
        }
      }
    }
    return result;
  }

  checkSumStep(subId): boolean {
    let result = true;
    let sumInstallment: number = 0, term: number, finAmtEVat: number = this.data.listDetail[subId].fin_amt_e_vat;
    let dataStep = this.data.listDetail[subId].listStep;
    for (let data of dataStep) {
      term = Number(data.to_term) - Number(data.from_term) + 1;
      sumInstallment = sumInstallment + (term * Number(data.inst_e_vat));
    }
    if (sumInstallment < finAmtEVat) {
      result = false;
    }
    return result;
  }

  actionClick(action: string) {
    this.action = action;
    if ((this.action == 'Save' && this.applyEmit.type == '')
      || this.action == 'Reject' || this.action == 'Return'
      || this.action == 'Cancel') {
      this.comment = "";
      this.saveDialog.setAction(this.action.toUpperCase());
      this.saveDialog.open();
    }
    else if (this.action == 'Save' && this.applyEmit.type != '') {
      this.saveData();
    }
    else if (this.action == 'Submit') {
      let isPass: boolean;
      if (this.data.current_task == 'Apply AP' || this.data.current_task == 'Revise AP') {
        if (this.data.bl_flag == 'Y') {
          this.warningBlacklist.setAction("CUSTOM");
          this.warningBlacklist.setMessage("Blacklist Customer. confirmed to continue or not?");
          this.warningBlacklist.open();
        }
        else if (this.data.listGuarantor.length == 0) {
          this.warningGuarantor.setAction("CUSTOM");
          this.warningGuarantor.setMessage("No guarantor. Do you want to Add Guarantor?");
          this.warningGuarantor.open();
        }
        else {
          this.processBeforeSubmit();
        }
      }
      else {
        this.processBeforeSubmit();
      }
    }
  }

  calIrr() {
    let count: number = 0, length: number = this.data.listDetail.length;
    for (let detail of this.data.listDetail) {
      this.subscriptionIrr = this.appFormService.calculateIrr(detail.sub_id, detail.type_cal_pricing).subscribe(
        (data: any) => {
          //console.log(data);
          if (data.CODE == '200') {
            detail.gross_irr = data.LIST_DATA[0].grossIrr;
            detail.net_irr = data.LIST_DATA[0].netIrr;
            detail.net_irr_inc_deposit = data.LIST_DATA[0].netIrrIncDeposit;
            count++;
            if (count == length) {
              this.processSubmit();
            }
          }
        }
      )

    }
  }

  processBeforeSubmit() {
    let isPass = this.verifyBeforeSubmit();
    if (isPass) {
      if (this.data.sbu_typ != 'FDO') {
        this.calIrr();
      } else {
        this.processSubmit();
      }
    } else {
      this.alertWarning.setAction('WARNING');
      this.alertWarning.open();
    }
  }

  processSubmit() {
    this.saveDialog.setAction('SUBMIT');
    this.saveDialog.open();
  }

  verifyBeforeSubmit(): boolean {
    //console.log('verifyBeforeSubmit');
    this.alertWarning.list_msg = [];
    this.alertWarning.single = 0;
    if (this.data.current_task == 'Scoring Assign') {
      //console.log(this.data.verifier);
      if ((!this.data.verify_head || this.data.verify_head == '0000001364') && (!this.data.verifier)) {
        this.alertWarning.addMessage('- Please Assign Analyst Leader');
      }
      else if (this.data.verify_head == this.user.getCode()) {
        if (!this.data.verifier) {
          this.alertWarning.addMessage('- Please Assign Analyst Officer');
        }
      }
    }
    else if (this.data.current_task == 'Scoring') {
      if (!this.data.grade || !this.data.score) {
        this.alertWarning.addMessage('- Must Have Grade and Score');
      }
    }
    else if (this.data.current_task == 'Scoring Approve') {
      if (!this.data.rec_agr_flag) {
        this.alertWarning.addMessage('- Recommendation');
      }
      if (this.data.rec_agr_flag == 'AC' && !this.data.rec_cond.trim()) {
        this.alertWarning.addMessage('- Condition');
      }

      if(this.data.rec_agr_flag == 'AC' || this.data.rec_agr_flag == 'A') {
        if(!this.data.recAmount || this.data.recAmount == 0){
          this.alertWarning.addMessage('- Approve Amount');
        }
      }
    }
    else {
      if (this.data.sbu_typ == 'P') {
        let detailLoan: ListDetail = this.data.listDetail[0];
        if (!detailLoan.fin_amt_e_vat) {
          if (detailLoan.fin_amt_e_vat < 0) {
            this.alertWarning.addMessage('- Request Credit Line');
          }
        }
        if (!detailLoan.flat_rate) {
          if (detailLoan.fin_amt_e_vat < 0) {
            this.alertWarning.addMessage('- Interest Rate');
          }
        }
        if (!detailLoan.es_revenue) {
          if (detailLoan.es_revenue < 0) {
            this.alertWarning.addMessage('- Front end Fee');
          }
        }
        if (detailLoan.schedule == 'R' && !detailLoan.installment_e_vat) {
          this.alertWarning.addMessage('- Installment');
        }
        if (detailLoan.schedule == 'R' && ((detailLoan.installment_e_vat * detailLoan.terms) < detailLoan.fin_amt_e_vat)) {
          this.alertWarning.addMessage('- Installment * Term < Request Credit Line');
        }
        if (detailLoan.schedule == 'I' && detailLoan.listStep.length == 0) {
          this.alertWarning.addMessage('- Installment Step');
        }
        if (detailLoan.schedule == 'I' && !this.checkStep(1)) {

        }
        if (detailLoan.schedule == 'I' && !this.checkSumStep(0)) {
          this.alertWarning.addMessage('- Installment * Term < Request Credit Line');
        }
        if(this.dateUtils.compareDate(detailLoan.first,detailLoan.disburse_dt) == -1) {
        //if (detailLoan.first < detailLoan.disburse_dt) {
          this.alertWarning.addMessage('- First Due More than equal Disburse Date');
        }
        if (detailLoan.flat_rate > 15) {
          this.alertWarning.addMessage('- Interest Rate > 15');
        }
        if (this.alertWarning.list_msg.length <= 0) {

        }
      }
      else if (this.data.sbu_typ == 'FDO') {
        if (this.data.listPricing[0].credit_line_amt <= 0){
          this.alertWarning.addMessage('- Request Credit Line')
        }
        if (this.data.listBuyer.length == 0) {
          this.alertWarning.addMessage('- Must Have Buyer');
        }
        else {
          for (let buyer of this.data.listBuyer) {
            if (!buyer.app_type) {
              this.alertWarning.addMessage('- Application Type');
              break;
            }
            else if (!buyer.advance_ratio) {
              this.alertWarning.addMessage('- Advance Ratio @ Buyer : ' + buyer.buyer_name);
              break;
            }
            else if (!buyer.sub_line_amt) {
              this.alertWarning.addMessage('- Sub-Line Limit');
              break;
            }
            else if (!buyer.terms) {
              this.alertWarning.addMessage('- Payment Term');
              break;
            }
            else if (this.data.listPricing[0].factfee_type == '1') {
              if (!buyer.factoring_fee) {
                this.alertWarning.addMessage('- Factoring Fee');
                break;
              }
            }
          }
        }
      }
      else if (this.data.sbu_typ == 'HP' || this.data.sbu_typ == 'LS' || this.data.sbu_typ == 'HP/LS') {
        if (this.data.listDetail.length == 0) {
          this.alertWarning.addMessage('- Add CreditType');
        }
        else {
          for (let detail of this.data.listDetail) {
            if (!detail.fin_typ) {
              this.alertWarning.addMessage('- Add CreditType');
            }
            else if (!detail.sub_fin) {
              this.alertWarning.addMessage('- Add CreditType');
            }
            else if (detail.fin_typ == '2' && !detail.operating_lease) {
              this.alertWarning.addMessage('- Add CreditType');
            }

            if (!detail.asst_amt_e_vat) {
              this.alertWarning.addMessage('- Asset Price');
            }
            if (!detail.fin_amt_e_vat) {
              this.alertWarning.addMessage('- Financing Amount');
            }
            if (!detail.terms) {
              this.alertWarning.addMessage('- Terms');
            }
            if (!detail.gross_irr) {
              this.alertWarning.addMessage('- Gross IRR');
            }
            if (!detail.fin_asst) {
              this.alertWarning.addMessage('- Financing Asset');
            }
            if (!detail.disburse_dt) {
              this.alertWarning.addMessage('- Disburse Date');
            }
            if ((!detail.installment_e_vat || !detail.installment_i_vat) && detail.listStep.length == 0) {
              this.alertWarning.addMessage('- Installment');
            }

            if(detail.schedule == 'I'){
              this.checkStep(detail.sub_id);
              if(detail.type_cal_pricing == '1' || detail.type_cal_pricing == '2'){
                this.alertWarning.addMessage("- Step Installment Can't Calculated");
              }
            }
            if (this.alertWarning.list_msg.length > 0) {
              break;
            }
            else {
            }
          }
        }
      }
    }
    return this.alertWarning.list_msg.length > 0 ? false : true;
  }

  showReturnCase(returnCase) {
    this.returnSave = returnCase;
    this.ap_no = this.returnSave.apNo;
    this.com_code = "BGPL";
    this.genDetailAppForm();
    this.checkLoader = false;
    //console.log(this.data);
    if (this.action == "Cancel") {
      this.showAlertDialog("INFORMATION", "Cancel Complete");
    }
    else if (this.action == 'Save' && (this.typeBeforeSave == 'New' || this.typeBeforeSave == 'Renew')) {
      this.router.navigate(['/appForm']
        , {
          queryParams: {
            com_code: this.com_code,
            ap_no: this.ap_no
          }
        });
    }
    else if (this.action == 'Save') {
      this.showAlertDialog("INFORMATION", "Save Complete");
    }
    else {
      this.showAlertDialog("INFORMATION", this.returnSave.nextCase);
    }
  }

  saveData() {
    this.typeBeforeSave = this.applyEmit.type;
    this.checkLoader = true;
    this.subscriptionSave = this.appFormService.getSave(this.action, this.applyEmit.type).subscribe(
      (data: any) => {
        //console.log(data);
        if (data.CODE == "200") {
          if (this.data.current_task == 'Scoring' && this.action == 'Submit') {
            this.subscriptionAnswer = this.appFormService.saveAnsWer(this.data.com_code, this.data.ca_no, this.appFormService.getAnsWer()).subscribe(
              (json: any) => {
                if(json){
                  if (json.CODE == '200') {
                    this.showReturnCase(data.DATA);
                  }
                  else {
                    alert(json.MSG);
                    this.checkLoader = false;
                  }
                } else {
                  this.showReturnCase(data.DATA);
                }
              }
            )
          }
          else {
            this.showReturnCase(data.DATA);
          }
        }
        else {
          alert(data.MSG);
          //console.log(data);
          this.checkLoader = false;
        }
      }
    )
  }

  goBack() {
    if (this.action != 'Save') {
      this.router.navigate(['/home']);
    }
  }

  display: boolean = false;

  showDialog() {
    if (this.applyEmit.type == "New") {
      this.ClickTabView(this.productNewRenew[0]);
      this.applyEmit.productName = this.productNewRenew[0].remark;
      this.applyEmit.sbuType = this.productNewRenew[0].idCode;
      this.applyEmit.useId = this.productNewRenew[0].useId;
    }
    this.appFormService.setProdTypeAppForm(this.applyEmit);

    this.newRenewDialog.open();
  }

  showAlertDialog(action: string, msg: string) {
    this.alertDialog.setAction(action);
    this.alertDialog.setMessage(msg);
    this.alertDialog.open();
  }

  data: getDataAppForm;

  genDetailAppForm() {
    this.isLoading = true;
    this.subscription = this.appFormService.getDetailAppForm("web", this.user.getSuborCode(), this.com_code, this.ap_no).subscribe(
      (data: any) => {
        //console.log(data);
        if (data.CODE === "200") {
          this.data = new getDataAppForm();
          this.data = getDataAppForm.parse(data.DATA);
          this.appFormService.setListAns(data.LIST_DATA);
          this.listJointSeller = this.appFormService.listJointSeller;
          this.listIntro = this.appFormService.listIntro;
          this.listAnalyst = this.appFormService.listAnalyst;
          this.listAnalystLeader = this.appFormService.listAnalystLeader;

          this.appFormService.setAppFormData(this.data);

          this.appFormService.setTabGuarantor(this.data.listGuarantor);

          this.appFormService.setTabCustomer(this.data.tabCustomer);

          this.appFormService.setTabExposure();

          if (this.data.sbu_typ === 'P') {
            if (this.data.listDetail.length > 0) {
              this.appFormService.setTabLoan(this.data.listDetail[0]);
            }
            this.appFormService.setTabCollateral(this.data.listCollateral);
          }
          else if (this.data.sbu_typ === 'HP' || this.data.sbu_typ === 'LS' || this.data.sbu_typ === 'HP/LS') {
            this.appFormService.setTabLeasing(this.data.listDetail);
          }
          else {
            if (this.data.listPricing.length > 0) {
              this.appFormService.setTabPricing(this.data.listPricing);
            }

            this.appFormService.setTabBuyer(this.data.listBuyer);
          }
          if (this.data.tabReason) {
            this.appFormService.setTabReason(this.data.tabReason);
          }
          if (this.data.tabContext) {
            this.appFormService.setTabContext(this.data.tabContext);
          }

          this.disabled = this.appFormService.getAppFormData().disabled;

          this.inquiry = this.taskCode == 'AP-00' ? true : false;
          //console.log(this.inquiry);
          this.appFormService.inquiry.emit(this.inquiry);

          this.controlIntro(this.data.intro_mthd_cd);
          this.isLoading = false;
          //this.sideTabComponent.openTab(this.openTab);
        }
        else {
          this.isLoading = false;
        }
      }
    );
  }

  ClickTabView(selectedProduct: any) {
    this.applyEmit.productName = selectedProduct.remark;
    this.applyEmit.sbuType = selectedProduct.idCode;
    this.applyEmit.useId = selectedProduct.useId;
    this.appFormService.setProdTypeAppForm(this.applyEmit);
  }

  SelectDialog() {
    this.data = new getDataAppForm();
    if (this.applyEmit.type == "New") {
      this.appFormNew = AppFormNew.set(this.appFormService.selectNew);
      this.confirmMsg = [];
      this.confirmMsg.push("Type : " + this.applyEmit.type);
      this.confirmMsg.push("Product : " + this.applyEmit.productName);
      this.confirmMsg.push("Sale Call No. : " + this.appFormNew.sale_call_no);
      this.confirmMsg.push("Please confirm to continue.");
    }
    else {
      this.appFormRenew = AppFormRenew.set(this.appFormService.selectRenew);
      this.confirmMsg = [];
      this.confirmMsg.push("Type : " + this.applyEmit.type);
      this.confirmMsg.push("Product : Factoring");
      this.confirmMsg.push("CA No. : " + this.appFormRenew.ca_no);
      this.confirmMsg.push("Please confirm to continue.");
    }
    this.confirmDialog.open();
  }

  confirmSelected() {
    this.clearData();
    if (this.applyEmit.type == "New") {
      this.SetApplyNew();
    }
    else {
      this.SetApplyRenew();
    }
    this.appFormService.setAppFormData(this.data);
    this.actionClick("Save");

    // After Save Type Change // "New" -> "" //
    this.applyEmit.type = "";
  }

  SetApplyNew() {
    console.log(this.appFormNew);
    this.data.com_code = this.appFormNew.com_code;
    this.data.prebranch_code = this.appFormNew.prebranch_code;
    //this.data.sbu_typ = this.appFormNew.credit_type;
    this.data.sbu_typ = this.applyEmit.useId;
    this.data.sbu_type_desc = this.applyEmit.productName;
    this.data.sale_call_no = this.appFormNew.sale_call_no;
    this.data.mkt_code = this.appFormNew.ownr;
    this.data.mkt_name = this.appFormNew.owner_name;
    this.data.intro_by = this.appFormNew.intro_by_cd;
    this.data.intro_mthd_cd = this.appFormNew.intro_mthd_cd;
    this.data.intro_by_name = this.appFormNew.intro_by_name;
    this.data.intro_mthd_desc = this.appFormNew.intro_mthd_desc;
    this.data.connect_since = this.appFormNew.connect_since;
    this.data.cus_code = this.appFormNew.comp_ent_code;
    this.data.cus_status = this.appFormNew.cus_status;

    this.data.net_worth_amt = this.appFormNew.net_worth_amt;
    this.data.net_worth_year = this.appFormNew.net_worth_year;
    this.data.regis_capital = this.appFormNew.regis_capital_amt;
    this.data.sales_amt = this.appFormNew.sales_amt;
    this.data.sales_year = this.appFormNew.sales_year;
    this.data.paid_up_capital = this.appFormNew.paid_up_capital;

    this.data.total_exposure = 0;
    this.data.total_exposure_cap = 0;
    this.data.apply_by = this.user.getCode();
    this.data.last_usr = this.user.getCode();

    let buyerSellerFlg = '';
    if (this.appFormNew.credit_type == "FDO" || this.appFormNew.credit_type == "FIM" || this.appFormNew.credit_type == "FEX") {
      this.appFormService.checkActiveFactoring(this.appFormNew.new_card_no, this.appFormNew.credit_type).subscribe(
        (data: any) => {
          if (data.CODE === "200" && data.LIST_DATA.length > 0) {
            alert('This Customer Has Control No. Active , Please Renew CA');
            return;
          }
        }
      )
      this.appFormService.checkFactoring(this.appFormNew.comp_ent_code, this.appFormNew.new_card_no).subscribe(
        (data: any) => {
          if (data.CODE === "200" && data.LIST_DATA.length > 0) {
            buyerSellerFlg = data.LIST_DATA.entCode;
          }
          else {
            buyerSellerFlg = '';
          }
        }
      )
    }
    else if (this.appFormNew.credit_type == "HP" || this.appFormNew.credit_type == "LS" || this.appFormNew.credit_type == "HP/LS") {
      this.data.ca_type = "1";
    }
    else if (this.appFormNew.credit_type == "P") {
    }
    else {
    }

    if (buyerSellerFlg != '') {
      this.data.cus_code = buyerSellerFlg;
    }
    else {
      this.data.cus_code = this.appFormNew.comp_ent_code;
    }

    if (this.appFormNew.credit_type == "FIM") {
      if (this.data.listBuyer.length == 0) {
        let dataBuyer = new ListBuyer();
        dataBuyer.buyer_code = this.data.cus_code;
        dataBuyer.buyer_name = this.data.cus_name;

        this.data.listBuyer.push(dataBuyer);
      }
    }
  }

  SetApplyRenew() {

    this.data.com_code = this.user.getComCodePort();
    this.data.sbu_typ = this.appFormRenew.sbu_typ;

    this.data.ori_ca = this.appFormRenew.ori_ca;
    this.data.ref_old_ca = this.appFormRenew.ca_no;

    if (this.applyEmit.type == "Renew") {
      this.data.contract_no = this.appFormRenew.contract_no;
      this.data.contract_date = this.dateUtils.dateToString(this.appFormRenew.contract_date, 'dd/MM/yyyy');
      this.data.contract_expire_date = this.dateUtils.dateToString(this.appFormRenew.contract_expire_date, 'dd/MM/yyyy');
    }

    this.data.cus_name = this.appFormRenew.cust_name;
    this.data.cus_code = this.appFormRenew.cus_code;
    this.data.mkt_name = this.appFormRenew.mkt_name;
    this.data.mkt_code = this.appFormRenew.mkt_code;
    this.data.apply_by = this.user.getCode();
    this.data.last_usr = this.user.getCode();

    this.data.bl_flag = 'N';
    this.appFormService.checkBlackList(this.appFormRenew.new_card_no).subscribe(
      (data: any) => {
        if (data.CODE === "200" && data.LIST_DATA.length > 0) {
          this.data.bl_flag = 'Y';
        }
      }
    )
  }

  clearData() {
    this.data.com_code = "";
    this.data.prebranch_code = "";
    this.data.ca_no = "";
    this.data.sale_call_no = "";
    this.data.ctrl_no = "";
    this.data.cus_status = "";
    this.data.cus_code = "";
    this.data.grp_code = "";
    this.data.joint_seller_group = "";
    this.data.sbu_typ = "";
    this.data.advance_type = "";
    this.data.apply_by = "";
    this.data.apply_dt = "";
    this.data.expire_dt = "";
    this.data.contract_no = "";
    this.data.contract_date = "";
    this.data.contract_expire_date = "";
    this.data.mkt_code = "";
    this.data.ori_ca = "";
    this.data.ref_old_ca = "";
    this.data.intro_by = "";
    this.data.score = "";
    this.data.grade = "";
    this.data.incorporate_date = "";
    this.data.sales_year = "";
    this.data.sales_amt = "";
    this.data.net_worth_year = "";
    this.data.net_worth_amt = "";
    this.data.regis_capital = "";
    this.data.paid_up_capital = "";
    this.data.connect_since = "";
    this.data.business_type = "";
    this.data.verifier = "";
    this.data.opinion_pro = "";
    this.data.current_task = "";
    this.data.current_level_approve = "";
    this.data.last_usr = "";
    this.data.last_upd = "";
    this.data.intro_mthd_cd = "";
    this.data.cancel_date = "";
    this.data.business_detail = "";
    this.data.this_approve = "";
    this.data.ap_no = "";
    this.data.need_guarantor = "";
    this.data.verify_head = "";
    this.data.ca_type = "";
    this.data.total_exposure = 0;
    this.data.total_exposure_cap = 0;
    this.data.bl_flag = '';
    this.data.rec_cond = '';
    this.data.rec_agr_flag = '';
    this.data.rec_usr = '';
    this.data.rec_upd = '';
    this.data.recAmount = 0;
    this.data.mkt_name = "";
    this.data.cus_name = "";
    this.data.sbu_type_desc = "";
    this.data.team_mkt_leader = "";
    this.data.verifier_name = "";
    this.data.verify_head_name = "";
    this.data.join_group_name = "";
    this.data.join_group_cr = "";
    this.data.intro_mthd_desc = "";
    this.data.intro_by_name = "";
    this.data.listGuarantor = [];
    this.data.listPricing = [];
    this.data.listDetail = [];
    this.data.listBuyer = [];
    this.data.listCollateral = [];
  }

  //////  intro
  OutURL: string;

  controlIntro(source: string) {
    if (source == "40" || source == "53" || source == "300" || source == "403" || source == "90") {
      // this.inputIntro = false;
      // this.buttonIntro = true;
      this.OutURL = "";
    } else {
      //  this.inputIntro = true;
      //  this.buttonIntro = false;
      this.OutURL = this.serviceEndPoint.url + this.serviceEndPoint.sale_call_api
        + "/ask/salecall/GetINTRO?device=Web&user=" + this.user.getUserName()
        + "&Comcode=" + this.user.getComCode() + "&INTRO_MTHD_CD=" + source;
    }
    //console.log(this.OutURL);
  }

  showReport() {
    let ap_no: string = this.data.ap_no.replace("/", "_");
    //new_card_no
    window.open(this.serviceEndPoint.url_report + '/result?report=MKT\\App_form_01.fr3&ApNo=' + ap_no + '&format=pdf', '_blank');
  }

  clickCaApprove() {
    if (this.comment) {
      //console.log('if');
      this.subscriptionReason = this.appFormService.approveReject(this.data.com_code, this.data.ap_no, "AP", "N", this.comment).subscribe(
        (result: any) => {
          //console.log(result);
          if (result.MSG == "Complete") {
            this.saveData();
          }
        }
      );
    }
    else {
      this.alertWarning.setMessage('- Add Comment');
      this.alertWarning.open();
    }
  }

  openBlackList() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.blShareCenterService.setInit();
      this.blackListDialog.open();
    }, 200);

  }

  test1(){
    console.log('object');
  }

  test2(){
    console.log('object2');
  }
}
