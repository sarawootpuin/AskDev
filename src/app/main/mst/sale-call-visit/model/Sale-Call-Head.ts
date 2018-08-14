/**
 * Created by pongsatorn.an on 15/08/2560.
 */
import {SaleCallDetail} from "./Sale-Call-Detail";
import {SaleCallHistory} from "./Sale-Call-History";
import DateTimeFormat = Intl.DateTimeFormat;
import {SaleCallPcnt} from "./Sale-Call-Pcnt";

export class SaleCallHead {

  public  sale_call_no;
  public  comp_tha_nme;
  public  comp_eng_nme;
  public  comp_ent_code;
  public  f_name;
  public  f_name_e;
  public  cus_status;
  public  intro_mthd_cd;
  public  intro_by_cd;
  public  md_name;
  public  nationality;
  public  addr;
  public  tel;
  public  fax;
  public  e_mail;
  public  website;
  public  ownr;
  public  current_task;
  public  result_code;
  public  result_remark;
  public  cross_selling;
  public  direct_mk;
  public  reject_date;
  public  reject_reason;
  public  cancel_date;
  public  cancel_reason;
  public  input_by;
  public  input_date ;
  public  comp_ent_code2;
  public  connect_since;
  public  bussiness_type;
  public  established_year : string;
  public  regis_capital_amt;
  public  paid_up_capital_amt;
  public  bussiness_detail;
  public  industry_code;
  public  relate_company;
  public  performance_year;
  public  sale_amt;
  public  net_profit_amt;
  public  net_worth_amt;
  public  main_bank;
  public  comp_l_tha_nme;
  public  comp_l_eng_nme;
  public  source;
  public  prv_code;
  public  net_worth_year;
  public  com_code;
  public  mobile_source;
  public  prebranch_code;
  public  dealer_type;
  public  oth_loan_mkt_flag;
  public  team_type_mkt;
  public  card_type;
  public  new_card_no;
  public  ent_source;
  public  ent_source_sub;


  public  cluster;
  public  bussiness_detail_name;

  public  mkt_name;
  public  intro_by_cd_full;

  public listDetail:SaleCallDetail[]
  public listHistory:SaleCallHistory[]
  public listPCNT   :SaleCallPcnt[]
  public disabledCardId : boolean


