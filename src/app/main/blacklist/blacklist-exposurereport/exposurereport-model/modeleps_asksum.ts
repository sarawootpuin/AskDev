/**
 * Created by patcharapon.ch on 13/11/2560.
 */
export class ModelEPS_ASKSUM
{
  constructor(public DAYLATE_HP:string,
              public DAYLATE_PL:string,
              public DAYLATE_FP:string,
              public OS_HP:string,
              public OS_PL:string,
              public OS_FP:string,
              public OS_TOTAL:string)
  {}

  static parse(json:any[])
  {
    let data: ModelEPS_ASKSUM[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelEPS_ASKSUM(
          json[i].DAYLATE_HP,
          json[i].DAYLATE_PL,
          json[i].DAYLATE_FP,
          json[i].OS_HP,
          json[i].OS_PL,
          json[i].OS_FP,
          json[i].OS_TOTAL
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
