import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {caHead} from "./model/ca-head";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {creditApplicationService} from "./credit-application.service";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {Subscription} from "rxjs/Subscription";
import {ActionDialogComponent} from "../../../shared/center/action-dialog/action-dialog.component";
import {AlertDialogComponent} from "../../../shared/center/alert-dialog/alert-dialog.component";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {caBgDetail} from "./model/ca-bgdetail";
import {DateUtils} from "../../../shared/center/utils/date-utils";
import {caPricing} from "./model/ca-pricing";
import { isCallExpression, isPropertyAssignment } from "typescript";
import { caListMaster } from "./model/ca_listmaster";
import {CaTempCreditLine} from "./model/ca-temp-credit-line";
import {CaTempCreditLineGroup} from "./model/ca-temp-credit-line-group";
import {TextMaskType} from "../../../shared/config/text-mask-type";
import {tryCatch} from "rxjs/util/tryCatch";

declare var $: any;

@Component({
  selector: 'app-credit-application',
  templateUrl: './credit-application.component.html'

})
export class CreditApplicationComponent implements OnInit, OnDestroy {
  @Output('business_detail_out') business_detail_out: EventEmitter<string> = new EventEmitter();
  subscripData: Subscription;
  subscripMaster: Subscription;
  subscription: Subscription;
  subscriptionPart: Subscription;
  subscriptionFindPart: Subscription;
  subscriptionReject: Subscription;
  subscriptionCancel: Subscription;
  subscriptionProcess : Subscription
  myCaHead: caHead;
  comCode: string;
  caNo: string;
  subParams: Subscription;
  @ViewChild('dialogalert') dialogalert: AlertDialogComponent;
  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;
  @ViewChild('reaSonDialog') reaSonDialog: ActionDialogComponent;
  @ViewChild('blackListDialog') blackListDialog: ActionDialogComponent;
  @ViewChild('validateAlert') validateAlert: AlertDialogComponent;
  @ViewChild('warning') warningDialog: AlertDialogComponent;
  @ViewChild('listFileDialog') listFileDialog: ActionDialogComponent;
  caCaption: string = '';
  task: string = '';
  taskShorten: string = '';
  btnFormSave: boolean = true;
  btnFormSubmit: boolean = true;
  btnFormCancel: boolean = true;
  btnFormReject: boolean = true;
  btnFormEdit: boolean = true;
  editImportant: boolean = true;
  isReadonly: boolean = true;

  checkLoader: boolean = false;

  approvePerson: string = '';
  comment: string = '';

  index: Number;
  captionsTop: String[] = [];
  captionsBot: String[] = ['Apply CA', 'Revise', 'Checker', 'Scoring', 'Scoring Approve', 'PrintDoc', 'Approve', 'Done'];
  checkTask = ['CA-01', 'CA-01-1'];
  urlSeller: string;
  dataSeller: any;
  listFileCa : string[] = [];
  partFileCa : string = '';
  listINTRO : caListMaster[] = [];
  OutURL : string;
  constructor(private userStorage: UserStorage,
              private route: ActivatedRoute,
              private router: Router,
              private service: ServiceEndpoint,
              private creditApplicationService: creditApplicationService,
              private dateUtils: DateUtils,
              private textmask : TextMaskType) {
    this.urlSeller = this.service.url + this.service.ca_api + '/ask/ca/GetListSearchUn';
    this.dataSeller = {
      "device": "web",
      "username": this.userStorage.getUserName(),
      "action": "SELLER"
    }
  }

