import {ListPricing} from "./getDataPricing";
import {ListContext} from "./getDataContext";
import {ListDetail} from "./getDataDetail";
import {ListBuyer} from "./getDataBuyer";
import {ListGuarantor} from "./getDataGuarantor";
import {ListReason} from "./getDataReason";
import {ListCollateral} from "./getDataCollateral";
import {GetDataCustomer} from "./getDataCustomer";
/**
 * Created by peerawat.ko on 21/08/2560.
 */
export class getDataAppForm {
  public com_code: any;
  public prebranch_code: any;
  public ca_no: any;
  public sale_call_no: any;
  public ctrl_no: any;
  public cus_status: any;
  public cus_code: any;
  public grp_code: any;
  public joint_seller_group: any;
  public sbu_typ: any;
  public advance_type: any;
  public apply_by: any;
  public apply_dt: any;
  public expire_dt: any;
  public contract_no: any;
  public contract_date: any;
  public contract_expire_date: any;
  public mkt_code: any;
  public ori_ca: any;
  public ref_old_ca: any;
  public intro_by: any;
  public score: any;
  public grade: any;
  public incorporate_date: any;
  public sales_year: any;
  public sales_amt: any;
  public net_worth_year: any;
  public net_worth_amt: any;
  public regis_capital: any;
  public paid_up_capital: any;
  public connect_since: any;
  public business_type: any;
  public verifier: any;
  public opinion_pro: any;
  public current_task: any;
  public current_level_approve: any;
  public last_usr: any;
  public last_upd: any;
  public intro_mthd_cd: any;
  public cancel_date: any;
  public business_detail: any;
  public this_approve: any;
  public ap_no: any;
  public need_guarantor: any;
  public verify_head: any;
  public ca_type: any;
  public total_exposure: any;
  public total_exposure_cap: any;
  public rec_agr_flag: any;
  public rec_cond: any;
  public rec_usr: any;
  public rec_upd: any;
  public bl_flag: any;
  public scoring_date: any;
  public recAmount: any;
  public mkt_name: any;
  public cus_name: any;
  public sbu_type_desc: any;
  public team_mkt_leader: any;
  public verifier_name: any;
  public verify_head_name: any;
  public join_group_name: any;
  public join_group_cr: any;
  public intro_mthd_desc: any;
  public intro_by_name: any;
  public new_card_no: any;
  public disabled: any;
  public blackList: any;
  public customerStatus: any;
  public listGuarantor: ListGuarantor[];
  public listPricing: ListPricing[];
  public tabContext: ListContext[];
  public listDetail: ListDetail[];
  public listBuyer: ListBuyer[];
  public tabReason: ListReason[];
  public listCollateral: ListCollateral[];
  public tabCustomer: GetDataCustomer;

