/**
 * Created by wisarut.su on 20/12/2560.
 */
export class Card {
  public comCode: any;
  public entCode: any;
  public cardType: any;
  public cardNo: any;
  public cardIssueDate: any;
  public cardExpireDate: any;
  public cardAdd1: any;
  public cardAdd2: any;
  public cardBy: any;
  public cardTypeDesc: any;

  constructor()
  constructor(comCode: any,
              entCode: any,
              cardType: any,
              cardNo: any,
              cardIssueDate: any,
              cardExpireDate: any,
              cardAdd1: any,
              cardAdd2: any,
              cardBy: any,
              cardTypeDesc: any)
  constructor(comCode ?: any,
              entCode ?: any,
              cardType ?: any,
              cardNo ?: any,
              cardIssueDate ?: any,
              cardExpireDate ?: any,
              cardAdd1 ?: any,
              cardAdd2 ?: any,
              cardBy ?: any,
              cardTypeDesc ?: any) {
    this.comCode = comCode;
    this.entCode = entCode;
    this.cardType = cardType;
    this.cardNo = cardNo;
    this.cardIssueDate = cardIssueDate;
    this.cardExpireDate = cardExpireDate;
    this.cardAdd1 = cardAdd1;
    this.cardAdd2 = cardAdd2;
    this.cardBy = cardBy;
    this.cardTypeDesc = cardTypeDesc;
  }

  static parse(jsons: any[]) {
    let data: Card[] = [];
    if (jsons) {
      for (let json of jsons) {
        data.push(new Card(
          json.COM_CODE,
          json.ENT_CODE,
          json.CARD_TYPE,
          json.CARD_NO,
          json.CARD_ISSUE_DATE,
          json.CARD_EXPIRE_DATE,
          json.CARD_ADD1,
          json.CARD_ADD2,
          json.CARD_BY,
          json.CARD_TYPE_DESC
        ))
      }
    }
    return data;
  }
}
