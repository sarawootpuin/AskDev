/**
 * Created by patcharapon.ch on 05/02/2561.
 */
export class ModelPurpose
{
  constructor(public ID_CODE:string,
              public NAME_TH:string,
              public NAME_EN:string)
  {}

  static parse(json:any[])
  {
    let modelPurpose:ModelPurpose[]=[];
    for(let i=0;i<json.length;i++)
    {
      modelPurpose.push(new ModelPurpose(
        json[i].id_code,
        json[i].name_th,
        json[i].name_en
      ))
    }
    return modelPurpose;
  }
}
