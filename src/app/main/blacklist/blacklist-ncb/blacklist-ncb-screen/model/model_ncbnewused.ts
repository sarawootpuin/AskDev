/**
 * Created by patcharapon.ch on 15/01/2561.
 */
export class ModelNcbNewUsed
{
  constructor(public CAPTION:string,
              public VALUES:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbNewUsed[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbNewUsed(
          json[i].CAPTION,
          json[i].VALUES
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
