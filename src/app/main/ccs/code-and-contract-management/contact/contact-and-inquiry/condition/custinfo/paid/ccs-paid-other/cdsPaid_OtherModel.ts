/**
 * Created by tanapon.sa on 31/05/2561.
 */
export class cdsPaid_OtherModel {
  // public document_date : string;
  // public document_no : string;
  // public date_pay : string;
  // public amount : string;
  // public receive_type : string;
  // public receive_name : string;
  // public paid_desc : string;
  // public entry_number : string;


  constructor(public document_date?: string, public document_no?: string, public date_pay?: string,
              public amount?: string, public receive_type?: string, public receive_name?: string,
              public paid_desc?: string, public entry_number?: string) {
  }

  static parse(json:any[]) {
    let data: cdsPaid_OtherModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new cdsPaid_OtherModel(
        json[i].DOCUMENT_DATE,
        json[i].DOCUMENT_NO,
        json[i].DATE_PAY,
        json[i].AMOUNT,
        json[i].RECEIVE_TYPE,
        json[i].RECEIVE_NAME,
        json[i].PAID_DESC,
        json[i].ENTRY_NUMBER
      ))
    }

    return data;
  }
}
