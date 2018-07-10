/**
 * Created by tanapon.sa on 05/04/2561.
 */
export class cdsDirect_DebitModel {
  public direct_date:string;
  public due_date:string;
  public deduct_date:string;
  public amount:string;
  public acc_name:string;
  public acc_no:string;
  public bank:string;
  public bank_branch:string;
  public charge_amount:string;
  public undeduct_reason:string;
  public mirr_date_pay:string;
  public str_direct_date:string;
  public str_due_date:string;
  public str_deduct_date:string;


  constructor(direct_date?: string, due_date?: string, deduct_date?: string, amount?: string,
              acc_name?: string, acc_no?: string, bank?: string, bank_branch?: string, charge_amount?: string,
              undeduct_reason?: string, mirr_date_pay?: string, str_direct_date?: string, str_due_date?: string,
              str_deduct_date?: string) {
    this.direct_date = direct_date;
    this.due_date = due_date;
    this.deduct_date = deduct_date;
    this.amount = amount;
    this.acc_name = acc_name;
    this.acc_no = acc_no;
    this.bank = bank;
    this.bank_branch = bank_branch;
    this.charge_amount = charge_amount;
    this.undeduct_reason = undeduct_reason;
    this.mirr_date_pay = mirr_date_pay;
    this.str_direct_date = str_direct_date;
    this.str_due_date = str_due_date;
    this.str_deduct_date = str_deduct_date;
  }

  static parse(json : any[]) {
    let data:cdsDirect_DebitModel[] = [];

    for (let i = 0; i < json.length; i++){
      data.push(new cdsDirect_DebitModel(
        json[i].DIRECT_DATE,
        json[i].DUE_DATE,
        json[i].DEDUCT_DATE,
        json[i].AMOUNT,
        json[i].ACC_NAME,
        json[i].ACC_NO,
        json[i].BANK,
        json[i].BANK_BRANCH,
        json[i].CHARGE_AMOUNT,
        json[i].UNDEDUCT_REASON,
        json[i].MIRR_DATE_PAY,
        json[i].STR_DIRECT_DATE,
        json[i].STR_DUE_DATE,
        json[i].STR_DEDUCT_DATE
      ))
    }

    return data;
  }
}
