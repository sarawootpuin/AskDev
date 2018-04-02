export class Bank {
  public comCode;
  public entCode;
  public accNo;
  public bank;
  public bankBranch;
  public accountType;
  public directDebitFlag;
  public lastUsr;
  public lastUpd;
  public inputUser;
  public inputDate;
  public accName;
  public active;
  public bankDesc;

  constructor(COM_CODE, ENT_CODE, ACC_NO, BANK, BANK_BRANCH, ACCOUNT_TYPE
    , DIRECT_DEBIT_FLAG, LAST_USR, LAST_UPD, INPUT_USER, INPUT_DATE
    , ACC_NAME, ACTIVE, BANK_DESC) {
    this.comCode = COM_CODE;
    this.entCode = ENT_CODE;
    this.accNo = ACC_NO;
    this.bank = BANK;
    this.bankBranch = BANK_BRANCH;
    this.accountType = ACCOUNT_TYPE;
    this.directDebitFlag = DIRECT_DEBIT_FLAG;
    this.lastUsr = LAST_USR;
    this.lastUpd = LAST_UPD;
    this.inputUser = INPUT_USER;
    this.inputDate = INPUT_DATE;
    this.accName = ACC_NAME;
    this.active = ACTIVE;
    this.bankDesc = BANK_DESC;
  }

  static parse(json: any[]) {
    let data: Bank[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new Bank(
        json[i].COM_CODE,
        json[i].ENT_CODE,
        json[i].ACC_NO,
        json[i].BANK,
        json[i].BANK_BRANCH,
        json[i].ACCOUNT_TYPE,
        json[i].DIRECT_DEBIT_FLAG,
        json[i].LAST_USR,
        json[i].LAST_UPD,
        json[i].INPUT_USER,
        json[i].INPUT_DATE,
        json[i].ACC_NAME,
        json[i].ACTIVE,
        json[i].BANK_DESC
      ))
    }
    return data;
  }
}
