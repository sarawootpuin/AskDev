/**
 * Created by pongsatorn.an on 05/10/2560.
 */

export class ReassignListWork {


  public sale_call_no;
  public cust_name_th;
  public cust_name_en;
  public mkt_name;
  public task_date;
  public current_task;
  public card_id;
  public comp_ent_code;
  public old_ownr;
  public com_code;

  constructor()
  constructor(sale_call_no, cust_name_th, cust_name_en, mkt_name, task_date, current_task, card_id, comp_ent_code, old_ownr, com_code)
  constructor(sale_call_no?, cust_name_th?, cust_name_en?, mkt_name?, task_date?, current_task?, card_id?, comp_ent_code?, old_ownr?, com_code?) {
    this.sale_call_no = sale_call_no;
    this.cust_name_th = cust_name_th;
    this.cust_name_en = cust_name_en;
    this.mkt_name = mkt_name;
    this.task_date = task_date;
    this.current_task = current_task;
    this.card_id = card_id;
    this.comp_ent_code = comp_ent_code;
    this.old_ownr = old_ownr;
    this.com_code = com_code;
  }


  static parse(json: any[]) {
    let data: ReassignListWork[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new ReassignListWork(
        json[i].sale_call_no,
        json[i].cust_name_th,
        json[i].cust_name_en,
        json[i].mkt_name,
        json[i].task_date,
        json[i].current_task,
        json[i].card_id,
        json[i].comp_ent_code,
        json[i].old_ownr,
        json[i].com_code
      ))
    }
    return data;
  }
}
