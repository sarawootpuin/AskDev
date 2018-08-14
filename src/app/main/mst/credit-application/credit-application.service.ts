import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {caHead} from "./model/ca-head";
import {caListMaster} from "./model/ca_listmaster";
import {caGuarantor} from "./model/ca-guarantor";
import {DatePipe} from "@angular/common";
import {caBgDetail} from "./model/ca-bgdetail";
import {caBgDetailSub} from "./model/ca-bgdetailsub";
import {caBuyer} from "./model/ca-buyer";
import {caAmendKeyIn} from "./model/ca-amendkeyin";
import {caNationality} from "./model/ca-nationality";
import {caPricing} from "./model/ca-pricing";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class creditApplicationService {

  constructor(private http: HttpClient, private service: ServiceEndpoint,
              private userStorage: UserStorage,
              private dataPipe: DatePipe) {


  }

  sendCreditApplication(device: string, username: string, pccomcode: string, pcano: string) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/GetDataCA';

    let data = {
      "device": device,
      "username": username,
      "comcode": pccomcode,
      "cano": pcano
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  processCa(device: string, username: string, psendflg: string, reason: string) {
    //  psendflg ( 'SAVE' , 'SUBMIT' )
    // const url =  'http://localhost:8080/API_CA/ask/ca/SaveAndSubmit';
    const url = this.service.url + this.service.ca_api + `/ask/ca/SaveAndSubmit`;
    let data = {
      "device": device,
      "username": username,
      "comcode": this.caHead.com_code,
      "cano": this.caHead.ca_no,
      "action": psendflg,
      "reason": reason ? reason : '',
      "data": this.caHead
    }
    console.log('Before send data');
    console.log(data);
    console.log(JSON.stringify(data));
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  callRejectCa(device: string, username: string, action: string, reason: string, taskCode: string) {

    //  psendflg ( 'SAVE' , 'SUBMIT' )
    // const url =  'http://localhost:8080/API_CA/ask/ca/SaveAndSubmit';
    let url = '';

    if (action == 'REJECT') {
      url = this.service.url + this.service.ca_api + `/ask/ca/RejectCA`;
    } else if (action == 'CANCEL') {
      if (taskCode == 'CA') {
        url = this.service.url + this.service.ca_api + `/ask/ca/CancelCA`;
      }
      else if (taskCode == 'AM') {
        url = this.service.url + this.service.ca_api + `/ask/ca/CancelAmend`;
      }
      else if (taskCode == 'RV'){
        url = this.service.url + this.service.ca_api + `/ask/ca/ReviseRollbackData`;
      }
    }


    let data = {
      "device": device,
      "username": username,
      "comcode": this.caHead.com_code,
      "cano": this.caHead.ca_no,
      "reason": reason ? reason : ''

    };

    console.log('Before send data');
    console.log(data);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  caReportExpo() {
    const url = `http://192.168.112.125:8096/datasnap/rest/TServerMethods1/prc_temp1/ca_pkg.get_exposure_ca/p_id_card;/` + this.newCardNo + `;`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }

  getListMasterPost(device: string, username: string, pccomcode: string, pcano: string) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/GetListMaster';
    let data = {
      "device": device,
      "username": username,
      "comcode": pccomcode,
      "cano": pcano
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }

  getListBGExposure(device: string, pccomcode: string, pcano: string, pnewcard: string) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/GetExposure';
    let data = {
      "device": device,
      "username": this.userStorage.getUserName(),
      "comcode": pccomcode,
      "cano": pcano,
      "idcard": pnewcard
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);

  }

  //////////  Set List Master
  listFNM: caListMaster[] = [];
  listFNME: caListMaster[] = [];
  listCRD: caListMaster[] = [];
  listNTY: caListMaster[] = [];
  listBNK: caListMaster[] = [];
  listSTS: caListMaster[] = [];
  listGRP_CUS: caListMaster[] = [];
  listOC: caListMaster[] = [];
  listPOS_BG: caListMaster[] = [];
  listCS_BUS: caListMaster[] = [];
  listINE: caListMaster[] = [];
  listIND: caListMaster[] = [];
  listPAID: caListMaster[] = [];
  listBANK_INT_RATE: caListMaster[] = [];
  listFIN: caListMaster[] = [];
  listSUB_FIN: caListMaster[] = [];
  listSUB_FINLS: caListMaster[] = [];
  listLease: caListMaster[] = [];
  listFAT: caListMaster[] = [];
  listFAC: caListMaster[] = [];
  listFAS: caListMaster[] = [];
  listEQP: caListMaster[] = [];
  listBDY: caListMaster[] = [];
  listENG_TYPE: caListMaster[] = [];
  listRMK_MKT: caListMaster[] = [];
  listCOND_MKT: caListMaster[] = []
  listCOND_CA: caListMaster[] = [];
  listInsRate: caListMaster[] = [];
  listAPT: caListMaster[] = [];
  listCUR_TYPE: caListMaster[] = [];
  listRMK_ATT: caListMaster[] = [];
  listNTN: caListMaster[] = [];
  listAPV_REVISE: caListMaster[] = [];
  listINTRO: caListMaster[] =[];

  eventListMaster = new EventEmitter();

  setListMaster(json: any[]) {

    this.listFNM = [];
    this.listFNME = [];
    this.listCRD = [];
    this.listNTY = [];
    this.listBNK = [];
    this.listSTS = [];
    this.listGRP_CUS = [];
    this.listOC = [];
    this.listPOS_BG = [];
    this.listCS_BUS = [];
    this.listINE = [];
    this.listIND = [];
    this.listPAID = [];
    this.listBANK_INT_RATE = [];
    this.listFIN = [];
    this.listSUB_FIN = [];
    this.listSUB_FINLS = [];
    this.listLease = [];
    this.listFAT = [];
    this.listFAC = [];
    this.listFAS = [];
    this.listEQP = [];
    this.listBDY = [];
    this.listENG_TYPE = [];
    this.listRMK_MKT = [];
    this.listCOND_MKT = [];
    this.listCOND_CA = [];
    this.listInsRate = [];
    this.listAPT = [];
    this.listCUR_TYPE = [];
    this.listRMK_ATT = [];
    this.listNTN = [];
    this.listAPV_REVISE = [];
    this.listINTRO = [];

    for (let i = 0; i < json.length; i++) {
      if (json[i].type == 'FNM') {
        this.listFNM.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'FNME') {
        this.listFNME.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'CRD') {
        this.listCRD.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'BNK') {
        this.listBNK.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'STS') {
        this.listSTS.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'GRP_CUS') {
        this.listGRP_CUS.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'OC') {
        this.listOC.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'POS_BG') {
        this.listPOS_BG.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'CS_BUS') {
        this.listCS_BUS.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'INE') {
        this.listINE.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'IND') {
        this.listIND.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'PAID') {
        this.listPAID.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'BANK_INT_RATE') {
        this.listBANK_INT_RATE.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'FIN') {
        this.listFIN.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'SUB_FIN') {
        this.listSUB_FIN.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'SUB_FIN_LS') {
        this.listSUB_FINLS.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'Lease') {
        this.listLease.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'FAT') {
        this.listFAT.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'FAC') {
        this.listFAC.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'FAS') {
        this.listFAS.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'EQP') {
        this.listEQP.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'BDY') {
        this.listBDY.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'ENG_TYPE') {
        this.listENG_TYPE.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'NTY') {
        this.listNTY.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'RMK_MKT') {
        this.listRMK_MKT.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'COND_MKT') {
        this.listCOND_MKT.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'COND_CA') {
        this.listCOND_CA.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'INS-RATE') {
        this.listInsRate.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'APT') {
        this.listAPT.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'CUR_TYPE'){
        this.listCUR_TYPE.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'RMK_ATT'){
        this.listRMK_ATT.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'NTN'){
        this.listNTN.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'APV_REVISE'){
        this.listAPV_REVISE.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      } else if (json[i].type == 'INTRO'){
        this.listINTRO.push(new caListMaster(json[i].id_code, json[i].key1, json[i].key2, json[i].remark, json[i].remark_e, json[i].type));
      }
    }
    //console.log(this.listAPV_REVISE);
    this.eventListMaster.emit();
  }


  changedate(indate: any) {
    let strDate = this.dataPipe.transform(indate, 'dd/MM/yyyy');
    return strDate;
  }

////-----------------------  Event (Emit & subscribtion) ------------------

  //////  Set & Get  caHead (customer information)
  caHead: caHead;
  eventCaHead = new EventEmitter<caHead>();

  setCaHead(incaHead: caHead) {
    this.caHead = incaHead;
    this.eventCaHead.emit(incaHead);
  }

  getCaHead() : caHead{
    return this.caHead;
  }

  newCardNo: string;
  eventCardNo = new EventEmitter<string>();

  setNewCardNo(pNewCard: string) {
    this.newCardNo = pNewCard;
    this.eventCardNo.emit(pNewCard);
  }

  selectGuarantor: caGuarantor;
  eventSelectGuarantor = new EventEmitter<caGuarantor>();

  setSelectGuarantor(selectGuarantor: caGuarantor) {
    this.selectGuarantor = selectGuarantor;
    this.eventSelectGuarantor.emit(selectGuarantor);
  }


  //////  Asset & Sub Asset
  bgdetail: caBgDetail;
  eventBgdetail = new EventEmitter<caBgDetail>();

  setSelectBgdetail(value: caBgDetail) {
    this.bgdetail = value;
    this.eventBgdetail.emit(value);
  }

  bgdetailSub: caBgDetailSub;
  eventBgdetailSub = new EventEmitter<caBgDetailSub>();

  setSelectBgdetailSub(value: caBgDetailSub) {
    this.bgdetailSub = value;
    this.eventBgdetailSub.emit(value);

  }

  ////  Pricing Buyer
  eventcabuyer = new EventEmitter<caBuyer>();

  setSelectBuyer(value: caBuyer) {
    this.eventcabuyer.emit(value);
  }

  listCaAmendKeyIn: caAmendKeyIn[] = [];
  eventAmendKeyIn = new EventEmitter<caAmendKeyIn>();
  setSelectAmendKeyIn(value : caAmendKeyIn){
    this.eventAmendKeyIn.emit(value);
  }

  ////-----------------------End  Event (Emit & subscribtion) ------------------

  calculateIrr(subId: any, calType: any) {
    const url = this.service.url + this.service.appform_api + `/ask/appForm/CalculateIrr`;
    //const url = 'http://localhost:8080/MKS_WebServices/ask/appForm/CalculateIrr';
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    let dataDetail = this.caHead.listbgdetail[subId-1];
    let sumCash = 0;
    let cltType = '';
    let intRate = 0;
    for (let objCollateral of this.caHead.listcacollateral) {
      if (objCollateral.clt_type = '7') {
        sumCash = sumCash + objCollateral.clt_amt;
        cltType = objCollateral.cal_int_type;
        intRate = objCollateral.int_rate;
      }
    }
    let data = {
      "device": "web",
      "userCode": this.userStorage.getCode(),
      "calType": calType,
      "finType": dataDetail.fin_typ,
      "installmentExcVat": dataDetail.installment_e_vat ? dataDetail.installment_e_vat : 0,
      "installmentVat": dataDetail.installment_vat ? dataDetail.installment_vat : 0,
      "flatRate": dataDetail.flat_rate ? dataDetail.flat_rate : 0,
      "terms": dataDetail.terms ? dataDetail.terms : 0,
      "schedule": dataDetail.cal_inst_typ === 'Fix'? dataDetail.schedule : 'R',
      "stepList": dataDetail.listcastep,
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
      "cashIntRate": intRate,
      "withVat": dataDetail.with_vat ? dataDetail.with_vat : 'N'
    };
    console.log(data);
    return this.http.post(url, JSON.stringify(data), options);
  }

  calInstallment(finAmtEVat, term, flatRate) {
    const url = this.service.url + this.service.appform_api + '/ask/appForm/calInstallment?device=web&userName=' + this.userStorage.getUserName() +
      '&finAmtEVat=' + finAmtEVat +
      '&term=' + term +
      '&flatRate=' + flatRate;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.get(url, options);
  }

  checkFactoring(entCode, newCardNo) {
    const url = this.service.url + this.service.appform_api + '/ask/appForm/checkFactoring?device=web&userName=' + this.userStorage.getUserName() +
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

  listUseCreditLine() {
    const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=web&user=${this.userStorage.getCode()}&comcode=${this.userStorage.getComCode()}&task=CA-USED`;
    // const url = const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=${device}&user=${userCode}&comcode=${comCode}&task=${task}`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }

  listCaInquery() {
    const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=web&user=${this.userStorage.getCode()}&comcode=${this.userStorage.getComCode()}&task=CA-00`;
    // const url = const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=${device}&user=${userCode}&comcode=${comCode}&task=${task}`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }

  listSearch(task : string) {
    const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=web&user=${this.userStorage.getCode()}&comcode=${this.userStorage.getComCode()}&task=${task}`;
    // const url = const url = this.service.url + this.service.ca_api + `/ask/ca/TodoCA?device=${device}&user=${userCode}&comcode=${comCode}&task=${task}`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }

  UsedCreditLine(device: string, username: string, pccomcode: string, pcano: string) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/UsedCreditLine';

    let data = {
      "device": device,
      "username": username,
      "comcode": pccomcode,
      "cano": pcano
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(data);
    return this.http.post(url, data, options);
  }

  amendCa(device: string, userName: string, comCode: string, caNo: string) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/AmendInsertTempData';

    let data = {
      "device": device,
      "username": userName,
      "comcode": comCode,
      "cano": caNo
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //console.log(data);
    return this.http.post(url, data, options);
  }

  reviseCa(device: string, userName: string, comCode: string, caNo: string) {
    const url = this.service.url + this.service.ca_api + '/ask/ca/ReviseInsertTempData';

    let data = {
      "device": device,
      "username": userName,
      "comcode": comCode,
      "cano": caNo
    };
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    //console.log(data);
    return this.http.post(url, data, options);
  }

  findCaDirectoryPart(comCode : string, caNo : string) {
    const url = this.service.url + this.service.appform_api + `/ask/common/FindCaDirectoryPart`;
    const data =
      {
        "device": "web",
        "userCode": this.userStorage.getCode(),
        "comCode": comCode,
        "caNo": caNo
      };

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.post(url, data, options);
  }

  getCaDirectoryPart(comCode : string) {
    const url = this.service.url + this.service.appform_api + `/ask/common/GetCaDirectoryPart`;
    const data =
      {
        "device": "web",
        "userCode": this.userStorage.getCode(),
        "comCode": comCode
      };

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    return this.http.post(url, data, options);
  }
}
