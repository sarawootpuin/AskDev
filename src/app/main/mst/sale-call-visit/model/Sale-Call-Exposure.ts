/**
 * Created by pongsatorn.an on 24/08/2560.
 */
export class SaleCallExposure{

  private   _id;
  private   _product;
  private   _exposure;
  private   _os_balance;
  private   _maturity_date;
  private   _highest_amt;
  private   _with_collateral;
  private   _with_out_collateral;
  private   _bl_flg;
  private   _discount_creditline;
  private   _approve_type;
  private   _min_eff_rate;
  private   _cap;
  private   _ca_approve_date;
  private   _down_percent;
  private   _fin_amt_e_vat;
  private   _grade;
  private   _installment;
  private   _net_irr;
  private   _paid;


  constructor(id, product, exposure, os_balance, maturity_date, highest_amt, with_collateral, with_out_collateral, bl_flg, discount_creditline, approve_type, min_eff_rate, cap, ca_approve_date, down_percent, fin_amt_e_vat, grade, installment, net_irr, paid) {
    this._id = id;
    this._product = product;
    this._exposure = exposure;
    this._os_balance = os_balance;
    this._maturity_date = maturity_date;
    this._highest_amt = highest_amt;
    this._with_collateral = with_collateral;
    this._with_out_collateral = with_out_collateral;
    this._bl_flg = bl_flg;
    this._discount_creditline = discount_creditline;
    this._approve_type = approve_type;
    this._min_eff_rate = min_eff_rate;
    this._cap = cap;
    this._ca_approve_date = ca_approve_date;
    this._down_percent = down_percent;
    this._fin_amt_e_vat = fin_amt_e_vat;
    this._grade = grade;
    this._installment = installment;
    this._net_irr = net_irr;
    this._paid = paid;
  }


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get product() {
    return this._product;
  }

  set product(value) {
    this._product = value;
  }

  get exposure() {
    return this._exposure;
  }

  set exposure(value) {
    this._exposure = value;
  }

  get os_balance() {
    return this._os_balance;
  }

  set os_balance(value) {
    this._os_balance = value;
  }

  get maturity_date() {
    return this._maturity_date;
  }

  set maturity_date(value) {
    this._maturity_date = value;
  }

  get highest_amt() {
    return this._highest_amt;
  }

  set highest_amt(value) {
    this._highest_amt = value;
  }

  get with_collateral() {
    return this._with_collateral;
  }

  set with_collateral(value) {
    this._with_collateral = value;
  }

  get with_out_collateral() {
    return this._with_out_collateral;
  }

  set with_out_collateral(value) {
    this._with_out_collateral = value;
  }

  get bl_flg() {
    return this._bl_flg;
  }

  set bl_flg(value) {
    this._bl_flg = value;
  }

  get discount_creditline() {
    return this._discount_creditline;
  }

  set discount_creditline(value) {
    this._discount_creditline = value;
  }

  get approve_type() {
    return this._approve_type;
  }

  set approve_type(value) {
    this._approve_type = value;
  }

  get min_eff_rate() {
    return this._min_eff_rate;
  }

  set min_eff_rate(value) {
    this._min_eff_rate = value;
  }

  get cap() {
    return this._cap;
  }

  set cap(value) {
    this._cap = value;
  }

  get ca_approve_date() {
    return this._ca_approve_date;
  }

  set ca_approve_date(value) {
    this._ca_approve_date = value;
  }

  get down_percent() {
    return this._down_percent;
  }

  set down_percent(value) {
    this._down_percent = value;
  }

  get fin_amt_e_vat() {
    return this._fin_amt_e_vat;
  }

  set fin_amt_e_vat(value) {
    this._fin_amt_e_vat = value;
  }

  get grade() {
    return this._grade;
  }

  set grade(value) {
    this._grade = value;
  }

  get installment() {
    return this._installment;
  }

  set installment(value) {
    this._installment = value;
  }

  get net_irr() {
    return this._net_irr;
  }

  set net_irr(value) {
    this._net_irr = value;
  }

  get paid() {
    return this._paid;
  }

  set paid(value) {
    this._paid = value;
  }

  static parse(json: any[]) {
    let data: SaleCallExposure[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new SaleCallExposure(
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

    return data;
  }

}