  constructor()
  constructor(com_code: any,
              prebranch_code: any,
              ca_no: any,
              sale_call_no: any,
              ctrl_no: any,
              cus_status: any,
              cus_code: any,
              grp_code: any,
              joint_seller_group: any,
              sbu_typ: any,
              advance_type: any,
              apply_by: any,
              apply_dt: any,
              expire_dt: any,
              contract_no: any,
              contract_date: any,
              contract_expire_date: any,
              mkt_code: any,
              ori_ca: any,
              ref_old_ca: any,
              intro_by: any,
              score: any,
              grade: any,
              incorporate_date: any,
              sales_year: any,
              sales_amt: any,
              net_worth_year: any,
              net_worth_amt: any,
              regis_capital: any,
              paid_up_capital: any,
              connect_since: any,
              business_type: any,
              verifier: any,
              opinion_pro: any,
              current_task: any,
              current_level_approve: any,
              last_usr: any,
              last_upd: any,
              intro_mthd_cd: any,
              cancel_date: any,
              business_detail: any,
              this_approve: any,
              ap_no: any,
              need_guarantor: any,
              verify_head: any,
              ca_type: any,
              total_exposure: any,
              total_exposure_cap: any,
              rec_agr_flag: any,
              rec_cond: any,
              rec_usr: any,
              rec_upd: any,
              bl_flag: any,
              scoring_date: any,
              recAmount: any,
              mkt_name: any,
              cus_name: any,
              sbu_type_desc: any,
              team_mkt_leader: any,
              verifier_name: any,
              verify_head_name: any,
              join_group_name: any,
              join_group_cr: any,
              intro_mthd_desc: any,
              intro_by_name: any,
              new_card_no: any,
              disabled: any,
              blackList: any,
              customerStatus: any,
              listGuarantor: ListGuarantor[],
              listPricing: ListPricing[],
              tabContext: ListContext[],
              listDetail: ListDetail[],
              listBuyer: ListBuyer[],
              tabReason: ListReason[],
              listCollateral: ListCollateral[],
              tabCustomer: GetDataCustomer)
  constructor(com_code ?: any,
              prebranch_code ?: any,
              ca_no ?: any,
              sale_call_no ?: any,
              ctrl_no ?: any,
              cus_status ?: any,
              cus_code ?: any,
              grp_code ?: any,
              joint_seller_group ?: any,
              sbu_typ ?: any,
              advance_type ?: any,
              apply_by ?: any,
              apply_dt ?: any,
              expire_dt ?: any,
              contract_no ?: any,
              contract_date ?: any,
              contract_expire_date ?: any,
              mkt_code ?: any,
              ori_ca ?: any,
              ref_old_ca ?: any,
              intro_by ?: any,
              score ?: any,
              grade ?: any,
              incorporate_date ?: any,
              sales_year ?: any,
              sales_amt ?: any,
              net_worth_year ?: any,
              net_worth_amt ?: any,
              regis_capital ?: any,
              paid_up_capital ?: any,
              connect_since ?: any,
              business_type ?: any,
              verifier ?: any,
              opinion_pro ?: any,
              current_task ?: any,
              current_level_approve ?: any,
              last_usr ?: any,
              last_upd ?: any,
              intro_mthd_cd ?: any,
              cancel_date ?: any,
              business_detail ?: any,
              this_approve ?: any,
              ap_no ?: any,
              need_guarantor ?: any,
              verify_head ?: any,
              ca_type ?: any,
              total_exposure ?: any,
              total_exposure_cap ?: any,
              rec_agr_flag ?: any,
              rec_cond ?: any,
              rec_usr ?: any,
              rec_upd ?: any,
              bl_flag ?: any,
              scoring_date ?: any,
              recAmount ?: any,
              mkt_name ?: any,
              cus_name ?: any,
              sbu_type_desc ?: any,
              team_mkt_leader ?: any,
              verifier_name ?: any,
              verify_head_name ?: any,
              join_group_name ?: any,
              join_group_cr ?: any,
              intro_mthd_desc ?: any,
              intro_by_name ?: any,
              new_card_no ?: any,
              disabled ?: any,
              blackList ?: any,
              customerStatus ?: any,
              listGuarantor ?: ListGuarantor[],
              listPricing ?: ListPricing[],
              tabContext ?: ListContext[],
              listDetail ?: ListDetail[],
              listBuyer ?: ListBuyer[],
              tabReason ?: ListReason[],
              listCollateral ?: ListCollateral[],
              tabCustomer ?: GetDataCustomer) {
    this.com_code = com_code;
    this.prebranch_code = prebranch_code;
    this.ca_no = ca_no;
    this.sale_call_no = sale_call_no;
    this.ctrl_no = ctrl_no;
    this.cus_status = cus_status;
    this.cus_code = cus_code;
    this.grp_code = grp_code;
    this.joint_seller_group = joint_seller_group;
    this.sbu_typ = sbu_typ;
    this.advance_type = advance_type;
    this.apply_by = apply_by;
    this.apply_dt = apply_dt;
    this.expire_dt = expire_dt;
    this.contract_no = contract_no;
    this.contract_date = contract_date;
    this.contract_expire_date = contract_expire_date;
    this.mkt_code = mkt_code;
    this.ori_ca = ori_ca;
    this.ref_old_ca = ref_old_ca;
    this.intro_by = intro_by;
    this.score = score;
    this.grade = grade;
    this.incorporate_date = incorporate_date;
    this.sales_year = sales_year;
    this.sales_amt = sales_amt;
    this.net_worth_year = net_worth_year;
    this.net_worth_amt = net_worth_amt;
    this.regis_capital = regis_capital;
    this.paid_up_capital = paid_up_capital;
    this.connect_since = connect_since;
    this.business_type = business_type;
    this.verifier = verifier;
    this.opinion_pro = opinion_pro;
    this.current_task = current_task;
    this.current_level_approve = current_level_approve;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.intro_mthd_cd = intro_mthd_cd;
    this.cancel_date = cancel_date;
    this.business_detail = business_detail;
    this.this_approve = this_approve;
    this.ap_no = ap_no;
    this.need_guarantor = need_guarantor;
    this.verify_head = verify_head;
    this.ca_type = ca_type;
    this.total_exposure = total_exposure;
    this.total_exposure_cap = total_exposure_cap;
    this.rec_agr_flag = rec_agr_flag;
    this.rec_cond = rec_cond;
    this.rec_usr = rec_usr;
    this.rec_upd = rec_upd;
    this.bl_flag = bl_flag;
    this.scoring_date = scoring_date;
    this.recAmount = recAmount;
    this.mkt_name = mkt_name;
    this.cus_name = cus_name;
    this.sbu_type_desc = sbu_type_desc;
    this.team_mkt_leader = team_mkt_leader;
    this.verifier_name = verifier_name;
    this.verify_head_name = verify_head_name;
    this.join_group_name = join_group_name;
    this.join_group_cr = join_group_cr;
    this.intro_mthd_desc = intro_mthd_desc;
    this.intro_by_name = intro_by_name;
    this.new_card_no = new_card_no;
    this.disabled = disabled;
    this.blackList = blackList;
    this.customerStatus = customerStatus;
    this.listGuarantor = listGuarantor;
    this.listPricing = listPricing;
    this.tabContext = tabContext;
    this.listDetail = listDetail;
    this.listBuyer = listBuyer;
    this.tabReason = tabReason;
    this.listCollateral = listCollateral;
    this.tabCustomer = tabCustomer;
  }

