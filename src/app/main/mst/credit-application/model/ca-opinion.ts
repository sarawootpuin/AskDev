export class caOpinion{
  public   com_code;
  public   ref_code;
  public   cus_code;
  public   opinion_desc;
  public   opinion_flag;
  public   opinion_date;
  public   opinion_usr;
  public   opinion_apv_date;
  public   opinion_apv_usr;
  public   current_task;
  public   gen_date;
  public   character_desc;
  public   capacity_desc;
  public   capital_desc;
  public   collateral_desc;
  public   condition_desc;
  public   opinion_apv_opinion;
  public   opinon_source;
  public   sub_id;
  public   opinion_apv_remark;

  constructor()
  constructor(com_code, ref_code, cus_code, opinion_desc, opinion_flag, opinion_date, opinion_usr, opinion_apv_date, opinion_apv_usr, current_task, gen_date, character_desc, capacity_desc, capital_desc, collateral_desc, condition_desc, opinion_apv_opinion, opinon_source, sub_id, opinion_apv_remark)
  constructor(com_code?, ref_code?, cus_code?, opinion_desc?, opinion_flag?, opinion_date?, opinion_usr?, opinion_apv_date?, opinion_apv_usr?, current_task?, gen_date?, character_desc?, capacity_desc?, capital_desc?, collateral_desc?, condition_desc?, opinion_apv_opinion?, opinon_source?, sub_id?, opinion_apv_remark?) {
    this.com_code = com_code;
    this.ref_code = ref_code;
    this.cus_code = cus_code;
    this.opinion_desc = opinion_desc;
    this.opinion_flag = opinion_flag;
    this.opinion_date = opinion_date;
    this.opinion_usr = opinion_usr;
    this.opinion_apv_date = opinion_apv_date;
    this.opinion_apv_usr = opinion_apv_usr;
    this.current_task = current_task;
    this.gen_date = gen_date;
    this.character_desc = character_desc;
    this.capacity_desc = capacity_desc;
    this.capital_desc = capital_desc;
    this.collateral_desc = collateral_desc;
    this.condition_desc = condition_desc;
    this.opinion_apv_opinion = opinion_apv_opinion;
    this.opinon_source = opinon_source;
    this.sub_id = sub_id;
    this.opinion_apv_remark = opinion_apv_remark;
  }

  static
  parse(json: any[]) {
    let data: caOpinion[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caOpinion(
          json[i].com_code,
          json[i].ref_code,
          json[i].cus_code,
          json[i].opinion_desc,
          json[i].opinion_flag,
          json[i].opinion_date,
          json[i].opinion_usr,
          json[i].opinion_apv_date,
          json[i].opinion_apv_usr,
          json[i].current_task,
          json[i].gen_date,
          json[i].character_desc,
          json[i].capacity_desc,
          json[i].capital_desc,
          json[i].collateral_desc,
          json[i].condition_desc,
          json[i].opinion_apv_opinion,
          json[i].opinon_source,
          json[i].sub_id,
          json[i].opinion_apv_remark
        ))
      }
    }
    return data;
  }

}
