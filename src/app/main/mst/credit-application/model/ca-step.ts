export class caStep{
  public   ca_no;
  public   sub_id;
  public   sub_id2;
  public   due_day;
  public   from_term;
  public   to_term;
  public   inst_e_vat;
  public   interval;
  public   inst_vat;

  constructor()
  constructor(ca_no, sub_id, sub_id2, due_day, from_term, to_term, inst_e_vat, interval, inst_vat)
  constructor(ca_no?, sub_id?, sub_id2?, due_day?, from_term?, to_term?, inst_e_vat?, interval?, inst_vat?) {
    this.ca_no = ca_no;
    this.sub_id = sub_id;
    this.sub_id2 = sub_id2;
    this.due_day = due_day;
    this.from_term = from_term;
    this.to_term = to_term;
    this.inst_e_vat = inst_e_vat;
    this.interval = interval;
    this.inst_vat = inst_vat;
  }

  static
  parse(json: any[]) {
    let data: caStep[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caStep(
          json[i].ca_no,
          json[i].sub_id,
          json[i].sub_id2,
          json[i].due_day,
          json[i].from_term,
          json[i].to_term,
          json[i].inst_e_vat,
          json[i].interval,
          json[i].inst_vat
        ))
      }
    }
    return data ;
  }
}
