export class caCollateral {
  public com_code;
  public ca_no;
  public seq_no;
  public clt_type;
  public clt_amt;
  public clt_balance;
  public doc_no;
  public doc_date;
  public rate_type;
  public int_rate;
  public max_int_rate;
  public rate_bank;
  public rate_m;
  public rate_spread;
  public deduct_flg;
  public deduct_pcn;
  public deduct_amt;
  public remark;
  public cal_int_type;
  public printcipal_clg_amt;
  public clt_cash_rcp;
  public cal_int_type_desc;
  public cal_int_mtd_desc;
  public clt_type_desc;
  public rate_m_desc;
  public bank_int_rate;

  constructor()
  constructor(com_code, ca_no, seq_no, clt_type, clt_amt, clt_balance, doc_no, doc_date, rate_type, int_rate, max_int_rate, rate_bank, rate_m, rate_spread, deduct_flg, deduct_pcn, deduct_amt, remark, cal_int_type, printcipal_clg_amt, clt_cash_rcp, cal_int_type_desc, cal_int_mtd_desc, clt_type_desc, rate_m_desc, bank_int_rate)
  constructor(com_code?, ca_no?, seq_no?, clt_type?, clt_amt?, clt_balance?, doc_no?, doc_date?, rate_type?, int_rate?, max_int_rate?, rate_bank?, rate_m?, rate_spread?, deduct_flg?, deduct_pcn?, deduct_amt?, remark?, cal_int_type?, printcipal_clg_amt?, clt_cash_rcp?, cal_int_type_desc?, cal_int_mtd_desc?, clt_type_desc?, rate_m_desc?, bank_int_rate?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
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

  static
  parse(json: any[]) {
    let data: caCollateral[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caCollateral(
          json[i].com_code,
          json[i].ca_no,
          json[i].seq_no,
          json[i].clt_type,
          json[i].clt_amt,
          json[i].clt_balance,
          json[i].doc_no,
          json[i].doc_date,
          json[i].rate_type,
          json[i].int_rate,
          json[i].max_int_rate,
          json[i].rate_bank,
          json[i].rate_m,
          json[i].rate_spread,
          json[i].deduct_flg,
          json[i].deduct_pcn,
          json[i].deduct_amt,
          json[i].remark,
          json[i].cal_int_type,
          json[i].printcipal_clg_amt,
          json[i].clt_cash_rcp,
          json[i].cal_int_type_desc,
          json[i].cal_int_mtd_desc,
          json[i].clt_type_desc,
          json[i].rate_m_desc,
          json[i].bank_int_rate
        ))
      }
    }
    return data;
  }
}
