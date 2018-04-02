export class caCapCl {
  public running_code;
  public total_cap_amt;
  public total_exposure;
  public current_ca;
  public cancel_dt;
  public cancel_by;
  public input_date;
  public input_by;
  public last_usr;
  public last_upd;
  public over_cap;

  constructor()
  constructor(running_code, total_cap_amt, total_exposure, current_ca, cancel_dt, cancel_by, input_date, input_by, last_usr, last_upd, over_cap)
  constructor(running_code?, total_cap_amt?, total_exposure?, current_ca?, cancel_dt?, cancel_by?, input_date?, input_by?, last_usr?, last_upd?, over_cap?) {
    this.running_code = running_code;
    this.total_cap_amt = total_cap_amt;
    this.total_exposure = total_exposure;
    this.current_ca = current_ca;
    this.cancel_dt = cancel_dt;
    this.cancel_by = cancel_by;
    this.input_date = input_date;
    this.input_by = input_by;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.over_cap = over_cap;
  }

  static
  parse(json: any[]) {
    let data: caCapCl[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caCapCl(
          json[i].running_code,
          json[i].total_cap_amt,
          json[i].total_exposure,
          json[i].current_ca,
          json[i].cancel_dt,
          json[i].cancel_by,
          json[i].input_date,
          json[i].input_by,
          json[i].last_usr,
          json[i].last_upd,
          json[i].over_cap
        ))
      }
    }
    return data ;
  }

}
