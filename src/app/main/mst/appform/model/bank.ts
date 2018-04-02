/**
 * Created by wisarut.su on 2i/12/256i.
 */
export class Bank {
  public comCode: any;
  public entCode: any;
  public accNo: any;
  public bank: any;
  public bankBranch: any;
  public accountType: any;
  public directDebitFlag: any;
  public lastUsr: any;
  public lastUpd: any;
  public inputUser: any;
  public inputDate: any;
  public accName: any;
  public active: any;
  public bankDesc: any;

  constructor()
  constructor(comCode: any,
              entCode: any,
              accNo: any,
              bank: any,
              bankBranch: any,
              accountType: any,
              directDebitFlag: any,
              lastUsr: any,
              lastUpd: any,
              inputUser: any,
              inputDate: any,
              accName: any,
              active: any,
              bankDesc: any)
  constructor(comCode ?: any,
              entCode ?: any,
              accNo ?: any,
              bank ?: any,
              bankBranch ?: any,
              accountType ?: any,
              directDebitFlag ?: any,
              lastUsr ?: any,
              lastUpd ?: any,
              inputUser ?: any,
              inputDate ?: any,
              accName ?: any,
              active ?: any,
              bankDesc ?: any) {
    this.comCode = comCode;
    this.entCode = entCode;
    this.accNo = accNo;
    this.bank = bank;
    this.bankBranch = bankBranch;
    this.accountType = accountType;
    this.directDebitFlag = directDebitFlag;
    this.lastUsr = lastUsr;
    this.lastUpd = lastUpd;
    this.inputUser = inputUser;
    this.inputDate = inputDate;
    this.accName = accName;
    this.active = active;
    this.bankDesc = bankDesc;
  }

  static parse(json: any[]) {
    let data: Bank[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        let bank: Bank = new Bank();
        bank.comCode = json[i].COM_CODE;
        bank.entCode = json[i].ENT_CODE;
        bank.accNo = json[i].ACC_NO;
        bank.bank = json[i].BANK;
        bank.bankBranch = json[i].BANK_BRANCH;
        bank.accountType = json[i].ACCOUNT_TYPE;
        bank.directDebitFlag = json[i].DIRECT_CREDIT_FLAG;
        bank.lastUsr = json[i].LAST_USR;
        bank.lastUpd = json[i].LAST_UPD;
        bank.inputUser = json[i].INPUT_USER;
        bank.inputDate = json[i].INPUT_DATE;
        bank.accName = json[i].ACC_NAME;
        bank.active = json[i].ACTIVE;
        bank.bankDesc = json[i].BANK_DESC;
        data.push(bank);
      }
    }
    return data;
  }
}
