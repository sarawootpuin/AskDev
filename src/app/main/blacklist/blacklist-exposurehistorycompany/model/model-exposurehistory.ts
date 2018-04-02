/**
 * Created by patcharapon.ch on 06/12/2560.
 */
export class ModelExposureHistory{

  constructor(
  private AS_OF_DATE:string,
  private AGR_CODE:string,
  private REGISTRATION_NUMBER:string,
  private FIRST_NAME:string,
  private LAST_NAME:string,
  private CUS_GUAR:string,
  private CLOSE_ACTIVE:string,
  private OS_AR:string,
  private OS_PRI:string,
  private PAST_DUE:string,
  private OVER_NO:string,
  private C_STATUS:string,
  private CREDIT_GRADING:string,
  private PAYMENT_GRADING:string,
  private MARKETING:string,
  private VERIFIER:string,
  private CUSTOMER_SERVICE:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelExposureHistory[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelExposureHistory(
          json[i].AS_OF_DATE,
          json[i].AGR_CODE,
          json[i].REGISTRATION_NUMBER,
          json[i].FIRST_NAME,
          json[i].LAST_NAME,
          json[i].CUS_GUAR,
          json[i].CLOSE_ACTIVE,
          json[i].OS_AR,
          json[i].OS_PRI,
          json[i].PAST_DUE,
          json[i].OVER_NO,
          json[i].C_STATUS,
          json[i].CREDIT_GRADING,
          json[i].PAYMENT_GRADING,
          json[i].MARKETING,
          json[i].VERIFIER,
          json[i].CUSTOMER_SERVICE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
