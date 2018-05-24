export class ListExposure {
  constructor(public id?,
              public product?,
              public exposure?,
              public os_balance?,
              public maturity_date?,
              public highest_amt?,
              public with_collateral?,
              public with_out_collateral?,
              public bl_flg?,
              public discount_creditline?,
              public approve_type?,
              public min_eff_rate?,
              public cap?,
              public ca_approve_date?,
              public down_percent?,
              public fin_amt_e_vat?,
              public grade?,
              public installment?,
              public net_irr?,
              public paid?) {
  }


  static parse(json: any[]) {
    let data: ListExposure[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new ListExposure(
          json[i].id,
          json[i].product,
          json[i].exposure,
          json[i].os_balance,
          json[i].maturity_date,
          json[i].highest_amt,
          json[i].with_collateral,
          json[i].with_out_collateral,
          json[i].bl_flg,
          json[i].discount_creditline,
          json[i].approve_type,
          json[i].min_eff_rate,
          json[i].cap,
          json[i].ca_approve_date,
          json[i].down_percent,
          json[i].fin_amt_e_vat,
          json[i].grade,
          json[i].installment,
          json[i].net_irr,
          json[i].paid
        ))
      }
    }
    return data ;
  }
}
