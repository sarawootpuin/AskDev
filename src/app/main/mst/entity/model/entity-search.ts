export class EntitySearch {
  public entCode;
  public fNameT;
  public lNameT;
  public fNameE;
  public lNameE;
  public newCardNo;
  public comCode;


  constructor(ENT_CODE, F_NAMET, L_NAMET, F_NAMEE, L_NAMEE, NEW_CARD_NO, COM_CODE) {
    this.entCode = ENT_CODE;
    this.fNameT = F_NAMET;
    this.lNameT = L_NAMET;
    this.fNameE = F_NAMEE;
    this.lNameE = L_NAMEE;
    this.newCardNo = NEW_CARD_NO;
    this.comCode = COM_CODE;
  }

  static parse(json: any[]) {
    let data: EntitySearch[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new EntitySearch(
        json[i].ENT_CODE,
        json[i].F_NAMET,
        json[i].L_NAMET,
        json[i].F_NAMEE,
        json[i].L_NAMEE,
        json[i].NEW_CARD_NO,
        json[i].COM_CODE
      ))
    }
    return data;
  }
}
