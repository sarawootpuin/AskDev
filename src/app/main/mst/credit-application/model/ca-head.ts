import {caEntity} from "./ca-entity";
import {caPcnInd} from "./ca-pcnind";
import {caGuarantor} from "./ca-guarantor";
import {caBgDetail} from "./ca-bgdetail";
import {caContext} from "./ca-context";
import {caAssersite} from "./ca-assetsite";
import {caPricing} from "./ca-pricing";
import {caBuyer} from "./ca-buyer";
import {caApvHist} from "./ca-apvhist";
import {caCapCl} from "./ca-capcl";
import {caCapClOwner} from "./ca-capclowner";
import {caCollateral} from "./ca-collateral";
import {caDetail} from "./ca-detail";
import {caAmendKeyIn} from "./ca-amendkeyin";
import {caAmendContent} from "./ca-amendcontent";
import {CaTempCreditLine} from "./ca-temp-credit-line";
import {CaTempCreditLineGroup} from "./ca-temp-credit-line-group";
import {CaTempBuyer} from "./ca-temp-buyer";
export class caHead {
  public com_code;
  public prebranch_code;
  public ca_no;
  public sale_call_no;
  public ctrl_no;
  public cus_status;
  public cus_code;
  public grp_code;
  public joint_seller_group;
  public sbu_typ;
  public advance_type;
  public apply_by;
  public apply_dt;
  public expire_dt;
  public contract_no;
  public contract_date;
  public contract_expire_date;
  public mkt_code;
  public ori_ca;
  public ref_old_ca;
  public intro_by;
  public score;
  public grade;
  public incorporate_date;
  public sales_year;
  public sales_amt;
  public net_worth_year;
  public net_worth_amt;
  public regis_capital;
  public paid_up_capital;
  public connect_since;
  public business_type;
  public total_exposure_cap;
  public total_exposure_cal;
  public fin_asst;
  public ca_condition: string;
  public ca_remark;
  public ca_prv_cond;
  public ca_approve_date;
  public verifier;
  public apprv_ver_by;
  public apprv_ver_date;
  public apprv_status;
  public approve_credit_by_code;
  public opinion_pro;
  public opinion_con;
  public opinion_suggest;
  public expected_dt;
  public follow_up_point;
  public res_follow_up;
  public print_ca_date;
  public current_task;
  public current_level_approve;
  public max_level_aprove;
  public settle_inv;
  public last_usr;
  public last_upd;
  public need_guarantor;
  public amend_time;
  public intro_mthd_cd;
  public review_level;
  public review_level_max;
  public cancel_date;
  public authority_ca;
  public print_contract_date;
  public print_contract_by;
  public close_date;
  public total_exposure;
  public business_detail;
  public running_cap;
  public above_manual;
  public bus_detail;
  public ca_type;
  public cluster_ind;
  public current_level_approve_review;
  public highest_amt;
  public intro_mthd_rmk;
  public main_credit_line;
  public max_level_aprove_review;
  public mobile_decision;
  public mobile_decision_by;
  public mobile_decision_rmk;
  public mobile_source;
  public ncb_run_no;
  public outlet;
  public req_run_no;
  public this_approve;
  public verify_head;
  public revise_time;
  public bl_flag;
  public apprv_cl_cust_amt;
  public apprv_cl_cust_amt_grp;
  public apprv_cl_dealer_amt;
  public apprv_cl_dealer_amt_grp;
  public apprv_hp_amt;
  public apprv_hp_amt_grp;
  public apprv_ls_amt;
  public apprv_ls_amt_grp;
  public ca_amt_cancel;
  public ca_comment;
  public credit_line_no;
  public expo_ls_amt;
  public expo_hp_amt;
  public expo_ls_amt_grp;
  public expo_hp_amt_grp;
  public highest_amt_grp;
  public highest_ls_amt;
  public highest_hp_amt;
  public highest_ls_amt_grp;
  public highest_hp_amt_grp;
  public last_due_ls;
  public last_due_hp;
  public mkt_grp;
  public os_ar_hp;
  public os_ar_ls;
  public os_credit_amt;
  public os_credit_line_amt;
  public reqst_credit_amt;
  public intro_by_cd;
  public mkt_name;
  public cus_name;
  public sbu_type_desc;
  public team_mkt_leader;
  public verifier_name;
  public join_group_name;
  public join_group_cr;
  public intro_mthd_desc;
  public intro_by_name;
  public title_authority;
  public above_level;
  public rec_agr_flag;
  public rec_cond;
  public rec_usr;
  public rec_upd;
  public caentity: caEntity;
  public listpcnind: caPcnInd[];
  public listcaguarantor: caGuarantor[];
  public listbgdetail: caBgDetail[];
  public listcacontext: caContext[];
  public listassetsite: caAssersite[];
  public listcapricing: caPricing[];
  public listcabuyer: caBuyer[];

