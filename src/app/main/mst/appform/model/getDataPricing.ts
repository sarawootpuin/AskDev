/**
 * Created by peerawat.ko on 26/08/2560.
 */
export class ListPricing {
  public com_code: any;
  public sub_id: any;
  public credit_line_amt: any;
  public commission: any;
  public rate_bank: any;
  public rate_type: any;
  public rate_m: any;
  public rate_spread: any;
  public int_rate: any;
  public handling_fee_amt: any;
  public front_end_fee_amt: any;
  public prc_typ: any;
  public eff_date: any;
  public expire_dt: any;
  public factfee_type: any;
  public factfee_amt_month: any;
  public last_usr: any;
  public last_upd: any;
  public input_by: any;
  public input_date: any;
  public seller_code: any;
  public ap_no: any;
  public fci_rate: any;
  public rate_bank_desc: any;
  public rate_m_desc: any;
  public seller_name: any;
  public bank_int_rate: any;

  constructor()
  constructor(com_code: any,
              sub_id: any,
              credit_line_amt: any,
              commission: any,
              rate_bank: any,
              rate_type: any,
              rate_m: any,
              rate_spread: any,
              int_rate: any,
              handling_fee_amt: any,
              front_end_fee_amt: any,
              prc_typ: any,
              eff_date: any,
              expire_dt: any,
              factfee_type: any,
              factfee_amt_month: any,
              last_usr: any,
              last_upd: any,
              input_by: any,
              input_date: any,
              seller_code: any,
              ap_no: any,
              fci_rate: any,
              rate_bank_desc: any,
              rate_m_desc: any,
              seller_name: any,
              bank_int_rate: any)
  constructor(com_code ?: any,
              sub_id ?: any,
              credit_line_amt ?: any,
              commission ?: any,
              rate_bank ?: any,
              rate_type ?: any,
              rate_m ?: any,
              rate_spread ?: any,
              int_rate ?: any,
              handling_fee_amt ?: any,
              front_end_fee_amt ?: any,
              prc_typ ?: any,
              eff_date ?: any,
              expire_dt ?: any,
              factfee_type ?: any,
              factfee_amt_month ?: any,
              last_usr ?: any,
              last_upd ?: any,
              input_by ?: any,
              input_date ?: any,
              seller_code ?: any,
              ap_no ?: any,
              fci_rate ?: any,
              rate_bank_desc ?: any,
              rate_m_desc ?: any,
              seller_name ?: any,
              bank_int_rate ?: any) {
    this.com_code = com_code;
    this.sub_id = sub_id;
    this.credit_line_amt = credit_line_amt;
    this.commission = commission;
    this.rate_bank = rate_bank;
    this.rate_type = rate_type;
    this.rate_m = rate_m;
    this.rate_spread = rate_spread;
    this.int_rate = int_rate;
    this.handling_fee_amt = handling_fee_amt;
    this.front_end_fee_amt = front_end_fee_amt;
    this.prc_typ = prc_typ;
    this.eff_date = eff_date;
    this.expire_dt = expire_dt;
    this.factfee_type = factfee_type;
    this.factfee_amt_month = factfee_amt_month;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.input_by = input_by;
    this.input_date = input_date;
    this.seller_code = seller_code;
    this.ap_no = ap_no;
    this.fci_rate = fci_rate;
    this.rate_bank_desc = rate_bank_desc;
    this.rate_m_desc = rate_m_desc;
    this.seller_name = seller_name;
    this.bank_int_rate = bank_int_rate;

  }

  static parse(jsons: any[]) {
    let data: ListPricing[] = [];
    for (let json of jsons) {
      data.push(new ListPricing(
        json.COM_CODE,
        json.SUB_ID,
        json.CREDIT_LINE_AMT,
        json.COMMISSION,
        json.RATE_BANK,
        json.RATE_TYPE,
        json.RATE_M,
        json.RATE_SPREAD,
        json.INT_RATE,
        json.HANDLING_FEE_AMT,
        json.FRONT_END_FEE_AMT,
        json.PRC_TYP,
        json.EFF_DATE,
        json.EXPIRE_DT,
        json.FACTFEE_TYPE,
        json.FACTFEE_AMT_MONTH,
        json.LAST_USR,
        json.LAST_UPD,
        json.INPUT_BY,
        json.INPUT_DATE,
        json.SELLER_CODE,
        json.AP_NO,
        json.FCI_RATE,
        json.RATE_BANK_DESC,
        json.RATE_M_DESC,
        json.SELLER_NAME,
        json.BANK_INT_RATE,
      ))
    }
    return data;
  }
}
