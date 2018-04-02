/**
 * Created by patcharapon.ch on 05/09/2560.
 */
export class modelblinquiry
{

  constructor(
  public FIRST_NAME:string,
  public LAST_NAME:string,
  public AMLO:string,
  public ID_CARD:string,
  public LAW_DATE:string,
  public LAW_AMOUNT:string,
  public LAW_SUIT:string,
  public ACCUSER:string,
  public ENG_NUM:string,
  public CHASSIS:string,
  public BRAND:string,
  public LICENCE:string,
  public REMARK:string)
  {}

  static parse(json:any[])
  {
    let data: modelblinquiry[] = [];
    for(let i=0;i<json.length;i++)
      data.push(
        new modelblinquiry(
          json[i].FIRST_NAME,
          json[i].LAST_NAME,
          json[i].AMLO,
          json[i].ID_CODE,
          json[i].LAW_DATE,
          json[i].LAW_AMOUNT =='-' ? '0':json[i].LAW_AMOUNT ,
          json[i].LAW_SUIT,
          json[i].ACCUSER,
          json[i].ENG_NUM,
          json[i].CHASSIS,
          json[i].BRAND,
          json[i].LICENCE,
          json[i].REMARK
        )
      )

    return data;
  }
}
