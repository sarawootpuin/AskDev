/**
 * Created by tanapon.sa on 28/03/2561.
 */
export class cdsCust_PaidModel {
  public date_pay;
  public batch_d;
  public entry_number;
  public amount;
  public type_of_payment;
  public paid_desc;
  public inst_amt;
  public reg_amt;
  public ins_amt;
  public other_amt;
  public legal_amt;
  public discount_amt;
  public status_code;
  public str_date_pay;
  public remark;


  constructor(date_pay?: string, batch_d?: string, entry_number?: string, amount?: string,
              type_of_payment?: string, paid_desc?: string, inst_amt?: string, reg_amt?: string,
              ins_amt?: string, other_amt?: string, legal_amt?: string, discount_amt?: string,
              status_code?: string, str_date_pay?: string, remark?: string) {
    this.date_pay = date_pay;
    this.batch_d = batch_d;
    this.entry_number = entry_number;
    this.amount = amount;
    this.type_of_payment = type_of_payment;
    this.paid_desc = paid_desc;
    this.inst_amt = inst_amt;
    this.reg_amt = reg_amt;
    this.ins_amt = ins_amt;
    this.other_amt = other_amt;
    this.legal_amt = legal_amt;
    this.discount_amt = discount_amt;
    this.status_code = status_code;
    this.str_date_pay = str_date_pay;
    this.remark = remark;
  }

  static parse(json:any[]) {
    let data : cdsCust_PaidModel[] = [];

    for(let i=0; i < json.length; i++){
      data.push(new cdsCust_PaidModel(
        json[i].DATE_PAY,
        json[i].BATCH_D,
        json[i].ENTRY_NUMBER,
        json[i].AMOUNT,
        json[i].TYPE_OF_PAYMENT,
        json[i].PAID_DESC,
        json[i].INST_AMT,
        json[i].REG_AMT,
        json[i].INS_AMT,
        json[i].OTHER_AMT,
        json[i].LEGAL_AMT,
        json[i].DISCOUNT_AMT,
        json[i].STATUS_CODE,
        json[i].STR_DATE_PAY,
        json[i].REMARK
      ))
    }

    return data;
  }
}
