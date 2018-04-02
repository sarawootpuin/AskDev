/**
 * Created by wisarut.su on 20/12/2560.
 */
export class Nationality {
  public entCode: any;
  public subId: any;
  public nationality: any;
  public percentage: any;
  public comCode: any;
  public nationFull: any;

  constructor()
  constructor(entCode: any,
              subId: any,
              nationality: any,
              percentage: any,
              comCode: any,
              nationFull: any)
  constructor(entCode ?: any,
              subId ?: any,
              nationality ?: any,
              percentage ?: any,
              comCode ?: any,
              nationFull ?: any) {
    this.entCode = entCode;
    this.subId = subId;
    this.nationality = nationality;
    this.percentage = percentage;
    this.comCode = comCode;
    this.nationFull = nationFull;
  }

  static parse(json: any[]) {
    console.log(json);
    let data: Nationality[] = [];
    if (json) {
      for (let i = 0; i < json.length; i++) {
        data.push(new Nationality(
          json[i].ENT_CODE,
          json[i].SUB_ID,
          json[i].NATIONALITY,
          json[i].PERCENTAGE,
          json[i].COM_CODE,
          json[i].NATION_FULL
        ))
      }
    }
    return data;
  }
}
