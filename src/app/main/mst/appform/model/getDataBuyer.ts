/**
 * Created by peerawat.ko on 26/08/2560.
 */
export class ListBuyer {
  public com_code: any;
  public buyer_code: any;
  public seq_no: any;
  public app_type: any;
  public joint_buyer_group: any;
  public sub_line_amt: any;
  public sub_line_amt_group: any;
  public sub_os_amt: any;
  public sub_os_amt_group: any;
  public seller_cr_amt: any;
  public seller_os_amt: any;
  public terms: any;
  public noti_type: any;
  public advance_code: any;
  public advance_ratio: any;
  public factoring_fee: any;
  public min_facfee: any;
  public max_facfee: any;
  public pay_mthd: any;
  public other_doc: any;
  public eff_date: any;
  public expire_dt: any;
  public eff_rate: any;
  public drirect_payment: any;
  public last_usr: any;
  public last_upd: any;
  public input_by: any;
  public input_date: any;
  public progress_payment: any;
  public currency_type: any;
  public ver_waive: any;
  public ap_no: any;
  public buyer_name: any;
  public app_type_desc: any;
  public joint_group_name: any;
  public cr_limit: any;
  public join_grp_code: any;
  public address_eng: any;
  public address_eng2: any;

  constructor()
  constructor(com_code: any,
              buyer_code: any,
              seq_no: any,
              app_type: any,
              joint_buyer_group: any,
              sub_line_amt: any,
              sub_line_amt_group: any,
              sub_os_amt: any,
              sub_os_amt_group: any,
              seller_cr_amt: any,
              seller_os_amt: any,
              terms: any,
              noti_type: any,
              advance_code: any,
              advance_ratio: any,
              factoring_fee: any,
              min_facfee: any,
              max_facfee: any,
              pay_mthd: any,
              other_doc: any,
              eff_date: any,
              expire_dt: any,
              eff_rate: any,
              drirect_payment: any,
              last_usr: any,
              last_upd: any,
              input_by: any,
              input_date: any,
              progress_payment: any,
              currency_type: any,
              ver_waive: any,
              ap_no: any,
              buyer_name: any,
              app_type_desc: any,
              joint_group_name: any,
              cr_limit: any,
              join_grp_code: any,
              address_eng: any,
              address_eng2: any)
  constructor(com_code?: any,
              buyer_code?: any,
              seq_no?: any,
              app_type?: any,
              joint_buyer_group?: any,
              sub_line_amt?: any,
              sub_line_amt_group?: any,
              sub_os_amt?: any,
              sub_os_amt_group?: any,
              seller_cr_amt?: any,
              seller_os_amt?: any,
              terms?: any,
              noti_type?: any,
              advance_code?: any,
              advance_ratio?: any,
              factoring_fee?: any,
              min_facfee?: any,
              max_facfee?: any,
              pay_mthd?: any,
              other_doc?: any,
              eff_date?: any,
              expire_dt?: any,
              eff_rate?: any,
              drirect_payment?: any,
              last_usr?: any,
              last_upd?: any,
              input_by?: any,
              input_date?: any,
              progress_payment?: any,
              currency_type?: any,
              ver_waive?: any,
              ap_no?: any,
              buyer_name?: any,
              app_type_desc?: any,
              joint_group_name?: any,
              cr_limit?: any,
              join_grp_code?: any,
              address_eng?: any,
              address_eng2?: any) {
    this.com_code = com_code;
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
    this.eff_date = eff_date;
    this.expire_dt = expire_dt;
    this.eff_rate = eff_rate;
    this.drirect_payment = drirect_payment;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.input_by = input_by;
    this.input_date = input_date;
    this.progress_payment = progress_payment;
    this.currency_type = currency_type;
    this.ver_waive = ver_waive;
    this.ap_no = ap_no;
    this.buyer_name = buyer_name;
    this.app_type_desc = app_type_desc;
    this.joint_group_name = joint_group_name;
    this.cr_limit = cr_limit;
    this.join_grp_code = join_grp_code;
    this.address_eng = address_eng;
    this.address_eng2 = address_eng2;

  }

  static parse(json: any[]) {
    let data: ListBuyer[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new ListBuyer(
        json[i].COM_CODE,
        json[i].BUYER_CODE,
        json[i].SEQ_NO,
        json[i].APP_TYPE,
        json[i].JOINT_BUYER_GROUP,
        json[i].SUB_LINE_AMT,
        json[i].SUB_LINE_AMT_GROUP,
        json[i].SUB_OS_AMT,
        json[i].SUB_OS_AMT_GROUP,
        json[i].SELLER_CR_AMT,
        json[i].SELLER_OS_AMT,
        json[i].TERMS,
        json[i].NOTI_TYPE,
        json[i].ADVANCE_CODE,
        json[i].ADVANCE_RATIO,
        json[i].FACTORING_FEE,
        json[i].MIN_FACFEE,
        json[i].MAX_FACFEE,
        json[i].PAY_MTHD,
        json[i].OTHER_DOC,
        json[i].EFF_DATE,
        json[i].EXPIRE_DT,
        json[i].EFF_RATE,
        json[i].DRIRECT_PAYMENT,
        json[i].LAST_USR,
        json[i].LAST_UPD,
        json[i].INPUT_BY,
        json[i].INPUT_DATE,
        json[i].PROGRESS_PAYMENT,
        json[i].CURRENCY_TYPE,
        json[i].VER_WAIVE,
        json[i].AP_NO,
        json[i].BUYER_NAME,
        json[i].APP_TYPE_DESC,
        json[i].JOINT_GROUP_NAME,
        json[i].CR_LIMIT,
        json[i].JOIN_GRP_CODE,
        json[i].ADDRESS_ENG,
        json[i].ADDRESS_ENG2
      ))
    }

    return data;
  }
}