  public listcaapvhist: caApvHist[];
  public listcacapcl: caCapCl[];
  public listcacapclowner: caCapClOwner[];
  public listcacollateral: caCollateral[];
  public listcadetail: caDetail[];

  public listamendhist: caAmendKeyIn[];
  public listamendcontent: caAmendContent[];

  public ap_rec_agr_flag;
  public ap_rec_amount;
  public ap_rec_cond;
  public listbuyertempcreditline: CaTempCreditLine[];
  public listsellertempcreditline: CaTempCreditLine[];
  public listbuyertempcreditlinegroup: CaTempCreditLineGroup[];
  public listsellertempcreditlinegroup: CaTempCreditLineGroup[];
  public listtempbuyer: CaTempBuyer[];
  public listtempbuyerg: CaTempBuyer[];



  constructor()
  constructor(com_code, prebranch_code, ca_no, sale_call_no, ctrl_no, cus_status, cus_code, grp_code, joint_seller_group,
              sbu_typ, advance_type, apply_by, apply_dt, expire_dt, contract_no, contract_date, contract_expire_date,
              mkt_code, ori_ca, ref_old_ca, intro_by, score, grade, incorporate_date, sales_year, sales_amt, net_worth_year,
              net_worth_amt, regis_capital, paid_up_capital, connect_since, business_type, total_exposure_cap, total_exposure_cal,
              fin_asst, ca_condition, ca_remark, ca_prv_cond, ca_approve_date, verifier, apprv_ver_by, apprv_ver_date,
              apprv_status, approve_credit_by_code, opinion_pro, opinion_con, opinion_suggest, expected_dt, follow_up_point,
              res_follow_up, print_ca_date, current_task, current_level_approve, max_level_aprove, settle_inv, last_usr,
              last_upd, need_guarantor, amend_time, intro_mthd_cd, review_level, review_level_max, cancel_date, authority_ca,
              print_contract_date, print_contract_by, close_date, total_exposure, business_detail, running_cap, above_manual,
              bus_detail, ca_type, cluster_ind, current_level_approve_review, highest_amt, intro_mthd_rmk, main_credit_line,
              max_level_aprove_review, mobile_decision, mobile_decision_by, mobile_decision_rmk, mobile_source, ncb_run_no,
              outlet, req_run_no, this_approve, verify_head, revise_time, bl_flag, apprv_cl_cust_amt, apprv_cl_cust_amt_grp,
              apprv_cl_dealer_amt, apprv_cl_dealer_amt_grp, apprv_hp_amt, apprv_hp_amt_grp, apprv_ls_amt, apprv_ls_amt_grp,
              ca_amt_cancel, ca_comment, credit_line_no, expo_ls_amt, expo_hp_amt, expo_ls_amt_grp, expo_hp_amt_grp, highest_amt_grp,
              highest_ls_amt, highest_hp_amt, highest_ls_amt_grp, highest_hp_amt_grp, last_due_ls, last_due_hp, mkt_grp, os_ar_hp,
              os_ar_ls, os_credit_amt, os_credit_line_amt, reqst_credit_amt, intro_by_cd, mkt_name, cus_name, sbu_type_desc,
              team_mkt_leader, verifier_name, join_group_name, join_group_cr, intro_mthd_desc, intro_by_name, title_authority,
              above_level, rec_agr_flag, rec_cond, rec_usr, rec_upd, ap_rec_agr_flag, ap_rec_amount, ap_rec_cond,
              caentity, listpcnind, listcaguarantor, listbgdetail, listcacontext, listassetsite
    , listcapricing, listcabuyer
    , listcaapvhist
    , listcacapcl
    , listcacapclowner
    , listcacollateral
    , listcadetail
    , listamendhist
    , listamendcontent
    ,listbuyertempcreditline
    ,listsellertempcreditline
    ,listbuyertempcreditlinegroup
    ,listsellertempcreditlinegroup
    ,listtempbuyer
    ,listtempbuyerg)

