/**
 * Created by patcharapon.ch on 20/09/2560.
 */
export class ModelExposureComp
{
      constructor(
        public F_NAMET:string,
        public L_NAMET:string,
        public AGR_CODE:string,
        public CUS_GUAR:string,
        public OS_AR:string,
        public OS_PRI:string,
        public PAST_DUE:string,
        public C_STATUS:string,
        public CREDIT_GRADING:string,
        public PAYMENT_GRADING:string,
        public CLOSE_ACTIVE:string,
        public FIRST_NAME:string,
        public LAST_NAME:string,
        public ID_CARD:string,
        public AS_OF_DATE:string,
        public F_NAME:string,
        public OVER_NO:string,
        public MARKETING:string,
        public VERIFIER:string,
        public CUSTOMER_SERVICE:string,
        public PERSONAL_COMPANY:string,
        public REGISTRATION_NUMBER:string,
        public COM_CODE:string
      )
      {

      }

  static parse(json:any[])
  {
    let data: ModelExposureComp[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelExposureComp(
          json[i].F_NAMET,
          json[i].L_NAMET,
          json[i].AGR_CODE,
          json[i].CUS_GUAR,
          json[i].OS_AR,
          json[i].OS_PRI,
          json[i].PAST_DUE,
          json[i].C_STATUS,
          json[i].CREDIT_GRADING,
          json[i].PAYMENT_GRADING,
          json[i].CLOSE_ACTIVE,
          json[i].FIRST_NAME,
          json[i].LAST_NAME,
          json[i].ID_CARD,
          json[i].AS_OF_DATE,
          json[i].F_NAME,
          json[i].OVER_NO,
          json[i].MARKETING,
          json[i].VERIFIER,
          json[i].CUSTOMER_SERVICE,
          json[i].PERSONAL_COMPANY,
          json[i].REGISTRATION_NUMBER,
          json[i].COM_CODE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
