export class caEntityBank{
  public   com_code;
  public   ent_code;
  public   acc_no;
  public   bank;
  public   bank_branch;
  public   account_type;
  public   direct_debit_flag;
  public   last_usr;
  public   last_upd;
  public   input_user;
  public   input_date;
  public   acc_name;
  public   active;

  constructor()
  constructor(com_code, ent_code, acc_no, bank, bank_branch, account_type, direct_debit_flag, last_usr, last_upd, input_user, input_date, acc_name, active)
  constructor(com_code?, ent_code?, acc_no?, bank?, bank_branch?, account_type?, direct_debit_flag?, last_usr?, last_upd?, input_user?, input_date?, acc_name?, active?) {
    this.com_code = com_code ? com_code : '';
    this.ent_code = ent_code;
    this.acc_no = acc_no;
    this.bank = bank;
    this.bank_branch = bank_branch;
    this.account_type = account_type;
    this.direct_debit_flag = direct_debit_flag;
    this.last_usr = last_usr;
    this.last_upd = last_upd;
    this.input_user = input_user;
    this.input_date = input_date;
    this.acc_name = acc_name;
    this.active = active;
  }

  static
  parse(json: any[]) {
    let data: caEntityBank[] = [];
    if (json) {
    for (let i = 0; i < json.length; i++) {
      data.push(new caEntityBank(
        json[i].com_code,
        json[i].ent_code,
        json[i].acc_no,
        json[i].bank,
        json[i].bank_branch,
        json[i].account_type,
        json[i].direct_debit_flag,
        json[i].last_usr,
        json[i].last_upd,
        json[i].input_user,
        json[i].input_date,
        json[i].acc_name,
        json[i].active
      ))
    }
    }
    return data;
  }
}