  constructor()
  constructor(SALE_CALL_NO, COMP_THA_NME, COMP_ENG_NME, COMP_ENT_CODE, F_NAME, F_NAME_E, CUS_STATUS,
              INTRO_MTHD_CD, INTRO_BY_CD, MD_NAME, NATIONALITY, ADDR, TEL, FAX, E_MAIL, WEBSITE, OWNR,
              CURRENT_TASK, RESULT_CODE, RESULT_REMARK, CROSS_SELLING, DIRECT_MK, REJECT_DATE, REJECT_REASON,
              CANCEL_DATE, CANCEL_REASON, INPUT_BY, INPUT_DATE, COMP_ENT_CODE2, CONNECT_SINCE, BUSSINESS_TYPE,
              ESTABLISHED_YEAR, REGIS_CAPITAL_AMT, PAID_UP_CAPITAL_AMT, BUSSINESS_DETAIL, INDUSTRY_CODE, RELATE_COMPANY,
              PERFORMANCE_YEAR, SALE_AMT, NET_PROFIT_AMT, NET_WORTH_AMT, MAIN_BANK, COMP_L_THA_NME, COMP_L_ENG_NME,
              SOURCE, PRV_CODE, NET_WORTH_YEAR, COM_CODE, MOBILE_SOURCE, PREBRANCH_CODE, DEALER_TYPE,
              OTH_LOAN_MKT_FLAG, TEAM_TYPE_MKT, CARD_TYPE, NEW_CARD_NO, ENT_SOURCE, ENT_SOURCE_SUB
              ,cluster ,bussiness_detail_name , mkt_name , intro_by_cd_full
              ,listDetail
              ,listHistory
              ,listPCNT,
              disabledCardId)
  constructor(SALE_CALL_NO?, COMP_THA_NME?, COMP_ENG_NME?, COMP_ENT_CODE?, F_NAME?, F_NAME_E?, CUS_STATUS?,
              INTRO_MTHD_CD?, INTRO_BY_CD?, MD_NAME?, NATIONALITY?, ADDR?, TEL?, FAX?, E_MAIL?, WEBSITE?, OWNR?,
              CURRENT_TASK?, RESULT_CODE?, RESULT_REMARK?, CROSS_SELLING?, DIRECT_MK?, REJECT_DATE?, REJECT_REASON?,
              CANCEL_DATE?, CANCEL_REASON?, INPUT_BY?, INPUT_DATE?, COMP_ENT_CODE2?, CONNECT_SINCE?, BUSSINESS_TYPE?,
              ESTABLISHED_YEAR?, REGIS_CAPITAL_AMT?, PAID_UP_CAPITAL_AMT?, BUSSINESS_DETAIL?, INDUSTRY_CODE?, RELATE_COMPANY?,
              PERFORMANCE_YEAR?, SALE_AMT?, NET_PROFIT_AMT?, NET_WORTH_AMT?, MAIN_BANK?, COMP_L_THA_NME?, COMP_L_ENG_NME?,
              SOURCE?, PRV_CODE?, NET_WORTH_YEAR?, COM_CODE?, MOBILE_SOURCE?, PREBRANCH_CODE?, DEALER_TYPE?,
              OTH_LOAN_MKT_FLAG?, TEAM_TYPE_MKT?, CARD_TYPE?, NEW_CARD_NO?, ENT_SOURCE?, ENT_SOURCE_SUB?
              ,cluster? ,bussiness_detail_name? , mkt_name? , intro_by_cd_full?
              ,listDetail?
              ,listHistory?
              ,listPCNT?,
              disabledCardId?){
    this.sale_call_no  =  SALE_CALL_NO ? SALE_CALL_NO : '';
    this.comp_tha_nme  =  COMP_THA_NME;
    this.comp_eng_nme  =  COMP_ENG_NME;
    this.comp_ent_code  =  COMP_ENT_CODE;
    this.f_name  =  F_NAME;
    this.f_name_e  =  F_NAME_E;
    this.cus_status  =  CUS_STATUS ? CUS_STATUS : 'N' ;
    this.intro_mthd_cd  =  INTRO_MTHD_CD;
    this.intro_by_cd  =  INTRO_BY_CD;
    this.md_name  =  MD_NAME;
    this.nationality  =  NATIONALITY;
    this.addr  =  ADDR;
    this.tel  =  TEL;
    this.fax  =  FAX;
    this.e_mail  =  E_MAIL;
    this.website  =  WEBSITE;
    this.ownr  =  OWNR;
    this.current_task  =  CURRENT_TASK;
    this.result_code  =  RESULT_CODE;
    this.result_remark  =  RESULT_REMARK;
    this.cross_selling  =  CROSS_SELLING;
    this.direct_mk  =  DIRECT_MK;
    this.reject_date  =  REJECT_DATE;
    this.reject_reason  =  REJECT_REASON;
    this.cancel_date  =  CANCEL_DATE;
    this.cancel_reason  =  CANCEL_REASON;
    this.input_by  =  INPUT_BY;
    this.input_date   =  INPUT_DATE ;
    this.comp_ent_code2  =  COMP_ENT_CODE2;
    this.connect_since  =  CONNECT_SINCE;
    this.bussiness_type  =  BUSSINESS_TYPE;
    this.established_year  =  ESTABLISHED_YEAR;
    this.regis_capital_amt  =  REGIS_CAPITAL_AMT ? REGIS_CAPITAL_AMT : 0  ;
    this.paid_up_capital_amt  =  PAID_UP_CAPITAL_AMT ? PAID_UP_CAPITAL_AMT : 0;
    this.bussiness_detail  =  BUSSINESS_DETAIL;
    this.industry_code  =  INDUSTRY_CODE;
    this.relate_company  =  RELATE_COMPANY;
    this.performance_year  =  PERFORMANCE_YEAR ? PERFORMANCE_YEAR :0 ;
    this.sale_amt  =  SALE_AMT ? SALE_AMT : 0;
    this.net_profit_amt  =  NET_PROFIT_AMT ? NET_PROFIT_AMT : 0 ;
    this.net_worth_amt  =  NET_WORTH_AMT ? NET_WORTH_AMT : 0;
    this.main_bank  =  MAIN_BANK;
    this.comp_l_tha_nme  =  COMP_L_THA_NME;
    this.comp_l_eng_nme  =  COMP_L_ENG_NME;
    this.source  =  SOURCE;
    this.prv_code  =  PRV_CODE;
    this.net_worth_year  =  NET_WORTH_YEAR;
    this.com_code  =  COM_CODE;
    this.mobile_source  =  MOBILE_SOURCE;
    this.prebranch_code  =  PREBRANCH_CODE;
    this.dealer_type  =  DEALER_TYPE ? DEALER_TYPE : 'N';
    this.oth_loan_mkt_flag  =  OTH_LOAN_MKT_FLAG;
    this.team_type_mkt  =  TEAM_TYPE_MKT;
    this.card_type  =  CARD_TYPE;
    this.new_card_no  =  NEW_CARD_NO;
    this.ent_source  =  ENT_SOURCE;
    this.ent_source_sub  =  ENT_SOURCE_SUB;

    this.cluster  =  cluster;
    this.bussiness_detail_name  =  bussiness_detail_name;
    this.mkt_name   = mkt_name ;
    this.intro_by_cd_full   = intro_by_cd_full ;


    this.listDetail     = listDetail;
    this.listHistory    = listHistory;
    this.listPCNT       = listPCNT;
    this.disabledCardId = disabledCardId
  }




