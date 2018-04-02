export class Industry {
  public comCode;
  public entCode;
  public indPcnt;
  public newIndCode;
  public newIndDecs;
  public oldIndCode;
  public oldIndDecs;
  public subId;
  public remark;

  constructor(comCode, entCode, indPcnt, newIndCode, newIndDecs, oldIndCode,
              oldIndDecs, subId,RMRK) {
    this.comCode = comCode;
    this.entCode = entCode;
    this.indPcnt = indPcnt;
    this.newIndCode = newIndCode;
    this.newIndDecs = newIndDecs;
    this.oldIndCode = oldIndCode;
    this.oldIndDecs = oldIndDecs;
    this.subId = subId;
    this.remark = RMRK;
  }

  static parse(json: any[]) {
    let data: Industry[] = [];

    for (let i = 0; i < json.length; i++) {
      data.push(new Industry(
        json[i].COM_CODE,
        json[i].ENT_CODE,
        json[i].IND_PCNT,
        json[i].NEW_IND_CODE,
        json[i].NEW_IND_DECS,
        json[i].OLD_IND_CODE,
        json[i].OLD_IND_DECS,
        json[i].SUB_ID,
        json[i].RMRK
      ))
    }
    return data;
  }
}
