import {EventEmitter, Injectable} from "@angular/core";
import {ListPricing} from "./model/getDataPricing";
import {ListContext} from "./model/getDataContext";
import {ListDetail} from "./model/getDataDetail";
import {getDataAppForm} from "./model/getDataAppForm";
import {ListBuyer} from "./model/getDataBuyer";
import {ListGuarantor} from "./model/getDataGuarantor";
import {ListCollateral} from "./model/getDataCollateral";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {ListAnswer} from "./model/getListAnswer";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {HttpClient} from "@angular/common/http";
import {ListReason} from "./model/getDataReason";
import {ApplyEmit} from "./model/applyEmit";
import {AppFormNew} from "./model/appFormNew";
import {AppFormRenew} from "./model/appFormRenew";
import {GetDataCustomer} from "./model/getDataCustomer";

@Injectable()
export class AppFormService {

  constructor(private http: HttpClient,
              private user: UserStorage,
              private service: ServiceEndpoint) {
  }


  eventListTabLeasing = new EventEmitter<ListDetail[]>();
  listTabLeasing: ListDetail[] = [];

  setTabLeasing(listLeasing: ListDetail[]) {
    this.listTabLeasing = listLeasing;
    this.eventListTabLeasing.emit(listLeasing);
  }

  eventTabBuyer = new EventEmitter<ListBuyer[]>();
  listTabBuyer: ListBuyer[] = [];

  setTabBuyer(listBuyer: ListBuyer[]) {
    this.listTabBuyer = listBuyer;
    this.eventTabBuyer.emit(listBuyer);
  }

  eventTabGuarantor = new EventEmitter<ListGuarantor[]>();
  listTabGuarantor: ListGuarantor[];

  setTabGuarantor(listGuarantor: ListGuarantor[]) {
    this.listTabGuarantor = listGuarantor;
    this.eventTabGuarantor.emit(listGuarantor);
  }

  eventTabPricing = new EventEmitter<ListPricing[]>();
  listTabPricing: ListPricing[];

  setTabPricing(listPricing: ListPricing[]) {
    this.listTabPricing = listPricing;
    this.eventTabPricing.emit(listPricing);
  }

  eventTabLoan = new EventEmitter<ListDetail>();
  dataLoan: ListDetail;

  setTabLoan(dataLoan: ListDetail) {
    this.dataLoan = dataLoan;
    this.eventTabLoan.emit(dataLoan);
  }

  eventTabCollateral = new EventEmitter<ListCollateral[]>();
  listTabCollateral: ListCollateral[] = [];

  setTabCollateral(listTabCollateral: ListCollateral[]) {
    this.listTabCollateral = listTabCollateral;
    this.eventTabCollateral.emit(listTabCollateral);
  }

  eventTabReason = new EventEmitter<ListReason[]>();
  listTabReason: ListReason[];

  setTabReason(listTabReason: ListReason[]) {
    this.eventTabReason.emit(listTabReason);
    this.listTabReason = listTabReason;
  }

  eventTabContext = new EventEmitter<ListContext[]>();
  listTabContext: ListContext[];

  setTabContext(listTabContext: ListContext[]) {
    this.eventTabContext.emit(listTabContext);
    this.listTabContext = listTabContext;
  }

  eventTabExposure = new EventEmitter<boolean>();

  setTabExposure() {
    this.eventTabExposure.emit(true);
  }

  clearData() {
    this.setTabCustomer(new GetDataCustomer);
    this.setTabGuarantor([]);
    this.setTabContext([]);
  }

  editEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  inquiry : EventEmitter<boolean> = new EventEmitter<boolean>();

  appFormData: getDataAppForm;

  setAppFormData(data: getDataAppForm) {
    this.appFormData = data;
  }

  getAppFormData() {
    return this.appFormData;
  }

  ansWer: any;

  setAnsWer(ansWer: any) {
    this.ansWer = ansWer;
  }

  getAnsWer() {
    return this.ansWer;
  }

