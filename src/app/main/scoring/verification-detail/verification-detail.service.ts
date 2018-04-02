/**
 * Created by piradee.bu on 21/08/2560.
 */

import {EventEmitter, Injectable} from '@angular/core';
import 'rxjs';
import {ScrSubjModel} from "../model/scrsubject.model";
import {MainTabModel} from "../model/mainTab.model";
import {RowTableModel} from "../model/rowtable.model";
import {ToDoVerifierModel} from "../model/todo-verifier.model";
import {HttpClient} from "@angular/common/http";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {UserStorage} from "../../../shared/user/user.storage.service";
import {ScrCorp} from "../model/scrcorp.model";
import {CreditScoringHistoryModel} from "../model/creditScoringHistory.model";


@Injectable()
export class VerificationDetailService {
  eventListQuestionTab = new EventEmitter<ScrSubjModel[]>();
  eventTabMain = new EventEmitter<MainTabModel>();
  eventIdxTab = new EventEmitter<Number>();
  eventResultGrade = new EventEmitter<string>();
  eventCopyQuestionTab = new EventEmitter<Boolean>();
  eventIsLoading = new EventEmitter<Boolean>();
  listQuestionTabOriginal: ScrSubjModel[] = [];
  listQuestionTab: ScrSubjModel[] = [];
  tabMain: MainTabModel;
  allTabCopyHist: MainTabModel;
  listQuestionTab1: RowTableModel[] = [];
  idxTabCalScore: number = 0;
  todoVerifierSelected: ToDoVerifierModel;
  resultGrade: string = '';
  tempResultGrade: string = '';
  tempResultPointGrade: number = 0;
  stgId: string;
  isLoading: Boolean;
  userName: string = '';
  code: string = '';
  comCode: string = '';
  checkReadOnly: Boolean = false;
  checkEnquiry: Boolean = false;



  constructor(private http: HttpClient, private service: ServiceEndpoint
    , private userStorage: UserStorage) {
    this.userName = this.userStorage.getUserName();
    this.code = this.userStorage.getCode();
    this.comCode = this.userStorage.getComCode();

  }

