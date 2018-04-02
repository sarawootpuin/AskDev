/**
 * Created by wisarut.su on 20/12/2560.
 */
export class Industry {
  public entCode: any;
  public newIndCode: any;
  public indPcnt: any;
  public rmrk: any;
  public oldIndCode: any;
  public comCode: any;
  public subId: any;
  public newIndDecs: any;
  public oldIndDecs: any;

  constructor()
  constructor(entCode: any,
              newIndCode: any,
              indPcnt: any,
              rmrk: any,
              oldIndCode: any,
              comCode: any,
              subId: any,
              newIndDecs: any,
              oldIndDecs: any)
  constructor(entCode ?: any,
              newIndCode ?: any,
              indPcnt ?: any,
              rmrk ?: any,
              oldIndCode ?: any,
              comCode ?: any,
              subId ?: any,
              newIndDecs ?: any,
              oldIndDecs ?: any) {
    this.entCode = entCode;
    this.newIndCode = newIndCode;
    this.indPcnt = indPcnt;
    this.rmrk = rmrk;
    this.oldIndCode = oldIndCode;
    this.comCode = comCode;
    this.subId = subId;
    this.newIndDecs = newIndDecs;
    this.oldIndDecs = oldIndDecs;
  }

  static parse(jsons: any[]) {
    let data: Industry[] = [];
    if (jsons) {
      for (let json of jsons) {
        data.push(new Industry(
          json.ENT_CODE,
          json.NEW_IND_CODE,
          json.IND_PCNT,
          json.RMRK,
          json.OLD_IND_CODE,
          json.COM_CODE,
          json.SUB_ID,
          json.NEW_IND_DECS,
          json.OLD_IND_DECS
        ))
      }
    }
    return data;
  }
}
