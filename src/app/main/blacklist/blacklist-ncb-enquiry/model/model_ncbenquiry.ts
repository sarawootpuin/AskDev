/**
 * Created by patcharapon.ch on 11/01/2561.
 */
export class ModelNcbEnquiry
{
  constructor(public RUN_NO:string,
              public CHECK_DT:string,
              public SENT_NCB_DT:string,
              public RECEIVE_DT:string,
              public ENT_TYPE:string,
              public APP_ENT_TYPE:string,
              public NAME:string,
              public SURNAME:string,
              public ID:string,
              public REF_NCB:string,
              public INFORM_MKT_FLG:string,
              public MKT_NAME:string,
              public REJECT_CD:string,
              public REJECT:string,
              public TRACKING_ID:string,
              public RESULT_NCB:string,
              public BL_RESULT:string,
              public TOTAL_ROWS:string
              )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbEnquiry[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbEnquiry(
          json[i].RUN_NO,
          json[i].CHECK_DT,
          json[i].SENT_NCB_DT,
          json[i].RECEIVE_DT,
          json[i].ENT_TYPE,
          json[i].APP_ENT_TYPE,
          json[i].NAME,
          json[i].SURNAME,
          json[i].ID,
          json[i].REF_NCB,
          json[i].INFORM_MKT_FLG,
          json[i].MKT_NAME,
          json[i].REJECT_CD,
          json[i].REJECT,
          json[i].TRACKING_ID,
          json[i].RESULT_NCB,
          json[i].BL_RESULT,
          json[i].TOTAL_ROWS?json[i].TOTAL_ROWS:0
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }


}
