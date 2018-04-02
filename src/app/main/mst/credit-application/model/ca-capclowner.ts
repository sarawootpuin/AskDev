export class caCapClOwner {
  public running_code;
  public seq_no;
  public com_code;
  public sbu_type;
  public seller_code;
  public flg_cap;
  public joint_seller_group;
  public cust_group;
  public this_approve;
  public cancel_dt;
  public cancel_by;
  public input_date;
  public input_by;
  public last_usr;
  public last_upd;
  public seller_name;

  constructor()
  constructor(running_code, seq_no, com_code, sbu_type, seller_code, flg_cap, joint_seller_group, cust_group, this_approve, cancel_dt, cancel_by, input_date, input_by, last_usr, last_upd, seller_name)
  constructor(running_code?, seq_no?, com_code?, sbu_type?, seller_code?, flg_cap?, joint_seller_group?, cust_group?, this_approve?, cancel_dt?, cancel_by?, input_date?, input_by?, last_usr?, last_upd?, seller_name?) {
    this.running_code = running_code;
    this.seq_no = seq_no;
    this.com_code = com_code;
    this.sbu_type = sbu_type;
    this.seller_code = seller_code;
    this.flg_cap = flg_cap;
    this.joint_seller_group = joint_seller_group;
    this.cust_group = cust_group;
    this.this_approve = this_approve;
    this.cancel_dt = cancel_dt;
    this.cancel_by = cancel_by;
    this.input_date = input_date;
    this.input_by = input_by;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.seller_name = seller_name;
  }

  static
  parse(json: any[]) {
    let data: caCapClOwner[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caCapClOwner(
          json[i].running_code,
          json[i].seq_no,
          json[i].com_code,
          json[i].sbu_type,
          json[i].seller_code,
          json[i].flg_cap,
          json[i].joint_seller_group,
          json[i].cust_group,
          json[i].this_approve,
          json[i].cancel_dt,
          json[i].cancel_by,
          json[i].input_date,
          json[i].input_by,
          json[i].last_usr,
          json[i].last_upd,
          json[i].seller_name
        ))
      }
    }
    return data ;
  }
}