  listApplicationType: ListAnswer[] = [];
  listJointBuyer: ListAnswer[] = [];
  listBank: ListAnswer[] = [];
  listInsRate: ListAnswer[] = [];
  listFin: ListAnswer[] = [];
  listSubFin: ListAnswer[] = [];
  listSubFinLs: ListAnswer[] = [];
  listLease: ListAnswer[] = [];
  listPaid: ListAnswer[] = [];
  listCurType: ListAnswer[] = [];
  listBankIntRate: ListAnswer[] = [];
  listPayInterestMethod: ListAnswer[] = [];
  listIntro: ListAnswer[] = [];
  listJointSeller: ListAnswer[] = [];
  listAnalyst: ListAnswer[] = [];
  listAnalystLeader: ListAnswer[] = [];
  listReCommendation: ListAnswer[] = [];

  setListAns(jsons: any[]) {
    this.listApplicationType = [];
    this.listJointBuyer = [];
    this.listBank = [];
    this.listInsRate = [];
    this.listFin = [];
    this.listSubFin = [];
    this.listSubFinLs = [];
    this.listLease = [];
    this.listPaid = [];
    this.listCurType = [];
    this.listBankIntRate = [];
    this.listPayInterestMethod = [];
    this.listIntro = [];
    this.listJointSeller = [];
    this.listAnalyst = [];
    this.listAnalystLeader = [];
    this.listReCommendation = [];
    for (let json of jsons) {
      if (json.TITLE === 'APT') {
        this.listApplicationType.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'JOIN_B') {
        this.listJointBuyer.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'BANK') {
        this.listBank.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'TYPE') {
        this.listInsRate.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'FIN') {
        this.listFin.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'SUB_FIN') {
        this.listSubFin.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'SUB_FIN_LS') {
        this.listSubFinLs.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'Lease') {
        this.listLease.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'PAID') {
        this.listPaid.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'CUR_TYPE') {
        this.listCurType.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'BANK_INT_RATE') {
        this.listBankIntRate.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'CLGP-TYP') {
        this.listPayInterestMethod.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'SOURCE') {
        this.listIntro.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'JOINT_S') {
        this.listJointSeller.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'VER') {
        this.listAnalyst.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'VER_HEAD') {
        this.listAnalystLeader.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
      else if (json.TITLE === 'COND_CA') {
        this.listReCommendation.push(new ListAnswer(json.ID_CODE, json.REMARK, json.REMARK1, json.KEY1, json.TITLE));
      }
    }
  };

  getDetailAppForm(device: string, userCode: string, com_code: string, ap_no: string) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/AppFormServicePOST`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    let data = {"device": device, "userCode": userCode, "comCode": com_code, "apNo": ap_no};
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  getSave(action: string, type: string) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/SaveAndSubmit`;
    //const url = `http://localhost:8080/AppForm_WebServices/ask/appForm/SaveAndSubmit`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    let data = {
      "device": "web",
      "userName": this.user.getUserName(),
      "action": action,
      "data": this.getAppFormData(),
      "type": type,
      "userCode": this.user.getCode()
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  applyEmit = new EventEmitter<ApplyEmit>();
  applyEmitTemp: ApplyEmit = new ApplyEmit();

  setProdTypeAppForm(pEmit: any) {
    this.applyEmitTemp = pEmit;
    this.applyEmit.emit(pEmit);
  }

  selectNew: AppFormNew;
  selectRenew: AppFormRenew;

  setSelectNew(selected: AppFormNew) {
    this.selectNew = selected;
  }

  setSelectRenew(selected: AppFormRenew) {
    this.selectRenew = selected;
  }

  getProductNewRenew(type) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/getProductNewRenew`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    let data =
      {
        "device": "web",
        "userCode": this.user.getCode(),
        "type": type
      };
    return this.http.post(url, JSON.stringify(data), options);
  }

  checkActiveFactoring(newCardNo, creditType) {
    const url = this.service.url + this.service.appform_api + '/ask/appForm/checkActiveFactoring?device=web&userName=' + this.user.getUserName() +
      '&newCardNo=' + newCardNo +
      '&creditType=' + creditType;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }

  checkFactoring(entCode, newCardNo) {
    const url = this.service.url + this.service.appform_api + '/ask/appForm/checkFactoring?device=web&userName=' + this.user.getUserName() +
      '&entCode=' + entCode +
      '&newCardNo=' + newCardNo;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }

  checkBlackList(newCardNo) {
    const url = this.service.url + this.service.appform_api + '/ask/appForm/checkBlackList?device=web&userName=' + this.user.getUserName() +
      '&newCardNo=' + newCardNo;
    console.log(url);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  eventTabCustomer = new EventEmitter<GetDataCustomer>();
  dataCustomer: GetDataCustomer = new GetDataCustomer;

  setTabCustomer(data) {
    this.dataCustomer = data;
    this.eventTabCustomer.emit(data);
  }

  calInstallment(finAmtEVat, term, flatRate) {
    const url = this.service.url + this.service.appform_api + '/ask/appForm/calInstallment?device=web&userName=' + this.user.getUserName() +
      '&finAmtEVat=' + finAmtEVat +
      '&term=' + term +
      '&flatRate=' + flatRate;

    /*const url = 'http://localhost:8080/MKS_WebServices/ask/appForm/calInstallment?device=web&userName=' + this.user.getUserName() +
     '&finAmtEVat=' + finAmtEVat +
     '&term=' + term +
     '&flatRate=' + flatRate;*/
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  calculateIrr(subId: any, calType: any) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/CalculateIrr`;
    //const url = 'http://localhost:8080/MKS_WebServices/ask/appForm/CalculateIrr';
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    let dataDetail = this.getAppFormData().listDetail[subId - 1];
    let sumCash = 0;
    let cltType = '';
    let intRate = 0;
    for (let objCollateral of this.getAppFormData().listCollateral) {
      if (objCollateral.clt_type = '7') {
        sumCash = sumCash + objCollateral.clt_amt;
        cltType = objCollateral.cal_int_type;
        intRate = objCollateral.int_rate;
      }
    }

    let data = {
      "device": "web",
      "userCode": this.user.getCode(),
      "calType": calType,
      "finType": dataDetail.fin_typ,
      "installmentExcVat": dataDetail.installment_e_vat ? dataDetail.installment_e_vat : 0,
      "installmentVat": dataDetail.installment_vat ? dataDetail.installment_vat : 0,
      "flatRate": dataDetail.flat_rate ? dataDetail.flat_rate : 0,
      "terms": dataDetail.terms ? dataDetail.terms : 0,
      "schedule": dataDetail.schedule,
      "stepList": dataDetail.listStep,
      "disburseDate": dataDetail.disburse_dt,
      "firstDate": dataDetail.first,
      "isBeginning": dataDetail.adv_arr,
      "grossIrr": dataDetail.gross_irr ? dataDetail.gross_irr : 0,
      "netIrr": dataDetail.net_irr ? dataDetail.net_irr : 0,
      "finExcVat": dataDetail.fin_amt_e_vat ? dataDetail.fin_amt_e_vat : 0,
      "expense": dataDetail.es_expense ? dataDetail.es_expense : 0,
      "revenue": dataDetail.es_revenue ? dataDetail.es_revenue : 0,
      "depExcVat": dataDetail.dep_amt_e_vat ? dataDetail.dep_amt_e_vat : 0,
      "rvExcVat": dataDetail.rv_amt_e_vat ? dataDetail.rv_amt_e_vat : 0,
      "cashDep": sumCash,
      "cashType": cltType,
      "cashIntRate": intRate
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  approveReject(comCode, caNo, approveType, approveFlg, remark) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/caApproveReject`;
    // const url = `http://localhost:8080/MKS_WebServices/ask/appForm/caApproveReject`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    let data = {
      "device": "web",
      "comCode": comCode,
      "caNo": caNo,
      "approveType": approveType,
      "approveFlg": approveFlg,
      "userCode": this.user.getCode(),
      "remark": remark
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  saveAnsWer(comCode, caNo, ansWer) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/saveAnsWer`;
    //const url = `http://localhost:8080/WebServices_AppForm/ask/appForm/saveAnsWer`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    let data = {
      "device": "web",
      "userCode": this.user.getCode(),
      "comCode": comCode,
      "caNo": caNo,
      "ansWer": ansWer
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }
}
