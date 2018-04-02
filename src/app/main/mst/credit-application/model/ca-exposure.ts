/**
 * Created by pongsatorn.an on 25/12/2560.
 */
export class caExposure{
  public   id;
  public   product;
  public   exposure;
  public   os_balance;
  public   maturity_date;
  public   highest_amt;
  public   with_collateral;
  public   with_out_collateral;
  public   bl_flg;
  public   discount_creditline;
  public   approve_type;
  public   min_eff_rate;
  public   cap;
  public   ca_approve_date;
  public   down_percent;
  public   fin_amt_e_vat;
  public   grade;
  public   installment;
  public   net_irr;
  public   paid;

  constructor()
  constructor(id, product, exposure, os_balance, maturity_date, highest_amt, with_collateral, with_out_collateral, bl_flg, discount_creditline, approve_type, min_eff_rate, cap, ca_approve_date, down_percent, fin_amt_e_vat, grade, installment, net_irr, paid)
  constructor(id?, product?, exposure?, os_balance?, maturity_date?, highest_amt?, with_collateral?, with_out_collateral?, bl_flg?, discount_creditline?, approve_type?, min_eff_rate?, cap?, ca_approve_date?, down_percent?, fin_amt_e_vat?, grade?, installment?, net_irr?, paid?) {
    this.id = id;
    this.product = product;
    this.exposure = exposure;
    this.os_balance = os_balance;
    this.maturity_date = maturity_date;
    this.highest_amt = highest_amt;
    this.with_collateral = with_collateral;
    this.with_out_collateral = with_out_collateral;
    this.bl_flg = bl_flg;
    this.discount_creditline = discount_creditline;
    this.approve_type = approve_type;
    this.min_eff_rate = min_eff_rate;
    this.cap = cap;
    this.ca_approve_date = ca_approve_date;
    this.down_percent = down_percent;
    this.fin_amt_e_vat = fin_amt_e_vat;
    this.grade = grade;
    this.installment = installment;
    this.net_irr = net_irr;
    this.paid = paid;
  }


  static
  parse(json: any[]) {
    let data: caExposure[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new caExposure(
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
