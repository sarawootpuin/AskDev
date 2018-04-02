/**
 * Created by patcharapon.ch on 05/02/2561.
 */
export class ModelCardType
{
  constructor(public ID_CODE:string,
              public NAME_TH:string,
              public NAME_EN:string
             )
  {}

  static parse(json:any[])
  {
    let modelCardType:ModelCardType[]=[];

    for(let i=0;i<json.length;i++)
    {
      modelCardType.push(new ModelCardType(
        json[i].id_code,
        json[i].name_th,
        json[i].name_en
      ));
    }

    return modelCardType;
  }
}