  static parse(json: any) {
    disabled = true
    if (!json.NEW_CARD_NO) {
      var disabled : boolean = false
    }
    return  new SaleCallHead(
        json.SALE_CALL_NO,
        json.COMP_THA_NME,
        json.COMP_ENG_NME,
        json.COMP_ENT_CODE,
        json.F_NAME,
        json.F_NAME_E,
        json.CUS_STATUS,
        json.INTRO_MTHD_CD,
        json.INTRO_BY_CD,
        json.MD_NAME,
        json.NATIONALITY,
        json.ADDR,
        json.TEL,
        json.FAX,
        json.E_MAIL,
        json.WEBSITE,
        json.OWNR,
        json.CURRENT_TASK,
        json.RESULT_CODE,
        json.RESULT_REMARK,
        json.CROSS_SELLING,
        json.DIRECT_MK,
        json.REJECT_DATE,
        json.REJECT_REASON,
        json.CANCEL_DATE,
        json.CANCEL_REASON,
        json.INPUT_BY,
        json.INPUT_DATE,
        json.COMP_ENT_CODE2,
        json.CONNECT_SINCE,
        json.BUSSINESS_TYPE,
        json.ESTABLISHED_YEAR,
        json.REGIS_CAPITAL_AMT,
        json.PAID_UP_CAPITAL_AMT,
        json.BUSSINESS_DETAIL,
        json.INDUSTRY_CODE,
        json.RELATE_COMPANY,
        json.PERFORMANCE_YEAR,
        json.SALE_AMT,
        json.NET_PROFIT_AMT,
        json.NET_WORTH_AMT,
        json.MAIN_BANK,
        json.COMP_L_THA_NME,
        json.COMP_L_ENG_NME,
        json.SOURCE,
        json.PRV_CODE,
        json.NET_WORTH_YEAR,
        json.COM_CODE,
        json.MOBILE_SOURCE,
        json.PREBRANCH_CODE,
        json.DEALER_TYPE,
        json.OTH_LOAN_MKT_FLAG,
        json.TEAM_TYPE_MKT,
        json.CARD_TYPE,
        json.NEW_CARD_NO,
        json.ENT_SOURCE,
        json.ENT_SOURCE_SUB,
        json.CLUSTER,
        json.BUSSINESS_DETAIL_NAME,
        json.MKT_NAME,
        json.INTRO_BY_CD_FULL,
        SaleCallDetail.parse(json.LIST_SALE_CALL_DETAIL),
        SaleCallHistory.parse(json.LIST_SALE_CALL_History),
        SaleCallPcnt.parse(json.LIST_SALE_CALL_PCNT),
        disabled
      );
  }
}
