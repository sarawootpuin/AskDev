/**
 * Created by patcharapon.ch on 04/10/2560.
 */
export class ModelSearchExposureDialog{
  constructor(public THA_NAME:string,
              public ENG_NAME:string,
              public ID_CARD:string
              )
  {}

  static parse(json:any[])
  {
    let data: ModelSearchExposureDialog[] = [];
    for(let i=0;i<json.length;i++)
    {
      data.push(
        new ModelSearchExposureDialog(
          json[i].THA_NAME,
          json[i].ENG_NAME,
          json[i].ID_CARD
        )
      )
      // console.log(json[i].FIRST_NAME);
    }

    return data;
  }
}
