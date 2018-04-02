/**
 * Created by patcharapon.ch on 27/02/2561.
 */
export class ModelNcbAccDetail{

  constructor(public MEMBER_SHORT_NAME:string,
              public MEMBER_CREDIT_TYPE:string,
              public AS_OF_DATE:string,
              public ACCOUNT_NUMBER:string,
              public ACCOUNT_TYPE:string,
              public DATE_ACCOUNT_OPENED:string,
              public DATE_OF_LAST_DEBT_RESTRUCTURE:string,
              public DATE_ACCOUNT_CLOSED:string,
              public TYPE_OF_CREDIT_CARD:string,
              public CREDITCARD_TYPE_CODE:string,
              public OWNERSHIP_INDICATOR:string,
              public NUMBER_OF_COBORROWERS:string,
              public CURRENCY_CODE:string,
              public CREDITLIMITORIGINALLOAN_AMOUNT:string,
              public INSTALLMENT_AMOUNT:string,
              public INSTALLMENT_FREQUENCY:string,
              public INSTALLMENT_NUMBER_OF_PAYMENTS:string,
              public PERCENT_PAYMENT:string,
              public UNIT_MAKE:string,
              public UNIT_MODEL:string,
              public COLLATERAL_1:string,
              public COLLATERAL_2:string,
              public COLLATERAL_3:string,
              public AMOUNT_OWED:string,
              public AMOUNT_PAST_DUE:string,
              public DATE_OF_LAST_PAYMENT:string,
              public DEFAULT_DATE:string,
              public ACCOUNT_ID:string,
              public ACCOUNT_STATUS:string,
              public LOAN_OBJECTIVE:string,
              public CREDIT_TYPE_FLAG:string,
             )
  {

  }


  static parse(json:any[])
  {

    let modelNcbAccDetail:ModelNcbAccDetail[]=[];
    for(let i=0;i<json.length;i++)
    {
      modelNcbAccDetail.push(new ModelNcbAccDetail(
        json[i].MEMBER_SHORT_NAME,
        json[i].MEMBER_CREDIT_TYPE,
        json[i].AS_OF_DATE,
        json[i].ACCOUNT_NUMBER=='-'?'ไม่มีข้อมูล':json[i].ACCOUNT_NUMBER,
        json[i].ACCOUNT_TYPE,
        json[i].DATE_ACCOUNT_OPENED,
        json[i].DATE_OF_LAST_DEBT_RESTRUCTURE,
        json[i].DATE_ACCOUNT_CLOSED,
        json[i].TYPE_OF_CREDIT_CARD=='-'?'':json[i].TYPE_OF_CREDIT_CARD+' - ',
        json[i].CREDITCARD_TYPE_CODE=='-'?'':json[i].CREDITCARD_TYPE_CODE,
        json[i].OWNERSHIP_INDICATOR,
        json[i].NUMBER_OF_COBORROWERS=='-'?'ไม่มีข้อมูล':json[i].NUMBER_OF_COBORROWERS,
        json[i].CURRENCY_CODE,
        json[i].CREDITLIMITORIGINALLOAN_AMOUNT,
        json[i].INSTALLMENT_AMOUNT,
        json[i].INSTALLMENT_FREQUENCY,
        json[i].INSTALLMENT_NUMBER_OF_PAYMENTS,
        json[i].PERCENT_PAYMENT=='-'?'ไม่มีข้อมูล':json[i].PERCENT_PAYMENT,
        json[i].UNIT_MAKET=='-'?'ไม่มีข้อมูล':json[i].UNIT_MAKET,
        json[i].UNIT_MODEL=='-'?'ไม่มีข้อมูล':json[i].UNIT_MODEL,
        json[i].COLLATERAL_1=='-'?'ไม่มีข้อมูล':json[i].COLLATERAL_1,
        json[i].COLLATERAL_2=='-'?'ไม่มีข้อมูล':json[i].COLLATERAL_2,
        json[i].COLLATERAL_3=='-'?'ไม่มีข้อมูล':json[i].COLLATERAL_3,
        json[i].AMOUNT_OWED,
        json[i].AMOUNT_PAST_DUE,
        json[i].DATE_OF_LAST_PAYMENT,
        json[i].DEFAULT_DATE,
        json[i].ACCOUNT_ID,
        json[i].ACCOUNT_STATUS,
        json[i].LOAN_OBJECTIVE,
        json[i].CREDIT_TYPE_FLAG=='-'?'':json[i].CREDIT_TYPE_FLAG
      ))
    }
    return modelNcbAccDetail;
  }
}
