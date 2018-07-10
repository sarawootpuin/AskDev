/**
 * Created by tanapon.sa on 19/06/2561.
 */
export class cdsPaid_RegisModel {
  public DOCUMENT_DATE: any;
  public DOCUMENT_NO: any;
  public DATE_PAY: any;
  public AMOUNT: any;
  public RECEIVE_TYPE: any;
  public RECEIVE_NAME: any;
  public PAID_DESC: any;
  public ENTRY_NUMBER: any;
  public VAT_AMOUNT: any;
  public PAID_AMT: any;


  constructor(DOCUMENT_DATE?: any, DOCUMENT_NO?: any, DATE_PAY?: any, AMOUNT?: any,
              RECEIVE_TYPE?: any, RECEIVE_NAME?: any, PAID_DESC?: any, ENTRY_NUMBER?: any,
              VAT_AMOUNT?: any, PAID_AMT?: any) {
    this.DOCUMENT_DATE = DOCUMENT_DATE;
    this.DOCUMENT_NO = DOCUMENT_NO;
    this.DATE_PAY = DATE_PAY;
    this.AMOUNT = AMOUNT;
    this.RECEIVE_TYPE = RECEIVE_TYPE;
    this.RECEIVE_NAME = RECEIVE_NAME;
    this.PAID_DESC = PAID_DESC;
    this.ENTRY_NUMBER = ENTRY_NUMBER;
    this.VAT_AMOUNT = VAT_AMOUNT;
    this.PAID_AMT = PAID_AMT;
  }

  static parse(json:any[]) {
    let data:cdsPaid_RegisModel[] = [];

    for(let i = 0; i < json.length; i++) {
      data.push(new cdsPaid_RegisModel(
        json[i].DOCUMENT_DATE,
        json[i].DOCUMENT_NO,
        json[i].DATE_PAY,
        json[i].AMOUNT,
        json[i].RECEIVE_TYPE,
        json[i].RECEIVE_NAME,
        json[i].PAID_DESC,
        json[i].ENTRY_NUMBER,
        json[i].VAT_AMOUNT,
        json[i].PAID_AMT
      ))
    }

    return data;
  }
}
