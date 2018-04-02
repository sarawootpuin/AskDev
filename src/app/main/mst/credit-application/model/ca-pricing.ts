export class caPricing {
  public com_code;
  public ca_no;
  public sub_id;
  public credit_line_amt;
  public credit_line_amt_curr;
  public commission;
  public rate_bank;
  public rate_type;
  public rate_m;
  public rate_spread;
  public int_rate;
  public handling_fee_amt;
  public handling_fee_amt_curr;
  public front_end_fee_amt;
  public prc_typ;
  public eff_date;
  public expire_dt;
  public currency_credit_line;
  public currency_type;
  public currency_hf_rate;
  public currency_hf_type;
  public currency_eff_date;
  public factfee_type;
  public factfee_amt_month;
  public last_usr;
  public last_upd;
  public input_by;
  public input_date;
  public remark_attached_sheet;
  public seller_code;
  public risk_prem_rate;
  public fci_rate;
  public currency_type_desc;
  public rate_bank_desc;
  public rate_m_desc;
  public currency_hf_type_desc;
  public seller_name;
  public bank_int_rate;

  constructor()
  constructor(com_code, ca_no, sub_id, credit_line_amt, credit_line_amt_curr, commission, rate_bank, rate_type, rate_m, rate_spread, int_rate, handling_fee_amt, handling_fee_amt_curr, front_end_fee_amt, prc_typ, eff_date, expire_dt, currency_credit_line, currency_type, currency_hf_rate, currency_hf_type, currency_eff_date, factfee_type, factfee_amt_month, last_usr, last_upd, input_by, input_date, remark_attached_sheet, seller_code, risk_prem_rate, fci_rate, currency_type_desc, rate_bank_desc, rate_m_desc, currency_hf_type_desc, seller_name, bank_int_rate)
  constructor(com_code?, ca_no?, sub_id?, credit_line_amt?, credit_line_amt_curr?, commission?, rate_bank?, rate_type?, rate_m?, rate_spread?, int_rate?, handling_fee_amt?, handling_fee_amt_curr?, front_end_fee_amt?, prc_typ?, eff_date?, expire_dt?, currency_credit_line?, currency_type?, currency_hf_rate?, currency_hf_type?, currency_eff_date?, factfee_type?, factfee_amt_month?, last_usr?, last_upd?, input_by?, input_date?, remark_attached_sheet?, seller_code?, risk_prem_rate?, fci_rate?, currency_type_desc?, rate_bank_desc?, rate_m_desc?, currency_hf_type_desc?, seller_name?, bank_int_rate?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.sub_id = sub_id;
    this.credit_line_amt = credit_line_amt;
    this.credit_line_amt_curr = credit_line_amt_curr;
    this.commission = commission;
    this.rate_bank = rate_bank;
    this.rate_type = rate_type;
    this.rate_m = rate_m;
    this.rate_spread = rate_spread;
    this.int_rate = int_rate;
    this.handling_fee_amt = handling_fee_amt;
    this.handling_fee_amt_curr = handling_fee_amt_curr;
    this.front_end_fee_amt = front_end_fee_amt;
    this.prc_typ = prc_typ;
    this.eff_date = eff_date;
    this.expire_dt = expire_dt;
    this.currency_credit_line = currency_credit_line;
    this.currency_type = currency_type;
    this.currency_hf_rate = currency_hf_rate;
    this.currency_hf_type = currency_hf_type;
    this.currency_eff_date = currency_eff_date;
    this.factfee_type = factfee_type;
    this.factfee_amt_month = factfee_amt_month;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.input_by = input_by;
    this.input_date = input_date;
    this.remark_attached_sheet = remark_attached_sheet;
    this.seller_code = seller_code;
    this.risk_prem_rate = risk_prem_rate;
    this.fci_rate = fci_rate;
    this.currency_type_desc = currency_type_desc;
    this.rate_bank_desc = rate_bank_desc;
    this.rate_m_desc = rate_m_desc;
    this.currency_hf_type_desc = currency_hf_type_desc;
    this.seller_name = seller_name;
    this.bank_int_rate = bank_int_rate;
  }

  static
  parse(json: any[]) {
    let data: caPricing[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caPricing(
          json[i].com_code,
          json[i].ca_no,
          json[i].sub_id,
          json[i].credit_line_amt,
          json[i].credit_line_amt_curr,
          json[i].commission,
          json[i].rate_bank,
          json[i].rate_type,
          json[i].rate_m,
          json[i].rate_spread,
          json[i].int_rate,
          json[i].handling_fee_amt,
          json[i].handling_fee_amt_curr,
          json[i].front_end_fee_amt,
          json[i].prc_typ,
          json[i].eff_date,
          json[i].expire_dt,
          json[i].currency_credit_line,
          json[i].currency_type,
          json[i].currency_hf_rate,
          json[i].currency_hf_type,
          json[i].currency_eff_date,
          json[i].factfee_type,
          json[i].factfee_amt_month,
          json[i].last_usr,
          json[i].last_upd,
          json[i].input_by,
          json[i].input_date,
          json[i].remark_attached_sheet,
          json[i].seller_code,
          json[i].risk_prem_rate,
          json[i].fci_rate,
          json[i].currency_type_desc,
          json[i].rate_bank_desc,
          json[i].rate_m_desc,
          json[i].currency_hf_type_desc,
          json[i].seller_name,
          json[i].bank_int_rate
        ))
      }
    }
    return data ;
  }
}
