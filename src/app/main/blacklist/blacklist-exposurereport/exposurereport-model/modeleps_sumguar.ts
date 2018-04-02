/**
 * Created by patcharapon.ch on 22/11/2560.
 */
export class ModelEPS_SUMGUAR
{
  constructor(public COM_CODE:string,
              public HI_HP:string,
              public OS_HP:string,
              public HI_LS:string,
              public OS_LS:string,
              public HI_FP:string,
              public OS_FP:string,
              public HI_PL:string,
              public OS_PL:string,
              public OS_FAC:string,
              public OS_TOTAL)
  {}

  static parse(json:any[])
  {
    let data: ModelEPS_SUMGUAR[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelEPS_SUMGUAR(
          json[i].COM_CODE,
          json[i].HI_HP,
          json[i].OS_HP,
          json[i].HI_LS,
          json[i].OS_LS,
          json[i].HI_FP,
          json[i].OS_FP,
          json[i].HI_PL,
          json[i].OS_PL,
          json[i].OS_FAC,
          json[i].OS_TOTAL
        )
      )
      // console.log(json[i].FIRST_NAME);
    }
    return data;
  }
}
