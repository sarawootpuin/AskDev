/**
 * Created by patcharapon.ch on 15/01/2561.
 */
export class ModelNcbRejectReason{
  constructor(public REMARK:string,
              public ID_CODE:string
  )
  {}

  static parse(json:any[])
  {
    let data: ModelNcbRejectReason[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelNcbRejectReason(
          json[i].REMARK,
          json[i].ID_CODE
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