  ngOnInit() {

    this.approvePerson = this.userStorage.getUserName();
    window.scrollTo(0, 0);
    this.myCaHead = new caHead();
    this.comCode = this.userStorage.getComCode();
    this.checkLoader = true;
    this.subParams = this.route.queryParams.subscribe(
      (params: Params) => {
        this.caNo = params['ca_no'];
        this.task = params['task'];
        if (this.task) {
          this.taskShorten = this.task.slice(0, 2).toUpperCase();
        } else {
          console.log(this.comCode,this.caNo.replace(/\//gi, "_"));
          this.subscriptionFindPart = this.creditApplicationService.findCaDirectoryPart(this.comCode,this.caNo.replace(/\//gi, "_")).subscribe(
            (value : any)=>{
              console.log(value);
              //if(value.CODE == '200'){
                this.listFileCa = value.LIST_DATA
              //} else {
              //  this.listFileCa = []
              //}
            }
          )

          this.subscriptionPart = this.creditApplicationService.getCaDirectoryPart(this.comCode).subscribe(
            (value : any)=>{
              if(value.CODE == '200'){
                this.partFileCa = value.DATA.part.substring(2).replace(/\\/g, "/");
              }
            }
          )
        }
        this.controlActionForm(this.task);
        ///////  List ans
        this.subscripMaster = this.creditApplicationService.getListMasterPost('web'
          , this.userStorage.userName
          , this.userStorage.getComCode()
          , this.caNo)
          .subscribe(
            (json: any) => {
              /////  Call  After give Ans List Master
              console.log(json);
              this.callOpendata();

              this.creditApplicationService.setListMaster(json.LIST_DATA);
              this.listINTRO = this.creditApplicationService.listINTRO;
            });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscripData != null) {
      this.subscripData.unsubscribe();
    }

    if (this.subscripMaster != null) {
      this.subscripMaster.unsubscribe();
    }

    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }

    if(this.subscriptionPart != null){
      this.subscriptionPart.unsubscribe();
    }

    if(this.subscriptionFindPart != null){
      this.subscriptionFindPart.unsubscribe();
    }
    if(this.subscriptionCancel){
      this.subscriptionCancel.unsubscribe()
    }
    if(this.subscriptionReject){
      this.subscriptionReject.unsubscribe()
    }
    if(this.subscriptionProcess){
      this.subscriptionProcess.unsubscribe()
    }
  }

  callOpendata() {

    this.subscripData = this.creditApplicationService.sendCreditApplication('web'
      , this.userStorage.userName
      , this.userStorage.getComCode()
      , this.caNo)
      .subscribe(
        (json: any) => {
          console.log(json);
          this.checkLoader = false;
          this.myCaHead = caHead.parse(json.DATA);
          switch (this.myCaHead.ca_type.toString()) {
            case '1':
              this.caCaption = 'CA Normal';
              break;
            case '2':
              this.caCaption = 'CA Main Credit Line';
              break;
            case '3':
              this.caCaption = 'CA Dealer Buy Back Guarantee';
              break;
            default:
              this.caCaption = '';
              break;
          }
          this.creditApplicationService.setCaHead(this.myCaHead);
          this.index = this.captionsBot.indexOf(this.myCaHead.current_task) + 1;

          if (this.myCaHead.caentity.new_card_no) {
            this.creditApplicationService.setNewCardNo(this.myCaHead.caentity.new_card_no);
          }
          this.controlIntro(this.myCaHead.intro_mthd_cd);
        });

  };

  submitOrsave: string = '';

  questionAction(action: string) {
    this.Questiondialog.reset();
    if (action == 'SAVE') {
      this.submitOrsave =
      ((this.task == 'CA-05' || this.task == 'CA-00-1') && !this.btnFormEdit) ? 'SAVEP' : action;
    }
    else if (action == 'SUBMIT') {
      this.submitOrsave = (this.task == 'CA-05' && !this.btnFormEdit) ? 'SUBMITP' : action;
    }
    else if (action == 'REJECT') {
      this.submitOrsave = action;
    }
    else if (action == 'CANCEL') {
      this.submitOrsave = action;
    }
    this.Questiondialog.setAction(action);
    this.Questiondialog.open();
  }

  submitComplete: boolean = false;
  saveComplete: boolean = false;
  tmpaction: string = '';

  onConfirmQuest(value: string) {
    this.tmpaction = value;
    if (value == 'SUBMIT' || value == 'SUBMITP') {
      let isWarning = this.warning();
      if(isWarning && this.checkTask.includes(this.task)) {
        this.warningDialog.open();
      } else {
        this.isPassWarning(value);
      }
    } else if (value == 'SAVE' || value == 'SAVEP') {
      // this.isPassWarning(value);
      this.processCA(value);
    } else if (value == 'REJECT') {
      this.reaSonDialog.open();
    } else if (value == 'CANCEL') {
      this.reaSonDialog.open();
    }
  }

  warning = () => {
    this.warningDialog.list_msg = [];
    let result : boolean = false;
    if(this.myCaHead.sbu_typ == 'P' || this.myCaHead.sbu_typ == 'FDO'){
    }
    else{
      if(this.myCaHead.ca_type != '3' && this.checkTask.includes(this.task)){
        this.myCaHead.listbgdetail.forEach(
          valueDetail => valueDetail.listbgdetailsub.forEach(
            value => {
              if(!result){
                if(!value.buy_back_grnty_no && value.listdetailsubdealer.length > 0 && !valueDetail.dealer_code) {
                  value.listdetailsubdealer.forEach(
                    valueDealer => {
                      if(valueDealer.col3 && !result){
                        this.warningDialog.addMessage(value.dealer_name + ' have BuyBack Guarantee.');
                        this.warningDialog.addMessage('But you choose No Guarantee.');
                        this.warningDialog.addMessage('Do you want to change?');
                        result = true;
                      }
                    }
                  )
                }
              }
            }
          )
        )
      }
    }
    return result;
  }

  isPassWarning = (action : string) => {
    let isPass = this.verification();
      if (this.myCaHead.current_task == 'Approve') {
        this.reaSonDialog.open();
      } else {
        if (isPass) {
          if (this.myCaHead.sbu_typ != 'FDO' && this.checkTask.includes(this.task)) {
            this.calIrr(action); // Cal IRR Again
          } else {
            this.processCA(action);
          }
        } else {
          this.validateAlert.open()
        }
      }
  }

  verification(): boolean {
    this.validateAlert.list_msg = [];
    this.validateAlert.single = 0;
    if (this.taskShorten == 'AM') {
      if (!this.myCaHead.listamendcontent[0].content || !this.myCaHead.listamendcontent[0].amend_reason) {
        this.validateAlert.addMessage('- Content && Reason')
      }
      if(this.myCaHead.sbu_typ != 'FDO' && this.myCaHead.sbu_typ != 'P'){
        if(this.myCaHead.listapvamend.findIndex(item => item.flg_sel == 'Y') == -1){
          this.validateAlert.addMessage('- Approve Amend Person')
        }
      }

      if (this.myCaHead.sbu_typ == 'FDO' && this.myCaHead.listsellertempcreditline.length > 0) {
        if (!this.myCaHead.listsellertempcreditline[0].eff_date) {
          this.validateAlert.addMessage('- TempCreditLineSeller Start Date');
        }
        if (!this.myCaHead.listsellertempcreditline[0].expire_date) {
          this.validateAlert.addMessage('- TempCreditLineSeller Maturity Date');
        }

        if (this.myCaHead.listsellertempcreditline[0].amend_type == 'T' && this.myCaHead.listsellertempcreditline[0].time == 0){
          this.validateAlert.addMessage('- TempCreditLineSeller Amend time');
        }
      }

      if (this.myCaHead.sbu_typ == 'FDO' && this.myCaHead.listsellertempcreditlinegroup.length > 0) {
        if (!this.myCaHead.listsellertempcreditlinegroup[0].eff_date) {
          this.validateAlert.addMessage('- TempCreditLineSellerGroup Start Date');
        }
        if (!this.myCaHead.listsellertempcreditlinegroup[0].expire_date) {
          this.validateAlert.addMessage('- TempCreditLineSellerGroup Maturity Date');
        }

        if (this.myCaHead.listsellertempcreditlinegroup[0].amend_type == 'T' && this.myCaHead.listsellertempcreditlinegroup[0].time == 0){
          this.validateAlert.addMessage('- TempCreditLineSellerGroup Amend time');
        }
      }

      let tempbuyer: CaTempCreditLine[] = this.myCaHead.listbuyertempcreditline;
      if (this.myCaHead.sbu_typ == 'FDO' && tempbuyer.length > 0) {

        for (let buyer of tempbuyer) {
          console.log(buyer);
          if (buyer.temp_sub_ca_amt >0 ) {

            if (!buyer.eff_date) {
              this.validateAlert.addMessage('- TempCreditLineBuyer Start Date');
            }

            if (!buyer.expire_date) {
              this.validateAlert.addMessage('- TempCreditLineBuyer Maturity Date');
            }

            if (buyer.amend_type == 'T' && buyer.time == 0) {
              this.validateAlert.addMessage('- TempCreditLineBuyer Amend time');
            }
          }
        }
      }

      let tempbuyerG: CaTempCreditLineGroup[] = this.myCaHead.listbuyertempcreditlinegroup;
      if (this.myCaHead.sbu_typ == 'FDO' && tempbuyerG.length > 0) {

        for (let buyerG of tempbuyerG) {
          if (buyerG.temp_sub_ca_amt_group > 0 ) {
            if (!buyerG.eff_date) {
              this.validateAlert.addMessage('- TempCreditLineBuyerGroup Start Date');
            }

            if (!buyerG.expire_date) {
              this.validateAlert.addMessage('- TempCreditLineBuyerGroup Maturity Date');
            }

            if (buyerG.amend_type == 'T' && buyerG.time == 0) {
              this.validateAlert.addMessage('- TempCreditLineBuyerGroup Amend time');
            }
          }
        }
      }

    } else if (this.taskShorten == 'RV') {
      if(!this.myCaHead.listrevise[0].apprv_person){
        this.validateAlert.addMessage('- Select Approve Revise Attach Sheet');
      }
    } else {
      if (this.task == 'CA-04-2') {
        if (!this.myCaHead.grade || !this.myCaHead.score) {
          this.validateAlert.addMessage('- Must Have Grade and Score')
        }
      }
      else if (this.task == 'CA-04-3') {
        if (!this.myCaHead.rec_agr_flag) {
          this.validateAlert.addMessage('- Recommendation');
        }
        if (this.myCaHead.rec_agr_flag == 'AC' && !this.myCaHead.rec_cond.trim()) {
          this.validateAlert.addMessage('- Condition');
        }
      }
      if (!this.myCaHead.caentity.new_card_no) {
        this.validateAlert.addMessage('- Id Card');
      }
      if (!this.myCaHead.caentity.birth_d) {
        this.validateAlert.addMessage('- Birth Day')
      }
      if (!this.myCaHead.caentity.f_namet) {
        this.validateAlert.addMessage('- Name Thai');
      }
      if (!this.myCaHead.caentity.f_namee) {
        this.validateAlert.addMessage('- Name Eng');
      }
      if (!this.myCaHead.caentity.address_eng || !this.myCaHead.caentity.address_eng2) {
        this.validateAlert.addMessage('- Address Eng');
      }
      if (this.myCaHead.listpcnind.length == 0) {
        this.validateAlert.addMessage('- % Of Industry');
      }

      // Factoring
      if (this.myCaHead.sbu_typ.slice(0, 1) == 'F') {
        let caPricing: caPricing = this.myCaHead.listcapricing[0];
        if (this.myCaHead.listcabuyer.length == 0) {
          this.validateAlert.addMessage('- add Buyer');
        }
        if (this.dateUtils.compareDate(caPricing.expire_dt,this.dateUtils.currentDate()) == -1) {
          this.validateAlert.addMessage('- Expire Date < Now');
        }
        if (caPricing.rate_type == 'Fix') {
          if (!caPricing.int_rate) {
            this.validateAlert.addMessage('- Interest Rate');
          }
        }
        else if (caPricing.rate_type == 'Float') {
          if (!caPricing.rate_bank || !caPricing.rate_m || !caPricing.rate_spread) {
            this.validateAlert.addMessage('- Interest Rate Bank');
          }
        }
        if (!caPricing.credit_line_amt) {
          this.validateAlert.addMessage('- Requested Credit Line Amount');
        }
        if (!caPricing.rate_type) {
          this.validateAlert.addMessage('- Interest Charge');
        }
        if (!caPricing.factfee_type) {
          this.validateAlert.addMessage('- Factoring Fee Type');
        }
        if (!this.myCaHead.advance_type) {
          this.validateAlert.addMessage('- Advance Type');
        }
        for (let buyer of this.myCaHead.listcabuyer) {
          if (this.myCaHead.listcapricing[0].seller_code == buyer.buyer_code) {
            this.validateAlert.addMessage("- Seller & Buyer Can't the same person");
            break;
          }
          if (!buyer.app_type) {
            this.validateAlert.addMessage('- Application Type');
            break;
          }
          if (!buyer.advance_ratio) {
            this.validateAlert.addMessage('- Advance Ratio @ Buyer : ' + buyer.buyer_name);
            break;
          }
          if (!buyer.sub_line_amt) {
            this.validateAlert.addMessage('- Sub-Line Limit');
            break;
          }
          if (!buyer.terms) {
            this.validateAlert.addMessage('- Payment Term');
            break;
          }
          if (this.myCaHead.listcapricing[0].factfee_type == '1') {
            if (!buyer.factoring_fee) {
              this.validateAlert.addMessage('- Factoring Fee');
              break;
            }
          }
        }
        if (this.myCaHead.joint_seller_group) {
          if (this.myCaHead.listcapricing[0].credit_line_amt > this.myCaHead.join_group_cr) {
            this.validateAlert.addMessage("- Request Credit line can not grater group of credit line")
          }
        }
      }
      // DirectLoan
      else if (this.myCaHead.sbu_typ == 'P') {
        let detailLoan: caBgDetail = this.myCaHead.listbgdetail[0];
        if (!detailLoan.fin_amt_e_vat) {
          this.validateAlert.addMessage('- Request Credit Line');
        }
        if (!detailLoan.flat_rate) {
          this.validateAlert.addMessage('- Interest Rate');
        }
        if (!detailLoan.pen_rate) {
          this.validateAlert.addMessage('- Penalty Rate');
        }
        if (!detailLoan.terms) {
          this.validateAlert.addMessage('- Terms')
        }
        if (typeof(detailLoan.es_revenue) == 'undefined' && detailLoan.es_revenue == null){
          this.validateAlert.addMessage('- Front-end Fee');
        } else if(Number(detailLoan.es_revenue) < 0) {
          this.validateAlert.addMessage('- Front-end Fee');
        }
        if (detailLoan.schedule == 'R') {
          if (!detailLoan.installment_e_vat) {
            this.validateAlert.addMessage('- Installment');
          }
          if ((detailLoan.installment_e_vat * detailLoan.terms) < detailLoan.fin_amt_e_vat) {
            this.validateAlert.addMessage('- Installment * Term < Request Credit Line');
          }
        }
        if (detailLoan.schedule == 'I') {
          if (detailLoan.listcastep.length == 0) {
            this.validateAlert.addMessage('- Installment Step');
          }
          if (!this.checkStep(1)) {

          }
          if (!this.checkSumStep(0)) {
            this.validateAlert.addMessage('- Installment * Term < Request Credit Line');
          }
        }
        //if (detailLoan.first < detailLoan.disburse_dt) {
        if(this.dateUtils.compareDate(detailLoan.first,detailLoan.disburse_dt) == -1) {
          console.log('In loop');
          this.validateAlert.addMessage('- First Due More than equal Disburse Date');
        }
        if (detailLoan.flat_rate > 15) {
          this.validateAlert.addMessage('- Interest Rate > 15');
        }
        if (detailLoan.pen_rate < detailLoan.flat_rate) {
          this.validateAlert.addMessage('- Penalty Rate < Interest Rate');
        }
        if (detailLoan.great_period > 7) {
          this.validateAlert.addMessage('- Grace Period > 7');
        }
        if (this.validateAlert.list_msg.length <= 0) {

        }
      }
      // Hire purchase & Leasing
      else {
        let caDetail: caBgDetail[] = this.myCaHead.listbgdetail;
        if (caDetail.length == 0) {
          this.validateAlert.addMessage('- Add CreditType');
        }
        else {
          for (let detail of caDetail) {
            if (!detail.fin_typ) {
              this.validateAlert.addMessage('- Add CreditType');
            }
            else if (!detail.sub_fin) {
              this.validateAlert.addMessage('- Add CreditType');
            }
            else if (detail.fin_typ == '2' && !detail.operating_lease) {
              this.validateAlert.addMessage('- Add CreditType');
            }

            if (!detail.asst_amt_e_vat) {
              this.validateAlert.addMessage('- Asset Price');
            }
            if (!detail.fin_amt_e_vat) {
              this.validateAlert.addMessage('- Financing Amount');
            }
            if (this.myCaHead.ca_type == '2' && detail.free_text.trim().length > 0) {

            }
            else {
              if (!detail.terms) {
                this.validateAlert.addMessage('- Terms');
              }
              if (!detail.gross_irr) {
                this.validateAlert.addMessage('- Gross IRR');
              }
              if ((!detail.installment_e_vat || !detail.installment_i_vat) && detail.listcastep.length == 0) {
                this.validateAlert.addMessage('- Installment');
              }
              if (!detail.disburse_dt) {
                this.validateAlert.addMessage('- Disburse Date');
              }
            }
            if (!detail.fin_asst) {
              this.validateAlert.addMessage('- Financing Asset');
            }
            if (detail.schedule == 'I') {
              if (detail.listcastep.length == 0) {
                this.validateAlert.addMessage('- Installment Step');
              }
              if (!this.checkStep(detail.sub_id)) {

              }
              if(detail.type_cal_pricing == '1' || detail.type_cal_pricing == '2'){
                this.validateAlert.addMessage("- Step Installment Can't Calculated");
              }
            }
            let checkDetailSub: boolean = true;
            if (this.myCaHead.ca_type != '3') {
              for (let detailSub of detail.listbgdetailsub) {
                if (!detailSub.asst_type) {
                  checkDetailSub = false;
                  this.validateAlert.addMessage('- Finance Asset Type');
                }
                if (!detailSub.asset_status) {
                  checkDetailSub = false;
                  this.validateAlert.addMessage('- New / Used Asset');
                }
                if (!detailSub.year) {
                  checkDetailSub = false;
                  this.validateAlert.addMessage('- Year in Asset Detail');
                }
                if (!detailSub.dealer_code && detail.buy_back_flg == 'N') {
                  checkDetailSub = false;
                  this.validateAlert.addMessage('- Dealer Name');
                }
                if (!detailSub.eqp_ty) {
                  checkDetailSub = false;
                  this.validateAlert.addMessage('- Equip Type');
                }
                if (!detailSub.asst_amt_e_vat) {
                  checkDetailSub = false;
                  this.validateAlert.addMessage('- Asset (Exc. VAT)');
                }

                if (!checkDetailSub) {
                  break;
                }
              }
            }
            if (this.myCaHead.ca_type == '1' && this.myCaHead.credit_line_no) {
              // In here
              if (!this.ChkAmtCreditLine(caDetail)) {
                this.validateAlert.addMessage('- Used amount over limit credit available.');
              }

            }
            if (this.validateAlert.list_msg.length > 0) {
              break;
            }
            else {

            }
          }
          if (!this.costBalance(caDetail)) {
            this.validateAlert.addMessage('- Selling price not equal to the price of each Asset');
          }

          if(!this.checkOsDealer(caDetail)){
            this.validateAlert.addMessage('- Os CreditLine Amount Less than Financing Amount');
          }

        }
      }
    }
    return this.validateAlert.list_msg.length > 0 ? false : true;
  }

  calIrr(value: string) {
    let count: number = 0, length: number = this.myCaHead.listbgdetail.length;
    for (let detail of this.myCaHead.listbgdetail) {
      if (this.myCaHead.ca_type == '2' && detail.free_text.trim().length > 0) {
        count++;
        if (count == length) {
          this.processCA(value);
        }
      }
      else {
        this.subscription = this.creditApplicationService.calculateIrr(detail.sub_id, detail.type_cal_pricing).subscribe(
          (data: any) => {
            console.log(data);
            if (data.CODE == '200') {
              /*detail.fin_amt_e_vat = value.LIST_DATA[0].finExcVat;
               detail.fin_amt_vat = value.LIST_DATA[0].finVat;
               detail.fin_amt_i_vat = value.LIST_DATA[0].finIncVat;
               detail.installment_e_vat = value.LIST_DATA[0].installmentExcVat;
               detail.installment_vat = value.LIST_DATA[0].installmentVat;
               detail.installment_i_vat = value.LIST_DATA[0].installmentIncVat;
               detail.flat_rate = value.LIST_DATA[0].flatRate;*/
              detail.gross_irr = data.LIST_DATA[0].grossIrr;
              detail.net_irr = data.LIST_DATA[0].netIrr;
              detail.net_irr_inc_deposit = data.LIST_DATA[0].netIrrIncDeposit;
              count++;
              if (count == length) {
                this.processCA(value);
              }
            }
          }
        )
      }
    }
  }

  clickafReason() {
    if (this.tmpaction == 'SUBMIT') {
      this.processCA(this.tmpaction);
    } else if (this.tmpaction == 'REJECT') {
      console.log('Reject');
      this.onRejectCA();
    } else if (this.tmpaction == 'CANCEL') {
      this.onCancalCA();
    }
  }

  processCA(value: string) {
    this.submitComplete = false;
    this.saveComplete = false;
    this.checkLoader = true;
    console.log(value);
    this.subscriptionProcess = this.creditApplicationService.processCa("web"
      , this.userStorage.getUserName()
      , value, this.comment).subscribe(
      (json: any) => {
        this.checkLoader = false;
        //console.log(json);
        let stringMsg: string = '';
        if (value == 'SAVE' || value == 'SAVEP') {
          stringMsg = 'Save'
        }
        else {
          stringMsg = 'Submit'
        }
        if (json.CODE == '200') {

          if (value == 'SAVE' || value == 'SAVEP') {
            this.saveComplete = true;
          }

          if (value == 'SUBMIT' || value == 'SUBMITP') {
            this.submitComplete = true;
          }

          this.dialogalert.setAction("INFORMATION");
          this.dialogalert.setMessage(json.MSG);
          this.dialogalert.open();
        } else {
          this.dialogalert.setMessage(stringMsg + " Error");
          this.dialogalert.open();
        }
      }
    );
  }

  onOksubmit() {
    if (this.submitComplete) {
      if ((this.task == 'CA-05' || this.task == 'AM-04' || this.task == 'RV-03') && this.isReadonly) {
        this.showReport('N'); // No Draft
      }
      this.submitComplete = false;
      this.router.navigate(['/home']);
    } else if (this.saveComplete) {
      this.saveComplete = false;
      (this.task == 'CA-05' || this.task == 'CA-00-1') && !this.btnFormEdit ?
        this.router.navigate(['/home']) : this.callOpendata();
    }
    this.saveComplete = false;
    this.submitComplete = false;
  }

  onCancalCA() {
    this.submitComplete = false;
    this.saveComplete = false;
    this.checkLoader = true;
    this.subscriptionCancel = this.creditApplicationService.callRejectCa("web"
      , this.userStorage.getUserName()
      , 'CANCEL'
      , this.comment
      , this.taskShorten).subscribe(
      (json: any) => {
        this.checkLoader = false;
        console.log(json);
        let stringMsg: string = '';
        if (json.CODE == '200') {
          console.log(json);
          this.submitComplete = true;
          this.dialogalert.setAction("INFORMATION");
          this.dialogalert.setMessage(json.MSG);
          this.dialogalert.open();
        } else {
          this.dialogalert.setMessage(stringMsg + " Error");
          this.dialogalert.open();
        }
      }
    );
  }

  onRejectCA() {
    this.submitComplete = false;
    this.saveComplete = false;
    this.checkLoader = true;
    this.subscriptionReject = this.creditApplicationService.callRejectCa("web"
      , this.userStorage.getUserName()
      , 'REJECT'
      , this.comment
      , this.taskShorten).subscribe(
      (json: any) => {
        this.checkLoader = false;
        console.log(json);
        let stringMsg: string = '';
        if (json.CODE == '200') {
          this.submitComplete = true;
          this.dialogalert.setAction("INFORMATION");
          this.dialogalert.setMessage(json.MSG);
          this.dialogalert.open();
        } else {
          this.dialogalert.setMessage(stringMsg + " Error");
          this.dialogalert.open();
        }
      }
    );
  }

  showReport(draft : string) {
    let ca_no: string = this.caNo.replace("/", "_");
    if(this.myCaHead.current_task == 'Done' ||
       (!this.taskShorten && this.myCaHead.current_task.includes("Amend"))) {
      this.listFileDialog.setTitle("Download File");
      this.listFileDialog.open();
    } else if (this.caNo) {
      let strURL = '';
      let strRepNameFr3 = '';
      if (this.taskShorten == 'AM') {
        if (this.myCaHead.sbu_typ == 'FDO') {
          strRepNameFr3 = 'CA_AMEND_FAC_01.fr3';
        } else {
          strRepNameFr3 = 'CA_AMEND_HPLS_01.fr3';
        }
        strURL = this.service.url_report + `/result?report=MKT\\${strRepNameFr3}&ca_no=${ca_no}&com_code=${this.comCode}&amend_time=${this.myCaHead.amend_time}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'AM_' + ca_no + '_T' + this.myCaHead.amend_time}&draft=${draft}`;
      }  else if (this.taskShorten == 'RV'){
        //strURL = this.service.url_report + `/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'CA_' + ca_no}&draft=${draft}`;
        strURL = this.service.url_report + `/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'ATT_' + ca_no + '_RV'+this.myCaHead.revise_time }&draft=${draft}`;
      } else {
        if (this.myCaHead.sbu_typ == 'FDO') {
          strRepNameFr3 = 'CA_DO_01.fr3';
        } else if (this.myCaHead.sbu_typ == 'P') {
          strRepNameFr3 = 'CA_DL_01.fr3';
        } else if ((this.myCaHead.sbu_typ == 'HP') || (this.myCaHead.sbu_typ == 'LS') || (this.myCaHead.sbu_typ == 'HPLS')) {
          if (this.myCaHead.ca_type=='1'&&this.myCaHead.credit_line_no!=='') {
            strRepNameFr3 = 'CREDITLINE_01.fr3'; // CA USE
          } else {
            strRepNameFr3 = 'CA_HPLS_01.fr3'; //CA Normal & CA Main
          }
        }
        strURL = this.service.url_report + `/result?report=MKT\\${strRepNameFr3}&p_ca_no=${ca_no}&p_id_card=${this.creditApplicationService.newCardNo}&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'CA_' + ca_no}&draft=${draft}`;
      }
      console.log(strURL);
      // window.open(strURL, '_blank');
      if((this.taskShorten == 'CA' || this.taskShorten == 'AM') && this.myCaHead.sbu_typ == 'FDO'){
        let rv_time = this.creditApplicationService.caHead.revise_time;
        let strAttach = this.service.url_report + `/result?report=MKT\\Attach_Sheet_01.fr3&ca_no=${ca_no}&com_code=${this.userStorage.getComCode()}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'ATT_' + ca_no + '_RV'+rv_time }&draft=${draft}`;
        console.log(strAttach);
        window.open(strAttach, '_blank');
      }

      window.open(strURL, '_blank');
    }
  }


  controlActionForm(task: string) {
    if (!task) {
      this.btnFormSubmit = false;
      this.btnFormSave = false;
      this.btnFormReject = false;
      this.btnFormCancel = false;
      this.btnFormEdit = false;
      this.editImportant = true;
      this.isReadonly = true;
    }
    else if ((task == 'CA-01') || (task == 'CA-01-1') ||
      (task == 'AM-01') || (task == 'AM-01-1')) {
      this.btnFormSubmit = true;
      this.btnFormSave = true;
      this.btnFormReject = false;
      this.btnFormCancel = true;
      this.btnFormEdit = false;
      this.editImportant = false;
      this.isReadonly = false;
    }
    else if(task == 'RV-01' || task == 'RV-01-1'){
      this.btnFormSubmit = true;
      this.btnFormSave = true;
      this.btnFormReject = false;
      this.btnFormCancel = true;
      this.btnFormEdit = false;
      this.editImportant = false;
      this.isReadonly = true;
    }
    else if (task == 'CA-05') {
      this.btnFormSubmit = true;
      this.btnFormSave = true;
      this.btnFormReject = false;
      this.btnFormCancel = true;
      this.btnFormEdit = true;
      this.editImportant = false;
      this.isReadonly = true;
    }
    else if (task == 'CA-00-1') {
      this.btnFormSubmit = false
      this.btnFormSave = true
      this.btnFormReject = false
      this.btnFormCancel = false
      this.btnFormEdit = true
      this.editImportant = false
      this.isReadonly = true
    }
    else {
      this.btnFormSubmit = true;
      this.btnFormSave = false;
      this.btnFormReject = true;
      this.btnFormCancel = false;
      this.btnFormEdit = false;
      this.editImportant = true;
      this.isReadonly = true;
    }
  }

  openBlackList() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.blackListDialog.open();
    }, 200);

  }

