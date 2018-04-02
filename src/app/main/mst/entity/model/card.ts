export class Card {
  public comCode;
  public entCode;
  public cardType;
  public cardNo;
  public cardIssueDate;
  public cardExpireDate;
  public cardAdd1;
  public cardAdd2;
  public cardBy;
  public cardTypeDesc;

  constructor(comCode, entCode, cardType, cardNo, cardIssueDate, cardExpireDate
    , cardAdd1, cardAdd2, cardBy, cardTypeDesc) {
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

  static parse(json: any[]) {
    let data: Card[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new Card(
        json[i].comCode,
        json[i].entCode,
        json[i].cardType,
        json[i].cardNo,
        json[i].cardIssueDate,
        json[i].cardExpireDate,
        json[i].cardAdd1,
        json[i].cardAdd2,
        json[i].cardBy,
        json[i].cardTypeDesc
      ))
    }
    return data;
  }
}
