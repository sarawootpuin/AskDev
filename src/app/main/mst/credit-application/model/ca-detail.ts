export class caDetail{
  public   com_code;
  public   ca_no;
  public   sub_id;
  public   main_sub_id;
  public   newtr;
  public   body;
  public   est_disb_date;
  public   cost_e_amt;
  public   down_e_amt;
  public   fin_amt_e_vat;
  public   terms;
  public   flat_rate;
  public   brand;
  public   year;
  public   asset_description;
  public   unit;
  public   os_unit;
  public   adv_arr;
  public   chq_flag;
  public   chq_qty;
  public   accessory_desc;
  public   accessory_amt;
  public   mail_to;
  public   last_upd;
  public   last_usr;
  public   input_user;
  public   input_date;
  public   cost_i_amt;
  public   down_i_amt;
  public   fin_amt_i_vat;
  public   schedule;
  public   installment_e_vat;
  public   installment_i_vat;
  public   gross_irr;
  public   net_irr;
  public   fin_asst;
  public   comm_amt;
  public   comm_pcnt;
  public   with_vat;
  public   est_first_date;
  public   net_flat_rate;
  public   pdc_disb_flag;
  public   mobile_decision;
  public   mobile_decision_by;
  public   mobile_decision_remark;
  public   step_sim_no;
  public   model;
  public   down_per;
  public   down_chassis;
  public   down_chassis_per;
  public   body_name;
  public   brand_name;
  public   newtr_name;
  public   vat;

  constructor()
  constructor(com_code, ca_no, sub_id, main_sub_id, newtr, body, est_disb_date, cost_e_amt, down_e_amt, fin_amt_e_vat, terms, flat_rate, brand, year, asset_description, unit, os_unit, adv_arr, chq_flag, chq_qty, accessory_desc, accessory_amt, mail_to, last_upd, last_usr, input_user, input_date, cost_i_amt, down_i_amt, fin_amt_i_vat, schedule, installment_e_vat, installment_i_vat, gross_irr, net_irr, fin_asst, comm_amt, comm_pcnt, with_vat, est_first_date, net_flat_rate, pdc_disb_flag, mobile_decision, mobile_decision_by, mobile_decision_remark, step_sim_no, model, down_per, down_chassis, down_chassis_per, body_name, brand_name, newtr_name, vat)
  constructor(com_code?, ca_no?, sub_id?, main_sub_id?, newtr?, body?, est_disb_date?, cost_e_amt?, down_e_amt?, fin_amt_e_vat?, terms?, flat_rate?, brand?, year?, asset_description?, unit?, os_unit?, adv_arr?, chq_flag?, chq_qty?, accessory_desc?, accessory_amt?, mail_to?, last_upd?, last_usr?, input_user?, input_date?, cost_i_amt?, down_i_amt?, fin_amt_i_vat?, schedule?, installment_e_vat?, installment_i_vat?, gross_irr?, net_irr?, fin_asst?, comm_amt?, comm_pcnt?, with_vat?, est_first_date?, net_flat_rate?, pdc_disb_flag?, mobile_decision?, mobile_decision_by?, mobile_decision_remark?, step_sim_no?, model?, down_per?, down_chassis?, down_chassis_per?, body_name?, brand_name?, newtr_name?, vat?) {
    this.com_code = com_code;
    this.ca_no = ca_no;
    this.sub_id = sub_id;
    this.main_sub_id = main_sub_id;
    this.newtr = newtr;
    this.body = body;
    this.est_disb_date = est_disb_date;
    this.cost_e_amt = cost_e_amt;
    this.down_e_amt = down_e_amt;
    this.fin_amt_e_vat = fin_amt_e_vat;
    this.terms = terms;
    this.flat_rate = flat_rate;
    this.brand = brand;
    this.year = year;
    this.asset_description = asset_description;
    this.unit = unit;
    this.os_unit = os_unit;
    this.adv_arr = adv_arr;
    this.chq_flag = chq_flag;
    this.chq_qty = chq_qty;
    this.accessory_desc = accessory_desc;
    this.accessory_amt = accessory_amt;
    this.mail_to = mail_to;
    this.last_upd = last_upd;
    this.last_usr = last_usr;
    this.input_user = input_user;
    this.input_date = input_date;
    this.cost_i_amt = cost_i_amt;
    this.down_i_amt = down_i_amt;
    this.fin_amt_i_vat = fin_amt_i_vat;
    this.schedule = schedule;
    this.installment_e_vat = installment_e_vat;
    this.installment_i_vat = installment_i_vat;
    this.gross_irr = gross_irr;
    this.net_irr = net_irr;
    this.fin_asst = fin_asst;
    this.comm_amt = comm_amt;
    this.comm_pcnt = comm_pcnt;
    this.with_vat = with_vat;
    this.est_first_date = est_first_date;
    this.net_flat_rate = net_flat_rate;
    this.pdc_disb_flag = pdc_disb_flag;
    this.mobile_decision = mobile_decision;
    this.mobile_decision_by = mobile_decision_by;
    this.mobile_decision_remark = mobile_decision_remark;
    this.step_sim_no = step_sim_no;
    this.model = model;
    this.down_per = down_per;
    this.down_chassis = down_chassis;
    this.down_chassis_per = down_chassis_per;
    this.body_name = body_name;
    this.brand_name = brand_name;
    this.newtr_name = newtr_name;
    this.vat = vat;
  }

  static
  parse(json: any[]) {
    let data: caDetail[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caDetail(
          json[i].com_code,
          json[i].ca_no,
          json[i].sub_id,
          json[i].main_sub_id,
          json[i].newtr,
          json[i].body,
          json[i].est_disb_date,
          json[i].cost_e_amt,
          json[i].down_e_amt,
          json[i].fin_amt_e_vat,
          json[i].terms,
          json[i].flat_rate,
          json[i].brand,
          json[i].year,
          json[i].asset_description,
          json[i].unit,
          json[i].os_unit,
          json[i].adv_arr,
          json[i].chq_flag,
          json[i].chq_qty,
          json[i].accessory_desc,
          json[i].accessory_amt,
          json[i].mail_to,
          json[i].last_upd,
          json[i].last_usr,
          json[i].input_user,
          json[i].input_date,
          json[i].cost_i_amt,
          json[i].down_i_amt,
          json[i].fin_amt_i_vat,
          json[i].schedule,
          json[i].installment_e_vat,
          json[i].installment_i_vat,
          json[i].gross_irr,
          json[i].net_irr,
          json[i].fin_asst,
          json[i].comm_amt,
          json[i].comm_pcnt,
          json[i].with_vat,
          json[i].est_first_date,
          json[i].net_flat_rate,
          json[i].pdc_disb_flag,
          json[i].mobile_decision,
          json[i].mobile_decision_by,
          json[i].mobile_decision_remark,
          json[i].step_sim_no,
          json[i].model,
          json[i].down_per,
          json[i].down_chassis,
          json[i].down_chassis_per,
          json[i].body_name,
          json[i].brand_name,
          json[i].newtr_name,
          json[i].vat
        ))
      }
    }
    return data;
  }
}