  checkStep(subId: any): boolean {
    let result: boolean = true;
    let toTerm: number = 0, fromTerm: number = 0, term = Number(this.myCaHead.listbgdetail[subId-1].terms);
    let dataStep = this.myCaHead.listbgdetail[subId-1].listcastep;
    let length = dataStep.length;
    for (let i = 0; i < dataStep.length; i++) {
      if (i == 0) {
        if (dataStep[i].from_term != '1') {
          this.validateAlert.addMessage('- First Step Must Be 1');
          result = false;
        }
      }

      if (Number(dataStep[i].from_term) == toTerm + 1) {
        if (dataStep[i].from_term > dataStep[i].to_term) {
          this.validateAlert.addMessage('- Number of Terms in Table incorrect');
          result = false;
        }
        if (toTerm >= dataStep[i].from_term) {
          this.validateAlert.addMessage('- Number of Terms in Table incorrect');
          result = false;
        }
      }
      else {
        this.validateAlert.addMessage('- Number of Terms in Table incorrect');
        result = false;
      }

      toTerm = Number(dataStep[i].to_term);
      fromTerm = Number(dataStep[i].from_term);
      if (i == length - 1) {
        if (dataStep[i].to_term != term) {
          this.validateAlert.addMessage('- Invalid Period');
          result = false;
        }
      }
    }
    return result;
  }