  getToDoVerifier() {
    // const url = this.service.url + this.service.mks_tps +`/ask/scoring/ScoringGetToDo?device=test&user=CHOKCHAI.NI&comcode=ASKH&stgid=2`;
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringGetToDo?device=` + `web` + `&user=` + this.userName + `&comcode=` + this.comCode + `&stgid=` + this.stgId;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }


  checkDownAndDownPercent(): boolean {
    let answerA072 = 0;
    let answerA099 = 0;
    let tempResult = true;
    // เงินดาวน์(%) A072 และ เงินดาวน์ ต้องสัมพันธ์หัน
    if (this.tabMain.ent_typ === 'Customer') {
      for (var i = 0; i < this.tabMain.listTabScrSubj.length; i++) {
        for (var j = 0; j < this.tabMain.listTabScrSubj[i].listTableData.length; j++) {
          if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == 'A072') {
            answerA072 = Number(this.tabMain.listTabScrSubj[i].listTableData[j].answer);
          }
          else if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == 'A099') {
            answerA099 = Number(this.tabMain.listTabScrSubj[i].listTableData[j].answer);
            console.log('ass a099'+answerA099);
          }
        }
      }
      console.log('answerA072'+answerA072);
      console.log('answerA099'+answerA099);

      if (((answerA072 == 0) && (answerA099 != 0))
        || ((answerA072 != 0) && (answerA099 == 0))) {
        console.log('false');
        tempResult = false;
      }

    }
    return tempResult;
  }

  checkArrTopicVarridate(arrStrInput: string[]): boolean {
    let resultCheck = true;
    for (var i = 0; i < this.tabMain.listTabScrSubj.length; i++) {
      for (var j = 0; j < this.tabMain.listTabScrSubj[i].listTableData.length; j++) {
        console.log(arrStrInput.length);
        for (var k = 0; k < arrStrInput.length; k++) {
          if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == arrStrInput[k]) {
            console.log("all"+this.tabMain.listTabScrSubj[i].listTableData[j].topicCd);
            if (this.tabMain.listTabScrSubj[i].listTableData[j].answer) {
              if (this.tabMain.listTabScrSubj[i].listTableData[j].answer == 'N/A') {
                resultCheck = false;
                console.log(this.tabMain.listTabScrSubj[i].listTableData[j].topicCd);
                return resultCheck;
              }
            }
            else {
              console.log(this.tabMain.listTabScrSubj[i].listTableData[j].topicCd);
              resultCheck = false;
              return resultCheck;
            }
          }
        }

      }
    }

    return resultCheck;
  }

  validateDialogDecisionGrade(): string {
    let reulltCheck = false;
    let msgValidate = '';
    let arrInvidualCustomer = ["A005", "A006", "A007", "A020", "A024", "A026", "A073", "A074", "A075"
      , "A076", "A087", "A089", "A094", "A095", "A103", "A104", "A105"];
    let arrInvidualGuarantor = ["A005", "A006", "A007", "A020", "A024", "A026", "A073", "A074", "A075",
      "A076", "A087", "A089"];
    let arrJuristicCustomer = ["B002", "B004", "B005", "B006", "B007", "B009", "B010", "B012", "B089",
      "B090", "B091", "B102", "B104", "B109", "B110", "B119", "B120", "B121"];
    let arrJuristicGuarantor = ["B002", "B004", "B005", "B006", "B007", "B009", "B010", "B012", "B089"
      , "B090", "B091", "B092", "B102", "B104"];

    // if ((this.tabMain.ent_cat === 'Individual') && (this.tabMain.ent_typ === 'Customer')) {
    //   reulltCheck = this.checkArrTopicVarridate(arrInvidualCustomer);
    // }
    // else if ((this.tabMain.ent_cat === 'Individual') && (this.tabMain.ent_typ === 'Guarantor')) {
    //   reulltCheck = this.checkArrTopicVarridate(arrInvidualGuarantor);
    // }
    // else if ((this.tabMain.ent_cat === 'Juristic') && (this.tabMain.ent_typ === 'Customer')) {
    //   reulltCheck = this.checkArrTopicVarridate(arrJuristicCustomer);
    // }
    // else if ((this.tabMain.ent_cat === 'Juristic') && (this.tabMain.ent_typ === 'Guarantor')) {
    //   reulltCheck = this.checkArrTopicVarridate(arrJuristicGuarantor);
    // }

    if (this.tabMain.ent_cat === 'Individual'){
      if (this.tabMain.ent_typ === 'Customer'){
      reulltCheck = this.checkArrTopicVarridate(arrInvidualCustomer);
       }
      else  {
      reulltCheck = this.checkArrTopicVarridate(arrInvidualGuarantor);
       }
     }
    else { //Juristic
      if  (this.tabMain.ent_typ === 'Customer') {
        reulltCheck = this.checkArrTopicVarridate(arrJuristicCustomer);
      }
      else  {
        reulltCheck = this.checkArrTopicVarridate(arrJuristicGuarantor);
      }
    }

    if (reulltCheck) {
      msgValidate = "Complete"
    }
    else {
      console.log('validate');
      msgValidate = "กรุณาใส่ข้อมูลให้ครบก่อนทำ Decision Grade"
    }
    return msgValidate;
  }


  validateDataSave(): string {
    let msgvalidate = 'Complete';
    // if (!this.checkDownAndDownPercent()) {
    //   msgvalidate = 'เงินดาวน์(%) และ เงินดาวน์ ไม่สัมพันธ์กัน';
    //   console.log(msgvalidate);
    // }

    if (this.checkDownAndDownPercent()) {

    }
    else {
      msgvalidate = 'เงินดาวน์(%) และ เงินดาวน์ ไม่สัมพันธ์กัน';
      console.log(msgvalidate);
    }

    return msgvalidate;
  }

  IsGrade(grade: String): boolean {
    let arrGrade = ["A", "B", "C", "X", "F", "N/A"];
    for (var i = 0; i < arrGrade.length; i++) {
      if (grade == arrGrade[i]) {
        return true;
      }
    }
    return false;
  }

  validateDataSubmit(): string {
    let msgvalidate = 'Complete';
    if ((this.tabMain.prim_scr) && (this.tabMain.prim_scr != 'N/A')) {
      if (this.tabMain.ask_rec_dtel) {

        if (this.checkDownAndDownPercent()) {

        }
        else {
          msgvalidate = 'เงินดาวน์(%) และ เงินดาวน์ ไม่สัมพันธ์กัน';
          console.log(msgvalidate);
        }

      }
      else {
        msgvalidate = 'กรุณากรอกข้อมูล รายละเอียด B/L ของ ASKและ ประวัติ NCB';
      }
    }
    else {
      msgvalidate = 'กรุณากรอกข้อมูล เกรดเบื้องต้น';
    }
    return msgvalidate;
  }

  onSaveScoring() {
    //const url = this.service.url + this.service.mks_tps + `/ask/scoring/TestSendObjWeb`;
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringSave`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    this.tabMain.device = 'web';
    this.tabMain.userName = this.userName;
    let data = this.tabMain;
    console.log(url);
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  onDeleteScoring() {
    //const url = this.service.url + this.service.mks_tps + `/ask/scoring/TestSendObjWeb`;
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/onDeleteScoring`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    this.tabMain.device = 'web';
    this.tabMain.userName = this.userName;
    let data = this.tabMain;
    console.log(url);
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  onSubmitScoring() {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/SubmitScoringPost`;
    // const url = `http://localhost:8080/MKS_WebServices/ask/scoring/SubmitScoringPost`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    this.tabMain.device = 'web';
    this.tabMain.userName = this.userName;
    let data = this.tabMain;
    console.log(url);
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  onRetryScoring() {
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/RetryScoringPost`;
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    this.tabMain.device = 'web';
    this.tabMain.userName = this.userName;
    let data = this.tabMain;
    console.log(url);
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }


  getDataScoring(device: string, username: string, runNo: string, comCode: string, entCD: string, refNo: string) {
    console.log(Date.now());
    this.isLoading = true;
    this.eventIsLoading.emit(this.isLoading);
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/VeifyDetailPost`;
    //re
    // const url = this.service.url + this.service.mks_tps +`/ask/scoring/ScoringPOST`;
    let data = {
      "comCode": comCode,
      "entCD": entCD,
      "refNo": refNo,
      "runNo": runNo,
      "stgId": this.stgId,
      //"stgId": "2",
      "userName": username,
      "device": device
    }

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    this.isLoading = false;
    this.eventIsLoading.emit(this.isLoading);
    console.log(url);
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  setIdxCalScore(idx: number) {
    this.idxTabCalScore = idx;
    this.eventIdxTab.emit(idx);

  }

  setSubj(listQuestionTabNew: ScrSubjModel[]) {
    //�?�?าสำหรั�?เ�?�?�?เมื�?อมี�?าร�?�?�?�?�?�?�?อมูล
    this.listQuestionTab = listQuestionTabNew;
    this.eventListQuestionTab.emit(listQuestionTabNew);
    //�?�?าตั�?�?ต�?�? �?รณี dropdown ที�?มี sub
    this.listQuestionTabOriginal = JSON.parse(JSON.stringify(listQuestionTabNew));

  }

  copyQuestionTab() {
    this.tabMain.listTabScrSubj = JSON.parse(JSON.stringify(this.listQuestionTab));
    this.eventTabMain.emit(this.tabMain);
  }

  saveTabDataOnShow(lisTabOnShowNew: RowTableModel[]) {
    if ((lisTabOnShowNew != null) && (lisTabOnShowNew.length > 0)) {
      this.eventListQuestionTab.emit(this.listQuestionTab);
    }
  }

  setMainTab(tabMainNew: MainTabModel) {
    this.tabMain = tabMainNew;
    this.eventTabMain.emit(tabMainNew);
  }

  setTodoSelected(todoSelected: ToDoVerifierModel) {
    this.todoVerifierSelected = todoSelected;
  }

  getTable(idx: number) {
    return this.listQuestionTab[idx].listTableData;
  }

  refreshData() {
    if (this.listQuestionTab != null && this.listQuestionTab.length > 0) {
      this.eventListQuestionTab.emit(this.listQuestionTab);
    }
    if (this.tabMain != null) {
      this.eventTabMain.emit(this.tabMain);
    }
    if (this.idxTabCalScore != null) {
      this.eventIdxTab.emit(this.idxTabCalScore);
    }
    this.calScoringAllPage();
  }


  tranferDataScrCorp(listScrCorp: ScrCorp[], listScrCorpCalculate: ScrCorp[]) {
    var i, j: number;
    for (i = 0; i < this.listQuestionTab[0].listTableData.length; i++) {
      for (j = 0; j < listScrCorpCalculate.length; j++) {
        if (this.listQuestionTab[0].listTableData[i].topicCd == listScrCorpCalculate[j].topic_typ) {
          this.listQuestionTab[0].listTableData[i].answer = listScrCorpCalculate[j].field_1;
          this.listQuestionTab[0].listTableData[i + 1].answer = listScrCorpCalculate[j].field_2;
          this.listQuestionTab[0].listTableData[i + 2].answer = listScrCorpCalculate[j].field_3;
        }
      }
    }


    this.eventListQuestionTab.emit(this.listQuestionTab);
    /// copy �?�?าที�?�?ห�?�?�?�?�?ส�?ว�?ที�?ดึ�?มา�?า�?db
    this.tabMain.list_scr_corp = JSON.parse(JSON.stringify(listScrCorp));
    this.eventTabMain.emit(this.tabMain);
  }


  calScoringInPage(tabID: number) {

    var listQuestionTabCal: ScrSubjModel[] = this.listQuestionTab;
    var sumscore: number = 0;
    var i: number;
    var pAnswer: string;

    for (i = 0; i < listQuestionTabCal[tabID].listTableData.length; i++) {
      //�?รณี dropdown
      if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'P') {
        this.listQuestionTab[tabID].listTableData[i].scr = String(sumscore);
        this.tempResultPointGrade = this.tempResultPointGrade + sumscore;
      }
      else if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GP') {
        this.listQuestionTab[tabID].listTableData[i].scr = String(this.tempResultPointGrade);
      }
      else if ((listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'G')
        || (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GG')) {
        if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GG') {
          pAnswer = String(this.tempResultPointGrade);
        }
        else {
          pAnswer = String(sumscore);
        }

        for (var k = 0; k < this.listQuestionTab[tabID].listTableData[i].listAnswerRange.length; k++) {
          if ((Number(pAnswer) >= Number(this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].min))
            && (Number(pAnswer) <= Number(this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].max))) {
            this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].selected = 'Y';

            if (this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr != null) {
              //เอาเ�?รด�?ต�?ละห�?�?ามารวม�?ั�?เ�?ื�?อ�?�?ว�?�?ลเ�?รด
              //this.resultGrade=this.resultGrade+this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr;
              if (listQuestionTabCal[tabID].listTableData[i].type_for_cal == 'GG') {
                if (this.tempResultGrade) {
                  this.tempResultGrade = this.tempResultGrade + '=';
                }

                this.tempResultGrade = this.tempResultGrade + this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr;

              }
              else {
                if (this.tempResultGrade) {
                  this.tempResultGrade = this.tempResultGrade + '+';
                }
                this.tempResultGrade = this.tempResultGrade + this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].scr;
              }

            }
          }
          else {
            this.listQuestionTab[tabID].listTableData[i].listAnswerRange[k].selected = 'N';
          }

        }
      }
      else {
        if (listQuestionTabCal[tabID].listTableData[i].lookUp == 'Y') {
          for (var j = 0; j < listQuestionTabCal[tabID].listTableData[i].listAnswer.length; j++) {
            if (listQuestionTabCal[tabID].listTableData[i].listAnswer[j].selected == 'Y') {
              if ((listQuestionTabCal[tabID].listTableData[i].listAnswer[j].scr != null)
                && (listQuestionTabCal[tabID].listTableData[i].listAnswer[j].scr != '-')) {
                sumscore = sumscore + Number(listQuestionTabCal[tabID].listTableData[i].listAnswer[j].scr);
              }
            }
          }
        }//if
        else {
          //�?รณี�?�?ว�?�?ำตอย
          for (var j = 0; j < listQuestionTabCal[tabID].listTableData[i].listAnswerRange.length; j++) {
            if (listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].selected == 'Y') {
              if ((listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].selected != null)
                && (listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].selected != '-')) {
                sumscore = sumscore + Number(listQuestionTabCal[tabID].listTableData[i].listAnswerRange[j].scr);
              }
            }
          }
        }
      }
    }

    this.resultGrade = this.tempResultGrade;
    this.eventResultGrade.emit(this.resultGrade);
  }

  calScoringAllPage() {
    this.tempResultGrade = '';
    this.tempResultPointGrade = 0;
    for (var i = 0; i < 9; i++) {
      this.calScoringInPage(i);
    }
  }

  onEditQuestionTab(recQuestionTab: RowTableModel[]) {
    this.listQuestionTab[this.idxTabCalScore].listTableData = JSON.parse(JSON.stringify(recQuestionTab));
    this.tabMain.listTabScrSubj = JSON.parse(JSON.stringify(this.listQuestionTab));
    console.log(this.listQuestionTab[this.idxTabCalScore]);
    this.eventListQuestionTab.emit(this.listQuestionTab)
    this.eventTabMain.emit(this.tabMain);
  }

  getRowDataCopyTabMainHist(topicCd: String): RowTableModel {
    let tempRowTableModel = new RowTableModel();
    for (var i = 0; i < this.allTabCopyHist.listTabScrSubj.length; i++) {
      for (var j = 0; j < this.allTabCopyHist.listTabScrSubj[i].listTableData.length; j++) {
        if (this.allTabCopyHist.listTabScrSubj[i].listTableData[j].topicCd == topicCd) {
          return this.allTabCopyHist.listTabScrSubj[i].listTableData[j];
        }
      }
    }
    return tempRowTableModel;
  }

  onEditFromCreditScoringHist() {
    //main Tab
    this.tabMain.com_code = this.allTabCopyHist.com_code;
    this.tabMain.run_no = this.allTabCopyHist.run_no;
    this.tabMain.scr_dt = this.allTabCopyHist.scr_dt;
    this.tabMain.ent_cd = this.allTabCopyHist.ent_cd;
    this.tabMain.ent_typ = this.allTabCopyHist.ent_typ;
    this.tabMain.ref_no = this.allTabCopyHist.ref_no;
    this.tabMain.pmnt_grdng = this.allTabCopyHist.pmnt_grdng;
    this.tabMain.mkt_emp_no = this.allTabCopyHist.mkt_emp_no;
    this.tabMain.trce_rec_dtel = this.allTabCopyHist.trce_rec_dtel;
    this.tabMain.ask_rec_dtel = this.allTabCopyHist.ask_rec_dtel;
    this.tabMain.ver_mthd_more = this.allTabCopyHist.ver_mthd_more;
    this.tabMain.list_product_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_product_cd));
    this.tabMain.list_ver_emp_no = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ver_emp_no));
    this.tabMain.list_in_out = JSON.parse(JSON.stringify(this.allTabCopyHist.list_in_out));
    this.tabMain.list_trec_rec_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_trec_rec_cd));
    this.tabMain.list_ask_rec_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ask_rec_cd));
    this.tabMain.list_ncb_rec_cd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ncb_rec_cd));
    this.tabMain.list_ver_mthd = JSON.parse(JSON.stringify(this.allTabCopyHist.list_ver_mthd));

    // Question tab
    let arrGetOldData = ["A002", "A005", "A072", "A073", "B088", "B089", "A094", "A095"
      , "A096", "A097", "A098", "A099", "A100", "A101", "A102", "B111"
      , "B112", "B113", "B114", "B115", "B116", "B117"];
    for (var i = 0; i < this.tabMain.listTabScrSubj.length; i++) {
      for (var j = 0; j < this.tabMain.listTabScrSubj[i].listTableData.length; j++) {

        for (var k = 0; k < arrGetOldData.length; k++) {
          if (this.tabMain.listTabScrSubj[i].listTableData[j].topicCd == arrGetOldData[k]) {
            this.tabMain.listTabScrSubj[i].listTableData[j] = JSON.parse(JSON.stringify(this.getRowDataCopyTabMainHist(arrGetOldData[k])));
          }
        }

      }
    }
    this.eventListQuestionTab.emit(this.tabMain.listTabScrSubj)
    this.eventTabMain.emit(this.tabMain);
  }

  getGroupSearchScoringEnquiry() {
    this.isLoading = true;
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/GroupSearchScoringEnquiryPost`;
    let data = {}
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  getListScoringEnquiry(comCode: string, refNO: string, entName: string, entCd: string) {
    this.isLoading = true;
    this.eventIsLoading.emit(this.isLoading);
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringEnquiryPost`;
    //  const url =`http://localhost:8080/MKS_WebServices/ask/scoring/ScoringEnquiryPost`;
    console.log(url);
    let data = {
      "comCode": comCode,
      "refNo": refNO,
      "cusName": entName,
      "entCd": entCd
      // "userName": username
      // "device": device
    }

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  // Mos //
  getCreditScoringHistory(entType, entCd, comCode) {
    this.isLoading = true;
    this.eventIsLoading.emit(this.isLoading);
    const url = this.service.url + this.service.mks_scoring + `/ask/scoring/ScoringCreditScoringHistoryPost`;
    // const url = this.service.url + this.service.mks_tps +`/ask/scoring/ScoringCreditScoringHistoryPost`;
    let data = {
      "comCode": comCode,
      "entType": entType,
      "entCd": entCd,
      "device": "web",
      "userName": this.userName,
    };

    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    this.isLoading = false;
    this.eventIsLoading.emit(this.isLoading);
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data), options);
  }

  // Mos //


  // Mos //
  creditScoringHistory: CreditScoringHistoryModel = new CreditScoringHistoryModel();

  setCreditScoringHistory(data) {
    this.creditScoringHistory = data;
    console.log(this.creditScoringHistory);
  }

  setTabMainTemp(event) {
    this.allTabCopyHist = event;
    console.log(this.allTabCopyHist);
  }

  emitClickCrScrHis = new EventEmitter<boolean>();

  clickCreditScoringHistory(event) {
    if (event == true) {
      this.emitClickCrScrHis.emit(event);
    }
  }


}
