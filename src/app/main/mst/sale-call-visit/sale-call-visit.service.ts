import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable, OnDestroy} from "@angular/core";
import {ServiceEndpoint} from "../../../shared/config/service-endpoint";
import {ObjTemp} from "./model/ObjTemp";
import {SaleCallHead} from "./model/Sale-Call-Head";
import {SaleCallDetail} from "./model/Sale-Call-Detail";
import {isUndefined} from "util";
import {Message} from "primeng/primeng";
import {UserStorage} from "../../../shared/user/user.storage.service";

@Injectable()
export class SaleCallVisitService implements OnDestroy {

  ngOnDestroy() {
    console.log('Destroy Service Sale Call');
  }


  //////  Set Sale Call Head
  saleH: SaleCallHead;
  eventsaleH = new EventEmitter<SaleCallHead>();

  //////  Set & Get  SaleCall Detail
  saleD: SaleCallDetail[];
  eventsaleD = new EventEmitter<SaleCallDetail[]>();
  eventselectsaleD = new EventEmitter<SaleCallDetail>();
  selectsaleD: SaleCallDetail;

  // Dropdown List
  ListVisit : ObjTemp[] ;
  ListPrebranch: ObjTemp[];
  ListFNMT: ObjTemp[];
  ListFNME: ObjTemp[];
  ListSOURCE: ObjTemp[];
  ListOFFICER: ObjTemp[];
  ListBUSTYPE: ObjTemp[];
  ListNATION: ObjTemp[];
  ListPROVINCE: ObjTemp[];
  ListNEWINDUSTRY: ObjTemp[];
  ListOLDINDUSTRY: ObjTemp[];
  ListREASONP: ObjTemp[];
  ListREASONF: ObjTemp[];
  ListREASONR: ObjTemp[];
  ListREASONRCF: ObjTemp[];
  ListREASONRCNF: ObjTemp[];
  ListBANK: ObjTemp[];
  TravelAmount: ObjTemp;
  ListEMP : ObjTemp[] ;
  //END Dropdown List

  msgs: Message[] = [];
  date:Date ;

  constructor(private http: HttpClient, private service: ServiceEndpoint,
              private userStorage: UserStorage) {

  }

  sendSaleCall(device: string, username: string, pccomcode: string, psalecall: string, psendflg: string) {

    /////// delete Detail & History
    this.saleH.listHistory = [];
    this.saleH.listDetail = [];
    this.VerifieddataSaleCall();
    let task_code = this.saleH.current_task ? this.saleH.current_task : 'Apply Sale Call' ;
    // const url =  'http://localhost:8080' + this.service.sale_call_api + `/ask/salecall/SendSaleCall`;
    const url = this.service.url + this.service.sale_call_api + `/ask/salecall/SendSaleCall`;
    let data = {
      "device": device,
      "userName": username,
      "comCode": pccomcode,
      "saleCallNo": psalecall,
      "sendFlg": psendflg,
      "taskCode": task_code,
      "saleCallHead": this.saleH,
      "saleCallDetail": this.selectsaleD
    }

    console.log('Before send data');
    console.log(data);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.post(url, data, options);

  }

  getSaleCallHead_Detail(device: string, userName: string, comCode: string, saleCallNo: string) {
    const url = this.service.url + this.service.sale_call_api + `/ask/salecall/PostSaleCallStore`;
    let data = {
      "device": device,
      "userName": userName,
      "comCode": comCode,
      "saleCallNo": saleCallNo
    }
    //console.log(data)
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };

