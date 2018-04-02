/**
 * Created by patcharapon.ch on 23/02/2561.
 */
export class ModelLoanHead{
  constructor(public ACCOUNT_TYPE_THA:string,
              public SUM_ACC:string,
              public SUM_FIN:string,
              public OS_PRI:string,
              public MAX_DATE:string,
              public MORE90:string,
              public SUM_INST:string,
              public PASTDUE:string,
              public MIN_DATE:string,
              public NUM_OS0:string,
              public ACCOUNT_TYPE:string,
              public ROWNUM:string){

  }

  static parse(json:any[])
  {
    let modelLoanHead:ModelLoanHead[]=[];
    for(let i=0;i<json.length;i++)
    {
      modelLoanHead.push(new ModelLoanHead(
        json[i].ACCOUNT_TYPE_THA,
        json[i].SUM_ACC,
        json[i].SUM_FIN,
        json[i].OS_PRI,
        json[i].MAX_DATE,
        json[i].MORE90,
        json[i].SUM_INST,
        json[i].PASTDUE,
        json[i].MIN_DATE,
        json[i].NUM_OS0,
        json[i].ACCOUNT_TYPE,
        json[i].ROWNUM,
      ))
    }
    return modelLoanHead
  }
}
