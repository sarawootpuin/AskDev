/**
 * Created by patcharapon.ch on 12/01/2561.
 */
export class ModelNcbScreen{
  constructor(public RUN_NO:string,
              public CHECK_DT:string,
              public RECEIVE_DT:string,
              public ENT_TYPE:string,
              public NAME:string,
              public SURNAME:string,
              public CARD_ID:string,
              public OTH_ID:string,
              public BIRTH_DT:string,
              public MKT:string,
              public BL_RESULT:string,
              public NCB_CD:string,
              public NCB_RPT:string,
              public TRACING:string,
              public UPDATE_BY:string,
              public FIN_AMT:string,
              public BDY:string,
              public NEW_TR:string,
              public REJECT_CD:string,
              public DOWN_PCNT:string,
              public REJECT_OTH:string,
              public INFORM_MKT_FLG:string,
              public CHECK_FOR:string,
              public APP_ENT_TYPE:string,
              public OCCP:string,
              public FILE_COMP_FLG:string,
              public RMRK:string,
              public REF_NCB:string,
              public O_CUS_ASK_FLG:string,
              public O_CUS_BGPL_FLG:string,
              public O_GUA_ASK_FLG:string,
              public O_GUA_BGPL_FLG:string,
              public GUA_COOP_FLG:string,
              public SENT_NCB_DT:string,
              public RECEIVE_CONSENT_DT:string,
              public ESTIMATE_DISB_DT:string,
              public ENT_CAT:string,
              public MOBILE_SOURCE:string,
              public TRACKING_ID:string,
              public BODY_ASSET:string,
              public RUNNO_PDF:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbScreen[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbScreen(
          json[i].RUN_NO,
          json[i].CHECK_DT,
          json[i].RECEIVE_DT,
          json[i].ENT_TYPE,
          json[i].NAME,
          json[i].SURNAME,
          json[i].CARD_ID,
          json[i].OTH_ID,
          json[i].BIRTH_DT,
          json[i].MKT,
          json[i].BL_RESULT,
          json[i].NCB_CD,
          json[i].NCB_RPT,
          json[i].TRACING,
          json[i].UPDATE_BY,
          json[i].FIN_AMT,
          json[i].BDY,
          json[i].NEW_TR,
          json[i].REJECT_CD,
          json[i].DOWN_PCNT,
          json[i].REJECT_OTH,
          json[i].INFORM_MKT_FLG,
          json[i].CHECK_FOR,
          json[i].APP_ENT_TYPE,
          json[i].OCCP,
          json[i].FILE_COMP_FLG,
          json[i].RMRK,
          json[i].REF_NCB,
          json[i].O_CUS_ASK_FLG,
          json[i].O_CUS_BGPL_FLG,
          json[i].O_GUA_ASK_FLG,
          json[i].O_GUA_BGPL_FLG,
          json[i].GUA_COOP_FLG,
          json[i].SENT_NCB_DT,
          json[i].RECEIVE_CONSENT_DT,
          json[i].ESTIMATE_DISB_DT,
          json[i].ENT_CAT,
          json[i].MOBILE_SOURCE,
          json[i].TRACKING_ID,
          json[i].BODY_ASSET,
          json[i].RUNNO_PDF
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
