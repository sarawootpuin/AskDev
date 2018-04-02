/**
 * Created by peerawat.ko on 28/09/2560.
 */
export class ListCollateral {
  public com_code: any;
  public ap_no: any;
  public seq_no: any;
  public clt_type: any;
  public clt_amt: any;
  public clt_balance: any;
  public doc_no: any;
  public doc_date: any;
  public rate_type: any;
  public int_rate: any;
  public max_int_rate: any;
  public rate_bank: any;
  public rate_m: any;
  public rate_spread: any;
  public deduct_flg: any;
  public deduct_pcn: any;
  public deduct_amt: any;
  public remark: any;
  public cal_int_type: any;
  public printcipal_clg_amt: any;
  public clt_cash_rcp: any;
  public cal_int_type_desc: any;
  public cal_int_mtd_desc: any;
  public clt_type_desc: any;
  public rate_m_desc: any;
  public bank_int_rate: any;

  constructor()
  constructor(com_code: any,
              ap_no: any,
              seq_no: any,
              clt_type: any,
              clt_amt: any,
              clt_balance: any,
              doc_no: any,
              doc_date: any,
              rate_type: any,
              int_rate: any,
              max_int_rate: any,
              rate_bank: any,
              rate_m: any,
              rate_spread: any,
              deduct_flg: any,
              deduct_pcn: any,
              deduct_amt: any,
              remark: any,
              cal_int_type: any,
              printcipal_clg_amt: any,
              clt_cash_rcp: any,
              cal_int_type_desc: any,
              cal_int_mtd_desc: any,
              clt_type_desc: any,
              rate_m_desc: any,
              bank_int_rate: any)
  constructor(com_code ?: any,
              ap_no ?: any,
              seq_no ?: any,
              clt_type ?: any,
              clt_amt ?: any,
              clt_balance ?: any,
              doc_no ?: any,
              doc_date ?: any,
              rate_type ?: any,
              int_rate ?: any,
              max_int_rate ?: any,
              rate_bank ?: any,
              rate_m ?: any,
              rate_spread ?: any,
              deduct_flg ?: any,
              deduct_pcn ?: any,
              deduct_amt ?: any,
              remark ?: any,
              cal_int_type ?: any,
              printcipal_clg_amt ?: any,
              clt_cash_rcp ?: any,
              cal_int_type_desc ?: any,
              cal_int_mtd_desc ?: any,
              clt_type_desc ?: any,
              rate_m_desc ?: any,
              bank_int_rate ?: any) {
    this.com_code = com_code;
    this.ap_no = ap_no;
    this.seq_no = seq_no;
    this.clt_type = clt_type;
    this.clt_amt = clt_amt;
    this.clt_balance = clt_balance;
    this.doc_no = doc_no;
    this.doc_date = doc_date;
    this.rate_type = rate_type;
    this.int_rate = int_rate;
    this.max_int_rate = max_int_rate;
    this.rate_bank = rate_bank;
    this.rate_m = rate_m;
    this.rate_spread = rate_spread;
    this.deduct_flg = deduct_flg;
    this.deduct_pcn = deduct_pcn;
    this.deduct_amt = deduct_amt;
    this.remark = remark;
    this.cal_int_type = cal_int_type;
    this.printcipal_clg_amt = printcipal_clg_amt;
    this.clt_cash_rcp = clt_cash_rcp;
    this.cal_int_type_desc = cal_int_type_desc;
    this.cal_int_mtd_desc = cal_int_mtd_desc;
    this.clt_type_desc = clt_type_desc;
    this.rate_m_desc = rate_m_desc;
    this.bank_int_rate = bank_int_rate;
  }

  static parse(jsons: any[]) {
    let data: ListCollateral[] = [];
    for (let json of jsons) {
      data.push(new ListCollateral(
        json.COM_CODE,
        json.AP_NO,
        json.SEQ_NO,
        json.CLT_TYPE,
        json.CLT_AMT,
        json.CLT_BALANCE,
        json.DOC_NO,
        json.DOC_DATE,
        json.RATE_TYPE,
        json.INT_RATE,
        json.MAX_INT_RATE,
        json.RATE_BANK,
        json.RATE_M,
        json.RATE_SPREAD,
        json.DEDUCT_FLG,
        json.DEDUCT_PCN,
        json.DEDUCT_AMT,
        json.REMARK,
        json.CAL_INT_TYPE,
        json.PRINTCIPAL_CLG_AMT,
        json.CLT_CASH_RCP,
        json.CAL_INT_TYPE_DESC,
        json.CAL_INT_MTD_DESC,
        json.CLT_TYPE_DESC,
        json.RATE_M_DESC,
        json.BANK_INT_RATE
      ))
    }
    return data;
  }
}
