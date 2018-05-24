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


@Component({
  selector: 'app-credit-application',
  templateUrl: './credit-application.component.html'

})
export class CreditApplicationComponent implements OnInit, OnDestroy {
  @Output('business_detail_out') business_detail_out:EventEmitter<string> = new EventEmitter();
  subscripData: Subscription;
  subscripMaster: Subscription;
  myCaHead: caHead;
  comCode: string;
  caNo: string;
  subParams: Subscription;
  @ViewChild('dialogalert') dialogalert: AlertDialogComponent;
  @ViewChild('Questiondialog') Questiondialog: AlertDialogComponent;
  @ViewChild('reaSonDialog') reaSonDialog: ActionDialogComponent;
  @ViewChild('blackListDialog') blackListDialog: ActionDialogComponent;
  @ViewChild('validateAlert') validateAlert: AlertDialogComponent;



  task: string = '';
  taskShorten: string = '';
  btnFormSave: boolean = true;
  btnFormSubmit: boolean = true;
  btnFormCancel: boolean = true;
  btnFormReject: boolean = true;
  btnFormEdit: boolean = true;
  isReadonly: boolean = true;

  checkLoader: boolean = false;

  approvePerson: string = '';
  comment: string = '';

  index: Number;
  captionsTop: String[] = [];
  captionsBot: String[] = ['Apply CA', 'Revise', 'Checker', 'Scoring', 'Scoring Approve', 'PrintDoc', 'Approve', 'Done'];

