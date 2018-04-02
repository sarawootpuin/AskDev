/**
 * Created by pongsatorn.an on 25/08/2560.
 */
export class SaleCallVisitOutSide {

  public   sale_call_no ;
  public   seq_no;
  public   visit_by;
  public   visit_dt;
  public   from_time;
  public   to_time;
  public   visit_detail;
  public   mile_start;
  public   mile_end;
  public   doc_no;
  public   prce_per_km;
  public   joiner;
  public   travel_by;
  public   reqst_by;
  public   reqst_dt;
  public   last_usr;
  public   last_upd;
  public   withdraw_amt;
  public   travel_name;
  public   submit_flag;

  constructor()
  constructor(sale_call_no, seq_no, visit_by, visit_dt)
  constructor(sale_call_no, seq_no, visit_by, visit_dt, from_time, to_time, visit_detail, mile_start, mile_end, doc_no, prce_per_km, joiner, travel_by, reqst_by, reqst_dt, last_usr, last_upd, withdraw_amt, travel_name, submit_flag)
  constructor(sale_call_no?, seq_no=1, visit_by?, visit_dt?, from_time?, to_time?, visit_detail?, mile_start?, mile_end?, doc_no?, prce_per_km?, joiner?, travel_by?, reqst_by?, reqst_dt?, last_usr?, last_upd?, withdraw_amt?, travel_name?, submit_flag?) {
    this.sale_call_no = sale_call_no;
    this.seq_no = seq_no;
    this.visit_by = visit_by;
    this.visit_dt = visit_dt;
    this.from_time = from_time ? from_time : '00:00';
    this.to_time = to_time ?  to_time : '00:00';
    this.visit_detail = visit_detail;
    this.mile_start = mile_start;
    this.mile_end = mile_end;
    this.doc_no = doc_no;
    this.prce_per_km = prce_per_km ? prce_per_km : 0;
    this.joiner = joiner;
    this.travel_by = travel_by;
    this.reqst_by = reqst_by;
    this.reqst_dt = reqst_dt;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.withdraw_amt = withdraw_amt ? withdraw_amt : 0;
    this.travel_name = travel_name;
    this.submit_flag = submit_flag ? submit_flag : 'N';
  }



  static parse(json: any) {
    return  new SaleCallVisitOutSide(
      json.sale_call_no ,
      json.seq_no,
      json.visit_by,
      json.visit_dt,
      json.from_time,
      json.to_time,
      json.visit_detail,
      json.mile_start,
      json.mile_end,
      json.doc_no,
      json.prce_per_km,
      json.joiner,
      json.travel_by,
      json.reqst_by,
      json.reqst_dt,
      json.last_usr,
      json.last_upd,
      json.withdraw_amt,
      json.travel_name,
      json.submit_flag
    );
  }
}
