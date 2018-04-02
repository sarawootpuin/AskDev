/**
 * Created by patcharapon.ch on 23/02/2561.
 */
export class ModelLoanDetail{
  constructor(public AS_OF_DATE:string,
              public ACCOUNT_ID: string,
              public MEMBER_SHORT_NAME: string,
              public CURRENCY_CODE: string,
              public CREDITLIMITORIGINALLOAN_AMOUNT: string,
              public CREDIT_TYPE_FLAG: string,
              public MORE_90: string,
              public AMOUNT_OWED: string,
              public MAX_HIST: string,
              public AMOUNT_PAST_DUE: string,
              public ACCOUNT_STATUS: string,
              public ACCOUNT_STATUS_THA: string){

  }

  static parse(json:any[])
  {
    let modelLoanDetail:ModelLoanDetail[]=[]
    for(let i=0;i<json.length;i++){
      modelLoanDetail.push(new ModelLoanDetail(
        json[i].AS_OF_DATE,
        json[i].ACCOUNT_ID,
        json[i].MEMBER_SHORT_NAME,
        json[i].CURRENCY_CODE,
        json[i].CREDITLIMITORIGINALLOAN_AMOUNT,
        json[i].CREDIT_TYPE_FLAG,
        json[i].MORE_90,
        json[i].AMOUNT_OWED,
        json[i].MAX_HIST,
        json[i].AMOUNT_PAST_DUE,
        json[i].ACCOUNT_STATUS,
        json[i].ACCOUNT_STATUS_THA
      ))
    }
    return modelLoanDetail
  }
}
