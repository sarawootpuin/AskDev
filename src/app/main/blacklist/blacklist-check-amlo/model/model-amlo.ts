/**
 * Created by patcharapon.ch on 28/09/2560.
 */
export class ModelAmlo{

  constructor(public ENT_TYPE:string,
              public AGR_CODE:string,
              public NAME:string,
              public OS_AR:string,
              public OS_PRI:string,
              public STATUS:string,
              public NEW_CARD_NO:string,
              public LAW_DATE:string,
              public CLOSE_FLG:string,
              public REMARK:string
              )
  {}

  static parse(json:any[])
  {
    let data: ModelAmlo[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelAmlo(
          json[i].ENT_TYPE,
          json[i].AGR_CODE,
          json[i].NAME,
          json[i].OS_AR,
          json[i].OS_PRI,
          json[i].STATUS,
          json[i].NEW_CARD_NO,
          json[i].LAW_DATE,
          json[i].CLOSE_FLG,
          json[i].REMARK
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
