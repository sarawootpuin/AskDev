export class caContext{
  public   context_source;
  public   context_task;
  public   ref_code;
  public   context_data;
  public   last_upd;
  public   last_usr;
  public   running_no;
  public   a_order;
  public   full_namet;

  constructor()
  constructor(context_source, context_task, ref_code, context_data, last_upd, last_usr, running_no, a_order, full_namet)
  constructor(context_source?, context_task?, ref_code?, context_data?, last_upd?, last_usr?, running_no?, a_order?, full_namet?) {
    this.context_source = context_source;
    this.context_task = context_task;
    this.ref_code = ref_code;
    this.context_data = context_data;
    this.last_upd = last_upd;
    this.last_usr = last_usr;
    this.running_no = running_no;
    this.a_order = a_order;
    this.full_namet = full_namet;
  }

  static
  parse(json: any[]) {
    let data: caContext[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caContext(
          json[i].context_source,
          json[i].context_task,
          json[i].ref_code,
          json[i].context_data,
          json[i].last_upd,
          json[i].last_usr,
          json[i].running_no,
          json[i].a_order,
          json[i].full_namet
        ))
      }
    }
    return data;
  }
}