  static parse(json: any) {
    return new getDataAppForm(
      json.COM_CODE,
      json.PREBRANCH_CODE,
      json.CA_NO,
      json.SALE_CALL_NO,
      json.CTRL_NO,
      json.CUS_STATUS,
      json.CUS_CODE,
      json.GRP_CODE,
      json.JOINT_SELLER_GROUP,
      json.SBU_TYP,
      json.ADVANCE_TYPE,
      json.APPLY_BY,
      json.APPLY_DT,
      json.EXPIRE_DT,
      json.CONTRACT_NO,
      json.CONTRACT_DATE,
      json.CONTRACT_EXPIRE_DATE,
      json.MKT_CODE,
      json.ORI_CA,
      json.REF_OLD_CA,
      json.INTRO_BY,
      json.SCORE,
      json.GRADE,
      json.INCORPORATE_DATE,
      json.SALES_YEAR,
      json.SALES_AMT,
      json.NET_WORTH_YEAR,
      json.NET_WORTH_AMT,
      json.REGIS_CAPITAL,
      json.PAID_UP_CAPITAL,
      json.CONNECT_SINCE,
      json.BUSINESS_TYPE,
      json.VERIFIER,
      json.OPINION_PRO,
      json.CURRENT_TASK,
      json.CURRENT_LEVEL_APPROVE,
      json.LAST_USR,
      json.LAST_UPD,
      json.INTRO_MTHD_CD,
      json.CANCEL_DATE,
      json.BUSINESS_DETAIL,
      json.THIS_APPROVE,
      json.AP_NO,
      json.NEED_GUARANTOR,
      json.VERIFY_HEAD,
      json.CA_TYPE,
      json.TOTAL_EXPOSURE,
      json.TOTAL_EXPOSURE_CAP,
      json.REC_AGR_FLAG,
      json.REC_COND,
      json.REC_USR,
      json.REC_UPD,
      json.BL_FLAG,
      json.SCORING_DATE,
      json.recAmount,
      json.MKT_NAME,
      json.CUS_NAME,
      json.SBU_TYPE_DESC,
      json.TEAM_MKT_LEADER,
      json.VERIFIER_NAME,
      json.VERIFY_HEAD_NAME,
      json.JOIN_GROUP_NAME,
      json.JOIN_GROUP_CR,
      json.INTRO_MTHD_DESC,
      json.INTRO_BY_NAME,
      json.NEW_CARD_NO,
      json.DISABLED,
      json.blackList,
      json.customerStatus,
      ListGuarantor.parse(json.TAB_GUARANTOR),
      ListPricing.parse(json.TAB_PRICING),
      ListContext.parse(json.TAB_CONTEXT),
      ListDetail.parse(json.TAB_DETAIL),
      ListBuyer.parse(json.TAB_BUYER),
      ListReason.parse(json.TAB_REASON),
      ListCollateral.parse(json.TAB_COLLATERAL),
      GetDataCustomer.parse(json.TAB_CUSTOMER)
    )
  }
}
