/**
 * Created by patcharapon.ch on 09/11/2560.
 */
export class ModelEPS_ASK
{
  constructor(public CREDIT_TYPE:string,
                public AGR_CODE:string,
                public BRAND_NAME:string,
                public MODEL_DSC:string,
                public BODY_NAME:string,
                public FIRST:string,
                public LAST_DUE:string,
                public FIN_AMT_E_VAT:string,
                public OS_PRI:string)
  {}

  static parse(json:any[])
  {
    let data: ModelEPS_ASK[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelEPS_ASK(
          json[i].CREDIT_TYPE,
          json[i].AGR_CODE,
          json[i].BRAND_NAME,
          json[i].MODEL_DSC,
          json[i].BODY_NAME,
          json[i].FIRST,
          json[i].LAST_DUE,
          json[i].FIN_AMT_E_VAT,
          json[i].OS_PRI==='-'? '0':json[i].OS_PRI
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
