/**
 * Created by tanapon.sa on 21/03/2561.
 */
export class CdsPaid_InstModel {
  public document_date: string = '';
  public document_no: string = '';
  public date_pay: string = '';
  public entry_number: string = '';
  public paid_amt: string = '';
  public paid_desc: string = '';
  public inst_amt: string = '';
  public vat_amt: string = '';
  public rental_amt: string = '';
  public at_term: string = '';
  public due_date: string = '';
  public day_late: string = '';
  public str_date_pay: string = '';
  public mirr_date_pay: string = '';
  public rate_pen: string = '';
  public interest_charge: string = '';
  public late_charge: string = '';
  public penalty: string = '';
  public hide_doc_dt: string = '';
  public hide_doc_no: string = '';
  public channel_no: string = '';
  public cheque_number: string = '';
  public installment_e_vat: string = '';


  constructor(document_date: string, document_no: string, date_pay: string, entry_number: string,
              paid_amt: string, paid_desc: string, inst_amt: string, vat_amt: string, rental_amt: string,
              at_term: string, due_date: string, day_late: string, str_date_pay: string, mirr_date_pay: string,
              rate_pen: string, interest_charge: string, late_charge: string, penalty: string, hide_doc_dt: string,
              hide_doc_no: string, channel_no: string, cheque_number: string, installment_e_vat: string) {
    this.document_date = document_date;
    this.document_no = document_no;
    this.date_pay = date_pay;
    this.entry_number = entry_number;
    this.paid_amt = paid_amt;
    this.paid_desc = paid_desc;
    this.inst_amt = inst_amt;
    this.vat_amt = vat_amt;
    this.rental_amt = rental_amt;
    this.at_term = at_term;
    this.due_date = due_date;
    this.day_late = day_late;
    this.str_date_pay = str_date_pay;
    this.mirr_date_pay = mirr_date_pay;
    this.rate_pen = rate_pen;
    this.interest_charge = interest_charge;
    this.late_charge = late_charge;
    this.penalty = penalty;
    this.hide_doc_dt = hide_doc_dt;
    this.hide_doc_no = hide_doc_no;
    this.channel_no = channel_no;
    this.cheque_number = cheque_number;
    this.installment_e_vat = installment_e_vat;
  }

  static parse(json: any[]) {
    let data: CdsPaid_InstModel[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new CdsPaid_InstModel(
        json[i].DOCUMENT_DATE,
        json[i].DOCUMENT_NO,
        json[i].DATE_PAY,
        json[i].ENTRY_NUMBER,
        json[i].PAID_AMT,
        json[i].PAID_DESC,
        json[i].INST_AMT,
        json[i].VAT_AMT,
        json[i].RENTAL_AMT,
        json[i].AT_TERM,
        json[i].DUE_DATE,
        json[i].DAY_LATE,
        json[i].STR_DATE_PAY,
        json[i].MIRR_DATE_PAY,
        json[i].RATE_PEN,
        json[i].INTEREST_CHARGE,
        json[i].LATE_CHARGE,
        json[i].PENALTY,
        json[i].HIDE_DOC_DT,
        json[i].HIDE_DOC_NO,
        json[i].CHANNEL_NO,
        json[i].CHEQUE_NUMBER,
        json[i].INSTALLMENT_E_VAT
      ))
    }

    return data;
  }

}
