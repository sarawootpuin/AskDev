/**
 * Created by tanapon.sa on 29/03/2561.
 */
export class cdsPaid_VATModel {
  public ref:string;
  public date_vat:string;
  public terms:string;
  public vat:string;
  public receipt:string;
  public pay_date:string;
  public pay_vat:string;
  public remark:string;


  constructor(ref?: string, date_vat?: string, terms?: string, vat?: string, receipt?: string,
              pay_date?: string, pay_vat?: string, remark?: string) {
    this.ref = ref;
    this.date_vat = date_vat;
    this.terms = terms;
    this.vat = vat;
    this.receipt = receipt;
    this.pay_date = pay_date;
    this.pay_vat = pay_vat;
    this.remark = remark;
  }

  static parse(json:any[]) {
    let data: cdsPaid_VATModel[] = [];

    for (let i=0; i<json.length; i++) {
      data.push(new cdsPaid_VATModel(
        json[i].REF,
        json[i].DATE_VAT,
        json[i].TERMS,
        json[i].VAT,
        json[i].RECEIPT,
        json[i].PAY_DATE,
        json[i].PAY_VAT,
        json[i].REMARK
      ));
    }

    return data;
  }
}
