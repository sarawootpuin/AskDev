/**
 * Created by tanapon.sa on 10/07/2561.
 */
export class ChqGuarantee {
  public CHEQUE_NUMBER: any;
  public DATE_CHEQUE: any;
  public AMOUNT: any;
  public RECEIVE_NAME: any;
  public BANK_CODE: any;
  public BRANCH_NAME: any;
  public DATE_PAY: any;
  public RECEIVE_NO: any;
  public RECEIVE_USER: any;
  public CHANNEL_NO: any;
  public DATE_PAY_IN: any;
  public TASK_NAME: any;


  constructor(CHEQUE_NUMBER?: any, DATE_CHEQUE?: any, AMOUNT?: any, RECEIVE_NAME?: any, BANK_CODE?: any,
              BRANCH_NAME?: any, DATE_PAY?: any, RECEIVE_NO?: any, RECEIVE_USER?: any, CHANNEL_NO?: any,
              DATE_PAY_IN?: any, TASK_NAME?: any) {
    this.CHEQUE_NUMBER = CHEQUE_NUMBER;
    this.DATE_CHEQUE = DATE_CHEQUE;
    this.AMOUNT = AMOUNT;
    this.RECEIVE_NAME = RECEIVE_NAME;
    this.BANK_CODE = BANK_CODE;
    this.BRANCH_NAME = BRANCH_NAME;
    this.DATE_PAY = DATE_PAY;
    this.RECEIVE_NO = RECEIVE_NO;
    this.RECEIVE_USER = RECEIVE_USER;
    this.CHANNEL_NO = CHANNEL_NO;
    this.DATE_PAY_IN = DATE_PAY_IN;
    this.TASK_NAME = TASK_NAME;
  }

  static parse(json : any[]) {
    let data:ChqGuarantee[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ChqGuarantee(
        json[i].CHEQUE_NUMBER,
        json[i].DATE_CHEQUE,
        json[i].AMOUNT,
        json[i].RECEIVE_NAME,
        json[i].BANK_CODE,
        json[i].BRANCH_NAME,
        json[i].DATE_PAY,
        json[i].RECEIVE_NO,
        json[i].RECEIVE_USER,
        json[i].CHANNEL_NO,
        json[i].DATE_PAY_IN,
        json[i].TASK_NAME
      ))
    }

    return data;
  }
}