  checkSumStep(subId): boolean {
    let result = true;
    let sumInstallment: number = 0, term: number, finAmtEVat: number = this.myCaHead.listbgdetail[subId].fin_amt_e_vat;
    let dataStep = this.myCaHead.listbgdetail[subId].listcastep;
    for (let data of dataStep) {
      term = Number(data.to_term) - Number(data.from_term) + 1;
      sumInstallment = sumInstallment + (term * Number(data.inst_e_vat));
    }
    if (sumInstallment < finAmtEVat) {
      result = false;
    }
    return result;
  }

  costBalance(caDetail: caBgDetail[]): boolean {
    //console.log('In')
    let sum = 0, result = true;
    if (this.myCaHead.ca_type != '3') {
      for (let detail of caDetail) {
        if (!detail.group_nme) {
          sum = 0;
          detail.listbgdetailsub.forEach((value) => {
            sum += Number(value.asst_amt_e_vat);
          });
          /*sum = detail.listbgdetailsub.map(value => Number(value.asst_amt_e_vat)).reduce((total, currentValue) => {
           return total + currentValue;
           });
           console.log(sum);*/
          /*sum = detail.listbgdetailsub.reduce((total,currentValue)=>{
           console.log(total,currentValue);
           return 0;
           //return Number(total.asst_amt_e_vat)+currentValue.asst_amt_e_vat;
           });*/
          /*for (let detailSub of detail.listbgdetailsub) {
           //console.log(typeof detailSub.asst_amt_e_vat, detailSub.asst_amt_e_vat)
           sum += Number(detailSub.asst_amt_e_vat);
           }*/
          //console.log(sum.toFixed(2), Number(detail.asst_amt_e_vat).toFixed(2));
          if ((sum.toFixed(2) != Number(detail.asst_amt_e_vat).toFixed(2)) && detail.lc_flg == 'N') {
            result = false;
            break;
          }
        }
        else {
          if (detail.listbgdetailsub.length == 0) {
            result = false;
            break;
          }
          for (let detailSub of detail.listbgdetailsub) {
            if (Number(detail.asst_amt_e_vat) != Number(detailSub.asst_amt_e_vat)) {
              result = false;
              break;
            }
          }
        }
      }
    }
    //console.log('Out')
    return result;
  }