  constructor(com_code?, prebranch_code?, ca_no?, sale_call_no?, ctrl_no?, cus_status?, cus_code?, grp_code?, joint_seller_group?,
              sbu_typ?, advance_type?, apply_by?, apply_dt?, expire_dt?, contract_no?, contract_date?, contract_expire_date?,
              mkt_code?, ori_ca?, ref_old_ca?, intro_by?, score?, grade?, incorporate_date?, sales_year?, sales_amt?,
              net_worth_year?, net_worth_amt?, regis_capital?, paid_up_capital?, connect_since?, business_type?,
              total_exposure_cap?, total_exposure_cal?, fin_asst?, ca_condition?, ca_remark?, ca_prv_cond?, ca_approve_date?,
              verifier?, apprv_ver_by?, apprv_ver_date?, apprv_status?, approve_credit_by_code?, opinion_pro?, opinion_con?,
              opinion_suggest?, expected_dt?, follow_up_point?, res_follow_up?, print_ca_date?, current_task?,
              current_level_approve?, max_level_aprove?, settle_inv?, last_usr?, last_upd?, need_guarantor?, amend_time?,
              intro_mthd_cd?, review_level?, review_level_max?, cancel_date?, authority_ca?, print_contract_date?,
              print_contract_by?, close_date?, total_exposure?, business_detail?, running_cap?, above_manual?, bus_detail?,
              ca_type?, cluster_ind?, current_level_approve_review?, highest_amt?, intro_mthd_rmk?, main_credit_line?,
              max_level_aprove_review?, mobile_decision?, mobile_decision_by?, mobile_decision_rmk?, mobile_source?, ncb_run_no?,
              outlet?, req_run_no?, this_approve?, verify_head?, revise_time?, bl_flag?, apprv_cl_cust_amt?, apprv_cl_cust_amt_grp?,
              apprv_cl_dealer_amt?, apprv_cl_dealer_amt_grp?, apprv_hp_amt?, apprv_hp_amt_grp?, apprv_ls_amt?, apprv_ls_amt_grp?,
              ca_amt_cancel?, ca_comment?, credit_line_no?, expo_ls_amt?, expo_hp_amt?, expo_ls_amt_grp?, expo_hp_amt_grp?,
              highest_amt_grp?, highest_ls_amt?, highest_hp_amt?, highest_ls_amt_grp?, highest_hp_amt_grp?, last_due_ls?,
              last_due_hp?, mkt_grp?, os_ar_hp?, os_ar_ls?, os_credit_amt?, os_credit_line_amt?, reqst_credit_amt?, intro_by_cd?,
              mkt_name?, cus_name?, sbu_type_desc?, team_mkt_leader?, verifier_name?, join_group_name?, join_group_cr?,
              intro_mthd_desc?, intro_by_name?, title_authority?, above_level?, rec_agr_flag?, rec_cond?, rec_usr?, rec_upd?,
              ap_rec_agr_flag?, ap_rec_amount?, ap_rec_cond?,
              caentity?, listpcnind?, listcaguarantor?, listbgdetail?, listcacontext?, listassetsite?
    , listcapricing?, listcabuyer?
    , listcaapvhist?
    , listcacapcl?
    , listcacapclowner?
    , listcacollateral?
    , listcadetail?
    , listamendhist?
    , listamendcontent?
    ,listbuyertempcreditline?
    ,listsellertempcreditline?
    ,listbuyertempcreditlinegroup?
    ,listsellertempcreditlinegroup?
    ,listtempbuyer?
    ,listtempbuyerg?) {
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
    this.total_exposure_cap = total_exposure_cap;
    this.total_exposure_cal = total_exposure_cal;
    this.fin_asst = fin_asst;
    this.ca_condition = ca_condition ? ca_condition : '';
    this.ca_remark = ca_remark;
    this.ca_prv_cond = ca_prv_cond;
    this.ca_approve_date = ca_approve_date;
    this.verifier = verifier;
    this.apprv_ver_by = apprv_ver_by;
    this.apprv_ver_date = apprv_ver_date;
    this.apprv_status = apprv_status;
    this.approve_credit_by_code = approve_credit_by_code;
    this.opinion_pro = opinion_pro;
    this.opinion_con = opinion_con;
    this.opinion_suggest = opinion_suggest;
    this.expected_dt = expected_dt;
    this.follow_up_point = follow_up_point;
    this.res_follow_up = res_follow_up;
    this.print_ca_date = print_ca_date;
    this.current_task = current_task;
    this.current_level_approve = current_level_approve;
    this.max_level_aprove = max_level_aprove;
    this.settle_inv = settle_inv;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.need_guarantor = need_guarantor;
    this.amend_time = amend_time;
    this.intro_mthd_cd = intro_mthd_cd;
    this.review_level = review_level;
    this.review_level_max = review_level_max;
    this.cancel_date = cancel_date;
    this.authority_ca = authority_ca;
    this.print_contract_date = print_contract_date;
    this.print_contract_by = print_contract_by;
    this.close_date = close_date;
    this.total_exposure = total_exposure;
    this.business_detail = business_detail;
    this.running_cap = running_cap;
    this.above_manual = above_manual;
    this.bus_detail = bus_detail;
    this.ca_type = ca_type;
    this.cluster_ind = cluster_ind;
    this.current_level_approve_review = current_level_approve_review;
    this.highest_amt = highest_amt;
    this.intro_mthd_rmk = intro_mthd_rmk;
    this.main_credit_line = main_credit_line;
    this.max_level_aprove_review = max_level_aprove_review;
    this.mobile_decision = mobile_decision;
    this.mobile_decision_by = mobile_decision_by;
    this.mobile_decision_rmk = mobile_decision_rmk;
    this.mobile_source = mobile_source;
    this.ncb_run_no = ncb_run_no;
    this.outlet = outlet;
    this.req_run_no = req_run_no;
    this.this_approve = this_approve;
    this.verify_head = verify_head;
    this.revise_time = revise_time;
    this.bl_flag = bl_flag;
    this.apprv_cl_cust_amt = apprv_cl_cust_amt;
    this.apprv_cl_cust_amt_grp = apprv_cl_cust_amt_grp;
    this.apprv_cl_dealer_amt = apprv_cl_dealer_amt;
    this.apprv_cl_dealer_amt_grp = apprv_cl_dealer_amt_grp;
    this.apprv_hp_amt = apprv_hp_amt;
    this.apprv_hp_amt_grp = apprv_hp_amt_grp;
    this.apprv_ls_amt = apprv_ls_amt;
    this.apprv_ls_amt_grp = apprv_ls_amt_grp;
    this.ca_amt_cancel = ca_amt_cancel;
    this.ca_comment = ca_comment;
    this.credit_line_no = credit_line_no;
    this.expo_ls_amt = expo_ls_amt;
    this.expo_hp_amt = expo_hp_amt;
    this.expo_ls_amt_grp = expo_ls_amt_grp;
    this.expo_hp_amt_grp = expo_hp_amt_grp;
    this.highest_amt_grp = highest_amt_grp;
    this.highest_ls_amt = highest_ls_amt;
    this.highest_hp_amt = highest_hp_amt;
    this.highest_ls_amt_grp = highest_ls_amt_grp;
    this.highest_hp_amt_grp = highest_hp_amt_grp;
    this.last_due_ls = last_due_ls;
    this.last_due_hp = last_due_hp;
    this.mkt_grp = mkt_grp;
    this.os_ar_hp = os_ar_hp;
    this.os_ar_ls = os_ar_ls;
    this.os_credit_amt = os_credit_amt;
    this.os_credit_line_amt = os_credit_line_amt;
    this.reqst_credit_amt = reqst_credit_amt;
    this.intro_by_cd = intro_by_cd;
    this.mkt_name = mkt_name;
    this.cus_name = cus_name;
    this.sbu_type_desc = sbu_type_desc;
    this.team_mkt_leader = team_mkt_leader;
    this.verifier_name = verifier_name;
    this.join_group_name = join_group_name;
    this.join_group_cr = join_group_cr;
    this.intro_mthd_desc = intro_mthd_desc;
    this.intro_by_name = intro_by_name;
    this.title_authority = title_authority;
    this.above_level = above_level;
    this.rec_agr_flag = rec_agr_flag;
    this.rec_cond = rec_cond;
    this.rec_usr = rec_usr;
    this.rec_upd = rec_upd;

    this.ap_rec_agr_flag = ap_rec_agr_flag;
    this.ap_rec_amount = ap_rec_amount;
    this.ap_rec_cond = ap_rec_cond;

    this.caentity = caentity;
    this.listpcnind = listpcnind;
    this.listcaguarantor = listcaguarantor;
    this.listbgdetail = listbgdetail;
    this.listcacontext = listcacontext;
    this.listassetsite = listassetsite;
    this.listcapricing = listcapricing;
    this.listcabuyer = listcabuyer;
    this.listcaapvhist = listcaapvhist;
    this.listcacapcl = listcacapcl;
    this.listcacapclowner = listcacapclowner;
    this.listcacollateral = listcacollateral;
    this.listcadetail = listcadetail;
    this.listamendhist = listamendhist;
    this.listamendcontent = listamendcontent;
    this.listbuyertempcreditline =listbuyertempcreditline;
    this.listsellertempcreditline=listsellertempcreditline;
    this.listbuyertempcreditlinegroup=listbuyertempcreditlinegroup;
    this.listsellertempcreditlinegroup=listsellertempcreditlinegroup;
    this.listtempbuyer=listtempbuyer;
    this.listtempbuyerg=listtempbuyerg;
  }

