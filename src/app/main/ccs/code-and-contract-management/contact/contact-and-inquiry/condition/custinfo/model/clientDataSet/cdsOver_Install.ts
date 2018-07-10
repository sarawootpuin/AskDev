/**
 * Created by tanapon.sa on 20/03/2561.
 */
export class CdsOver_InstallModel {
  public due_day: string;
  public as_of_date: string;
  public days_late: string;
  public term: string;
  public installment_price: string;
  public interest_charge: string;
  public late_charge: string;
  public total_penalty: string;
  public rate_pen: string;
  public follow_up_debt: string;
  public installment_e_vat: string;


  constructor(due_day: string, as_of_date: string, days_late: string, term: string,
              installment_price: string, interest_charge: string, late_charge: string,
              total_penalty: string, rate_pen: string, follow_up_debt: string, installment_e_vat: string) {
    this.due_day = due_day;
    this.as_of_date = as_of_date;
    this.days_late = days_late;
    this.term = term;
    this.installment_price = installment_price;
    this.interest_charge = interest_charge;
    this.late_charge = late_charge;
    this.total_penalty = total_penalty;
    this.rate_pen = rate_pen;
    this.follow_up_debt = follow_up_debt;
    this.installment_e_vat = installment_e_vat;
  }

  static parse(json: any[]) {
    let data: CdsOver_InstallModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new CdsOver_InstallModel(
        json[i].DUE_DAY,
        json[i].AS_OF_DATE,
        json[i].DAYS_LATE,
        json[i].TERM,
        json[i].INSTALLMENT_PRICE,
        json[i].INTEREST_CHARGE,
        json[i].LATE_CHARGE,
        json[i].TOTAL_PENALTY,
        json[i].RATE_PEN,
        json[i].FOLLOW_UP_DEBT,
        json[i].INSTALLMENT_E_VAT
      ))
    }

    return data;
  }
}
