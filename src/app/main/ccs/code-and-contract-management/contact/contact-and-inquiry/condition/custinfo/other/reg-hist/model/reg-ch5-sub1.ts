export class RegCh5Sub1 {

  public agr_code;
  public recieve_name;
  public document_no;
  public document_date;
  public batch_d;
  public amount;
  public deduct_deposit;
  public balance_deposit;
  public ref_code;
  public cancel_date;
  public cancel_person;
  public remark;

  constructor()

  constructor(agr_code, recieve_name, document_no, document_date, batch_d, amount, deduct_deposit, balance_deposit,
              ref_code, cancel_date, cancel_person, remark)

  constructor(agr_code?, recieve_name?, document_no?, document_date?, batch_d?, amount?, deduct_deposit?, balance_deposit?,
              ref_code?, cancel_date?, cancel_person?, remark?) {

    this.agr_code = agr_code;
    this.recieve_name = recieve_name;
    this.document_no = document_no;
    this.document_date = document_date;
    this.batch_d = batch_d;
    this.amount = amount;
    this.deduct_deposit = deduct_deposit;
    this.balance_deposit = balance_deposit;
    this.ref_code = ref_code;
    this.cancel_date = cancel_date;
    this.cancel_person = cancel_person;
    this.remark = remark;
  }

  static parse(json: any[]) {
    let data: RegCh5Sub1[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new RegCh5Sub1(
        json[i].agr_code,
        json[i].recieve_name,
        json[i].document_no,
        json[i].document_date,
        json[i].batch_d,
        json[i].amount,
        json[i].deduct_deposit,
        json[i].balance_deposit,
        json[i].ref_code,
        json[i].cancel_date,
        json[i].cancel_person,
        json[i].remark)
      )
    }
    return data;
  }
}
