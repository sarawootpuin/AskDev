/**
 * Created by tanapon.sa on 13/07/2561.
 */
export class ArPlPaidInst {
  public document_date: any;
  public document_no: any;
  public date_pay: any;
  public entry_number: any;
  public paid_amt: any;
  public paid_desc: any;
  public inst_amt: any;
  public vat_amt: any;
  public rental_amt: any;
  public at_term: any;
  public due_date: any;
  public day_late: any;
  public str_date_pay: any;
  public mirr_date_pay: any;
  public hide_doc_no: any;
  public follow_up_debt: any;
  public principal: any;
  public interest: any;
  public fact_fee: any;
  public os_ar: any;
  public hide_doc_dt: any;
  public at_term2: any;
  public channel_no: any;
  public installment_e_vat: any;


  constructor(document_date?: any, document_no?: any, date_pay?: any, entry_number?: any, paid_amt?: any,
              paid_desc?: any, inst_amt?: any, vat_amt?: any, rental_amt?: any, at_term?: any, due_date?: any,
              day_late?: any, str_date_pay?: any, mirr_date_pay?: any, hide_doc_no?: any, follow_up_debt?: any,
              principal?: any, interest?: any, fact_fee?: any, os_ar?: any, hide_doc_dt?: any, at_term2?: any,
              channel_no?: any, installment_e_vat?: any) {
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
    this.hide_doc_no = hide_doc_no;
    this.follow_up_debt = follow_up_debt;
    this.principal = principal;
    this.interest = interest;
    this.fact_fee = fact_fee;
    this.os_ar = os_ar;
    this.hide_doc_dt = hide_doc_dt;
    this.at_term2 = at_term2;
    this.channel_no = channel_no;
    this.installment_e_vat = installment_e_vat;
  }

  static parse(json : any[]) {
    let data: ArPlPaidInst[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new ArPlPaidInst(
        json[i].document_date,
        json[i].document_no,
        json[i].date_pay,
        json[i].entry_number,
        json[i].paid_amt,
        json[i].paid_desc,
        json[i].inst_amt,
        json[i].vat_amt,
        json[i].rental_amt,
        json[i].at_term,
        json[i].due_date,
        json[i].day_late,
        json[i].str_date_pay,
        json[i].mirr_date_pay,
        json[i].hide_doc_no,
        json[i].follow_up_debt,
        json[i].principal,
        json[i].interest,
        json[i].fact_fee,
        json[i].os_ar,
        json[i].hide_doc_dt,
        json[i].at_term2,
        json[i].channel_no,
        json[i].installment_e_vat
      ))
    }

    return data;

  }
}
