export class caFactor{
  public   com_code;
  public   ca_no;
  public   buyer_code;
  public   factor_code;
  public   priority_level;
  public   apply_amt;
  public   factor_type;
  public   max_cr_line;
  public   currency_code;
  public   comm_rate;
  public   handing_comm;
  public   handing_comm_cur;
  public   last_usr;
  public   last_upd;
  public   input_by;
  public   input_date;
  public   sbu_typ;
  public   factor_name;
  public   currency_code_desc;

  constructor()
  constructor(com_code, ca_no, buyer_code, factor_code, priority_level, apply_amt, factor_type, max_cr_line, currency_code, comm_rate, handing_comm, handing_comm_cur, last_usr, last_upd, input_by, input_date, sbu_typ, factor_name, currency_code_desc)
  constructor(com_code?, ca_no?, buyer_code?, factor_code?, priority_level?, apply_amt?, factor_type?, max_cr_line?, currency_code?, comm_rate?, handing_comm?, handing_comm_cur?, last_usr?, last_upd?, input_by?, input_date?, sbu_typ?, factor_name?, currency_code_desc?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.buyer_code = buyer_code;
    this.factor_code = factor_code;
    this.priority_level = priority_level;
    this.apply_amt = apply_amt;
    this.factor_type = factor_type;
    this.max_cr_line = max_cr_line;
    this.currency_code = currency_code;
    this.comm_rate = comm_rate;
    this.handing_comm = handing_comm;
    this.handing_comm_cur = handing_comm_cur;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.input_by = input_by;
    this.input_date = input_date;
    this.sbu_typ = sbu_typ;
    this.factor_name = factor_name;
    this.currency_code_desc = currency_code_desc;
  }

  static
  parse(json: any[]) {
    let data: caFactor[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caFactor(
          json[i].com_code,
          json[i].ca_no,
          json[i].buyer_code,
          json[i].factor_code,
          json[i].priority_level,
          json[i].apply_amt,
          json[i].factor_type,
          json[i].max_cr_line,
          json[i].currency_code,
          json[i].comm_rate,
          json[i].handing_comm,
          json[i].handing_comm_cur,
          json[i].last_usr,
          json[i].last_upd,
          json[i].input_by,
          json[i].input_date,
          json[i].sbu_typ,
          json[i].factor_name,
          json[i].currency_code_desc
        ))
      }
    }
    return data;
  }
}
