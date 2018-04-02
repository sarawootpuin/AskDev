/**
 * Created by patcharapon.ch on 15/01/2561.
 */
export class ModelNcbMkt
{
  constructor(public FULL_NAMET:string,
              public CODE:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbMkt[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbMkt(
          json[i].FULL_NAMET,
          json[i].CODE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
