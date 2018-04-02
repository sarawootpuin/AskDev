/**
 * Created by peerawat.ko on 25/08/2560.
 */
export class ListExposure {
  constructor(public id: any,
              public product: any,
              public exposure: any,
              public os_balance: any,
              public maturity_date: any,
              public highest_amt: any,
              public with_collateral: any,
              public with_out_collateral: any,
              public bl_flg: any,
              public discount_creditline: any,
              public approve_type: any,
              public min_eff_rate: any,
              public cap: any,
              public ca_approve_date: any,
              public down_percent: any,
              public fin_amt_e_vat: any,
              public grade: any,
              public installment: any,
              public net_irr: any,
              public paid: any) {
  }

  static parse(json: any[]) {
    let data: ListExposure[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new ListExposure(
          json[i].ID,
          json[i].PRODUCT,
          json[i].EXPOSURE,
          json[i].OS_BALANCE,
          json[i].MATURITY_DATE,
          json[i].HIGHEST_AMT,
          json[i].WITH_COLLATERAL,
          json[i].WITH_OUT_COLLATERAL,
          json[i].BL_FLG,
          json[i].DISCOUNT_CREDITLINE,
          json[i].APPROVE_TYPE,
          json[i].MIN_EFF_RATE,
          json[i].CAP,
          json[i].CA_APPROVE_DATE,
          json[i].DOWN_PERCENT,
          json[i].FIN_AMT_E_VAT,
          json[i].GRADE,
          json[i].INSTALLMENT,
          json[i].NET_IRR,
          json[i].PAID
        ))
      }
    }
    return data;
  }
}
