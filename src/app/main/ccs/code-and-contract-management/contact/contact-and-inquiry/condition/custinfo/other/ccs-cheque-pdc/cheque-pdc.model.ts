/**
 * Created by tanapon.sa on 20/06/2561.
 */
export class ChequePDCModel {
  public type : any;
  public cheque_number : any;
  public amount : any;
  public date_cheque : any;
  public date_pay_in : any;
  public date_clear : any;
  public date_return : any;
  public bankname : any;
  public remark : any;
  public pay_for : any;


  constructor(type?: any, cheque_number?: any, amount?: any, date_cheque?: any,
              date_pay_in?: any, date_clear?: any, date_return?: any, bankname?: any, remark?: any, pay_for?: any) {
    this.type = type;
    this.cheque_number = cheque_number;
    this.amount = amount;
    this.date_cheque = date_cheque;
    this.date_pay_in = date_pay_in;
    this.date_clear = date_clear;
    this.date_return = date_return;
    this.bankname = bankname;
    this.remark = remark;
    this.pay_for = pay_for;
  }

  static parse(json:any[]) {
    let data: ChequePDCModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new ChequePDCModel(
        json[i].type,
        json[i].cheque_number,
        json[i].amount,
        json[i].date_cheque,
        json[i].date_pay_in,
        json[i].date_clear,
        json[i].date_return,
        json[i].bankname,
        json[i].remark,
        json[i].pay_for
      ))
    }

    return data;

  }
}