  checkOsDealer(caDetail : caBgDetail[]) : boolean {
    let result = [];
    let check : boolean = true;
    caDetail.reduce((res,value)=>{
      if(value.dealer_code && value.buy_back_amt){
        if(!res[value.dealer_code,value.buy_back_amt]){
          res[value.dealer_code,value.buy_back_amt] = {
              fin_amt_e_vat : 0,
              dealer_code : value.dealer_code,
              buy_back_amt : value.buy_back_amt
            }
          result.push(res[value.dealer_code,value.buy_back_amt])
        }
        res[value.dealer_code,value.buy_back_amt].fin_amt_e_vat += value.fin_amt_e_vat;
        return res;
      }
    },{})

    result.forEach(value=>{
      if(value.fin_amt_e_vat <= value.buy_back_amt){

      } else {
        check = false;
      }
    })
    return check
  }

  setGroup(data: string) {
    this.myCaHead.joint_seller_group = data;
  }

  setGroupName(data: string) {
    this.myCaHead.join_group_name = data;
  }

  setLimit(data: string) {
    this.myCaHead.join_group_cr = data;
  }

  clickFile(index : number){
    let partDownload : string = "http://picask:DC8C3078BC63EAA@";
    partDownload = partDownload + this.partFileCa + "\\" + this.myCaHead.ca_no.replace(/\//gi, "_") + "\\" + this.listFileCa[index];
    window.open(partDownload, "_blank");
  }

  onClickEdit = () => {
    this.btnFormEdit = false
    this.isReadonly = false
    this.checkTask.push("CA-05")
  }

  sourceChange(){
    this.myCaHead.intro_by = '';
    this.myCaHead.intro_by_name = '';
    this.controlIntro(this.myCaHead.intro_mthd_cd);
  }

  controlIntro(source: string) {
    if (source == "40" || source == "53" || source == "300" || source == "403" || source == "90") {
      this.OutURL = "";
    } else {
      this.OutURL = this.service.url + this.service.sale_call_api
        + "/ask/salecall/GetINTRO?device=Web&user=" + this.userStorage.getUserName()
        + "&Comcode=" + this.userStorage.getComCode() + "&INTRO_MTHD_CD=" + source;
    }
    console.log(this.OutURL);
  }

  setIntroName(data: string) {
    this.myCaHead.intro_by_name = data;
  }

  setIntroValue(data: string) {
    this.myCaHead.intro_by = data;
  }


  ChkAmtCreditLine(caDetail: caBgDetail[]): boolean {
    //console.log('ChkAmtCreditLine In');
    let sum : number = 0,result : boolean = true;

      for (let detail of caDetail) {
        sum += Number(detail.fin_amt_e_vat);

        }
    if (sum <= Number(this.myCaHead.main_amount))
      result = true
    else
      result = false
    // console.log(sum);
    // console.log(this.myCaHead.main_amount);
    // console.log(result);
    return result;
  }

}
