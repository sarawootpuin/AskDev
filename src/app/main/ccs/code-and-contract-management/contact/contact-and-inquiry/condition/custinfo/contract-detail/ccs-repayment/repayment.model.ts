/**
 * Created by tanapon.sa on 19/06/2561.
 */
export class RepaymentModel {
  public no: any;
  public agr_code: any;
  public due_date: any;
  public due_amt: any;
  public cal_rate: any;
  public pen_rate: any;
  public os_ar: any;
  public schd_int: any;
  public schd_fac: any;
  public os_principal: any;
  public os_interest: any;
  public os_fac: any;
  public principal: any;
  public day: any;
  public vat: any;
  public os_vat: any;
  public installment: any;
  public begin_pri: any;
  public interest: any;
  public paid_price: any;
  public act_int: any;
  public accru_int: any;
  public act_fac: any;
  public accru_fac: any;

  constructor(no?: any, agr_code?: any, due_date?: any, due_amt?: any, cal_rate?: any, pen_rate?: any,
              os_ar?: any, schd_int?: any, schd_fac?: any, os_principal?: any, os_interest?: any,
              os_fac?: any, principal?: any, day?: any, vat?: any, os_vat?: any, installment?: any,
              begin_pri?: any, interest?: any, paid_price?: any, act_int?: any, accru_int?: any,
              act_fac?: any, accru_fac?: any) {
    this.no = no;
    this.agr_code = agr_code;
    this.due_date = due_date;
    this.due_amt = due_amt;
    this.cal_rate = cal_rate;
    this.pen_rate = pen_rate;
    this.os_ar = os_ar;
    this.schd_int = schd_int;
    this.schd_fac = schd_fac;
    this.os_principal = os_principal;
    this.os_interest = os_interest;
    this.os_fac = os_fac;
    this.principal = principal;
    this.day = day;
    this.vat = vat;
    this.os_vat = os_vat;
    this.installment = installment;
    this.begin_pri = begin_pri;
    this.interest = interest;
    this.paid_price = paid_price;
    this.act_int = act_int;
    this.accru_int = accru_int;
    this.act_fac = act_fac;
    this.accru_fac = accru_fac;
  }

  static parse(json:any[]) {
    let data:RepaymentModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new RepaymentModel(
        json[i].no,
        json[i].agr_code,
        json[i].due_date,
        json[i].due_amt,
        json[i].cal_rate,
        json[i].pen_rate,
        json[i].os_ar,
        json[i].schd_int,
        json[i].schd_fac,
        json[i].os_principal,
        json[i].os_interest,
        json[i].os_fac,
        json[i].principal,
        json[i].day,
        json[i].vat,
        json[i].os_vat,
        json[i].installment,
        json[i].begin_pri,
        json[i].interest,
        json[i].paid_price,
        json[i].act_int,
        json[i].accru_int,
        json[i].act_fac,
        json[i].accru_fac
      ))
    }

    return data;
  }
}