    return this.http.post(url, data, options);
  }

  VerifieddataSaleCall() {
    let code = this.userStorage.getCode();
    this.saleH.input_by = code;

    if (this.selectsaleD) {
      this.selectsaleD.usr_upd = code;
      this.selectsaleD.call_visit_by = code;
    }

    this.selectsaleD.call_visit_date = this.selectsaleD.sale_call_dt ? this.selectsaleD.sale_call_dt  : '' ;
  }


  setListAns(json: any[]) {
    this.ListVisit = [] ;
    this.ListPrebranch = [];
    this.ListFNMT = [];
    this.ListFNME = [];
    this.ListSOURCE = [];
    this.ListOFFICER = [];
    this.ListBUSTYPE = [];
    this.ListNATION = [];
    this.ListPROVINCE = [];
    this.ListNEWINDUSTRY = [];
    this.ListOLDINDUSTRY = [];
    this.ListREASONP = [];
    this.ListREASONF = [];
    this.ListREASONR = [];
    this.ListREASONRCF = [];
    this.ListREASONRCNF = [];
    this.ListBANK = [];
    this.ListEMP = [] ;
    for (let i = 0; i < json.length; i++) {
      if (json[i].TYPE == 'VISIT') {
        this.ListVisit.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'Prebranch') {
        this.ListPrebranch.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'FNMT') {
        this.ListFNMT.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'FNME') {
        this.ListFNME.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'SOURCE') {
        this.ListSOURCE.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'OFFICER') {
        this.ListOFFICER.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'BUS_TYPE') {
        this.ListBUSTYPE.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'NATION') {
        this.ListNATION.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'PROVINCE') {
        this.ListPROVINCE.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'NEWINDUSTRY') {
        this.ListNEWINDUSTRY.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'OLDINDUSTRY') {
        this.ListOLDINDUSTRY.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'REASON') {
        if (json[i].KEY2 == 'POT') {
          this.ListREASONP.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
        }
        else if (json[i].KEY2 == 'FOL_UP') {
          this.ListREASONF.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
        }
        else if (json[i].KEY2 == 'REJ') {
          this.ListREASONR.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
        }
        else if (json[i].KEY2 == 'REJ_CALL') {
          this.ListREASONRCF.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
        }
        else if (json[i].KEY2 == 'REJ_CNF') {
          this.ListREASONRCNF.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
        }

      } else if (json[i].TYPE == 'AMTTRAVEL') {
        this.TravelAmount = new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE);
      } else if (json[i].TYPE == 'BANK') {
        this.ListBANK.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      } else if (json[i].TYPE == 'EMP'){
        this.ListEMP.push(new ObjTemp(json[i].DISPLAY, json[i].ID, json[i].KEY1, json[i].KEY2, json[i].TYPE));
      }
    }
  };

  setselectsaleD(inSaleCallD: SaleCallDetail) {
    this.selectsaleD = inSaleCallD;
    this.eventselectsaleD.emit(inSaleCallD);
  }
  reFreshSelectsaleD(){
    this.setselectsaleD(this.selectsaleD);
   // this.eventselectsaleD.emit(this.selectsaleD );
  }


  setSaleCallHead(inSaleCallH: SaleCallHead) {
    this.saleH = inSaleCallH;
    this.eventsaleH.emit(inSaleCallH);
  }

  setSaleCallDetail(inSaleCallD: SaleCallDetail[]) {
    this.saleD = inSaleCallD;
    this.eventsaleD.emit(inSaleCallD);
  }

  getAttendees(attenType: string) {
    let url
    if (attenType == "B") {
      url = this.service.url + this.service.sale_call_api + `/ask/salecall/GetATTND?device=web&user=sira.ch&attndtype=B&code=BGPL`;
    }
    else if (attenType == "C") {
      if (this.saleH.comp_ent_code != "" && !isUndefined(this.saleH.comp_ent_code)) {
        url = this.service.url + this.service.sale_call_api + `/ask/salecall/GetATTND?device=web&user=sira.ch&attndtype=C&code=${this.saleH.comp_ent_code}`;
      }
    }
    return url;
  }

  ValidationSaleCallHead() {
    this.msgs = [];
    this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: 'Please, Input : '});


    if (this.selectsaleD) {
      if ((!this.saleH.new_card_no ) && ( this.selectsaleD.call_result_flg == "P"  )) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '-  Card ID'});  }

      if (!this.saleH.f_name) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '-  Intial Thai'}); }

      if (!this.saleH.comp_tha_nme) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '-  Name Thai '});}

      if (!this.saleH.connect_since) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '-  Connect Since'}); }


      let saleinfo: Message[] = this.ValidationSaleCallinfo();
      if (saleinfo.length > 0) {
        this.msgs = this.msgs.concat(saleinfo);
      }

        let saleresult: Message[] = this.ValidationSaleCallresult();
        if (saleresult.length > 0) {
          this.msgs = this.msgs.concat(saleresult);
        }

        let saleasset: Message[] = this.ValidationSaleCallAsset();
        if (saleasset.length > 0) {
          this.msgs = this.msgs.concat(saleasset);
        }

        let saleoth: Message[] = this.validationAttenAndOutside();
        if (saleoth.length > 0) {
          this.msgs = this.msgs.concat(saleoth);
        }
    }else {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '-  Detail this Call'});
    }

    return this.msgs;

  }

  ValidationSaleCallinfo() {
    let thismsg: Message[] = [];

    if (!this.saleH.bussiness_type) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '-  Bussiness Type'});
    }

    if (( !this.saleH.bussiness_detail)
      && (this.selectsaleD.call_result_flg != "CNF")) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Specifies'});
    }

    if ((!this.saleH.md_name)
      && ((this.selectsaleD.sale_call_type == 'V')
      || (this.selectsaleD.call_result_flg == 'P'))
    ) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Managing Direct '});
    }

    if ((!this.saleH.addr)
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Address'});
    }

    if ((!this.saleH.tel)
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Tel'});
    }

    if (( (!this.saleH.regis_capital_amt) && (this.saleH.regis_capital_amt <= 0) )
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Register Capital'});
    }

    if (((!this.saleH.paid_up_capital_amt) && (this.saleH.paid_up_capital_amt <= 0) )
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Paid Up Capital'});
    }

    if ((!this.saleH.performance_year)
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Sales Ended Year'});
    }

    if (( ( !this.saleH.sale_amt ) && (this.saleH.sale_amt <= 0) )
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Sales Ended Amount'});
    }

    if (( (!this.saleH.net_profit_amt ) && (this.saleH.net_profit_amt <= 0) )
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Net Profit'});
    }

    if ((!this.saleH.net_worth_year )
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Net Worth Year'});
    }

    if (( ( !this.saleH.net_worth_amt ) && (this.saleH.net_worth_amt <= 0) )
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Net Worth Amount'});
    }

    if ((!this.saleH.established_year)
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Established Year'});
    }

    return thismsg;
  }

  ValidationSaleCallresult() {
    let thismsg: Message[] = [];

    if (this.selectsaleD.submit_flg == 'Y') {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Please Add New Call Detail'});
    }
    if (!this.selectsaleD.sale_call_type) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Call/Visit Type'});
    }
    if (!this.selectsaleD.sale_call_dt) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Call/Visit Date'});
    }
    if ((this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.purpose)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Visit Purpose'});
    }
    if (((this.selectsaleD.sale_call_type == 'CF') || (this.selectsaleD.sale_call_type == 'V'))
      && (!this.selectsaleD.sale_call_note)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Call/Visit Note'});
    }
    if (!this.selectsaleD.call_result_flg) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Summary Call Results'});
    }
    if ((this.selectsaleD.call_result_flg == 'P') && (!this.selectsaleD.call_result_detail)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Reason for Potential Customer'});
    }
    if ((this.selectsaleD.call_result_flg == 'R') && (!this.selectsaleD.call_result_detail)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Reason for Reject'});
    }
    if ((this.selectsaleD.call_result_flg == 'F') && (!this.selectsaleD.follow_date)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Follow Up/Date'});
    }
    if ((this.selectsaleD.call_result_flg == 'F') && (!this.selectsaleD.follow_up_point)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Follow Up/Note'});
    }
    if ((!this.selectsaleD.follow_date) && (this.selectsaleD.call_result_flg == 'F')
      && (this.selectsaleD.sale_call_dt > this.selectsaleD.follow_date)) {
      this.msgs.push({
        severity: 'warnings',
        summary: 'warnings Message',
        detail: '   - Follow Up More Call/Visit Date* '
      });
    }
    // if ((this.selectsaleD.follow_date < this.date) && (!this.selectsaleD)
    //   && (this.selectsaleD.call_result_flg == 'F')) {
    //   this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Follow Up More Today'});
    // }
    if ((this.selectsaleD.call_result_flg == 'F') && (false)) //&& (DaysBetween(Date,this.selectsaleD.FOLLOW_DATE) > 90)
    {
      this.msgs.push({
        severity: 'warnings',
        summary: 'warnings Message',
        detail: '   - Follow Up Not More Than 90 days,From today '
      });
    }
    // if (((this.selectsaleD.sale_call_type == 'CF') || (this.selectsaleD.sale_call_type == 'V'))
    //    &&(!this.selectsaleD.cont_person_code)) {
    //   this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Contact Person'});
    // }
    if (((this.selectsaleD.sale_call_type == 'CF') || (this.selectsaleD.sale_call_type == 'V'))
      && (!this.selectsaleD.interview)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Interview Time'});
    }
    if ((this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.traffic)) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Traffic Time'});
    }

    return thismsg;
  }

  ValidationSaleCallAsset() {

    let thismsg: Message[] = [];

    if ((this.selectsaleD.asset.credit_type == '') && (this.selectsaleD.call_result_flg == 'P')) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Credit Type'});
    }

    if ((this.selectsaleD.asset.fin_amt <= 0)
      && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Cost/Credit Line'});
    }

    if (this.selectsaleD.asset.credit_type) {

      if ((( this.selectsaleD.asset.credit_type.search("HP") > -1 ) || ( this.selectsaleD.asset.credit_type.search("LS") > -1))
        && (this.selectsaleD.asset.asset_type == '') && (this.selectsaleD.sale_call_type == 'V')) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Financing Asset'});
      }

      if ((( this.selectsaleD.asset.credit_type.search("HP") > -1 ) || ( this.selectsaleD.asset.credit_type.search("LS") > -1))
        && (this.selectsaleD.asset.open_lc == '')
        && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))
        && (this.selectsaleD.asset.credit_type != 'P')) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Open L/C'});
      }


      if ((( this.selectsaleD.asset.credit_type.search("HP") > -1 ) || ( this.selectsaleD.asset.credit_type.search("LS") > -1))
        && (this.selectsaleD.asset.brand == '')
        && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))
        && (this.selectsaleD.asset.credit_type != 'P')) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Brand'});
      }

      if ((( this.selectsaleD.asset.credit_type.search("HP") > -1 ) || ( this.selectsaleD.asset.credit_type.search("LS") > -1))
        && (this.selectsaleD.asset.brand == '')
        && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))
        && (this.selectsaleD.asset.credit_type != 'P')) {
        this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Specifies'});
      }

      if ((( this.selectsaleD.asset.credit_type.search("HP") > -1 ) || ( this.selectsaleD.asset.credit_type.search("LS") > -1))
        && (this.selectsaleD.asset.purpose == '')
        && ((this.selectsaleD.sale_call_type == 'V') || (this.selectsaleD.call_result_flg == 'P'))) {
        this.msgs.push({
          severity: 'warnings',
          summary: 'warnings Message',
          detail: '   - The purpose of new credit line'
        });
      }

    }
    return thismsg;
  }

  validationAttenAndOutside() {
    let thismsg: Message[] = [];

    if ((this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.listAttendeesB ) )
    {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Attendees (BGPL)'});
    }

    if ( (this.selectsaleD.sale_call_type == 'V') && (!this.selectsaleD.listAttendeesC )  )
    {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Attendees (Customer)'});
    }

    if ((this.selectsaleD.sale_call_type == 'V') && (this.selectsaleD.visitOutSide.travel_by == '')) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Travel By'});
    }

    if ((this.selectsaleD.sale_call_type == 'V') && (this.selectsaleD.visitOutSide.travel_by == 'OTH')
      && (this.selectsaleD.visitOutSide.travel_name == '')) {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Other MKT Name'});
    }

    if ((this.selectsaleD.sale_call_type == 'V') && (this.selectsaleD.call_visit_date)) {
      console.log(this.selectsaleD.visitOutSide);
      if (!this.selectsaleD.visitOutSide) {
        this.msgs.push({
          severity: 'warnings',
          summary: 'warnings Message',
          detail: ' this visit time don have Expense '
        });
      }
      else {
        if (this.selectsaleD.visitOutSide.travel_by == 'O') {
          if (!this.selectsaleD.visitOutSide.from_time) {
            this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - From Time'});
          }

          if (!this.selectsaleD.visitOutSide.to_time) {
            this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - To Time'});
          }

          if (!this.selectsaleD.visitOutSide.mile_start) {
            this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Mile Start'});
          }

          if (!this.selectsaleD.visitOutSide.mile_end) {
            this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Mile End'});
          }

          if (!this.selectsaleD.visitOutSide.visit_detail) {
            this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: '   - Address Description of Visit'});
          }

          // let Str_Chk_Mile = this.MileCalc;
          // if (Str_Chk_Mile)
          // {
          //   this.msgs.push({severity:'warnings', summary:'warnings Message', detail:'   - ' + Str_Chk_Mile });
          // }
        }
      }

    }

    return thismsg;
  }

  validationOnSave(){
    this.msgs = [];
    this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: 'Please : '});

    if (this.selectsaleD) {
      let saleresult: Message[] = this.ValidationSaleCallresult();
      if (saleresult.length > 0) {
        this.msgs = this.msgs.concat(saleresult);
      }
    } else {
      this.msgs.push({severity: 'warnings', summary: 'warnings Message', detail: 'New Detail of Call '});
    }


    return this.msgs;
  }

  checkCustomer(device: string, user: string, comcode: string, newcard: string , entcode :string){
    const url = decodeURI(this.service.url + this.service.sale_call_api + `/ask/salecall/Getcheckcustomer?device=${device}&user=${user}&comcode=${comcode}&newcard=${newcard}&entcode=${entcode}`);
    let options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    };
    console.log(url);
    return this.http.get(url, options);
  }
}
