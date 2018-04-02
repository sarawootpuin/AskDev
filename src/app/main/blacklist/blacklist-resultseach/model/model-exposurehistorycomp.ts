/**
 * Created by patcharapon.ch on 13/12/2560.
 */
export class ModelExposureHistoryCompany
{

  constructor(
  public AS_OF_DATE : string,
  public AGR_CODE : string,
  public CUS_GUAR : string,
  public CLOSE_ACTIVE : string,
  public OS_AR : string,
  public OS_PRI : string,
  public PAST_DUE : string,
  public OVER_NO : string,
  public C_STATUS : string,
  public CREDIT_GRADING : string,
  public PAYMENT_GRADING : string,
  public REGISTRATION_NUMBER : string,
  public MARKETING : string,
  public VERIFIER : string,
  public CUSTOMER_SERVICE)
  {}

  static parse(json:any[])
  {
    let data: ModelExposureHistoryCompany[] = [];
    for(let i=0;i<json.length;i++)
      data.push(
        new ModelExposureHistoryCompany(
          json[i].AS_OF_DATE,
          json[i].AGR_CODE,
          json[i].CUS_GUAR,
          json[i].CLOSE_ACTIVE,
          json[i].OS_AR,
          json[i].OS_PRI,
          json[i].PAST_DUE,
          json[i].OVER_NO,
          json[i].C_STATUS,
          json[i].CREDIT_GRADING,
          json[i].PAYMENT_GRADING,
          json[i].REGISTRATION_NUMBER,
          json[i].MARKETING,
          json[i].VERIFIER,
          json[i].CUSTOMER_SERVICE
        )
      )

    return data;
  }
}
