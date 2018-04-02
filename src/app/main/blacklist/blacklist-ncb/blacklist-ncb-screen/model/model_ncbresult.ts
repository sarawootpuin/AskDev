/**
 * Created by patcharapon.ch on 15/01/2561.
 */
export class ModelNcbResult
{
  constructor(public REMARK:string,
              public COL_10:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbResult[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbResult(
          json[i].REMARK,
          json[i].COL_10
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
