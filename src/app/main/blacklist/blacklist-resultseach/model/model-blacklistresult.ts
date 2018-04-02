
/**
 * Created by patcharapon.ch on 24/08/2560.
 */
export class BlacklistResult
{

  constructor(public FIRST_NAME?:string,
  public LAST_NAME?:string,
  public ID_CARD?:string,
  public ENG_NUM?:string,
  public CHASSIS?:string,
  public AMLO?:string
  )
  {}

  static parse(json:any[])
  {
    let data: BlacklistResult[] = [];
    for(let i=0;i<json.length;i++)
    {
        data.push(
        new BlacklistResult(
        json[i].FIRST_NAME,
        json[i].LAST_NAME,
        json[i].ID_CODE,
        json[i].ENG_NUM,
        json[i].CHASSIS,
        json[i].AMLO)
        )
     // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