  static parse(json: any) {
    return new caHead(
      json.com_code,
      json.prebranch_code,
      json.ca_no,
      json.sale_call_no,
      json.ctrl_no,
      json.cus_status,
      json.cus_code,
      json.grp_code,
      json.joint_seller_group,
      json.sbu_typ,
      json.advance_type,
      json.apply_by,
      json.apply_dt,
      json.expire_dt,
      json.contract_no,
      json.contract_date,
      json.contract_expire_date,
      json.mkt_code,
      json.ori_ca,
      json.ref_old_ca,
      json.intro_by,
      json.score,
      json.grade,
      json.incorporate_date,
      json.sales_year,
      json.sales_amt,
      json.net_worth_year,
      json.net_worth_amt,
      json.regis_capital,
      json.paid_up_capital,
      json.connect_since,
      json.business_type,
      json.total_exposure_cap,
      json.total_exposure_cal,
      json.fin_asst,
      json.ca_condition,
      json.ca_remark,
      json.ca_prv_cond,
      json.ca_approve_date,
      json.verifier,
      json.apprv_ver_by,
      json.apprv_ver_date,
      json.apprv_status,
      json.approve_credit_by_code,
      json.opinion_pro,
      json.opinion_con,
      json.opinion_suggest,
      json.expected_dt,
      json.follow_up_point,
      json.res_follow_up,
      json.print_ca_date,
      json.current_task,
      json.current_level_approve,
      json.max_level_aprove,
      json.settle_inv,
      json.last_usr,
      json.last_upd,
      json.need_guarantor,
      json.amend_time,
      json.intro_mthd_cd,
      json.review_level,
      json.review_level_max,
      json.cancel_date,
      json.authority_ca,
      json.print_contract_date,
      json.print_contract_by,
      json.close_date,
      json.total_exposure,
      json.business_detail,
      json.running_cap,
      json.above_manual,
      json.bus_detail,
      json.ca_type,
      json.cluster_ind,
      json.current_level_approve_review,
      json.highest_amt,
      json.intro_mthd_rmk,
      json.main_credit_line,
      json.max_level_aprove_review,
      json.mobile_decision,
      json.mobile_decision_by,
      json.mobile_decision_rmk,
      json.mobile_source,
      json.ncb_run_no,
      json.outlet,
      json.req_run_no,
      json.this_approve,
      json.verify_head,
      json.revise_time,
      json.bl_flag,
      json.apprv_cl_cust_amt,
      json.apprv_cl_cust_amt_grp,
      json.apprv_cl_dealer_amt,
      json.apprv_cl_dealer_amt_grp,
      json.apprv_hp_amt,
      json.apprv_hp_amt_grp,
      json.apprv_ls_amt,
      json.apprv_ls_amt_grp,
      json.ca_amt_cancel,
      json.ca_comment,
      json.credit_line_no,
      json.expo_ls_amt,
      json.expo_hp_amt,
      json.expo_ls_amt_grp,
      json.expo_hp_amt_grp,
      json.highest_amt_grp,
      json.highest_ls_amt,
      json.highest_hp_amt,
      json.highest_ls_amt_grp,
      json.highest_hp_amt_grp,
      json.last_due_ls,
      json.last_due_hp,
      json.mkt_grp,
      json.os_ar_hp,
      json.os_ar_ls,
      json.os_credit_amt,
      json.os_credit_line_amt,
      json.reqst_credit_amt,
      json.intro_by_cd,
      json.mkt_name,
      json.cus_name,
      json.sbu_type_desc,
      json.team_mkt_leader,
      json.verifier_name,
      json.join_group_name,
      json.join_group_cr,
      json.intro_mthd_desc,
      json.intro_by_name,
      json.title_authority,
      json.above_level,
      json.rec_agr_flag,
      json.rec_cond,
      json.rec_usr,
      json.rec_upd,
      json.ap_rec_agr_flag,
      json.ap_rec_amount,
      json.ap_rec_cond,
      caEntity.parse(json.caentity),
      caPcnInd.parse(json.listpcnind),
      caGuarantor.parse(json.listcaguarantor),
      caBgDetail.parse(json.listbgdetail),
      caContext.parse(json.listcacontext),
      caAssersite.parse(json.listassetsite),
      caPricing.parse(json.listcapricing),
      caBuyer.parse(json.listcabuyer),
      caApvHist.parse(json.listcaapvhist),
      caCapCl.parse(json.listcacapcl),
      caCapClOwner.parse(json.listcacapclowner),
      caCollateral.parse(json.listcacollateral),
      caDetail.parse(json.listcadetail),
      caAmendKeyIn.parse(json.listamendhist),
      caAmendContent.parse(json.listamendcontent),
      CaTempCreditLine.parse(json.listbuyertempcreditline),
      CaTempCreditLine.parse(json.listsellertempcreditline),
      CaTempCreditLineGroup.parse(json.listbuyertempcreditlinegroup),
      CaTempCreditLineGroup.parse(json.listsellertempcreditlinegroup),
      CaTempBuyer.parse(json.listtempbuyer),
      CaTempBuyer.parse(json.listtempbuyerg)
    )
  }
}
