/**
 * Created by patcharapon.ch on 14/11/2560.
 */
export class ModelEPS_FACSELLER
{
  constructor(public SELLER_CODE:string,
              public SELLER:string,
              public SELLER_GROUP:string,
              public GROUP_NAME:string,
              public APPROVE_AMT:string,
              public CR_GROUP:string,
              public ACC_ADVANCE:string,
              public ACC_ADVANCE_GP:string,
              public SUM_CR_LIMIT:string,
              public SUM_ADVANCE_AMT:string,
              public CREDIT_LINT_TOT:string,
              public ADVANCE_AMT_TOT:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelEPS_FACSELLER[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelEPS_FACSELLER(
          json[i].SELLER_CODE,
          json[i].SELLER,
          json[i].SELLER_GROUP,
          json[i].GROUP_NAME,
          json[i].APPROVE_AMT,
          json[i].CR_GROUP,
          json[i].ACC_ADVANCE,
          json[i].ACC_ADVANCE_GP,
          json[i].SUM_CR_LIMIT,
          json[i].SUM_ADVANCE_AMT,
          json[i].CREDIT_LINT_TOT,
          json[i].ADVANCE_AMT_TOT
        )
      )
      // console.log(json[i].FIRST_NAME);
    }
    return data;
  }
}
