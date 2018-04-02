/**
 * Created by patcharapon.ch on 13/03/2561.
 */
export class ModelNcrsHistory{
  constructor(public ENQUIRY_DATE:string,
              public MEMBER_SHORT_NAME:string,
              public MEM_NAME_TH:string,
              public PURPOSE:string
  )
  {}

  static parse(json:any[])
  {
    let modelNcrsHistory:ModelNcrsHistory[]=[];
    for(let i=0;i<json.length;i++)
    {
      modelNcrsHistory.push(new ModelNcrsHistory(
        json[i].ENQUIRY_DATE,
        json[i].MEMBER_SHORT_NAME,
        json[i].MEM_NAME_TH,
        json[i].PURPOSE
      ))
    }
    return modelNcrsHistory;
  }
}
