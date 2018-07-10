export class RegSumbal {

  public receive_type;
  public recieve_name;
  public kind_of_document;
  public document_no;
  public document_date;
  public amount;
  public balance_deposit;
  public deduct_deposit;
  public deduct_deposit_onhand;
  public remark;

  constructor()

  constructor(receive_type, recieve_name, kind_of_document, document_no, document_date, amount,
              balance_deposit, deduct_deposit, deduct_deposit_onhand, remark)


  constructor(receive_type?, recieve_name?, kind_of_document?, document_no?, document_date?, amount?,
              balance_deposit?, deduct_deposit?, deduct_deposit_onhand?, remark?) {

    this.receive_type = receive_type;
    this.recieve_name = recieve_name;
    this.kind_of_document = kind_of_document;
    this.document_no = document_no;
    this.document_date = document_date;
    this.amount = amount;
    this.balance_deposit = balance_deposit
    this.deduct_deposit = deduct_deposit;
    this.deduct_deposit_onhand = deduct_deposit_onhand;
    this.remark = remark;
  }

  static parse(json: any[]) {
    let data: RegSumbal[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new RegSumbal(
        json[i].receive_type,
        json[i].recieve_name,
        json[i].kind_of_document,
        json[i].document_no,
        json[i].document_date,
        json[i].amount,
        json[i].balance_deposit,
        json[i].deduct_deposit,
        json[i].deduct_deposit_onhand,
        json[i].remark)
      )
    }
    return data;
  }


}
