/**
 * Created by patcharapon.ch on 21/11/2560.
 */
export class ModelEPS_HIGHEST
{
  constructor(public HI_ASK_HP:string,
              public HI_BGP_HP:string,
              public HI_BGP_LS:string)
  {}

  static parse(json:any[])
  {
    let data: ModelEPS_HIGHEST[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelEPS_HIGHEST(
          json[i].HI_ASK_HP,
          json[i].HI_BGP_HP,
          json[i].HI_BGP_LS
        )
      )
      // console.log(json[i].FIRST_NAME);
    }
    return data;
  }
}
