/**
 * Created by patcharapon.ch on 31/08/2560.
 */
export class BlacklistHistory
{
    constructor(public FIRST_NAME:string,
    public LAST_NAME:string,
    public CHECK_DATE:string,
    public CHECK_BY:string,
    public ID_CARD:string,
    public CHASSIS:string,
    public ENG_NUM:string,
    public BRAND:string,
    public LICENCE:string)
    {

    }

  static parse(json:any[])
  {
    let data: BlacklistHistory[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new BlacklistHistory(
          json[i].FIRST_NAME,
          json[i].LAST_NAME,
          json[i].CHECK_DATE,
          json[i].CHECK_BY,
          json[i].ID_CARD,
          json[i].CHASSIS,
          json[i].ENG_NUM,
          json[i].BRAND,
          json[i].LICENCE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
