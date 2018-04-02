/**
 * Created by patcharapon.ch on 14/11/2560.
 */
export class ModelEPS_FAC
{
  constructor(public SELLER_CODE:string,
              public SELLER:string,
              public SELLER_GROUP:string,
              public GROUP_NAME:string,
              public APPROVE_AMT:string,
              public CR_GROUP:string,
              public ACC_ADVANCE:string,
              public ACC_ADVANCE_GP:string)
  {}

  static parse(json:any[])
  {
    let data: ModelEPS_FAC[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelEPS_FAC(
          json[i].SELLER_CODE,
          json[i].SELLER,
          json[i].SELLER_GROUP,
          json[i].GROUP_NAME,
          json[i].APPROVE_AMT,
          json[i].CR_GROUP,
          json[i].ACC_ADVANCE,
          json[i].ACC_ADVANCE_GP
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
