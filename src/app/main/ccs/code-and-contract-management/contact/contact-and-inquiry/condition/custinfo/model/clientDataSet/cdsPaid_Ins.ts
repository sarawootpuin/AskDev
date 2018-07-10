/**
 * Created by tanapon.sa on 02/04/2561.
 */
export class cdsPaid_InsModel {
  public document_date:string;
  public document_no:string;
  public date_pay:string;
  public entry_number:string;
  public amount:string;
  public receive_type:string;
  public receive_name:string;
  public ins_amt:string;
  public paid_desc:string;
  public com_amt:string;
  public str_date_pay:string;


  constructor(document_date?: string, document_no?: string, date_pay?: string, entry_number?: string, amount?: string,
              receive_type?: string, receive_name?: string, ins_amt?: string, paid_desc?: string, com_amt?: string, str_date_pay?: string) {
    this.document_date = document_date;
    this.document_no = document_no;
    this.date_pay = date_pay;
    this.entry_number = entry_number;
    this.amount = amount;
    this.receive_type = receive_type;
    this.receive_name = receive_name;
    this.ins_amt = ins_amt;
    this.paid_desc = paid_desc;
    this.com_amt = com_amt;
    this.str_date_pay = str_date_pay;
  }

  static parse(json : any[]) {
    let data : cdsPaid_InsModel[] = [];

    for (let i=0; i < json.length; i++) {
      data.push(new cdsPaid_InsModel(
        json[i].DOCUMENT_DATE,
        json[i].DOCUMENT_NO,
        json[i].DATE_PAY,
        json[i].ENTRY_NUMBER,
        json[i].AMOUNT,
        json[i].RECEIVE_TYPE,
        json[i].RECEIVE_NAME,
        json[i].INS_AMT,
        json[i].PAID_DESC,
        json[i].COM_AMT,
        json[i].STR_DATE_PAY
      ));
    }

    return data;
  }
}
