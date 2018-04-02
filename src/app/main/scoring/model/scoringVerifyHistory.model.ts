/**
 * Created by wisarut.su on 13/12/2560.
 */

export class ScoringVerifyHistoryModel
{
  public runNo : string;
  public changeType : string;
  public fieldDesc : string;
  public oldData : string;
  public newData : string;
  public changeBy : string;
  public editDt : string;
  public flg : string;
  public sentDt : string;
  constructor()
  constructor(runNo : string,
              changeType : string,
              fieldDesc : string,
              oldData : string,
              newData : string,
              changeBy : string,
              editDt : string,
              flg : string,
              sentDt : string)
  constructor(runNo ?: string,
              changeType ?: string,
              fieldDesc ?: string,
              oldData ?: string,
              newData ?: string,
              changeBy ?: string,
              editDt ?: string,
              flg ?: string,
              sentDt ?: string)
  {
    this.runNo = runNo;
    this.changeType = changeType;
    this.fieldDesc = fieldDesc;
    this.oldData = oldData;
    this.newData = newData;
    this.changeBy = changeBy;
    this.editDt = editDt;
    this.flg = flg;
    this.sentDt = sentDt;
  }

  static parse(json: any[]) {
    let data: ScoringVerifyHistoryModel[] = [];
    for (let i = 0; i < json.length; i++) {
      data.push(new ScoringVerifyHistoryModel(
        json[i].RUN_NO,
        json[i].CHANGE_TYPE,
        json[i].FIELD_DESC,
        json[i].OLD_DATA,
        json[i].NEW_DATA,
        json[i].CHANGE_BY,
        json[i].EDIT_DT,
        json[i].FLG,
        json[i].SENT_DT
      ))
    }
    return data;
  }
}
