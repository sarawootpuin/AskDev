/**
 * Created by vijittra.ta on 16/05/2561.
 */
export class CaTempCreditLine{

  constructor(
    public com_code?: string,
    public ca_no?: string,
    public ent_code?: string,
    public sub_id?: number,
    public temp_sub_ca_amt?: number,
    public temp_terms?: number,
    public temp_eff_rate?: number,
    public time?: number,
    public eff_date?: string,
    public expire_date?: string,
    public currency_ca_rate?: number,
    public eff_rate?: number,
    public amend_type?: string,
    public ref_amend_no?: number,
    public cust_type?: string,
    public join_grp_code?: string,
    public sbu_type?: string,
    public cr_extend_no?: string,
    public cust_name?: string,
    public group_name?: string,
    public ca_limit?: number

  ){}

  static parse(json: any[]) {
    let data: CaTempCreditLine[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new CaTempCreditLine(
          json[i].com_code,
          json[i].ca_no,
          json[i].ent_code,
          json[i].sub_id,
          json[i].temp_sub_ca_amt,
          json[i].temp_terms,
          json[i].temp_eff_rate,
          json[i].time,
          json[i].eff_date,
          json[i].expire_date,
          json[i].currency_ca_rate,
          json[i].eff_rate,
          json[i].amend_type,
          json[i].ref_amend_no,
          json[i].cust_type,
          json[i].join_grp_code,
          json[i].sbu_type,
          json[i].cr_extend_no,
          json[i].cust_name,
          json[i].group_name,
          json[i].ca_limit
        ))
      }
    }
    return data;
  }
}
