/**
 * Created by tanapon.sa on 19/06/2561.
 */
export class DealerModel {
  public name: any;
  public address: any;
  public card_no: any;
  public branch_no: any;
  public email: any;
  public pay_type: any;
  public bank: any;
  public branch: any;
  public account_no: any;


  constructor(name?: any, address?: any, card_no?: any, branch_no?: any, email?: any,
              pay_type?: any, bank?: any, branch?: any, account_no?: any) {
    this.name = name;
    this.address = address;
    this.card_no = card_no;
    this.branch_no = branch_no;
    this.email = email;
    this.pay_type = pay_type;
    this.bank = bank;
    this.branch = branch;
    this.account_no = account_no;
  }

  static parse(json:any) {
    let data:DealerModel = new DealerModel();

    data.name = json.name;
    data.address = json.address;
    data.card_no = json.card_no;
    data.branch_no = json.branch_no;
    data.email = json.email;
    data.pay_type = json.pay_type;
    data.bank = json.bank;
    data.branch = json.branch;
    data.account_no = json.account_no;

    return data;
  }
}
