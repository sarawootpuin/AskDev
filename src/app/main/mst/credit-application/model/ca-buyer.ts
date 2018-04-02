import {caBuyerDoc} from "./ca-buyerdoc";
import {caFactor} from "./ca-factor";
export class caBuyer {
  public com_code;
  public ca_no;
  public buyer_code;
  public seq_no;
  public app_type;
  public joint_buyer_group;
  public sub_line_amt;
  public sub_line_amt_group;
  public sub_os_amt;
  public sub_os_amt_group;
  public seller_cr_amt;
  public seller_os_amt;
  public terms;
  public noti_type;
  public advance_code;
  public advance_ratio;
  public factoring_fee;
  public min_facfee;
  public max_facfee;
  public pay_mthd;
  public other_doc;
  public other_doc_remark;
  public eff_date;
  public expire_dt;
  public eff_rate;
  public drirect_payment;
  public cancel_date;
  public cancel_by;
  public cancel_reason_code;
  public last_usr;
  public last_upd;
  public input_by;
  public input_date;
  public progress_payment;
  public currency_type;
  public ver_waive;
  public ori_sub_line_amt;
  public buyer_name;
  public app_type_desc;
  public join_group_name;
  public cr_limit;
  public address_eng;
  public address_eng2;
  public listcabuyerdoc : caBuyerDoc[];
  public listcafactor : caFactor[]

  constructor()
  constructor(com_code, ca_no, buyer_code, seq_no, app_type, joint_buyer_group, sub_line_amt, sub_line_amt_group, sub_os_amt, sub_os_amt_group, seller_cr_amt, seller_os_amt, terms, noti_type, advance_code, advance_ratio, factoring_fee, min_facfee, max_facfee, pay_mthd, other_doc, other_doc_remark, eff_date, expire_dt, eff_rate, drirect_payment, cancel_date, cancel_by, cancel_reason_code, last_usr, last_upd, input_by, input_date, progress_payment, currency_type, ver_waive, ori_sub_line_amt, buyer_name, app_type_desc, join_group_name, cr_limit, address_eng, address_eng2
              ,listcabuyerdoc,listcafactor)
  constructor(com_code?, ca_no?, buyer_code?, seq_no?, app_type?, joint_buyer_group?, sub_line_amt?, sub_line_amt_group?, sub_os_amt?, sub_os_amt_group?, seller_cr_amt?, seller_os_amt?, terms?, noti_type?, advance_code?, advance_ratio?, factoring_fee?, min_facfee?, max_facfee?, pay_mthd?, other_doc?, other_doc_remark?, eff_date?, expire_dt?, eff_rate?, drirect_payment?, cancel_date?, cancel_by?, cancel_reason_code?, last_usr?, last_upd?, input_by?, input_date?, progress_payment?, currency_type?, ver_waive?, ori_sub_line_amt?, buyer_name?, app_type_desc?, join_group_name?, cr_limit?, address_eng?, address_eng2?
              ,listcabuyerdoc?,listcafactor?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.buyer_code = buyer_code;
    this.seq_no = seq_no;
    this.app_type = app_type;
    this.joint_buyer_group = joint_buyer_group;
    this.sub_line_amt = sub_line_amt;
    this.sub_line_amt_group = sub_line_amt_group;
    this.sub_os_amt = sub_os_amt;
    this.sub_os_amt_group = sub_os_amt_group;
    this.seller_cr_amt = seller_cr_amt;
    this.seller_os_amt = seller_os_amt;
    this.terms = terms;
    this.noti_type = noti_type;
    this.advance_code = advance_code;
    this.advance_ratio = advance_ratio;
    this.factoring_fee = factoring_fee;
    this.min_facfee = min_facfee;
    this.max_facfee = max_facfee;
    this.pay_mthd = pay_mthd;
    this.other_doc = other_doc;
    this.other_doc_remark = other_doc_remark;
    this.eff_date = eff_date;
    this.expire_dt = expire_dt;
    this.eff_rate = eff_rate;
    this.drirect_payment = drirect_payment;
    this.cancel_date = cancel_date;
    this.cancel_by = cancel_by;
    this.cancel_reason_code = cancel_reason_code;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.input_by = input_by;
    this.input_date = input_date;
    this.progress_payment = progress_payment;
    this.currency_type = currency_type;
    this.ver_waive = ver_waive;
    this.ori_sub_line_amt = ori_sub_line_amt;
    this.buyer_name = buyer_name;
    this.app_type_desc = app_type_desc;
    this.join_group_name = join_group_name;
    this.cr_limit = cr_limit;
    this.address_eng = address_eng;
    this.address_eng2 = address_eng2;
    this.listcabuyerdoc = listcabuyerdoc ;
    this.listcafactor = listcafactor ;
  }

  static
  parse(json: any[]) {
    let data: caBuyer[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caBuyer(
          json[i].com_code,
          json[i].ca_no,
          json[i].buyer_code,
          json[i].seq_no,
          json[i].app_type,
          json[i].joint_buyer_group,
          json[i].sub_line_amt,
          json[i].sub_line_amt_group,
          json[i].sub_os_amt,
          json[i].sub_os_amt_group,
          json[i].seller_cr_amt,
          json[i].seller_os_amt,
          json[i].terms,
          json[i].noti_type,
          json[i].advance_code,
          json[i].advance_ratio,
          json[i].factoring_fee,
          json[i].min_facfee,
          json[i].max_facfee,
          json[i].pay_mthd,
          json[i].other_doc,
          json[i].other_doc_remark,
          json[i].eff_date,
          json[i].expire_dt,
          json[i].eff_rate,
          json[i].drirect_payment,
          json[i].cancel_date,
          json[i].cancel_by,
          json[i].cancel_reason_code,
          json[i].last_usr,
          json[i].last_upd,
          json[i].input_by,
          json[i].input_date,
          json[i].progress_payment,
          json[i].currency_type,
          json[i].ver_waive,
          json[i].ori_sub_line_amt,
          json[i].buyer_name,
          json[i].app_type_desc,
          json[i].join_group_name,
          json[i].cr_limit,
          json[i].address_eng,
          json[i].address_eng2,
          caBuyerDoc.parse(json[i].listcabuyerdoc),
          caFactor.parse(json[i].listcafactor)
        ))
      }
    }
    return data;
  }
}