  urlSeller  : string ;
  dataSeller : any;
  constructor(private userStorage: UserStorage,
              private route: ActivatedRoute,
              private router: Router,
              private service: ServiceEndpoint,
              private creditApplicationService: creditApplicationService,
              private dateUtils: DateUtils) {
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
          this.creditApplicationService.setCaHead(this.myCaHead);
          this.index = this.captionsBot.indexOf(this.myCaHead.current_task) + 1;
          if (this.myCaHead.caentity.new_card_no) {
            this.creditApplicationService.setNewCardNo(this.myCaHead.caentity.new_card_no);
          }
        });

  };

  submitOrsave: string = '';

  questionAction(action: string) {
    this.Questiondialog.reset();
    if (action == 'SAVE') {
      this.submitOrsave = action;
    }
    else if (action == 'SUBMIT') {
      this.submitOrsave = action;
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
    if (value == 'SUBMIT') {
      let isPass = this.verification();
      if (this.myCaHead.current_task == 'Approve') {
        this.reaSonDialog.open();
      } else {
        isPass ? this.processCA(value) : this.validateAlert.open();
      }
    } else if (value == 'SAVE') {
      this.processCA(value);
    } else if (value == 'REJECT') {
      this.reaSonDialog.open();
    } else if (value == 'CANCEL') {
      this.reaSonDialog.open();
    }
  }

  verification(): boolean {
    this.validateAlert.list_msg = [];
    this.validateAlert.single = 0;
    if (this.taskShorten == 'AM') {
      if (this.myCaHead.listamendcontent.length = 0) {
        this.validateAlert.addMessage('- Content && Reason')
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
        if (caPricing.expire_dt < this.dateUtils.dateToString(new Date(), 'dd/MM/yyyy')) {
          this.validateAlert.addMessage('- Expire Date < Now');
        }
        if (caPricing.rate_type == 'Fix') {
          if (!caPricing.int_rate) {
            this.validateAlert.addMessage('- Interest Rate');
          }
        }
        else if (caPricing.rate_type == 'Float') {
          console.log(caPricing.rate_bank , caPricing.rate_m, caPricing.rate_spread)
          if (!caPricing.rate_bank || !caPricing.rate_m || !caPricing.rate_spread) {
            console.log('In');
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
        if (!detailLoan.es_revenue) {
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
          if (!this.checkStep(0)) {

          }
          if (!this.checkSumStep(0)) {
            this.validateAlert.addMessage('- Installment * Term < Request Credit Line');
          }
        }
        if (detailLoan.first < detailLoan.disburse_dt) {
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
          this.creditApplicationService.calculateIrr(detailLoan.sub_id, detailLoan.selectForCall).subscribe(
            (value: any) => {
              console.log(value);
              if (value.CODE == '200') {
                /*detail.fin_amt_e_vat = value.LIST_DATA[0].finExcVat;
                 detail.fin_amt_vat = value.LIST_DATA[0].finVat;
                 detail.fin_amt_i_vat = value.LIST_DATA[0].finIncVat;
                 detail.installment_e_vat = value.LIST_DATA[0].installmentExcVat;
                 detail.installment_vat = value.LIST_DATA[0].installmentVat;
                 detail.installment_i_vat = value.LIST_DATA[0].installmentIncVat;
                 detail.flat_rate = value.LIST_DATA[0].flatRate;*/
                detailLoan.gross_irr = value.LIST_DATA[0].grossIrr;
                detailLoan.net_irr = value.LIST_DATA[0].netIrr;
                detailLoan.net_irr_inc_deposit = value.LIST_DATA[0].netIrrIncDeposit;
              }
            }
          )
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
            if (!detail.terms) {
              this.validateAlert.addMessage('- Terms');
            }
            if (!detail.gross_irr) {
              this.validateAlert.addMessage('- Gross IRR');
            }
            if (!detail.fin_asst) {
              this.validateAlert.addMessage('- Financing Asset');
            }
            if (!detail.disburse_dt) {
              this.validateAlert.addMessage('- Disburse Date');
            }
            if ((!detail.installment_e_vat || !detail.installment_i_vat) && detail.listcastep.length == 0) {
              this.validateAlert.addMessage('- Installment');
            }

            if (this.validateAlert.list_msg.length > 0) {
              break;
            }
            else {
              this.creditApplicationService.calculateIrr(detail.sub_id, detail.selectForCall).subscribe(
                (value: any) => {
                  console.log(value);
                  if (value.CODE == '200') {
                    /*detail.fin_amt_e_vat = value.LIST_DATA[0].finExcVat;
                     detail.fin_amt_vat = value.LIST_DATA[0].finVat;
                     detail.fin_amt_i_vat = value.LIST_DATA[0].finIncVat;
                     detail.installment_e_vat = value.LIST_DATA[0].installmentExcVat;
                     detail.installment_vat = value.LIST_DATA[0].installmentVat;
                     detail.installment_i_vat = value.LIST_DATA[0].installmentIncVat;
                     detail.flat_rate = value.LIST_DATA[0].flatRate;*/
                    detail.gross_irr = value.LIST_DATA[0].grossIrr;
                    detail.net_irr = value.LIST_DATA[0].netIrr;
                    detail.net_irr_inc_deposit = value.LIST_DATA[0].netIrrIncDeposit;
                  }
                }
              )
            }
          }
          if (!this.costBalance(caDetail)) {
            this.validateAlert.addMessage('- Selling price not equal to the price of each Asset');
          }
        }
      }
    }
    return this.validateAlert.list_msg.length > 0 ? false : true;
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
    this.creditApplicationService.processCa("web"
      , this.userStorage.getUserName()
      , value, this.comment).subscribe(
      (json: any) => {
        this.checkLoader = false;
        //console.log(json);
        let stringMsg: string = '';
        if (value == 'SAVE') {
          stringMsg = 'Save'
        }
        else {
          stringMsg = 'Submit'
        }
        if (json.CODE == '200') {

          if (value == 'SAVE') {
            this.saveComplete = true;
          }
          ;
          if (value == 'SUBMIT') {
            this.submitComplete = true;
          }
          ;
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
        if (this.task == 'CA-05'){
        this.onPrintSubmit();
      }
      this.submitComplete = false;
      this.router.navigate(['/home']);
    } else if (this.saveComplete) {
      this.saveComplete = false;
      console.log('Save Reload');
      this.callOpendata();
    }
    this.saveComplete = false;
    this.submitComplete = false;
  }

  onCancalCA() {
    this.submitComplete = false;
    this.saveComplete = false;
    this.checkLoader = true;
    this.creditApplicationService.callRejectCa("web"
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
    this.creditApplicationService.callRejectCa("web"
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

  onPrintSubmit() {
    if (this.caNo) {
      let ca_no: string = this.caNo.replace("/", "_");
      let strURL = '';
      let strRepNameFr3 = '';
      if (this.taskShorten == 'AM') {
        if (this.myCaHead.sbu_typ == 'FDO') {
          strRepNameFr3 = 'CA_AMEND_FAC_01.fr3';
        } else {
          strRepNameFr3 = 'CA_AMEND_HPLS_01.fr3';
        }
        strURL = this.service.url_report + `/result?report=MKT\\${strRepNameFr3}&ca_no=${ca_no}&com_code=${this.comCode}&amend_time=${this.myCaHead.amend_time}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'AM_'+ca_no+'_T'+this.myCaHead.amend_time}&draft=N`;
      } else {
        if (this.myCaHead.sbu_typ == 'FDO') {
          strRepNameFr3 = 'CA_DO_01.fr3';
        } else if (this.myCaHead.sbu_typ == 'P') {
          strRepNameFr3 = 'CA_DL_01.fr3';
        } else if ((this.myCaHead.sbu_typ == 'HP') || (this.myCaHead.sbu_typ == 'LS') || (this.myCaHead.sbu_typ == 'HPLS')) {
          strRepNameFr3 = 'CA_HPLS_01.fr3';
        }
        strURL = this.service.url_report + `/result?report=MKT\\${strRepNameFr3}&p_ca_no=${ca_no}&p_id_card=${this.creditApplicationService.newCardNo}&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'CA_'+ca_no}&draft=N`;
      }
      console.log(strURL);
      window.open(strURL, '_blank');
    }
  }

  showReport() {

    if (this.caNo) {
      let ca_no: string = this.caNo.replace("/", "_");
      let strURL = '';
      let strRepNameFr3 = '';
      if (this.taskShorten == 'AM') {
        if (this.myCaHead.sbu_typ == 'FDO') {
          strRepNameFr3 = 'CA_AMEND_FAC_01.fr3';
        } else {
          strRepNameFr3 = 'CA_AMEND_HPLS_01.fr3';
        }
        strURL = this.service.url_report + `/result?report=MKT\\${strRepNameFr3}&ca_no=${ca_no}&com_code=${this.comCode}&amend_time=${this.myCaHead.amend_time}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'AM_'+ca_no+'_T'+this.myCaHead.amend_time}&draft=Y`;
      } else {
        if (this.myCaHead.sbu_typ == 'FDO') {
          strRepNameFr3 = 'CA_DO_01.fr3';
        } else if (this.myCaHead.sbu_typ == 'P') {
          strRepNameFr3 = 'CA_DL_01.fr3';
        } else if ((this.myCaHead.sbu_typ == 'HP') || (this.myCaHead.sbu_typ == 'LS') || (this.myCaHead.sbu_typ == 'HPLS')) {
          strRepNameFr3 = 'CA_HPLS_01.fr3';
        }
        strURL = this.service.url_report + `/result?report=MKT\\${strRepNameFr3}&p_ca_no=${ca_no}&p_id_card=${this.creditApplicationService.newCardNo}&ca_no=${ca_no}&com_code=${this.comCode}&format=pdf&cmd_folder=${ca_no}&cmd_path=1&cmd_pdf=${'CA_'+ca_no}&draft=Y`;
      }
      console.log(strURL);
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
      this.isReadonly = true;
    }
    else if ((task == 'CA-01') || (task == 'CA-01-1') || (task == 'AM-01') || (task == 'AM-01-1')) {
      this.btnFormSubmit = true;
      this.btnFormSave = true;
      this.btnFormReject = false;
      this.btnFormCancel = true;
      this.btnFormEdit = false;
      this.isReadonly = false;
    }
    else if (task == 'CA-05'){
      this.btnFormSubmit = true;
      this.btnFormSave = false;
      this.btnFormReject = true;
      this.btnFormCancel = false;
      this.btnFormEdit = false;
      this.isReadonly = true;
    }
    else {
      this.btnFormSubmit = true;
      this.btnFormSave = false;
      this.btnFormReject = true;
      this.btnFormCancel = false;
      this.btnFormEdit = false;
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
    let toTerm : number = 0, fromTerm : number = 0, term = Number(this.myCaHead.listbgdetail[subId].terms);
    let dataStep = this.myCaHead.listbgdetail[subId].listcastep;
    let length = dataStep.length;
    for (let i = 0; i < dataStep.length; i++) {
      if (i == 0) {
        if (dataStep[i].from_term != '1') {
          this.validateAlert.addMessage('- First Step Must Be 1');
          result = false;
        }
      }

      if (Number(dataStep[i].from_term) == toTerm+1) {
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
    let sumInstallment :number = 0, term : number, finAmtEVat : number = this.myCaHead.listbgdetail[subId].fin_amt_e_vat;
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
    let sum = 0, result = true;

    for (let detail of caDetail) {
      if (detail.group_nme) {
        sum = 0;
        for (let detailSub of detail.listbgdetailsub) {
          sum += detailSub.asst_amt_e_vat;
        }
        if ((sum.toFixed(2) != detail.asst_amt_e_vat.toFixed(2)) && detail.lc_flg == 'N') {
          result = false;
          break;
        }
      }
      else {
        if(detail.listbgdetailsub.length == 0){
          result = false;
          break;
        }
        for (let detailSub of detail.listbgdetailsub) {
          if (detail.asst_amt_e_vat.toFixed(2) != detailSub.asst_amt_e_vat.toFixed(2)) {
            result = false;
            break;
          }
        }
      }
    }
    /*caDetail.forEach(
     (value) => {
     if(value.group_nme){
     value.listbgdetailsub.forEach(
     (value) => {
     sum = sum + value.asst_amt_e_vat
     })

     if(sum.toFixed(2) != value.asst_amt_e_vat.toFixed(2) && value.lc_flg == 'N') {
     result = false;
     }
     }
     });*/
    //console.log(result);
    return result;
  }

  setGroup(data: string){
    {this.myCaHead.joint_seller_group = data;}

  }

  setGroupName(data: string){
    {this.myCaHead.join_group_name = data;}

  }

  setLimit(data: string){
    {this.myCaHead.join_group_cr = data;}

  }
}
