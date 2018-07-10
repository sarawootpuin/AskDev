/**
 * Created by tanapon.sa on 02/04/2561.
 */
export class cdsPaid_LegalModel {
  public document_date: string;
  public document_no: string;
  public date_pay: string;
  public amount: string;
  public receive_type: string;
  public receive_name: string;
  public paid_desc: string;
  public entry_number: string;
  public remark: string;

  constructor(document_date?: string, document_no?: string, date_pay?: string, amount?: string, receive_type?: string,
              receive_name?: string, paid_desc?: string, entry_number?: string, remark?: string) {
    this.document_date = document_date;
    this.document_no = document_no;
    this.date_pay = date_pay;
    this.amount = amount;
    this.receive_type = receive_type;
    this.receive_name = receive_name;
    this.paid_desc = paid_desc;
    this.entry_number = entry_number;
    this.remark = remark;
  }

  static parse(json : any[]) {
    let data : cdsPaid_LegalModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new cdsPaid_LegalModel(
        json[i].DOCUMENT_DATE,
        json[i].DOCUMENT_NO,
        json[i].DATE_PAY,
        json[i].AMOUNT,
        json[i].RECEIVE_TYPE,
        json[i].RECEIVE_NAME,
        json[i].PAID_DESC,
        json[i].ENTRY_NUMBER,
        json[i].REMARK,
      ));
    }

    return data;

  }
}
